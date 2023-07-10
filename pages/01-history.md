# History

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

- `bool` is a 1 bit
- `char` is a 8 bits
- `int` is ambiguous, however they solved that with:
  - `uint8_t` - unsigned 8bit integer
  - `uint32_t` - unsigned 32bit integer
  - `int8_t` - signed 8bit integer, 2's compliment
  - ... etc, etc.
- `long` also ambiguous, but >= `int`

But - what really __is__ a `char`?

---

# Characters

- ~~ANSI (American National Standards Institue) Characters~~ Windows code pages, Code Page 437
- ASCII (American Standard Code for Information Interchange) Characters

- What even is a char?
  - `uint_8` vs. `char`
- ANSI? ASCII? The wild west of "standards"
- Encoding? What even?
- Glyphmemes, composite characters
