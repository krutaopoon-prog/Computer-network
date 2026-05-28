# Computer Network Simulators - AI Guide

## Project Overview
Educational web simulators for vocational students (ปวช./ปวส.) learning Computer Network.

**GitHub:** https://github.com/krutaopoon-prog/Computer-network.git

## Quick Structure

```
computer-network/
├── index.html              # Landing page
├── CLAUDE.md               # This file (AI guide)
├── README.md               # User docs
│
├── standards/              # Chapter 1: Network Standards
│   ├── index.html          # Overview of 5 orgs
│   ├── iso.html, itu.html, ansi.html, ieee.html, eia.html
│   └── css/, js/
│
├── osi-overview/           # OSI 7 Layers overview
├── osi-layers/             # Individual layer pages (layer1-7)
├── osi-communication/      # Encapsulation, decapsulation, peer-to-peer
│
├── protocols/              # Chapter 2: Protocols
│   ├── legacy-protocols/   # IPX/SPX, NetBEUI, AppleTalk
│   ├── tcp-ip/             # TCP/IP 4 layers
│   └── ieee-standards/     # IEEE 802.x standards
│
├── games/                  # Interactive games (NEW)
│   ├── index.html          # Game hub
│   └── zombie-quiz/        # Network Zombie Quiz
│       ├── index.html      # Game UI
│       ├── css/game.css    # Styles + animations
│       └── js/
│           ├── game.js     # Game logic (class ZombieQuizGame)
│           └── questions.js # Question bank (50+ questions)
│
└── shared/                 # Shared resources
    └── css/global.css      # Main stylesheet
```

## Design System

### Colors
```css
--primary-color: #2563eb;    /* Blue */
--success-color: #22c55e;    /* Green */
--error-color: #ef4444;      /* Red */
--bg-color: #f8fafc;         /* Light gray bg */
```

### OSI Layer Colors
```css
--layer7-color: #ef4444;    /* Application - Red */
--layer6-color: #f97316;    /* Presentation - Orange */
--layer5-color: #eab308;    /* Session - Yellow */
--layer4-color: #22c55e;    /* Transport - Green */
--layer3-color: #3b82f6;    /* Network - Blue */
--layer2-color: #8b5cf6;    /* Data Link - Purple */
--layer1-color: #64748b;    /* Physical - Gray */
```

## Coding Patterns

### HTML Template
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Topic] - Computer Network</title>
    <link rel="stylesheet" href="../shared/css/global.css?v=1.0">
</head>
<body>
    <header class="page-header">
        <h1>[Topic]</h1>
        <p>[Description]</p>
    </header>
    
    <nav class="breadcrumb">
        <a href="../index.html">Home</a>
        <span>/</span>
        <span>[Current]</span>
    </nav>
    
    <div class="container">
        <!-- Theory Section -->
        <section class="theory-section">
            <div class="theory-header">
                <h2>📖 Theory: [Topic]</h2>
                <button onclick="toggleTheory()">Toggle</button>
            </div>
            <div class="theory-content" id="theory-content">
                <div class="theory-block">
                    <h3>[Section Title]</h3>
                    <p>[Content]</p>
                    <div class="term-box">
                        <h4>📘 [Term]</h4>
                        <ul>
                            <li><strong>Definition:</strong> [Explain]</li>
                            <li><strong>Analogy:</strong> [Real-world example]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <footer class="page-footer">
        <p>References: [URL]</p>
    </footer>
</body>
</html>
```

### Toggle Theory Function
```javascript
function toggleTheory() {
    const content = document.getElementById('theory-content');
    const btn = document.getElementById('toggle-btn');
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.textContent = 'Hide';
    } else {
        content.classList.add('collapsed');
        btn.textContent = 'Show';
    }
}
```

## Game: Network Zombie Quiz

### How It Works
- Player (🧑‍🎓) on left, Zombie (🧟‍♂️) spawns at right edge (2% from right)
- Zombie moves left towards player over time
- Answer 2-choice questions correctly to "shoot" zombie
- Wrong answer or timeout = zombie reaches player = GAME OVER

### Question Format
```javascript
{
    question: "OSI has 7 layers?",
    options: ["True", "False"],
    correct: 0,  // Index of correct answer
    chapter: "osi",
    difficulty: "easy"
}
```

### Key Game Mechanics
- Timer: 10s → decreases as score increases (min 3s)
- High Score: stored in localStorage
- Endless mode: 50+ questions, shuffled, no repeat until all used
- Controls: Click buttons OR Arrow keys / A-D

## Adding New Content

### New Topic Page
1. Create folder: `topic-name/`
2. Add `index.html` with theory section
3. Add to root `index.html` navigation
4. Update this file if needed

### New Game Question
Edit `games/zombie-quiz/js/questions.js`:
```javascript
{
    question: "Your question?",
    options: ["Option 1", "Option 2"],
    correct: 0,
    chapter: "topic-name",
    difficulty: "easy"  // easy | medium | hard
}
```

## Cache Control (Always Use)

### Meta Tags (in `<head>`)
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
```

### Version Query Strings
```html
<link rel="stylesheet" href="css/style.css?v=1.0">
<script src="js/app.js?v=1.1"></script>
```
Increment version when files change.

## Status

**Completed:** Chapter 1-2 (Standards, OSI, Protocols) + Games
**Next:** Chapter 3 (IP Addressing, Routing)

Last Updated: May 28, 2026
