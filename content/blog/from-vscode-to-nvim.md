---
title: From VSCode to Nvim 
date: 2025-04-22
ready: true
details: Software Engineering
tags: ["Neovim", "Vim", "Tmux", "Productivity"]
banner: "/static/media/images/computers.webp"
lang: en
---

Moving from VSCode to Neovim is manageable if you approach it in stages. This guide covers the switch in four steps, ordered by the time each one realistically takes. The two middle steps are useful on their own, so you can stop early if that suits you.

## Why switch to Nvim?

- **Control**: You build the workflow from the ground up instead of adapting to someone else's defaults.
- **Performance**: A well-configured setup starts quickly. Mine ([available here](https://github.com/minhhoccode111/nvim)) loads in 130ms.
- **Editing becomes muscle memory**: Once the keybindings are internalized, editing requires far less conscious effort.

If those trade-offs don't appeal to you, VSCode is a capable editor. If they do, keep reading.

## 0 - Touch typing (~20h)

Touch typing is a prerequisite. Hunting for keys while editing slows everything down.

- **Goal**: 70 words per minute. [Monkeytype](https://monkeytype.com) is enough for practice and progress tracking.
- **A note on layouts**: I type at 116wpm with an unconventional seven-finger home-row layout (left: `LShift`, `A`, `S`, `D`; right: `J`, `K`, `L`, `;`). Any consistent layout works, but the practice hours are not optional.

If you already type quickly, skip this step.

## 1 - Vim motions (~40h)

Vim's motion system is what makes Neovim efficient, and it takes time to learn.

- **Start with the basics**: Run `vimtutor` (or `:Tutor` in Neovim). It covers `h`, `j`, `k`, `l`, `w`, and `b` in about 30 minutes.
- **Keep a cheatsheet nearby**: Reference material helps until the motions become automatic.
- **Practice inside VSCode**: The [Vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) lets you use motions without switching editors.
- **Use it on real work**: Apply the motions to actual projects. Repetition is what makes them stick.
- **Adjust keymaps**: Configure `settings.json` for the actions you repeat most. My mappings:
  - `jj` to leave Insert mode (faster than `<Esc>` or `<Ctrl-c>`).
  - `H` for the start of the line (instead of `^`).
  - `L` for the end of the line (instead of `$`).
  - `K` to jump between brackets (instead of `%`).

If Vim motions are enough for you, you can stop here.

## 2 - Neovim (~40h)

At this point you can move to Neovim itself.

- **Learn some Lua**: Neovim configuration is written in Lua. You only need enough to adjust settings.
- **Start from a base**: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) provides sensible defaults.
- **Port your keymaps**: Add the VSCode mappings (`jj`, `H`, `L`, `K`) to `init.lua`.
- **Add plugins**: Use [lazy.nvim](https://github.com/folke/lazy.nvim) as the plugin manager. A reasonable starting set is a file explorer (`nvim-tree`), a fuzzy finder (`telescope.nvim`), and a comfortable colorscheme.
- **Make it your own**: Refactor kickstart into your own configuration over time. Split it into modules and document the choices.

The result is a setup tailored to your workflow.

## 3 - Environment (~40h, optional)

These changes are not required, but they make for a better editing environment.

- **Remap keys**: I map `LCtrl` to `Esc` when tapped and `Ctrl` when held. This reduces friction when switching modes.
- **Increase the key repeat rate**: Raise your OS repeat rate if you scroll by holding `j` or `k`.
- **Choose a fast terminal**: GPU-accelerated terminals such as Alacritty, Ghostty, or Kitty feel more responsive.
- **Use Tmux**: Tmux provides sessions, windows, and panes.
- **Add Tmux plugins**: Use [tpm](https://github.com/tmux-plugins/tpm) with `tmux-resurrect` (session saving) and `tmux-continuum` (automatic saving).
- **Align keymaps with Neovim**: Set a Tmux prefix that fits your workflow. I use `Ctrl-Space`.

## Conclusion

Switching to Neovim is primarily about owning your workflow. Combined with Linux, it produces a fast, flexible setup. It takes real effort to learn, but it is worth the investment.

## Reference

[Two Simple Steps to go from IDE to Vim](https://www.youtube.com/watch?v=1UXHsCT18wE) — ThePrimeagen
