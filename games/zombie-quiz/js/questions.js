// Network Zombie Quiz - Question Database
// Questions from all chapters: Standards, OSI Model, Protocols

const QUESTIONS = [
    // ========== STANDARDS (15 questions) ==========
    {
        question: "ISO ย่อมาจาก International Organization for Standardization",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "easy"
    },
    {
        question: "ITU-T รับผิดชอบด้านการกำหนดมาตรฐานโทรคมนาคม",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "easy"
    },
    {
        question: "IEEE 802.3 คือมาตรฐาน Wi-Fi",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "EIA/TIA-568 เป็นมาตรฐานการเดินสาย LAN",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "easy"
    },
    {
        question: "ANSI เป็นองค์กรมาตรฐานระดับโลก ไม่ใช่แค่สหรัฐอเมริกา",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "IEEE 802.11 คือมาตรฐาน Wireless LAN (Wi-Fi)",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "easy"
    },
    {
        question: "OSI Model ถูกกำหนดโดย ISO",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "easy"
    },
    {
        question: "RS-232 เป็นมาตรฐานการสื่อสารแบบอนุกรม (Serial)",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "ITU ก่อตั้งในปี 1865",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "hard"
    },
    {
        question: "EIA ยุบตัวลงในปี 2011 แต่มาตรฐานยังใช้งานอยู่",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "IEEE มีสมาชิกกว่า 400,000 คนใน 160 ประเทศ",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "ISO มีสมาชิก 170 ประเทศ",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "ITU-R รับผิดชอบด้านสื่อสารดาวเทียมและกิจการวิทยุ",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "IEEE 802.15 คือมาตรฐาน Bluetooth",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "medium"
    },
    {
        question: "RS-485 รองรับการเชื่อมต่อ Multi-drop ได้มากกว่า RS-232",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "standards",
        difficulty: "hard"
    },

    // ========== OSI MODEL (20 questions) ==========
    {
        question: "OSI Model มีทั้งหมด 7 ชั้น",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Physical Layer อยู่ชั้นบนสุดของ OSI Model",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Application Layer อยู่ชั้นที่ 7",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Transport Layer มี PDU เป็น Segment",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "Network Layer ใช้อุปกรณ์ Router",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Data Link Layer มี PDU เป็น Packet",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "Data Link Layer มี PDU เป็น Frame",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "Physical Layer ส่งข้อมูลเป็น Bits",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Presentation Layer ทำหน้าที่เข้ารหัสและบีบอัดข้อมูล",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "Session Layer จัดการการสร้างและยุติการเชื่อมต่อ (Session)",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "HTTP ทำงานที่ Application Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "TCP และ UDP ทำงานที่ Network Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "TCP และ UDP ทำงานที่ Transport Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "MAC Address ทำงานที่ Data Link Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "IP Address ทำงานที่ Network Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Switch ทำงานที่ Data Link Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "easy"
    },
    {
        question: "Hub ทำงานที่ Physical Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "Port Number ใช้ที่ Transport Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "medium"
    },
    {
        question: "SSL/TLS ทำงานที่ Presentation Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "hard"
    },
    {
        question: "ARP (Address Resolution Protocol) ทำงานที่ Network Layer",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "osi",
        difficulty: "hard"
    },

    // ========== PROTOCOLS (15 questions) ==========
    {
        question: "HTTP ใช้ Port 80",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "easy"
    },
    {
        question: "HTTPS ใช้ Port 443",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "easy"
    },
    {
        question: "FTP ใช้ Port 20 และ 21",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "SSH ใช้ Port 22",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "easy"
    },
    {
        question: "DNS ใช้ Port 53",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "easy"
    },
    {
        question: "TCP เป็น Connection-oriented Protocol",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "UDP เป็น Connection-oriented Protocol",
        options: ["ถูกต้อง", "ผิด"],
        correct: 1,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "UDP เร็วกว่า TCP แต่ไม่รับประกันว่าข้อมูลจะถึง",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "TCP มีการยืนยันการรับข้อมูล (ACK)",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "SMTP ใช้สำหรับส่งอีเมล",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "easy"
    },
    {
        question: "POP3 และ IMAP ใช้สำหรับรับอีเมล",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "Ethernet ใช้ CSMA/CD ในการเข้าถึงสื่อ",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "hard"
    },
    {
        question: "IPv4 ใช้ 32-bit สำหรับ IP Address",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "IPv6 ใช้ 128-bit สำหรับ IP Address",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    },
    {
        question: "DHCP ใช้สำหรับแจกจ่าย IP Address อัตโนมัติ",
        options: ["ถูกต้อง", "ผิด"],
        correct: 0,
        chapter: "protocols",
        difficulty: "medium"
    }
];

// Total: 50 questions
// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS;
}
