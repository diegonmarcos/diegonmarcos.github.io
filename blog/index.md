---
layout: default
title: Blog - Markdown Features
---

# ✍️ Exploring the Full Spectrum of Markdown Features

-----

## 🚀 Structural Elements: Headings and Rules

Headings are crucial for structuring your document and establishing a hierarchy. Markdown supports up to six levels of headings.

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

A **Horizontal Rule** (`---`, `***`, or `___`) is used to separate content sections visually.

-----

## 🔡 Basic Text Formatting

You can easily apply various styles to your text to add emphasis or indicate a different type of content.

  * **Bold:** Use double asterisks or double underscores around text.
      * This text is **bold** or this is **important**.
  * **Italics:** Use single asterisks or single underscores around text.
      * This text is *italicised* or this is *a note*.
  * **Bold and Italics:** Combine three asterisks.
      * This is ***bold and italicised***\!
  * **Strikethrough:** Use double tildes around text (a common extension).
      * \~\~This text is incorrect.\~\~
  * **Monospace Code/Inline Code:** Use single backticks for code within a sentence.
      * The function is called `calculate_area()`.

This is a standard paragraph of text. To create a new paragraph, simply leave a blank line between blocks of text.

To force a **line break** without starting a new paragraph, end a line with two or more spaces.
Like this.  
This is the next line, but part of the same paragraph.

-----

## 📃 Lists and Blockquotes

Lists help organise information sequentially or non-sequentially.

### Unordered Lists (Bullet Points)

Use an asterisk, plus sign, or hyphen followed by a space.

  * First item
  * Second item
      * A sub-item (indent with two or four spaces or a tab)
      * Another sub-item
  * Third item

### Ordered Lists (Numbered)

Use a number followed by a period and a space. The number you use doesn't strictly matter; Markdown automatically numbers them correctly, but it's conventional to start with `1.`.

1.  Step one: Prepare ingredients.
2.  Step two: Mix them thoroughly.
3.  Step three: Bake for 45 minutes.

### Task Lists (Checkboxes)

(Often a common extension, not standard basic Markdown)

  * [x] Complete the presentation
  * [ ] Review the report draft
  * [ ] Send the follow-up email

### Blockquotes

Use the greater-than sign (`>`) to denote quoted text or a pull quote.

> This is a blockquote. It's often used for citations or to highlight a specific passage.
>
> > You can also nest blockquotes for deeper emphasis.

-----

## 🔗 Hyperlinks and Multimedia

Markdown makes linking to other resources simple and clean.

### Links

There are two main styles for links: inline and reference.

  * **Inline Link:** Use the format `[Link Text](URL "Optional Title")`

      * Visit the [Google Search](https://www.google.com "Search Engine") page.

  * **Reference Link:** This keeps your text cleaner by putting the URL definition at the bottom of the document.

      * See the definition in the [Markdown Guide][1].

### Images

The syntax for images is very similar to links, but you prefix it with an exclamation mark (`!`).

`![Alt Text](URL "Optional Title")`

-----

## 💻 Code Demonstration

For demonstrating code, there are two primary methods: inline code (shown earlier) and code blocks.

### Code Blocks

Use triple backticks (\`\`\`) before and after the code block. For syntax highlighting, specify the language immediately after the first set of backticks.

```python
# Python code example
def greet(name):
    """Returns a greeting for the person provided."""
    return f"Hello, {name}!"

print(greet("World"))
```

```javascript
// JavaScript code example
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

-----

## 📊 Tables

Tables are a powerful, though slightly more complex, feature for displaying structured data. They are commonly supported by most Markdown processors.

| Feature | Syntax Example | Status |
| :--- | :---: | ---: |
| **Headers** | `# H1` | ✅ Supported |
| **Links** | `[text](url)` | ✅ Supported |
| **Alignment** | `:---`, `:---:`, `---:` | 🎨 Visual |

  * The colons `:` control text alignment within the column:
      * Left alignment: `:---`
      * Centre alignment: `:---:`
      * Right alignment: `---:`

[1]: https://www.google.com/search?q=%5Bhttps://www.markdownguide.org%5D\(https://www.markdownguide.org\) "The Definitive Guide to Markdown"