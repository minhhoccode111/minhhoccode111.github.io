---
title: Bulletproof React file structure
layout: post
date: 2025-04-15
ready: false
phony: true
details: React, TypeScript, TailwindCSS, React Query, Zustand
banner: "/static/media/images/react.webp"
lang: en
---

The original template repository [here](https://github.com/alan2207/bulletproof-react)

A well-structured project is crucial for scalability, maintainability, and team collaboration. This file structure follows best practices for organizing a React application, ensuring separation of concerns and modular design.

## Overview

This structure is based on a feature-first approach, where each feature has its own domain containing API calls, assets, components, hooks, and state management. Additionally, common utilities, configuration files, and global components are placed in dedicated directories.

### Key Folders

- **`.vscode`**: Contains workspace settings and recommended extensions.
- **`.storybook`**: Used for developing and testing UI components in isolation.
- **`__mocks__`**: Provides mock implementations for testing.
- **`docs`**: Stores documentation for the project.
- **`e2e`**: Contains end-to-end tests to ensure application functionality.
- **`public`**: Houses static assets that do not require bundling.
- **`src`**: The core source code of the application, following a modular structure.

### Feature-Based Structure

The `features` directory ensures that each feature is self-contained with its own API, assets, components, hooks, state management, types, and utility functions. This keeps concerns isolated and improves reusability across the app.

### Global State Management

State management libraries like **Zustand** or **Redux** are placed in `stores`. This prevents state logic from being scattered throughout the app, making it more predictable and easier to debug.

### TypeScript Support

The `types` folder centralizes TypeScript definitions, ensuring consistency across the application. Feature-specific types are stored within their respective feature folders.

### Testing

Test utilities and mocks reside in `testing`, enabling a standardized testing approach.

## Conclusion

This structure is designed to scale efficiently while keeping the project organized. By following these conventions, developers can collaborate more effectively and maintain a clean, maintainable codebase.

```bash
+-- .vscode                 # VS Code workspace settings and extensions
+-- .storybook              # Storybook configuration for UI component
|                           # development
+-- __mocks__               # Mock implementations for testing
+-- docs                    # Documentation files
+-- e2e                     # End-to-end tests
+-- generators              # Code generators and scaffolding scripts
+-- public                  # Static assets served directly to the client
|                           # (e.g., favicon, logo, robots.txt, redirects,
|                           # service workers)
+-- src                     # Main source code of the application
|   +-- app                 # Application entry point and configuration
|   |   +-- routes          # Application routes (or pages, depending on
|   |       |               # framework)
|   |       +-- login       # (e.g., login, signup, dashboard, settings, etc.)
|   |   +-- app.tsx         # Root component of the application
|   |   +-- provider.tsx    # Global providers for state management, themes, ...
|   |   +-- router.tsx      # Router configuration
|   +-- assets              # Global static assets (images, fonts, etc.)
|   +-- components          # Shared UI components used across the application
|   +-- config              # Global configuration settings and environment
|   |                       # variables
|   +-- features            # Feature-based modular organization
|   |   +-- feature-name    # Example feature folder
|   |       +-- api         # API requests and hooks specific to the feature
|   |       +-- assets      # Static assets related to the feature
|   |       +-- components  # Components scoped to the feature
|   |       +-- hooks       # Custom React hooks for the feature
|   |       +-- stores      # State management logic for the feature
|   |       +-- types       # TypeScript types related to the feature
|   |       +-- utils       # Utility functions specific to the feature
|   +-- hooks               # Reusable custom hooks
|   +-- lib                 # Pre-configured external libraries and helpers
|   +-- stores              # Global state management (e.g., Redux, Zustand)
|   +-- testing             # Test utilities, mocks, and helpers
|   +-- types               # Global TypeScript type definitions
|   +-- utils               # General-purpose utility functions
+-- .env                    # Environment variables configuration
+-- .gitignore              # Git ignore rules
+-- README.md               # Project documentation and setup instructions
+-- index.html              # Root HTML file (if applicable)
+-- package.json            # Dependencies and scripts
+-- tsconfig.json           # TypeScript configuration (if using TypeScript)
+-- # Other config files depending on the project setup (e.g., ESLint, Prettier,
+-- # Webpack, TailwindCSS)
```
