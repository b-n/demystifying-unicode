# Quirks

- Binary "strings" (e.g. reading/writing from disk)
- bstr crate
- Breaking `&str`s (pushing non utf8 bytes)
- What UTF8Error even means
- Who adds a new flag?
- Capitalization - "\u0131" == "\u0131".upcase.downcase. "\u0131".upcase.downcase(:turkic)

---

## Composition

A[cute] E

- é = `\u00e9`
- é = `\u0065\u0301` (just an `e` but with special `\u0301` combining)

```
é != é
```

`\u003d\u0338\u003d` vs. `\u2260` vs. `!=`

```
'≠=' != '≠' != '!='
```

Not not equal
```
=⃥
```

<footer>

- Unicode combining classes: https://www.compart.com/en/unicode/combining
- Unicode Normalization Forms: http://www.unicode.org/reports/tr15/
- Crate unicode_normalization: https://docs.rs/unicode-normalization/latest/unicode_normalization/

</footer>
