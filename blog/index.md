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



# Obsidian Markdown&Snippets
## Snippets
**Functionality & Workflow**
1. **Current Date:** `{{date}}` (or variations for specific formats) - Quickly insert today's date.
2. **Current Time:** `{{time}}` - Insert the current time.
3. **File Name:** `{{title}}` - Insert the current note's title.
4. **Link to Current File:** `[[{{title}}]]` - Create a self-referential link within a note.
5. **Random Number:** `{{random}}` (with optional range) - Generate a random number for various uses.
6. **Clipboard Content:** `{{clipboard}}` - Paste the contents of your clipboard.

**Templates & Note Creation**
7. **Template Insertion:** `/Template Name` - Trigger a specific template from your template folder.
8. **Daily Note:** `/Daily Note` - Quickly create or open today's daily note.
9. **New Note with Link:** `[[new note name]]` - Create a new note and link to it simultaneously.

**Text Manipulation**
10. **Title Case:** `{{title(text)}}` - Transform text to title case (e.g., "hello world" to "Hello World").
11. **Uppercase:** `{{upper(text)}}` - Convert text to uppercase.
12. **Lowercase:** `{{lower(text)}}` - Convert text to lowercase.

**Dates & Time**
13. **Date Arithmetic:** `{{date+1d}}` (or similar) - Calculate dates relative to today or a specified date.
14. **Day of the Week:** `{{date:dddd}}` - Get the day of the week for a given date.

**Advanced Snippets**
15. **Conditional Statements:** `{{#if condition}} text {{else}} other text {{/if}}` - Display text based on a condition.
16. **Iteration:** `{{#each list}} item {{/each}}` - Loop through a list and perform actions.
17. **Javascript Code Execution:** `{{js: code }}` - Execute JavaScript code within a snippet.

## Markdown
1. **Headers:**    
    # This is a level 1 heading
    ## This is a level 2 heading
    ### This is a level 3 heading
    
2. **Emphasis:**
    *This text will be italic*
    _This will also be italic_
    
    **This text will be bold**
    __This will also be bold__
    
3. **Lists:**    ```
    - Item 1
    - Item 2
      - Subitem 2.1
      - Subitem 2.2
    - Item 3
    1. Numbered item 1
    2. Numbered item 2

4. **Links:**
    [Link text](https://www.example.com)

5. **Images:**
    ![Alt text](image.jpg)
6. **Code:**
    `This is inline code`
    ```python
    def my_function():
        print("Hello, world!")
    ````
    
7. **Blockquotes:**
    > This is a blockquote. 
    
8. **Horizontal Rule:**
---

9. **Tables:**

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

10. **Escaping Characters:**

\*This text will not be italic\* *This text will be italic*

11. **Nested Lists:**
    - Item 1
      - Subitem 1.1
        - Sub-subitem 1.1.1
      - Subitem 1.2
    - Item 2

12. **Task Lists:**
    - [x] Task 1 (completed)
    - [ ] Task 2 (incomplete)

13. **Definition Lists:**
    Term 1
    : Definition 1
    Term 2
    : Definition 2a
    : Definition 2b

14. **Footnotes:**
    This is some text with a footnote.[^1]
    [^1]: This is the footnote.
    
15. **Strikethrough:**

    ~~This text will be struck through.~~
    
16. **Highlight:**
    <mark>This text will be highlighted.</mark>
    
17. **Superscript:**
    This is a superscript^2^
    
18. **Subscript:**
    This is a subscript~2~
    
19. **HTML:**
    <p>This is a paragraph of HTML.</p>
    
20. **Line Breaks:**
    This is the first line.  
    This is the second line.
    (Note the two spaces at the end of the first line)
 
## Admotion
**1. Notes and Tips:**
> [!note] 
> This is a note about an important concept. You can use it to emphasize key takeaways or definitions.

**2. Warnings and Cautions:**

> [!warning] 
> Be careful when implementing this code. It could lead to unexpected consequences if not handled correctly.

**3. Important Information:**
> [!important]
>  Don't forget to back up your data regularly!

**4. Examples and Illustrations:**
> [!example]
> This is how you would format a code block:
> ```python
> print("Hello, world!")
> ```

**5. Questions and FAQs:**
> [!question]
> What is the best way to learn Markdown?
> 
> Practice and experimentation are key!

  