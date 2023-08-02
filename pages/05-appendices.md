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

## Composition

`\u003d\u0338\u003d` vs. `\u2260` vs. `!=`

```
'≠=' != '≠' != '!='
```

<v-click>

Not not equal

```
=⃥
```

</v-click>

---

## Digraphs/ligatures

Digraphs and ligatures are both made by combining two glyphs:

- In a digraph, the glyphs remain separate but are placed close together.
- In a ligature, the glyphs are fused into a single glyph.

Generally speaking, Unicode doesn't like dealing with this problem.

> The Unicode Standard is a character encoding standard, and is **not intended to standardize ligatures or other presentation forms**, or any other aspects of the details of font and glyph design. The ligatures which you can find in the Unicode Standard are **compatibility encodings** only—and are not meant to set a precedent requiring the encoding of all ligatures as characters.

TL;DR; you shouldn't expect any ligatures/digraphs to be added to Unicode any time soon.

<!--
http://unicode.org/faq/ligature_digraph.html
-->

---

## Flags

- Who adds a new flag?
- Flag sequences
  - :RGI_Emoji_Flag_Sequence
  - https://unicode.org/reports/tr51/#Flags
  - Qatar flag = wideboi

- "🇭🇪🇱🇱🇴🇼🇴🇷🇱🇩" ??

Flag types:
- country/region
- local (gbeng, etc)
