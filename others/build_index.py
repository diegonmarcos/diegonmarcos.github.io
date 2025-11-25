import os

def generate_index_html():
    files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html']
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Pages</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <style>
        .card.active {{
            border: 2px solid var(--primary);
            transform: scale(1.05);
            box-shadow: 0 0 15px var(--primary-focus);
        }}
        a.card-link {{
            text-decoration: none;
            color: inherit;
        }}
    </style>
</head>
<body>
    <main class="container">
        <h1>My Pages</h1>
        <div class="grid">
"""

    for filename in sorted(files):
        html_content += f"""            <a href="{filename}" class="card-link">
                <article class="card">
                    <header>{filename}</header>
                    Go to page
                </article>
            </a>
"""

    html_content += """        </div>
    </main>
    <script>
        document.querySelectorAll('.card').forEach(card => {{
            card.addEventListener('click', function() {{
                document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            }});
        }});
    </script>
</body>
</html>
"""

    with open('index.html', 'w') as f:
        f.write(html_content)

if __name__ == '__main__':
    generate_index_html()