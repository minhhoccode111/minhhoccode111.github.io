---
title: Go Channels Deep Dive
date: 2026-10-03
ready: true
details: Golang, Concurrency
tags: ["Go", "Concurrency"]
# banner: "/static/media/images/software-programming.webp"
lang: en
---

- **Core concept**: Channels are typed pipes that allow goroutines to synchronize and pass values ("share memory by communicating") instead of using locks/mutexes.
- **Unbuffered Channels** (`make(chan int)`): Capacity is 0. Sends and receives **block** until the other side is ready, creating a direct handoff. If all goroutines block, the program deadlocks.
- **Buffered Channels** (`make(chan int, cap)`): Sends only block when the buffer is **full**, receives only block when the buffer is **empty**.
- **Closing Channels** (`close(ch)`):
    - Signals no more data will be sent
    - Sending to or double-closing a closed channel causes a **panic**
    - Receiving from a closed channel drains any remaining buffered values, then yields the zero value. Use `val, ok := <-ch` to check if it's closed (`ok == false`)
- **Directional Channels**: You can restrict channels to send-only (`chan<-`) or receive-only (`<-chan`) in function signatures for compile-time safety.
- **Nil Channels**: An uninitialized channel (`nil`) blocks forever on send/receive and panics if closed. This is actually a feature used to safely disable specific cases in a `select` statement.
