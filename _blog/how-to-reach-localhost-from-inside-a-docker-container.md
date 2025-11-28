---
title: How to reach localhost from inside a docker container
layout: post
date: 2025-11-28
ready: true
details: .NET, Moodle, PHP, Docker, Docker Compose
banner: "/static/media/images/reach-localhost-from-docker-container.webp"
lang: en
---

Example: Moodle PHP run with `docker compose up -d` and want to reach a
.NET API running at our host machine's localhost

(For more context, my `moodle-dev-compose` repo can be found
[here](https://github.com/minhhoccode111/moodle-dev-compose.git))

## Add `extra_hosts` to `docker-compose.yml` for Moodle

```yml
extra_hosts:
    - "host.docker.internal:host-gateway"
```

This maps `host.docker.internal` to the host's gateway IP, allowing the
container to reach services running on the host machine.

## Bind .NET API to all interfaces (0.0.0.0)

When .NET binds to `localhost` (127.0.0.1), it only accepts connections from
the same machine's loopback interface. Docker containers communicate through
the host's network stack but their connections appear to come from a different
network interface (typically the docker bridge network).

Edit `launchSettings.json` to bind to `0.0.0.0` (all network interfaces):

```json
{
    "profiles": {
        "http": {
            "applicationUrl": "http://0.0.0.0:5137"
        },
        "https": {
            "applicationUrl": "https://0.0.0.0:7234;http://0.0.0.0:5137"
        }
    }
}
```

**Security note:** This exposes your API to your local network. If you're on an
untrusted network, configure your firewall to block external access to these
ports, or bind to a specific IP instead of `0.0.0.0`.

## Test

Confirm the API is bound to `0.0.0.0` (not `127.0.0.1`):

```bash
# you can also run without 'sudo'
sudo ss -tulpn | grep 5137
# example output:
# tcp   LISTEN 0      512               0.0.0.0:5137       0.0.0.0:*    users:(("ASPNETCOREAPI",pid=67232,fd=390))
```

Confirm you can reach `localhost` from inside the Moodle container.

Execute a bash session inside the container:

```bash
docker compose exec -u www-data moodle bash
```

Test the connection using `curl`:

```bash
curl http://host.docker.internal:5137/swagger/index.html
# <!-- HTML for static distribution bundle build -->
# <!DOCTYPE html>
# <html lang="en">
# <head>
# ...
```

Update the Moodle config at `config.php`:

```php
$CFG->dot_net_api_url = 'http://host.docker.internal:5137/api/';
```

And you're good to go.
