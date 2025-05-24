---
title: How to set up Flutter on Ubuntu
layout: post
date: 2025-05-05
ready: true
details: Ubuntu, Linux, Flutter
banner: "/static/media/images/computers.webp"
lang: en
---

Setting up Flutter on Ubuntu is a straightforward process if you follow the right steps. This guide covers installing Flutter, configuring the Android SDK, and setting up VM acceleration for a smooth development experience on Ubuntu. Whether you're a beginner or an experienced developer, this tutorial will help you get started with Flutter development.

## Prerequisites

Before you begin, ensure you have:

- An Ubuntu distribution (e.g., Ubuntu 20.04, 22.04, or later).
- Administrative access (`sudo`).
- An internet connection for downloading packages.
- Basic familiarity with the terminal.

## Step 1: Install Java

Flutter and Android development require a compatible Java Development Kit (JDK). OpenJDK 17 is recommended for compatibility with Gradle and Android toolchains.

### Check Compatibility

Refer to the [Gradle compatibility matrix](https://docs.gradle.org/current/userguide/compatibility.html#java) to ensure your Java version aligns with your Gradle version.

### Install OpenJDK 17

```bash
sudo apt-get update
sudo apt-get install -y openjdk-17-jre openjdk-17-jdk
```

Verify the installation:

```bash
java -version
```

## Step 2: Install Required Dependencies

Flutter requires several libraries and tools for development.

```bash
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y curl git unzip xz-utils zip libglu1-mesa
sudo apt-get install -y libc6:amd64 libstdc++6:amd64 lib32z1 libbz2-1.0:amd64
```

## Step 3: Install Flutter SDK or FVM

You can either install the Flutter SDK directly or use the Flutter Version Manager (FVM) for managing multiple Flutter versions. FVM is recommended for flexibility.

### Option 1: Install Flutter SDK

1. Download the latest stable Flutter SDK from the [official site](https://docs.flutter.dev/get-started/install/linux/android). For example:

    - [Flutter 3.24.4](https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.24.4-stable.tar.xz)

2. Create a directory for Flutter (in my case, I prefer `~/app/`):

    ```bash
    mkdir -p ~/app
    ```

3. Extract the downloaded file:

    ```bash
    tar -xf ~/Downloads/flutter_linux_3.24.4-stable.tar.xz -C ~/app/
    ```

4. Add Flutter to your `$PATH`:

    ```bash
    echo 'export PATH="$PATH:$HOME/app/flutter/bin"' >> ~/.bashrc
    source ~/.bashrc
    ```

5. Check the Flutter installation and fix any issues:
    ```bash
    flutter doctor
    ```

### Option 2: Install FVM

FVM allows you to manage multiple Flutter versions without manually installing the SDK.

1. Follow the [FVM installation guide](https://fvm.app/documentation/getting-started/installation).
2. Install FVM to `~/app`:

    ```bash
    mkdir -p ~/app
    dart pub global activate fvm
    echo 'export PATH="$PATH:$HOME/.pub-cache/bin"' >> ~/.bashrc
    source ~/.bashrc
    ```

3. Install a Flutter version via FVM:

    ```bash
    fvm install 3.24.4
    fvm use 3.24.4 --global
    ```

4. Run `flutter doctor` to verify:
    ```bash
    fvm flutter doctor
    ```

## Step 4: Install Android Studio (Optional)

Android Studio provides a GUI for managing Android SDKs and emulators, which is useful for Flutter development.

1. Download Android Studio from the [official site](https://developer.android.com/studio). For example:

    - [Android Studio 2024.3.1.14](https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2024.3.1.14/android-studio-2024.3.1.14-linux.tar.gz)

2. Extract the downloaded file:

    ```bash
    tar -xvf ~/Downloads/android-studio-2024.3.1.14-linux.tar.gz -C /usr/local/
    ```

3. Run the initial setup:

    ```bash
    /usr/local/android-studio/bin/studio.sh
    ```

4. Complete the setup wizard and create a desktop entry as prompted.

### Configure Java for Android Studio

Android Studio uses its bundled JDK (`jbr`) located at `/usr/local/android-studio/jbr`. To ensure compatibility, create a symbolic link:

```bash
sudo ln -s /usr/local/android-studio/jbr /usr/local/android-studio/jre
```

Alternatively, use your system’s OpenJDK 17 (my project Gradle needs this version and I can't set Android Studio to use it directly):

```bash
sudo ln -s /usr/lib/jvm/java-17-openjdk-amd64 /usr/local/android-studio/jre
```

## Step 5: Configure Android SDK

The Android SDK is required for building and testing Flutter apps.

1. Download the latest Android command-line tools from the [Android Studio site](https://developer.android.com/studio). For example:

    - [Command Line Tools](https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip)

2. Create a directory for the Android SDK:

    ```bash
    mkdir -p ~/Android/Sdk
    ```

3. Extract the command-line tools:

    ```bash
    unzip ~/Downloads/commandlinetools-linux-11076708_latest.zip -d ~/Android/Sdk
    ```

4. Organize the tools:

    ```bash
    cd ~/Android/Sdk/cmdline-tools
    mkdir latest
    mv * latest
    ```

5. Set environment variables in `~/.bashrc`:

    ```bash
    echo '# For Flutter SDK' >> ~/.bashrc
    echo 'export PATH="$PATH:$HOME/app/flutter/bin"' >> ~/.bashrc
    echo '# For Android SDK' >> ~/.bashrc
    echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
    echo 'export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest"' >> ~/.bashrc
    echo 'export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin"' >> ~/.bashrc
    echo 'export PATH="$PATH:$ANDROID_HOME/platform-tools"' >> ~/.bashrc
    source ~/.bashrc
    ```

6. Install Android SDK packages using `sdkmanager`:

    ```bash
    sdkmanager "platform-tools" "build-tools;35.0.0" "platforms;android-35" "emulator" "system-images;android-35;google_apis_playstore;x86_64"
    ```

7. Verify the installation:
    ```bash
    adb --version
    ```

## Step 6: Configure VM Acceleration

To run Android emulators efficiently, enable VM acceleration using KVM (Kernel-based Virtual Machine).

### Install KVM

```bash
sudo apt-get update
sudo apt-get install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
```

### Add User to KVM Groups

```bash
sudo usermod -aG kvm $USER
sudo usermod -aG libvirt $USER
```

Log out and back in for the changes to take effect.

### Verify KVM Installation

```bash
virsh list --all
```

Optionally, launch `virt-manager` for a GUI to manage VMs:

```bash
virt-manager
```

### Troubleshoot KVM (if needed)

Check the `libvirtd` service status:

```bash
sudo systemctl status libvirtd
```

## Step 7: Verify Flutter Setup

Run `flutter doctor` to check for any remaining issues:

```bash
flutter doctor
```

Follow the suggestions to resolve minor errors or warnings, such as accepting Android licenses:

```bash
flutter doctor --android-licenses
```

## Uninstalling Flutter and Android SDK

To completely remove Flutter, Android Studio, and the Android SDK from your Ubuntu system, follow these steps to ensure a clean uninstall:

### Remove Flutter SDK or FVM

1. **Flutter SDK**:

    - Delete the Flutter SDK directory:
        ```bash
        rm -rf ~/app/flutter
        ```
    - Remove the Flutter path from `~/.bashrc`:
        ```bash
        sed -i '/flutter\/bin/d' ~/.bashrc
        source ~/.bashrc
        ```

2. **FVM**:
    - Uninstall FVM:
        ```bash
        dart pub global deactivate fvm
        ```
    - Remove FVM cache and binaries:
        ```bash
        rm -rf ~/.pub-cache/bin/fvm
        rm -rf ~/.fvm
        ```
    - Remove the FVM path from `~/.bashrc`:
        ```bash
        sed -i '/pub-cache\/bin/d' ~/.bashrc
        source ~/.bashrc
        ```

### Remove Android Studio

- Delete the Android Studio installation:
    ```bash
    sudo rm -rf /usr/local/android-studio
    ```
- Remove any Android Studio configuration files:
    ```bash
    rm -rf ~/.config/Google/AndroidStudio*
    rm -rf ~/.local/share/applications/android-studio.desktop
    ```

### Remove Android SDK

- Delete the Android SDK directory:
    ```bash
    rm -rf ~/Android
    ```
- Remove Android-related environment variables from `~/.bashrc`:
    ```bash
    sed -i '/ANDROID_HOME/d' ~/.bashrc
    sed -i '/cmdline-tools/d' ~/.bashrc
    sed -i '/platform-tools/d' ~/.bashrc
    source ~/.bashrc
    ```

### Remove Java (Optional)

If you no longer need OpenJDK:

```bash
sudo apt-get remove -y openjdk-17-jre openjdk-17-jdk
sudo apt-get autoremove -y
```

### Remove KVM (Optional)

If you no longer need KVM:

```bash
sudo apt-get remove -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
sudo apt-get autoremove -y
```

### Verify Uninstallation

- Check that Flutter is removed:
    ```bash
    which flutter
    ```
- Ensure Android SDK tools are gone:
    ```bash
    which adb
    ```
- Confirm Java is removed (if applicable):
    ```bash
    java -version
    ```
