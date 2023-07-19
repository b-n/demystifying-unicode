---
layout: cover
---

# Unicode in Rust

---

## The basis

All `&str` and thus also `String` are always valid UTF-8 by default.

The compiler won't let you even compile if you try to stuff random bytes into a `&str`

```rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\x20World";  // Also good
    let s = "Hello\x7FWorld";  // Also good (\x7F is a control character DEL)
    let s = "Hello\x80World";  // Fails
    //            ^^^^ must be a character in the range [\x00-\x7f]
}
```

<!--
\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->

---

## Memory!

Len = length in bytes
Capacity = capacity in bytes

---

## Creating Strings

Remember, all strings are just arrays of bytes. As such, rust will also let us create strings from exactly that, vectors of bytes.

```rust
fn main() {
    let v = vec![0x52, 0x75, 0x73, 0x74, 0x21];

    // Panics if not a valid UTF-8 string
    let s = String::from_utf8(v).unwrap();

    println!("{s}");
}
```

---

## UTF8Error

Until it panics.

```rust
fn main() {
    let v = vec![0x80];

    // Panics
    let s = String::from_utf8(v).unwrap();
    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value: FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
```

---

## Unconventially UTF-8

With the help of bstr crate

---

## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)

---

## But can we break a str in rust?

- Breaking `&str`s (pushing non utf8 bytes)
