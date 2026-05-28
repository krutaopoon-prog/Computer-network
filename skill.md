# 🌐 Skill Documentation - Computer Network Simulators

> **Purpose:** This file is for AI collaborators to understand the project quickly.  
> If you are an AI reading this, follow the conventions documented here.

**Project:** Interactive Network Simulators for Vocational Education  
**Target Audience:** Vocational Students (ปวช./ปวส.)  
**Course:** เครือข่ายคอมพิวเตอร์ (Computer Network)  
**Created:** May 28, 2026

---

## 📂 Current File Structure

```
computer-network/
├── index.html              # Landing page - links to all topics
├── skill.md                # THIS FILE - AI documentation
├── README.md               # User-facing README
│
├── standards/              # 🎯 มาตรฐานเครือข่าย (5 องค์กร)
│   ├── index.html          # ภาพรวม + เปรียบเทียบ 5 องค์กร
│   ├── iso.html            # 1.1 ISO
│   ├── itu.html            # 1.2 ITU
│   ├── ansi.html           # 1.3 ANSI
│   ├── ieee.html           # 1.4 IEEE
│   ├── eia.html            # 1.5 EIA
│   ├── css/
│   └── js/
│
├── osi-overview/           # 🎯 แบบจำลอง OSI
│   ├── index.html          # ภาพรวม 7 Layers + ประวัติ
│   └── css/, js/
│
├── osi-layers/             # 🎯 หน้าที่แต่ละ Layer
│   ├── index.html          # ภาพรวม 7 Layers
│   ├── layer7-application.html
│   ├── layer6-presentation.html
│   ├── layer5-session.html
│   ├── layer4-transport.html
│   ├── layer3-network.html
│   ├── layer2-datalink.html
│   ├── layer1-physical.html
│   ├── css/
│   └── js/
│
├── osi-communication/      # 🎯 การสื่อสารบน OSI
│   ├── index.html          # ภาพรวม
│   ├── encapsulation.html  # การห่อหุ้มข้อมูล
│   ├── decapsulation.html  # การแกะห่อข้อมูล
│   ├── peer-to-peer.html   # Peer-to-Peer communication
│   ├── data-journey.html   # Animation การเดินทางของข้อมูล
│   ├── css/
│   └── js/
│
├── protocols/              # 🎯 โปรโตคอลและมาตรฐาน IEEE
│   ├── index.html          # ภาพรวมทั้งหมด
│   │
│   ├── legacy-protocols/   # 1. โปรโตคอลรุ่นเก่า
│   │   ├── index.html
│   │   ├── ipx-spx.html
│   │   ├── netbeui.html
│   │   ├── appletalk.html
│   │   ├── css/
│   │   └── js/
│   │
│   ├── tcp-ip/             # 2. โปรโตคอล TCP/IP
│   │   ├── index.html
│   │   ├── application-layer.html
│   │   ├── transport-layer.html
│   │   ├── internet-layer.html
│   │   ├── physical-layer.html
│   │   ├── tcp-ip-vs-osi.html
│   │   ├── css/
│   │   └── js/
│   │
│   └── ieee-standards/     # 3. มาตรฐาน IEEE
│       ├── index.html
│       ├── 8023-ethernet.html
│       ├── 80211-wifi.html
│       ├── 80215-bluetooth.html
│       ├── 80216-wimax.html
│       ├── comparison-table.html
│       ├── css/
│       └── js/
│
├── shared/                 # 📦 ไฟล์ร่วม
│   ├── css/global.css      # CSS หลัก
│   └── js/
│
└── assets/                 # 📦 รูปภาพ
    └── images/
```

---

## ⚡ Quick Reference - What Each File Does

### Standards (`standards/`)
| File | Role |
|------|------|
| `index.html` | ภาพรวม 5 องค์กร + ตารางเปรียบเทียบ |
| `iso.html` | ISO - International Organization for Standardization |
| `itu.html` | ITU - International Telecommunication Union |
| `ansi.html` | ANSI - American National Standards Institute |
| `ieee.html` | IEEE - Institute of Electrical and Electronics Engineers |
| `eia.html` | EIA - Electronic Industries Alliance |

### OSI Overview (`osi-overview/`)
| File | Role |
|------|------|
| `index.html` | ภาพรวม 7 Layers + OSI Diagram + Mnemonic |

### OSI Layers (`osi-layers/`)
| File | Role |
|------|------|
| `index.html` | ตารางสรุป 7 Layers + Navigation |
| `layer7-application.html` | Layer 7 - Application (HTTP, FTP, SMTP, DNS) |
| `layer6-presentation.html` | Layer 6 - Presentation (Encryption, Compression) |
| `layer5-session.html` | Layer 5 - Session (Session Management) |
| `layer4-transport.html` | Layer 4 - Transport (TCP, UDP) |
| `layer3-network.html` | Layer 3 - Network (IP, Routing) |
| `layer2-datalink.html` | Layer 2 - Data Link (MAC, Ethernet) |
| `layer1-physical.html` | Layer 1 - Physical (Cable, Signal) |

### OSI Communication (`osi-communication/`)
| File | Role |
|------|------|
| `index.html` | ภาพรวมการสื่อสาร |
| `encapsulation.html` | การห่อหุ้มข้อมูล (Top-Down) |
| `decapsulation.html` | การแกะห่อข้อมูล (Bottom-Up) |
| `peer-to-peer.html` | Peer-to-Peer Communication |
| `data-journey.html` | Animation การเดินทางของข้อมูล |

### Protocols (`protocols/`)
| File | Role |
|------|------|
| `legacy-protocols/index.html` | ภาพรวม IPX/SPX, NetBEUI, AppleTalk |
| `tcp-ip/index.html` | ภาพรวม TCP/IP 4 Layers |
| `ieee-standards/index.html` | ภาพรวม IEEE 802 Standards |

---

## 🎯 Core Features (Every Simulator Must Have)

1. **Theory Section** - Read before simulation (with references)
2. **Interactive Learning Mode** - Animation + step-by-step
3. **Practice Quiz** - Name entry → 10 questions (matched to theory) → Result (name + score + grade)
4. **Responsive Design** - Desktop, Tablet, Mobile
5. **Web-based** - No installation, browser only

**Optional (protocol-dependent):**
- Oscilloscope/Waveform View (signal visualization on canvas)
- Arduino Code Examples
- Sub-Simulators (Multi-Slave, Full-Duplex, etc.)

---

## 🎨 Design System

### Primary Colors
```css
--primary-color: #2563eb;    /* Blue - main actions */
--secondary-color: #1e40af;  /* Dark Blue */
--success-color: #22c55e;    /* Green - correct/active */
--error-color: #ef4444;      /* Red - incorrect */
--warning-color: #f59e0b;    /* Orange - notes */
--bg-color: #f8fafc;         /* Page background */
--card-bg: #ffffff;          /* Card background */
--text-color: #1e293b;       /* Main text */
--text-muted: #64748b;       /* Secondary text */
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

### Typography
- UI Font: `'Segoe UI', 'Sarabun', Tahoma, sans-serif`
- Code Font: `'Consolas', 'Monaco', monospace`

### Layout
- Max width: `1400px`
- Border radius: `8px` (small), `12px` (medium)
- Shadow: `0 4px 6px -1px rgba(0,0,0,0.1)`

---

## 🧠 Architecture Patterns

### HTML Template Pattern
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Topic Title]</title>
    <link rel="stylesheet" href="../shared/css/global.css?v=1.0">
</head>
<body>
    <header class="page-header">
        <h1>[Topic Name]</h1>
        <p>[Topic Description]</p>
    </header>
    
    <nav class="breadcrumb">
        <a href="../index.html">หน้าแรก</a>
        <span class="separator">/</span>
        <span>[Current Page]</span>
    </nav>
    
    <div class="container">
        <section class="theory-section">
            <div class="theory-header">
                <h2>📖 ทฤษฎี: [Topic]</h2>
                <button class="theory-toggle-btn" onclick="toggleTheory()">ซ่อนเนื้อหา</button>
            </div>
            <div class="theory-content" id="theory-content">
                <div class="theory-block">
                    <h3>[Section Title]</h3>
                    <p>[Content]</p>
                    
                    <div class="term-box">
                        <h4>📘 [Term Name]</h4>
                        <ul>
                            <li><strong>Definition:</strong> [Explanation]</li>
                            <li><strong>Simple analogy:</strong> [Real-world example]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <footer class="page-footer">
        <p>[References]</p>
    </footer>
</body>
</html>
```

### Toggle Theory Function (inline script)
```javascript
function toggleTheory() {
    const content = document.getElementById('theory-content');
    const btn = document.getElementById('toggle-btn');
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.textContent = 'ซ่อนเนื้อหา';
    } else {
        content.classList.add('collapsed');
        btn.textContent = 'แสดงเนื้อหา';
    }
}
```

### Term Box Pattern
```html
<div class="term-box">
    <h4>📘 [Term Name]</h4>
    <ul>
        <li><strong>Definition:</strong> Technical meaning</li>
        <li><strong>Simple analogy:</strong> Real-world comparison</li>
        <li><strong>Examples:</strong> Real devices</li>
    </ul>
</div>
```

### Comparison Table Pattern
```html
<table class="comparison-table">
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

---

## 📚 Theory Section Guidelines

### Structure (single column, NOT grid):
```html
<div class="theory-section">
  <div class="theory-header">
    <h2>📖 ทฤษฎี: [Topic Name]</h2>
    <button onclick="toggleTheory()">ซ่อนเนื้อหา</button>
  </div>
  <div class="theory-content" id="theory-content">
    <div class="theory-block">...</div>  <!-- Section 1 -->
    <div class="theory-block">...</div>  <!-- Section 2 -->
    <div class="references">...</div>
  </div>
</div>
```

### Content Sources (always cite):
- Official standards (ISO, IEEE, ITU)
- RFC Documents (for TCP/IP)
- Educational textbooks
- Network device documentation

---

## 📖 Technical Terminology Guidelines

**Rule:** Explain EVERY technical term for vocational students.

### HTML Pattern:
```html
<div class="term-box">
  <h4>📘 [Term Name]</h4>
  <ul>
    <li><strong>Definition:</strong> Technical meaning</li>
    <li><strong>Simple analogy:</strong> Real-world comparison</li>
    <li><strong>Examples:</strong> Real devices or situations</li>
  </ul>
</div>
```

### Key Principles:
1. **Never assume prior knowledge** - Explain EVERY acronym
2. **Use analogies** - Compare to everyday experiences
3. **Show direction** - Use arrows (→ ←) for data flow
4. **Give examples** - Real device names students know
5. **Explain WHY** - Not just what, but why it matters
6. **Thai + English** - English term, explain in Thai

### Example Terms (Network):

| Term | Meaning | Analogy |
|------|---------|---------|
| Protocol | ชุดกฎการสื่อสาร | ภาษาที่ตกลงกัน |
| IP Address | ที่อยู่ในเครือข่าย | บ้านเลขที่ |
| MAC Address | ที่อยู่ฮาร์ดแวร์ | เลขประจำตัวประชาชน |
| Router | อุปกรณ์กำหนดเส้นทาง | สี่แยกที่บอกทาง |
| Switch | อุปกรณ์เชื่อมต่อ LAN | ตู้สาขาโทรศัพท์ |
| Packet | หน่วยข้อมูลใน Network | จดหมาย |
| Frame | หน่วยข้อมูลใน Data Link | ซองจดหมาย |
| Topology | รูปแบบการเชื่อมต่อ | ผังเมือง |
| Bandwidth | ความจุในการส่งข้อมูล | ความกว้างถนน |

---

## 🔄 Cache Control for GitHub Pages

### Always use both methods together:

**Method 1: Meta Tags** (in `<head>`):
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
```

**Method 2: Version Query Strings** (on CSS/JS links):
```html
<link rel="stylesheet" href="css/base.css?v=1.0">
<script src="js/app.js?v=1.2"></script>
```
> **Important:** Increment version when file changes: `?v=1.0` → `?v=1.1`

---

## 🚀 Future Topics Roadmap

| Topic | Difficulty | Status |
|-------|-----------|--------|
| Network Standards (5 orgs) | Easy | ✅ Done |
| OSI 7 Layers | Medium | ✅ Done |
| OSI Communication | Medium | ✅ Done |
| Legacy Protocols | Easy | ✅ Done |
| TCP/IP | Medium | ✅ Done |
| IEEE 802 Standards | Medium | ✅ Done |
| IP Addressing & Subnetting | Medium | 🔜 Next |
| Routing Protocols | Hard | 📋 Planned |
| Network Security | Hard | 📋 Planned |
| Wireless Networks | Medium | 📋 Planned |

---

## ✏️ How to Add a New Topic

1. Create folder: `topic-name/`
2. Create subfolders: `css/`, `js/`
3. Copy template from existing topic
4. Write `index.html` with Theory Section
5. Create detail pages as needed
6. Add link in root `index.html`
7. Update this `skill.md`

### Topic Structure Template:
```
topic-name/
├── index.html          # Main page with overview
├── detail-page.html    # (optional) Specific topic
├── css/
│   └── (optional) custom styles
└── js/
    └── (optional) interactive scripts
```

---

**Last Updated:** May 28, 2026  
**Status:** Chapter 1-2 Complete (Standards + OSI Model + Protocols)
