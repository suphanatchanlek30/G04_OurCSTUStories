// Navbar Start
// Function to set active navigation link
function setActive(element) {
    // Remove active class from all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    element.classList.add('active');
}

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navLinks.contains(event.target) && 
        !menuToggle.contains(event.target) && 
        navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});
// Navbar End

//future//
document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('click', () => {
      alert('Icon clicked!');
    });
  });
//future end

//toggleNightMode//
const toggleNightMode = document.getElementById('toggleNightMode');
const body = document.body;

if (localStorage.getItem('nightMode') === 'enabled') {
    body.classList.add('night-mode');
    toggleNightMode.textContent = '☀️'; 
}

toggleNightMode.addEventListener('click', () => {
    if (body.classList.contains('night-mode')) {
        body.classList.remove('night-mode');
        toggleNightMode.textContent = '🌙'; 
        localStorage.setItem('nightMode', 'disabled');
    } else {
        body.classList.add('night-mode');
        toggleNightMode.textContent = '☀️'; 
        localStorage.setItem('nightMode', 'enabled');
    }
});
//toggleNightModeEnd//

// เพิ่ม Event Listener ให้กับปุ่ม
document.getElementById('toggleNightMode').addEventListener('click', function() {
    const logo = document.getElementById('logoImage'); // เข้าถึงโลโก้

    // ตรวจสอบและสลับโลโก้ตามสถานะ
    if (logo.src.includes('logo_new1.svg')) {
        logo.src = 'resource/logo_new2.svg'; // เปลี่ยนเป็นโลโก้ใหม่
    } else {
        logo.src = 'resource/logo_new1.svg'; // เปลี่ยนกลับเป็นโลโก้เดิม
    }
});

// ดึงองค์ประกอบ HTML
const outputDiv = document.getElementById("output");

// ตรวจสอบว่า Local Storage มีข้อมูลหรือไม่
let guestBookEntries = JSON.parse(localStorage.getItem("guestBookEntries")) || [];

// โหลดข้อมูลเก่าเมื่อเปิดหน้าเว็บ
document.addEventListener("DOMContentLoaded", updateOutput);

// ฟังก์ชันสำหรับจัดการเมื่อกด Submit
function handleSubmit() {
    // ดึงค่าจากฟอร์ม
    const firstName = document.getElementById("firstname_english").value;
    const lastName = document.getElementById("lastname_english").value;
    const role = document.getElementById("role").value;
    const star = document.querySelector("input[name='star']:checked")?.value || "No Rating";
    const comment = document.getElementById("comment").value;

    // ตรวจสอบว่ากรอกข้อมูลครบหรือยัง
    if (!firstName || !lastName || !role || !comment) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    // สร้างออบเจ็กต์สำหรับเก็บข้อมูล
    const entry = {
        firstName,
        lastName,
        role,
        star,
        comment,
    };

    // เพิ่มข้อมูลลงในอาร์เรย์
    guestBookEntries.push(entry);

    // บันทึกข้อมูลลงใน Local Storage
    localStorage.setItem("guestBookEntries", JSON.stringify(guestBookEntries));

    // อัพเดตการแสดงผล
    updateOutput();

    // ล้างค่าในฟอร์มหลังจากเพิ่มข้อมูล
    document.getElementById("guest_Form").reset();
}

// ฟังก์ชันอัพเดตข้อมูลในหน้าเว็บ
function updateOutput() {
    // ล้างข้อมูลเก่า
    outputDiv.innerHTML = "";

    // แสดงรายการทั้งหมด
    guestBookEntries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "guest-entry";
        entryDiv.innerHTML = `
            <h3><strong>Guest Number : ${index + 1}</strong></h3>
            <p class="name">${entry.firstName} ${entry.lastName}</p>
            <p><strong>Role :</strong> ${entry.role}</p>
            <p><strong>Rating :</strong> ${entry.star} <span>⭐</span></p>
            <p><strong>Comment :</strong> ${entry.comment}</p>
            <hr>
        `;
        outputDiv.appendChild(entryDiv);
    });
}


