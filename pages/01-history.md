---
layout: cover
---

# History

---

## A bit (🥁鈸) of fundamentals

> Computers represent information as 1's and 0's
> - Literally everyone, since forever

Multiple bits can be put together to make different structures.

- 8 bits makes a byte
- 4/8 bytes makes a word on 32/64 bit architectures respectively

👆 Although unimportant for this talk, these things are the main language of a computer, bits, bytes, words. Compilers compile our code, so we can make more __human__ structures. Often the compilers optimise our code for thigns the computer understands.

---

## Abstraction

> Let's make an abstraction so we can understand things better
> - Literally every developer, since forever

`C` originally abstracted things a little further:

<v-clicks>

- `bool` is a 1 bit
- `char` is a 8 bits
- `int` is ambiguous, however they solved that with:
  - `uint8_t` - unsigned 8bit integer
  - `uint32_t` - unsigned 32bit integer
  - `int8_t` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- `long` also ambiguous, but >= `int`

</v-clicks>

<v-click>

But - what really __is__ a `char`?

And what really are characters?

</v-click>

---

## Characters

Quiz time - what does this say:

```
01101000 01100101 01101100 01101100 01101111 00100000
01110111 01101111 01110010 01101100 01100100
```

<v-click>

The knowledge we share with computers: `00100000` = `32` = ` `

</v-click>

<v-click>

But there are more than 255 characters in different scripts. DIN 91379 includes:
| | |
| --- | --- |
| Base Latin Letters: 649 | enl: 42 |
| Combinging Diacritics: 19 | bnlreq: 17 |
| Greek Letters: 68 | bnl: 59 |
| Cyrillic Letters: 61 | bnlopt: 8 |
| | bnlnot: 2 |

</v-click>

<!--
When I think of a "character" I think of "Something a human can read". This text is made up of characters because we understand what each of the letters mean. We share that knowledge.

DIN 91379: https://github.com/String-Latin/DIN-91379-Characters-and-Sequences
-->

---

## Competing standards

XKCD comic 927

8 bits isn't going to be enough.

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters (QQ)

IBM decided that drawing UI's was more important than people being able to write in their language 

```
┏━━━━━━━━━━━━━━━━━━┫ Prompt ┣━━━━━━━━━━━━━━━━┓
┃                                            ┃ 
┃ Do you want your langauge to be supported? ┃
┃                                            ┃ 
┗━━━━━━━━━━━━━━━━━━┫ No ┣━┫ >Nah not even< ┣━┛
```

<br />

> Unicode has entered the chat

<br />
But first...

<!--
ANSI Characters aren't actually a thing. When people use this term, they are refering to the windows code pages.

Quiz: How many bits is an ascii character?

IBM437: https://www.compart.com/en/unicode/charsets/IBM437
-->

--- 

## About ol ASCII

<v-clicks>

- ASCII standardized 0x00..0x7F
  ```
  ␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏
  ␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟
  ␠!"#$%&'()*+,-./
  0123456789:;<=>?
  @ABCDEFGHIJKLMNO
  PQRSTUVWXYZ[\]^_
  `abcdefghijklmno
  pqrstuvwxyz{|}~␡
  ```
- 0x00..0x7F was common between many code pages
- Which code page? Which `encoding` of bits makes what char?

</v-clicks>

---

## A world before encoding/before the web?

Be grug developer:

- I use IBM 437 because I'm writing DOS applications
- Everyone else must use IBM 437, because they all speak english and like borders right?
- Write once, run only on my machine

Hypothesis: When the world started going online...

Dos world: IBM437

Windows world: ISO-8859-1

<footer>

**🌶 Facts**: HTTP 1.1 used to use `ISO-8859-1` as the default charset 🤯

</footer>

---
layout: quote
---

The term charactor is ambiguous.

`char` isn't a character, it's just a `uint8_t` with a fancy name.

---
layout: center
---

<img src="/no_chars_yes_glyphs.jpg" alt="Drake no: characters. Drake yes: glyphs" />
