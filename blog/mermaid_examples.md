# 10 Examples of Mermaid.js Usage in Obsidian

Mermaid.js is a JavaScript library that allows you to create a variety of diagrams and charts using a simple, text-based syntax. Obsidian has built-in support for Mermaid, so you can embed these diagrams directly into your notes.

Here are 10 examples of Mermaid diagrams you can use in Obsidian:

### 1. Flowchart

Flowcharts are used to represent workflows or processes.

```mermaid
graph TD
    A[Start] --> B{Is it sunny?};
    B -- Yes --> C[Go to the beach];
    B -- No --> D[Stay home];
    C --> E[Enjoy the sun];
    D --> F[Read a book];
    E --> G[End];
    F --> G[End];
```

### 2. Sequence Diagram

Sequence diagrams illustrate interactions between different entities over time.

```mermaid
sequenceDiagram
    participant User
    participant System
    participant Database

    User->>System: Login Request
    System->>Database: Query User Credentials
    Database-->>System: User Credentials
    System->>System: Authenticate User
    System-->>User: Login Successful
```

### 3. Gantt Chart

Gantt charts are useful for project management and scheduling.

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Project Schedule

    section Planning
    Research      :a1, 2025-10-13, 5d
    Outline       :a2, after a1, 3d
    section Development
    Design        :b1, 2025-10-20, 7d
    Coding        :b2, after b1, 10d
    Testing       :b3, after b2, 5d
    section Deployment
    Release       :c1, after b3, 2d
```

### 4. Class Diagram

Class diagrams are used in software engineering to model the structure of a system.

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +void eat()
    }

    class Dog {
        +String breed
        +void bark()
    }

    class Cat {
        +String color
        +void meow()
    }

    Animal <|-- Dog
    Animal <|-- Cat
```

### 5. State Diagram

State diagrams describe the behavior of a system and its transitions between different states.

```mermaid
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```

### 6. Pie Chart

Pie charts are used to show the proportions of different categories.

```mermaid
pie
    title What is your favorite pet?
    "Dogs" : 45
    "Cats" : 30
    "Birds" : 15
    "Other" : 10
```

### 7. Git Graph

Git graphs are used to visualize the history of a Git repository.

```mermaid
gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
```

### 8. User Journey Diagram

User journey diagrams map out the user's experience with a product or service.

```mermaid
journey
    title My Trip to the Beach
    section Go to the beach
      Go to the beach: 5: Me
      Listen to music: 3: Me
      Arrive at the beach: 5: Me
    section At the beach
      Swim in the ocean: 5: Me
      Build a sandcastle: 4: Me
      Eat a snack: 3: Me
```

### 9. Mindmap

Mindmaps are used to visually organize information.

```mermaid
mindmap
  root((Obsidian))
    (Plugins)
      (Community Plugins)
        (Dataview)
        (Templater)
    (Themes)
      (Community Themes)
        (Minimal)
        (Atom)
```

### 10. Timeline Diagram

Timeline diagrams are used to display a sequence of events in chronological order.

```mermaid
timeline
    title History of the Web
    1990 : HTML
    1995 : JavaScript
    1996 : CSS
    2009 : Node.js
    2015 : React
```
