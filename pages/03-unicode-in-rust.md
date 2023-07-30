---
layout: cover
---

# Unicode in Rust

<!--

We now know what Unicode and UTF-8 are, how is it used in rust?

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

<div v-click class="mt-5">

> The `str` type, also called a ‘string slice’, is the most primitive string type. It is usually seen in its borrowed form, `&str`. It is also the type of string literals, `&'static str`.
> 
> String slices are **always** valid UTF-8.

</div>

<!--

Notes:
- str's can never actually be constructed directly
- &str could point to many different places, but it'll always implement the str primitives
- AsRef<str> is one of the common interfaces, however Deref means you can just use &String for &str args.
-->

---

## String slices

<br />

> Primitive Type slice
>
> A dynamically-sized view into a contiguous sequence, [T]. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors.

<br />

<v-click>

What is the output?

```rust
fn main() {
    let s = "İstanbul";

    println!("{}", s.len());
}
```

</v-click>

<v-clicks>

```rust
    //        ^^ 9
```

```rust
println!("{:x?}", "İstanbul".as_bytes());   // [c4, b0, 73, 74, 61, 6e, 62, 75, 6c]
```

</v-clicks>

<footer>

Ref: https://doc.rust-lang.org/std/primitive.slice.html

</footer>

<!--
&str is a slice of bytes, not of utf-8 characters. UTF-8 characters are between 1-4 bytes, so:
- it would be memory inefficient to assume all characters take 4 bytes
- it would be impossible to have a fixed distance with a variable length
Therefore string slices are slices of bytes
-->

---
layout: center
---

## A String slice (`str`) is just a slice of bytes (`[u8]`), **which contents are always valid UTF-8**.

---
layout: center
---

## Lets make some strings

---

## Creating strings

> String slices are **always** valid UTF-8.

∴ The compiler won't compile your rust if you try to do non UTF-8 things in `&str`

```rust
fn main() {
    // ASCII chars are always safe!
    let s = "Hello World";     // Good
    let s = "Hello\x20World";  // Also good
    let s = "Hello\x7FWorld";  // Also good (\x7F is the control character `DEL`)
    let s = "Hello\x80World";  // Fails
    //            ^^^^ must be a character in the range [\x00-\x7f]
}
```

<v-click>

... and for completeness...

```rust
fn main() {
    let s = "Hello\u{0020}World";   // Good
    let s = "Hello\u{1F63B}World";   // Good
    let s = "Hello\u{110000}World";  // Fails
    //            ^^^^^^^^^^ invalid escape
}

```

</v-click>

<!--
\x7F is DEL, so it seems as though the character is added then removed :shrug:
-->

---

## Creating Strings

- All strings are a sequence of bytes
- ∴ Rust let's us create strings from slices/vectors of bytes.

```rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let s = std::str::from_utf8(&cat).unwrap();
    // let s = String::from_utf8(cat.to_vec()).unwrap();

    println!("{s}");
    //        ^^^ 😻 
}
```

<v-click>

... and we can create byte sequences from strings even! (thanks compiler!)

```rust
fn main() {
    let s = b"Hello World!";

    assert_eq!(s, &[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);  // passes
}
``` 

</v-click>

---

## Creating strings

Even `char` primitives!

```rust {0-7,10,13-16|8,11}
fn main() {
    let s: [char; 4] = [
        'H',
        char::from_u32(0x69).unwrap(),
        unsafe { char::from_u32_unchecked(0x20) },
        '\u{1F63B}'
    ];
    println!("{}", s.len() * std::mem::size_of::<char>());  // 16
    
    let t: String = s.iter().collect();
    println!("{}", t.len() * std::mem::size_of::<u8>());    // 7

    println!("{t}");
    //        ^^^ "Hi 😻"
}
```

👆 Yes, `.iter().collect();`

---
layout: center
---

## See, creating strings is easy!

---

## UTF8Error

Until it panics.

```rust
fn main() {
    let cat: [u8; 4] = [0xF0, 0x9F, 0x98, 0xBB];

    let sliced = &cat[0..=2];

    // Panics
    let _s = std::str::from_utf8(sliced).unwrap();
    // thread 'main' panicked at 'called `Result::unwrap()` on an `Err` value:
    //   FromUtf8Error { bytes: [128], error: Utf8Error { valid_up_to: 0, error_len: Some(1) } }', src/main.rs:5:35
}
```

<p v-click class="pt-10">

> String slices are **always** valid UTF-8.

😬 Yeah, not all sequencess of bytes are "Valid UTF-8"

</p>

---

## Invalid UTF-8

...We didn't talk about Invalid UTF-8 yet

<v-click>

- First byte of UTF-8 byte sequences
  - 1 byte seq: `0xxxxxxx`
  - 2 byte seq: `110xxxxx` - `0xCx` or `0xDx` = 2 bytes 
  - 3 byte seq: `1110xxxx` - `0xEx` = 3 bytes
  - 4 byte seq: `11110xxx` - `0xFx` = 4 bytes

</v-click>

<v-click>

- ∴ The following are "broken":
  - `[0x80]`, `[0x90]`, `[0xA0]`, `[0xB0]` - invalid UTF-8 sequences
  - `[0xC0]`, `[0xD0]` - missing second byte
  - `[0xE0, 0xFF]` - missing third byte
  - `[0xF0, 0xFF, 0xFF]` - missing fourth byte

</v-click>

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

## Conventially UTF-8 vs. Gaurantee

With the help of bstr crate

---
layout: center
---

## Summary

`str` is the primitive string - a slice of bytes with gaurantees of UTF-8

`str` is always `UTF-8`

`UTF8Error` is because you should be handling bytes instead of strings

`bstr` if you want Conventially UTF-8 instead
