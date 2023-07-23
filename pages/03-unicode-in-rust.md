---
layout: cover
---

# Unicode in Rust

<!--
We now know what UTF-8 is, and what Unicode is, how is it used in rust?

- How do we represent strings in rust?
  - str = primitive
  - str = string slice
  - string slice = vector of bytes
- Creating strings
  - str is valid UTF-8 only
  - Different ways to create str's
    - &'static str
    - String::from_utf8(bytes);
    - b"" (and then conversion)
    - array of std::char
  - UTF-8Errors
  - Conventially UTF-8 instead of Gauranteed
- Limits of UTF-8 default
  - Reading binary from disk
  - People not following standards (binary in json without conversion) 
  - We can break a string `unsafe {}`
-->

---
layout: center
---

Q: What is the primitive string type in rust?

---
layout: center
---

Answer: `str`

<v-click>

Incorrect: `String`, `&str`

- `&str` impls `AsRef<str>`
- `String` impls `AsRef<str>`
- `String` impls `Deref` to `str` (thus `&String` derefs to `&str`)

</v-click>

<v-click>

> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.
> 
> String slices are **always** valid UTF-8.

</v-click>

---

## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

Ref: https://doc.rust-lang.org/std/primitive.slice.html

<br />

<v-click>

If every element is the same distance from it's neighbour, then what is the `len` of the following?

```rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
```

</v-click>

<v-click>

```rust
    //        ^^ 9
```

</v-click>

<v-click>

∴ A String slice (`str`) is just a slice of bytes (`[u8]`), which contents are always valid UTF-8.

</v-click>

<!--
&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes
-->

---
layout: center
---

## Lets make some strings

---

## Using strings in Rust

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in `&str`

```rs
fn main() {
    let s = "Hello World";     // Good
    let s = "Hello\x20World";  // Also good
    let s = "Hello\x7FWorld";  // Also good (\x7F is the control character `DEL`)
    let s = "Hello\x80World";  // Fails
    //            ^^^^ must be a character in the range [\x00-\x7f]
}
```

<!--
\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->

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

## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate

---
layout: center
---

## Where Enforced UTF-8 can go wrong

---

## Reading and Writing files

- Binary "strings" (e.g. reading/writing from disk)

---

## Standards - and why we follow them

- JSON, but it's binary blobs as values

---

## `unsafe` is unsafe

- Breaking `&str`s (pushing non utf8 bytes)

---
layout: center
---

## Summary

`str` is the primitive string - a slice of bytes with gaurantees of UTF-8

`str` is always `UTF-8`

`UTF8Error` is because you should be handling bytes instead of strings

`bstr` if you want Conventially UTF-8 instead
