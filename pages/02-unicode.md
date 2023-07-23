---
layout: cover
---

# Unicode

---

## Why Unicode?

Prior to having unicode, there was code pages. A person could switch between different code pages in order to get different characters. The problem:
- There were many code pages that attempted to do the same thing.
- The default code pages were different on each device
- The code pages lacked standardisation between devices (OEM settings much)
- e.g. IBM did what they wanted with their code page, making interdevice communication hard.

Unicode was set up as a universal list of glyphs that were going to be standard across all devices. e.g. standards first.

---

## New Terminology

- Unicode codepoint: The unique identifier for a particular glyph (which could also be combining glyph etc)
- Glyphemes: Something that we as a people would consider an individual charcter. This could be one or many codepoints (in the example of combining codepoionts - grave, acute, etc)

---

## Encoding

Unicode vs. UTF-8 vs. UTF-16
- Unicode is the standard which defines what each of the codepoints are
- UTF-8 and UTF-16 are encodings.

What even is an encoding?
- In the beginning, we were talking about how all code is essentially just arrays/vectors of bytes.
- To a computer, there is no real difference between one array of bytes and another, it only matters when we actually go to display it to people on screens.
- Encodings are essentially ways for us to decode the bytes, and display it on a screen

Important:

- Both UTF-8 and UTF-16 are composed of multiple bytes. The first byte generally dictates how many subsequent bytes there are. We always need to provide more than

---

## Nuts and bolts of UTF-8

How does UTF-8 work?
- Important: It works the same on all coding languages, since there is a standard here
- It is unified way of interpreting an array of bytes in order to display them on a screen
- Between 1 and 4 bytes. In some cases UTF-16 is more efficient.
- By pure (The english people got there first) luck, UTF-8 is more efficient on the web due to how the standards work for many transfer protocols. e.g. many things only support ASCII chars, and/or are wrapped by an not insiginificant amount of ASCII, which makes UTF-8 more efficient since these characters only take up one byte, instead of 2 in UTF-16

---
layout: center
---

## Summary

Unicode standard is a dictionary of glyphs

Encoding is a concept to help humans interpret bytes as glyphs

UTF-8 and UTF-16 are encodings of the Unicode Standard

UTF-8 is most cases is more memory efficient due to the mass amounts of ASCII usage
