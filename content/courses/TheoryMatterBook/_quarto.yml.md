project:
  type: book
  output-dir: output

book:
  title: "תורת החומרים"
  author: "Alex Lugovskoy"

  chapters:
    - index.md
    - dedication.md
    - preface.md
    - chapters/chapter_01.md
    - chapters/chapter_02.md
    - chapters/chapter_03.md
    - chapters/chapter_04.md
    - chapters/chapter_05.md
    - chapters/chapter_06.md
    - chapters/chapter_07.md
    - chapters/chapter_08.md

format:
  pdf:
    pdf-engine: xelatex
    toc: true
    number-sections: true
    mainfont: "Noto Serif"

execute:
  freeze: auto