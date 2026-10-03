---
title: "How To Prometheus and Grafana"
tags: ["DevOps", "Monitoring", "Prometheus", "Grafana", "Docker"]
draft: true
phony: true
---

Here is a comprehensive guide to getting started with monitoring using Prometheus and Grafana.

---

# How to Prometheus and Grafana

### Description

A complete starter guide to setting up a modern observability pipeline. This article covers the core architecture of Prometheus and Grafana, a step-by-step installation using Docker Compose, configuring your first scraper, and visualizing metrics on a dashboard.

### Tags

`#DevOps` `#Monitoring` `#Prometheus` `#Grafana` `#Docker` `#Observability`

---

## 1. The Architecture of Observability

Before typing commands, it is crucial to understand how these two tools communicate. They do not push data to each other; they rely on a specific retrieval model.

- **Prometheus (The Brain):** It uses a **pull model**. It actively polls (scrapes) targets (servers, containers, databases) via HTTP endpoints to retrieve metrics. It stores these metrics in a Time-Series Database (TSDB).
- **Grafana (The Face):** It acts as a visualization layer. It queries Prometheus for data and renders it into human-readable charts, heatmaps, and gauges.
- **Exporters:** Most software doesn't speak "Prometheus" natively. **Exporters** are lightweight binaries that run alongside your applications, translating system stats into Prometheus-readable metrics.

## 2. Prerequisites

To keep this guide environment-agnostic and reproducible, we will use **Docker** and **Docker Compose**. This ensures the setup works identically on Linux, macOS, or Windows.

- Docker Engine installed
- Docker Compose installed

## 3. Step-by-Step Setup

We will create a stack containing three components:

1. **Prometheus:** The database.
2. **Node Exporter:** A standard agent that exposes hardware and OS metrics (CPU, RAM, Disk).
3. **Grafana:** The dashboard UI.

### Step 3.1: Project Directory

Create a new directory for your monitoring stack:

```bash
mkdir monitoring-stack
cd monitoring-stack

```

### Step 3.2: Configuration

Create a file named `prometheus.yml`. This is the configuration file where we tell Prometheus _what_ to scrape.

```yaml
# prometheus.yml
global:
    scrape_interval: 15s # Scrape targets every 15 seconds

scrape_configs:
    - job_name: "prometheus"
      static_configs:
          - targets: ["localhost:9090"]

    - job_name: "node_exporter"
      static_configs:
          - targets: ["node-exporter:9100"]
```

### Step 3.3: The Compose File

Create a `docker-compose.yml` file to define the services.

```yaml
version: "3.8"

services:
    prometheus:
        image: prom/prometheus:latest
        container_name: prometheus
        volumes:
            - ./prometheus.yml:/etc/prometheus/prometheus.yml
            - prometheus_data:/prometheus
        command:
            - "--config.file=/etc/prometheus/prometheus.yml"
            - "--storage.tsdb.path=/prometheus"
            - "--web.console.libraries=/etc/prometheus/console_libraries"
            - "--web.console.templates=/etc/prometheus/consoles"
            - "--web.enable-lifecycle"
        ports:
            - 9090:9090
        networks:
            - monitoring

    node-exporter:
        image: prom/node-exporter:latest
        container_name: node-exporter
        restart: unless-stopped
        volumes:
            - /proc:/host/proc:ro
            - /sys:/host/sys:ro
            - /:/rootfs:ro
        command:
            - "--path.procfs=/host/proc"
            - "--path.rootfs=/rootfs"
            - "--path.sysfs=/host/sys"
            - "--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)"
        ports:
            - 9100:9100
        networks:
            - monitoring

    grafana:
        image: grafana/grafana:latest
        container_name: grafana
        ports:
            - 3000:3000
        volumes:
            - grafana_data:/var/lib/grafana
        environment:
            - GF_SECURITY_ADMIN_PASSWORD=admin # Change this in production
        networks:
            - monitoring

networks:
    monitoring:
        driver: bridge

volumes:
    prometheus_data:
    grafana_data:
```

### Step 3.4: Launch

Run the stack in detached mode:

```bash
docker-compose up -d

```

## 4. Verifying the Data Flow

Before configuring the visuals, ensure the data is flowing.

1. Open your browser to `http://localhost:9090` (Prometheus).
2. Click on **Status** > **Targets**.
3. You should see `node_exporter` listed with a generic State of **UP**.

If it is UP, Prometheus is successfully pulling raw data from your host machine.

## 5. Configuring Grafana

Now, we visualize the data.

1. **Login:** Go to `http://localhost:3000`. Default login is `admin` / `admin`.
2. **Add Data Source:**

- Navigate to **Connections** (or Configuration gear icon) > **Data Sources**.
- Click **Add data source**.
- Select **Prometheus**.
- In the **Prometheus server URL** field, enter `http://prometheus:9090` (this is the internal Docker DNS name).
- Scroll down and click **Save & Test**. You should see a green checkmark saying "Data source is working".

## 6. Creating a Dashboard

You can create a dashboard from scratch or import a pre-made one. For beginners, importing is best to see what is possible.

1. Click the **+** icon (or Dashboards) in the sidebar > **Import**.
2. In the "Import via grafana.com" field, enter the ID `1860` (a popular Node Exporter Full dashboard).
3. Click **Load**.
4. Select your Prometheus data source from the dropdown.
5. Click **Import**.

You will immediately see real-time graphs of your RAM usage, CPU load, and network traffic.

## 7. Next Steps: PromQL

To build custom graphs, you need to learn **PromQL** (Prometheus Query Language). Here are three basic queries to try in the "Explore" tab of Grafana:

- **Current CPU Usage:**
  `100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)`
- **Free Memory (in Bytes):**
  `node_memory_MemFree_bytes`
- **Disk Space Used (Percentage):**
  `100 - ((node_filesystem_avail_bytes * 100) / node_filesystem_size_bytes)`

---

### Conclusion

You now have a fully functional observability stack. From here, the journey involves adding **Alertmanager** to send notifications (Slack, Email) when metrics cross specific thresholds, and adding specific exporters for your databases (PostgreSQL, MongoDB) or custom applications.

---

Would you like me to help you customize the `docker-compose.yml` file to include a specific exporter, like one for a database or a Go application?
