const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'public', 'Sami_Amarneh_CV.pdf');
const distPath = path.join(__dirname, '..', 'dist', 'Sami_Amarneh_CV.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 48, right: 48 },
  info: {
    Title: 'Sami Amarneh - CV',
    Author: 'Sami Amarneh',
    Subject: 'Curriculum Vitae - Computer Systems Engineer'
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const black = '#000000';
const linkBlue = '#0000EE';
const lineGrey = '#888888';

function drawSectionHeader(title) {
  doc.moveDown(0.7);
  doc.font('Times-Bold').fontSize(11).fillColor(black).text(title, { characterSpacing: 0.5 });
  const y = doc.y + 2;
  const left = doc.page.margins.left;
  const right = doc.page.width - doc.page.margins.right;
  doc.strokeColor(lineGrey).lineWidth(0.6).moveTo(left, y).lineTo(right, y).stroke();
  doc.y = y + 4;
}

function drawBullet(text, linkObj = null) {
  const left = doc.page.margins.left;
  const right = doc.page.width - doc.page.margins.right;
  const bulletX = left + 14;
  const textX = left + 24;
  const width = right - textX;

  const currentY = doc.y;
  
  // Draw bullet symbol
  doc.font('Times-Roman').fontSize(8.5).fillColor(black).text('●', bulletX, currentY + 0.5);

  // Draw text
  doc.font('Times-Roman').fontSize(9.5).fillColor(black);
  if (linkObj) {
    doc.text(text, textX, currentY, { width: width, continued: true, lineGap: 1.5 });
    doc.fillColor(linkBlue).text(linkObj.text, { link: linkObj.url, underline: true });
    doc.fillColor(black);
  } else {
    doc.text(text, textX, currentY, { width: width, lineGap: 1.5 });
  }
  doc.moveDown(0.2);
}

// ----------------------------------------------------
// PAGE 1
// ----------------------------------------------------

// Name
doc.font('Times-Bold').fontSize(22).fillColor(black).text('Sami Amarneh');
doc.moveDown(0.1);

// Title
doc.font('Times-Roman').fontSize(12).fillColor(black).text('Computer Systems Engineer');
doc.moveDown(0.25);

// Contact Info
doc.font('Times-Roman').fontSize(9.5).fillColor(black);
doc.text('Jenin, Palestine  |  +972 569 027 906  |  samiamarneh.11@gmail.com  |  ', { continued: true });
doc.fillColor(linkBlue).text('LinkedIn', { link: 'https://www.linkedin.com/in/sami-amarneh-7b19a1300/', underline: true });
doc.fillColor(black);

// Divider below contact info
const contactY = doc.y + 3;
doc.strokeColor(lineGrey).lineWidth(0.6).moveTo(doc.page.margins.left, contactY).lineTo(doc.page.width - doc.page.margins.right, contactY).stroke();
doc.y = contactY + 2;

// PROFESSIONAL SUMMARY
drawSectionHeader('PROFESSIONAL SUMMARY');
doc.font('Times-Roman').fontSize(9.5).fillColor(black).text(
  'Motivated Computer Engineering student with a strong foundation in software and web development. Experienced in building modern, production-grade web applications and delivering real-world freelance projects for small businesses. Strong ability to work in teams, support academic environments, and develop user-focused digital solutions. Continuously expanding skills in mobile and cloud-based development.',
  { align: 'left', lineGap: 2.5 }
);

// EXPERIENCE
drawSectionHeader('EXPERIENCE');

// Exp 1: Freelance
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Freelance Web Developer', { continued: true });
doc.font('Times-Roman').text(' — Self-employed, Palestine');
doc.moveDown(0.2);
drawBullet('Developed and delivered responsive websites for small businesses and local clients.');
drawBullet('Built modern web interfaces using React and web technologies.');
drawBullet('Worked on real-world projects based on client requirements, focusing on user experience, performance, and responsive design.');

doc.moveDown(0.3);

// Exp 2: Teaching Assistant
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Teaching Assistant – Web Programming Course', { continued: true });
doc.font('Times-Roman').text(' — Arab American University (with Asal Technologies), Jenin');
doc.moveDown(0.2);
drawBullet('Supported students in web development fundamentals, assisting with HTML, CSS, and JavaScript concepts.');
drawBullet('Guided student projects and assignments, and collaborated with the instructor on course progress.');

// PROJECTS
drawSectionHeader('PROJECTS');

// Project 1: Sara Shall
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Sara Shall – E-Commerce Platform');
doc.moveDown(0.2);
drawBullet('Built and launched Sara Shall, a high-performance production e-commerce platform that reached 12,000+ real users within hours of launch.');
drawBullet('Designed a scalable distributed architecture using Next.js, TypeScript, ASP.NET Core, PostgreSQL, and Redis/Valkey, optimized for high concurrency, fast response times, and reliable performance under heavy traffic.');
drawBullet('Live: ', { text: 'https://sara-shall.com/', url: 'https://sara-shall.com/' });

doc.moveDown(0.3);

// Project 2: Eva Dar
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Full-Stack Web System – Eva Dar Fashion (Jenin)');
doc.moveDown(0.2);
drawBullet('Developed a complete web-based system for a fashion store specializing in dress sales and rentals (team project).');
drawBullet('Built a fully functional business system for managing products and rentals, with features designed around real business requirements.');
drawBullet('Delivered a production-ready web solution, working collaboratively within a development team.');

doc.moveDown(0.3);

// Project 3: AAUP Bus Tracking
doc.font('Times-Bold').fontSize(10).fillColor(black).text('AAUP Bus Tracking & Reservation System', { continued: true });
doc.font('Times-Roman').text(' — Graduation Project, Arab American University');
doc.moveDown(0.2);
drawBullet('Developed a smart bus tracking and seat reservation system combining a Flutter mobile application with IoT hardware.');
drawBullet('Implemented real-time GPS tracking, passenger counting, trip management, and seat reservations.');
drawBullet('Integrated ESP32, 4G/GNSS, ToF sensors, and OBD2 to collect and transmit real-time bus data.');
drawBullet('Built with Flutter, Firebase/Firestore, Google Maps API, and real-time data services, supporting bus companies, drivers, routes, trips, and student transportation management.');
drawBullet('Live: ', { text: 'https://aaup-bus.netlify.app/', url: 'https://aaup-bus.netlify.app/' });

// SKILLS
drawSectionHeader('SKILLS');
doc.font('Times-Bold').fontSize(9.5).fillColor(black).text('Technical Skills: ', { continued: true });
doc.font('Times-Roman').text('C++, C#, Java, JavaScript, TypeScript, React, Next.js, HTML, CSS, ASP.NET Core, MVC, RESTful APIs, Flutter, Firebase, PostgreSQL, Redis/Valkey, Git, GitHub.', { lineGap: 2 });
doc.moveDown(0.2);
doc.font('Times-Bold').fontSize(9.5).fillColor(black).text('Soft Skills: ', { continued: true });
doc.font('Times-Roman').text('Teamwork & Communication, Time Management, Fast Learning & Adaptability, Attention to Detail, Leadership & Mentoring.');

// ----------------------------------------------------
// PAGE 2
// ----------------------------------------------------
doc.addPage();

// EDUCATION
drawSectionHeader('EDUCATION');

// Univ
const eduY1 = doc.y;
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Arab American University, Jenin', doc.page.margins.left, eduY1);
doc.font('Times-Italic').fontSize(9.5).fillColor(black).text('Expected 2026', doc.page.margins.left, eduY1, {
  align: 'right',
  width: doc.page.width - doc.page.margins.left - doc.page.margins.right
});
doc.font('Times-Roman').fontSize(9.5).fillColor(black).text('BSc in Computer Engineering', doc.page.margins.left);

doc.moveDown(0.4);

// School
const eduY2 = doc.y;
doc.font('Times-Bold').fontSize(10).fillColor(black).text('Izz Al-Din Al-Qassam Secondary School, Ya\'bad', doc.page.margins.left, eduY2);
doc.font('Times-Roman').fontSize(9.5).fillColor(black).text('2022', doc.page.margins.left, eduY2, {
  align: 'right',
  width: doc.page.width - doc.page.margins.left - doc.page.margins.right
});
doc.font('Times-Roman').fontSize(9.5).fillColor(black).text('Tawjihi – Scientific Stream', doc.page.margins.left);

// CERTIFICATES
drawSectionHeader('CERTIFICATES');
drawBullet('Front-End Web Development – Al-Maarefa Academy');
drawBullet('JavaScript Development Certificate – Al-Maarefa Academy');

// LANGUAGES
drawSectionHeader('LANGUAGES');
doc.font('Times-Roman').fontSize(9.5).fillColor(black).text('Arabic: Native  |  English: Proficient', doc.page.margins.left);

doc.end();

writeStream.on('finish', () => {
  // Also copy to dist if dist exists
  if (fs.existsSync(path.dirname(distPath))) {
    fs.copyFileSync(outputPath, distPath);
  }
  console.log('CV PDF generated accurately matching original document at ' + outputPath);
});
