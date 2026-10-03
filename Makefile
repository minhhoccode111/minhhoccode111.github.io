TAILWIND_VERSION := 4.3.3
TAILWIND  := bin/tailwindcss
TW_INPUT  := assets/css/tailwind.css
TW_OUTPUT := assets/css/app.css

.PHONY: css css-watch build dev clean

# Download the standalone Tailwind CLI (no Node required).
$(TAILWIND):
	mkdir -p bin
	curl -fsSL -o $@ https://github.com/tailwindlabs/tailwindcss/releases/download/v$(TAILWIND_VERSION)/tailwindcss-linux-x64
	chmod +x $@

# Compile Tailwind once.
css: $(TAILWIND)
	$(TAILWIND) -i $(TW_INPUT) -o $(TW_OUTPUT) --minify

# Recompile Tailwind on change.
css-watch: $(TAILWIND)
	$(TAILWIND) -i $(TW_INPUT) -o $(TW_OUTPUT) --watch

# Full production build (CSS, then Hugo).
build: css
	hugo --gc --minify --cleanDestinationDir

# Local preview: Tailwind in watch mode + Hugo dev server.
dev: css
	$(TAILWIND) -i $(TW_INPUT) -o $(TW_OUTPUT) --watch & \
	TW_PID=$$!; \
	hugo server -D; \
	kill $$TW_PID

clean:
	rm -f $(TW_OUTPUT)
	rm -rf public resources
