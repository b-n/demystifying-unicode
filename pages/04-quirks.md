# Quirks

- Binary "strings" (e.g. reading/writing from disk)
- ASCII vs. ANSI
- bstr crate
- Breaking `&str`s
- What UTF8Error even means
- Who adds a new flag?
- Capitalization - "\u0131" == "\u0131".upcase.downcase. "\u0131".upcase.downcase(:turkic)
