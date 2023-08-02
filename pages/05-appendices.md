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

