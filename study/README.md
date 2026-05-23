# 投资学习资料库

这个目录保存对投资书籍、文章和资料的蒸馏结果。

原则：

1. 原始资料保留在来源仓库中，不直接修改。
2. 每本书一个独立目录，目录名使用编号和英文 slug，方便脚本处理。
3. 每本书目录内保留来源说明、蒸馏笔记、飞书文档信息和必要的中间缓存。
4. 最终产物是“学习用蒸馏笔记”，不是原书全文转写。
5. 默认中文输出。

## 目录约定

```text
study/
  INDEX.md
  books/
    001-duan-yongping-investment-logic/
      README.md
      cache/
        source-text.txt
      notes/
        2026-05-23-段永平投资问答录-投资逻辑篇-蒸馏.md
```

## 工具

- `tools/extract_pdf_text.py`：把 PDF 提取成带页码标记的中间文本，供蒸馏使用。

