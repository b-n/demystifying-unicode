---
layout: cover
---

# Unicode

---

## Why Unicode?

<v-clicks>

1. Reliance on code page/charmap defaults per system
1. Code page duplication/lack of standardisation
1. Concept of "Encoding" was lacking
1. OEMs just did what they wanted
1. Display more than one code page at a time?

</v-clicks>

<!--
TODO: Illustrate with an example:
- Write an application on one computer, relying on codepage X
- Send data to another computer
- Get garbled nonsense
- 👍 
-->

---
layout: center
---

## Unicode to the resque

<v-clicks>

- Universal
- Efficient
- Unambiguous

</v-clicks>

<!--
- Universal: Encompass all characters that can be used in general text interchange
- Efficient: Simple to store and parse. Fixed character codes for all the charaters, no switch code pages/charmaps.
- Unambiguous: `\1F600` is a grinning face - everywhere.

Ref: https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

> The Unicode Standard was designed to be:
>
> - Universal. The repertoire must be large enough to encompass all characters that are likely to be used in general text interchange, including those in major international, national, and industry character sets.
> - Efficient. Plain text is simple to parse: software does not have to maintain state or look for special escape sequences, and character synchronization from any point in a character stream is quick and unambiguous. A fixed character code allows for efficient sorting, searching, display, and editing of text.
> - Unambiguous. Any given Unicode code point always represents the same character
-->

---

## New Terminology

| | | |
| - | - | - |
| Glyph | ‽ | How it actually looks, defined by the font |
| Codepoint | U+203D | Unique identifier for this character |
| Character | Interrobang | Description of the character | 
| Block | General Punctuation, U+2000 - U+206F | The range of codepoints for a specific purpose |
| Plane | Basic Multilingual Plane, U+0000 - U+FFFF | The wide group of codepoints |

<footer>

Ref: Characters and Glyphs https://www.unicode.org/versions/Unicode15.0.0/ch01.pdf

</footer>

<!--
Glyphs are what are drawn to the screen, generally unicode interpreted by a font for example
Character is still ambiguous, but in unicode it's the description of the codepoint
-->

---
layout: two-cols
---

## Glyphemes

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+00e9</div>
</div>

::right::

<div class="codepoint">
  <div class="glyph">é</div>
  <div class="code">U+0065 + U+0301</div>
</div>

<!--
Glyphemes - 1 to many codepoints that are represented to the user as a single character
--> 

---
layout: center
---

## What is the difference between
## `Unicode`
## and
## `UTF-8/UTF-16/UTF-32?`

---
layout: center
---

`Unicode` - "The Standard" <sup>defines codepoints</sup>

`UTF-8/UTF-16/UTF-32` - Encodings

---
layout: center
---

A quick word on encoding

---

## Encoding

Current Unicode total code space size: 21bits, 1048576 characters.

Code space: U+000000 - U+10FFFF

But...

<v-click>

> There are many ways to encode/skin a unicode/cat.

</v-click>

<v-click>

**Important:**

</v-click>

<v-clicks>

- ASCII standardized 0x00 - 0x7F
  ```
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./0123456789:;<=>?
  @ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_
  `abcdefghijklmnopqrstuvwxyz{|}~␡
  ```
- Many code pages were using ASCII too
- <small>It's really important to 🤝 on encoding - even to this day.</small>

</v-clicks>

<footer>

Fun fact: Unicode <2.0 code space was 16-bit wide.

</footer>

---
layout: center
---

## Unicode has 5 Encodings!

- UTF-8
- UTF-16LE
- UTF-16BE *
- UTF-32LE
- UTF-32BE *

<footer>

UTF-21 exists - but it's a toy encoding hobby project<br />
\* denotes the encodings which are default if not explicit LE/BE defined

</footer>

<!--
A UTF-8 encoded string on my machine spits out an array of bytes.
To your machine, it's just an array of bytes.

Content-Encoding header on HTTP requests

UTF-21: https://evanhahn.com/utf-21/
-->

---
layout: center
---

## Important

UTF-[8/16/32] __should__ always be the same everywhere

UTF-8 == UTF-8

UTF-16 == UTF-16

UTF-32 == UTF-32

<!--
The encoding standard is the encoding standard. If people are implementing UTF-8 in different ways (e.g. reverse byte order), then they are not using UTF-8, they have their own special thing.
-->

---
layout: center
---

## UTF-8 is the king of the web

---

## Nuts and bolts of UTF-8

Key points:

- Variable width (1-4 bytes)
- ∴ Variable offset between characters
- The default in Rust (+many more)

<v-click>

<hr />

| First code point | Last code point | Byte 1 | Byte 2 | Byte 3 | Byte 4 | Bit Capacity |
| - | - | - | - | - | - | - |
| U+0000 | U+007F | `0xxxxxxx` | | | | 7 |
| U+0080 | U+07FF | `110xxxxx` | `10xxxxxx` | | | 11 |
| U+0800 | U+FFFF | `1110xxxx` | `10xxxxxx` | `10xxxxxx` | | 16 |
| U+10000 | U+10FFFF | `11110xxx` | `10xxxxxx` | `10xxxxxx` | `10xxxxxx` | 21 |

</v-click>

<!--
UTF-8 is generally speaking more efficient when dealing with "Latin" based web - Best case 1 byte, worst case, 2 bytes.
UTF-16 is gauranteed to be 2 bytes, if not 4
UTF-32 will always be 4 bytes.
-->

---

## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

<p v-click>

1F63B = `0001 1111 0110 0011 1011`

</p>

<div v-click class="mt-30">

<Arrow x1="250" y1="250" x2="170" y2="160" width="5"/>

We need at least 17 bits of room to encode U+1F63B

</div>

<div v-click>

<hr />

`17 > 7` ∴ Needs more than 1 byte

`17 > 11` ∴ Needs more than 2 bytes

`17 > 16` ∴ Needs more than 3 bytes

∴ We need 4 bytes!

`1111 0xxx` `10xx xxxx` `10xx xxxx` `10xx xxxx`

</div>

<!--
Take a codepoint, and split it into UTF-8
-->

---

## Let's encode!

😻 = U+1F63B = Smiling cat face with heart-shaped eyes

0x1F63B = `0001 1111 0110 0011 1011`

<div v-click class="absolute top-40 left-14">
  <span>0x1F63B =&nbsp;</span>
  <span class="binary color-red">&nbsp;00</span>
  <span class="binary color-blue">01 1111</span>
  <span class="binary color-green">&nbsp;0110 00</span>
  <span class="binary color-yellow">11 1011</span>
</div>

<div v-click class="absolute parts top-40 left-14">
  <div class="binary color-red absolute part part-1 anim">00</div>
  <div class="binary color-blue absolute part part-2 anim">01 1111</div>
  <div class="binary color-green absolute part part-3 no-backtick anim">0110 00</div>
  <div class="binary color-yellow absolute part part-4 no-backtick anim">11 1011</div>
</div>

<div v-click class="absolute top-49 left-31">
  <span class="binary">| 1111 0000 = 1111 00<span class="color-red">00</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-blue">01 1111</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-green">01 1000</span>&nbsp;</span>

  <span class="binary">| 1000 0000 = 10<span class="color-yellow">11 1011</span>&nbsp;</span>
</div>

<div v-click class="absolute top-49 left-86">
  <span class="binary">&nbsp;= 0xF0</span>

  <span class="binary">&nbsp;= 0x9F</span>

  <span class="binary">&nbsp;= 0x98</span>

  <span class="binary">&nbsp;= 0xBB</span>
</div>

<div class="absolute top-90 left-15">

<v-click>

<hr />

Thus! U+1F63B = `\xF0\x9F\x97\xBB` in UTF-8

</v-click>

</div>

<style>
.part {
  width: 4.5em;
  top: 0em;
}

.parts {
  opacity: 1;
}

.part-1 { left: 5.90em; width: 1.8em; }
.part-2 { left: 7.10em; }
.part-3 { left: 11.9em; }
.part-4 { left: 16.1em; }

.slidev-vclick-current,.slidev-vclick-prior {
  .part { left: 0em; }

  .part-1 { top: 2.3em; left: 2.7em; }
  .part-2 { top: 5.0em; }
  .part-3 { top: 7.5em; }
  .part-4 { top: 10.1em; }
}

.anim {
  transition-delay: 0s;
  transition-duration: 1s;
}
</style>

---
layout: center
---

## Summary

<v-clicks>

- Unicode standard is a dictionary of codepoints and their character descriptions
- Encoding is a concept to help humans interpret bytes as painted glyphs
- UTF-8/16/32 are encodings defined by the Unicode Standard
- UTF-8 is most cases is more memory efficient due to the mass amounts of Latin + ASCII usage

</v-clicks>
