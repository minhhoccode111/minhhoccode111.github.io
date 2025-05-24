---
layout: post
title: From VSCode to Nvim (Four Easy Steps)
date: 2025-04-22
ready: true
details: Software Engineering
banner: "/static/media/images/computers.webp"
lang: en
---

Look, if you’re thinking about jumping from VSCode to Neovim (Nvim), you’re either curious, crazy, or both. Either way, I’ve been there, and I’m here to tell you it’s not as bad as it sounds. Hindsight’s a great teacher, so here’s the no-BS guide to making the switch in four steps. It’s not rocket science, but it’s not a walk in the park either. Let’s get to it.

## Why Bother with Nvim?

Before we dive in, let’s address the elephant in the room: why ditch a shiny, comfy editor like VSCode for something that looks like it was coded in a basement in 1991? Here’s the deal:

- **You’re the boss**: Nvim lets you build your workflow from the ground up. No more fighting someone else’s defaults.
- **It’s stupid fast**: My setup ([peep it here](https://github.com/minhhoccode111/nvim)) loads in 130ms. VSCode wishes it could.
- **Keybindings become muscle memory**: Once you get the hang of it, editing feels like an extension of your brain. You’re not fumbling with menus—you’re just _doing_.

If that doesn’t sell you, fine, stick with VSCode. But if you’re ready to level up, keep reading.

## 0 - Touch Typing (~20h)

You can’t code if you’re hunting and pecking like a grandma texting. Step one is getting your typing game on point.

- **Goal**: Hit 70 words per minute (wpm). Use [Monkeytype](https://monkeytype.com) to practice. It’s straightforward and tracks your progress.
- **Real talk**: I’m at 116wpm, but I’m a weirdo who uses 7 fingers on the home row (left: `LShift`, `A`, `S`, `D`; right: `J`, `K`, `L`, `;`). Figure out what works for you, but don’t half-ass it. Slow typists get left behind.

If you’re already a typing ninja, skip this. If not, put in the hours. It’s not glamorous, but it’s non-negotiable.

## 1 - Vim Motion (~40h)

Here’s where the magic starts. Vim’s motion system is what makes Nvim a beast, but it’s a beast you’ve gotta tame.

- **Start small**: Run `vimtutor` (or `:Tutor` in Nvim) to learn the basics—`h`, `j`, `k`, `l`, `w`, `b`. It’s 30 minutes, and it’s interactive. No excuses.
- **Cheatsheet it**: Keep a Vim cheatsheet nearby. You’ll need it until this stuff sticks.
- **Ease in with VSCode**: Install a Vim plugin for VSCode (like “Vim” by vscodevim) to practice motions without jumping ship entirely. It’s like training wheels.
- **Use it for real**: Edit actual projects in VSCode with Vim motions. Repetition is how you make this second nature.
- **Tweak keymaps**: Mess with VSCode’s `settings.json` to make it yours. My go-tos:
    - `jj` to exit Insert mode (faster than `<esc>` or `<c-c>`).
    - `H` for start of line (screw `^`).
    - `L` for end of line (screw `$`).
    - `K` to jump between brackets (screw `%`).

If you love Vim motions but aren’t ready to ditch VSCode, you can stop here and still be a badass. But if you want the full Nvim experience, keep going.

## 2 - Nvim (~40h)

Now you’re ready to dive into Nvim itself. This is where you stop being a tourist and start building your home.

- **Learn a bit of Lua**: Nvim configs use Lua, not that cryptic Vimscript nonsense. You don’t need to be a Lua guru—just enough to tweak things.
- **Start with a foundation**: Grab [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim). It’s a solid base with defaults that don’t suck.
- **Make it yours**: Edit `init.lua` to carry over your VSCode keymaps (`jj`, `H`, `L`, `K`) and tweak settings to fit your vibe.
- **Add plugins**: Use [lazy.nvim](https://github.com/folke/lazy.nvim) as your plugin manager. Start with a file explorer (like `nvim-tree`), a fuzzy finder (like `telescope.nvim`), and a colorscheme that doesn’t burn your retinas.
- **Own it**: Over time, refactor `kickstart.nvim` into your own setup. Split it into modules, document your choices, and make it feel like _you_.

By the end of this, you’ll have an Nvim setup that’s lean, mean, and all yours. Respect earned.

## 3 - Environment (~40h, Optional)

This one’s for the nerds who want their setup to feel like a spaceship. It’s not mandatory, but it’s worth it.

- **Remap keys**: I turned `LCtrl` into `Esc` when pressed alone and `Ctrl` when held. It’s a game-changer for Vim’s constant mode-switching.
- **Crank up repeat rate**: If you hold `j` or `k` to scroll, boost your keyboard’s repeat rate in your OS settings. Smooth as butter.
- **Pick a terminal**: Ditch sluggish terminals for something GPU-accelerated like Alacritty, Ghostty, or Kitty.
- **Master Tmux**: Install Tmux for terminal multiplexing. Multiple sessions, windows, panes—all at your fingertips.
- **Tmux plugins**: Use [tpm](https://github.com/tmux-plugins/tpm) for plugins like `tmux-resurrect` (save sessions) and `tmux-continuum` (auto-save).
- **Sync Tmux and Nvim**: Set up Tmux keymaps (I use `Ctrl-Space` as my prefix) to match your Nvim workflow.

This step makes your environment feel like a well-oiled machine. Skip it if you just want to code, but you’ll miss out.

## Wrap It Up

Switching to Nvim isn’t just about swapping tools—it’s about owning your workflow. Pair it with Linux, and you’ve got a setup that’s fast, flexible, and yours. It’s a grind to learn, but I’ve never regretted a second of it. Neither will you.

Now stop reading and start typing. Those keybindings won’t learn themselves.

## Bonus (from ThePrimeagen)

{% include iframe_video.html id="1UXHsCT18wE" aspect="56.25" %}
