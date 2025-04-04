---
layout: post
title: "From VSCode to Nvim (Four Easy Steps)"
date: 2025-04-22
ready: true
# phony: true
banner: "/static/media/images/computers.webp"
lang: en
---

So, you're thinking about ditching VSCode for Neovim (Nvim)? Welcome to the club! This guide will walk you through the transition in four manageable steps. Fair warning: these are just the basics—once you dive in, you'll discover plenty of rabbit holes to explore. But don't worry, I've got you covered with a clear path to get started.

---

## Wait but why, why Nvim?

You might be wondering why anyone would trade a polished, feature-packed editor like VSCode for something as minimal as Nvim. Here's why it's worth it:

- **Total control over your workflow**: Nvim lets you craft an editing experience tailored to _your_ needs, not someone else's defaults.
- **Lightning fast**: It's ridiculously lightweight. My own setup ([check it out here](https://github.com/minhhoccode111/nvim)) starts up in about 130ms. No bloat, no waiting.
- **Muscle memory magic**: Once you internalize the keybindings, editing becomes second nature. Your thoughts flow straight onto the screen without friction—almost like you're not even _thinking_ about the mechanics of editing. It's a beautiful thing 😼.

Convinced yet? Let's get into the steps.

---

## Steps

### Touch Typing (~20h)

First things first: you need to type efficiently. If you're not already comfortable with touch typing, this is your starting point.

- **Goal**: Hit at least 70 words per minute (wpm). I recommend practicing on [Monkeytype](https://monkeytype.com)—it's simple, fun, and tracks your progress.

_Personal note_: I type at 116wpm, but I'm a bit of a rebel—I only use 7 fingers on the home row instead of the traditional 8. My setup? Left hand: `LShift`, `A`, `S`, `D` / Right hand: `J`, `K`, `L`, `;`. Find what works for you, but speed and comfort are key.

---

### Vim Motion (~40h)

Next up: mastering Vim's motion system. This is where the real power of Nvim starts to shine.

- **Start with the basics**: Run `vimtutor` (or `:Tutor` inside Nvim) to learn the essentials—`h`, `j`, `k`, `l`, `w`, `b`, etc. It's interactive and takes about 30 minutes.
- **Cheatsheet lifeline**: Keep a Vim cheatsheet handy for when you're stuck. You'll wean off it as you go.
- **Bridge to VSCode**: Install a Vim plugin for VSCode (like “Vim” by vscodevim) and start practicing motions there. It's a great way to ease into the Vim mindset without leaving your comfort zone.
- **Practice, practice, practice**: Edit real projects in VSCode using Vim motions. Repetition builds muscle memory.
- **Customize keymaps**: Tweak VSCode's `settings.json` to make the experience yours. Here are some of my favorites:
    - `jj` to exit Insert mode (way faster than `<esc>` or `<c-c>`).
    - `H` to jump to the start of a line (replacing `^`).
    - `L` to jump to the end of a line (replacing `$`).
    - `K` to hop between brackets (replacing `%`).

_Note_: If you love Vim motions but aren't ready to leave VSCode, you can stop here! This combo is a solid workflow for many. But if you're ready to go all-in, keep reading.

---

### Nvim (~40h)

Now it's time to take the plunge into Nvim itself. This step is about making it your own.

- **Learn some Lua**: Nvim's configuration is written in Lua (no more cryptic Vimscript!). You don't need to be an expert—just enough to read and tweak configs.
- **Kickstart your setup**: Clone the [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) repo. It's a fantastic starting point with sensible defaults and a clean structure.
- **Configure to taste**: Adjust settings and keymaps in your `init.lua`. Carry over your VSCode tweaks (like `jj`, `H`, `L`, `K`) and make them permanent.
- **Add plugins**: Use [lazy.nvim](https://github.com/folke/lazy.nvim) as your plugin manager. It's fast and easy to set up. Start with essentials like a file explorer (e.g., `nvim-tree`), a fuzzy finder (e.g., `telescope.nvim`), and a colorscheme that vibes with you.
- **Make it yours**: Refactor `kickstart.nvim`'s config over time. Split it into modules, document your choices, and build a setup that feels like home.

By the end of this step, you'll have a lean, mean Nvim machine tailored to your workflow.

---

### Environment (~40h) (optional)

This step is for the perfectionists who want a fully optimized setup. It's optional, but oh-so-satisfying.

- **Remap keys**: I remapped `LCtrl` to act as `Esc` when pressed alone and `Ctrl` when held. It's a game-changer for Vim's frequent mode-switching.
- **Boost repeat rate**: Increase your keyboard's repeat rate if you like holding `j` and `k` to scroll. (Check your OS settings for this.)
- **Pick a terminal**: Switch to a GPU-accelerated terminal like Alacritty, Ghostty, or Kitty for silky-smooth performance.
- **Master Tmux**: Install Tmux for terminal multiplexing—think multiple sessions, windows, and panes, all at your fingertips.
- **Tmux plugins**: Use [tpm](https://github.com/tmux-plugins/tpm) to manage Tmux plugins. I recommend `tmux-resurrect` (save sessions) and `tmux-continuum` (auto-save).
- **Configure Tmux**: Customize keymaps and settings to match your Nvim workflow. For example, I use `Ctrl-Space` as my prefix and sync navigation with Nvim.

This step ties everything together into a cohesive, high-performance environment.

---

## Conclusion

Switching from VSCode to Nvim isn't just a tool change—it's a mindset shift. Pair it with Linux, and you've got a setup that's fast, flexible, and endlessly customizable. I've never regretted the time I invested in learning them, and I bet you won't either.

That was fun to write 😆. Now go forth and conquer those keybindings!
