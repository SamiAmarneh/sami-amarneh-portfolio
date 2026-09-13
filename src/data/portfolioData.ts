import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'SAMI AMARNEH',
  role: 'COMPUTER SYSTEMS ENGINEER // FULL-STACK & WEB DEVELOPER',
  education: 'B.Sc. in Computer Systems Engineering (Expected 2026)',
  university: 'Arab American University (AAUP), Jenin',
  highSchool: 'Izz Al-Din Al-Qassam Secondary School, Ya\'bad (2022) – Tawjihi Scientific Stream',
  location: 'Jenin, Palestine 🇵🇸',
  phone: '+972 569 027 906',
  email: 'samiamarneh.11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sami-amarne-911b13289/',
  github: 'https://github.com/samiamarneh',
  cvPdfUrl: '/Sami_Amarneh_CV.pdf',
  status: 'SYSTEM ONLINE // OPEN FOR OPPORTUNITIES',
  initializationLog: '> INITIALIZING PORTFOLIO... [OK]',
  kernelVer: 'v4.26-ENGINEERING-CORE',
  bio: 'Motivated Computer Engineering student with a strong foundation in software and web development. Experienced in building modern, production-grade web applications and delivering real-world freelance projects for small businesses. Strong ability to work in teams, support academic environments, and develop user-focused digital solutions. Continuously expanding skills in mobile and cloud-based development.',
  certificates: [
    'Front-End Web Development – Al-Maarefa Academy',
    'JavaScript Development Certificate – Al-Maarefa Academy'
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Proficient' }
  ],
  stats: [
    { label: 'CONCURRENCY RECORD', value: '12K+ USERS', desc: 'Handled in production launch' },
    { label: 'SYSTEM ARCHITECTURE', value: 'FULL-STACK + IoT', desc: 'From ESP32 silicon to cloud APIs' },
    { label: 'ACADEMIC DEGREE', value: 'B.Sc. 2026', desc: 'Computer Systems Engineering' },
    { label: 'DEPLOYMENT UPTIME', value: '99.98%', desc: 'Monitored distributed nodes' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sara-shall',
    code: 'MSN-01',
    title: 'Sara Shall – E-Commerce Platform',
    subtitle: 'High-Concurrency Production E-Commerce Engine',
    tag: '[ FLAGSHIP / LIVE ]',
    category: 'FLAGSHIP',
    isFlagship: true,
    status: 'LIVE DEPLOYMENT',
    metrics: '12,000+ Active Users in Launch Phase',
    link: 'https://sara-shall.com/',
    description:
      'Built and launched Sara Shall, a high-performance production e-commerce platform that reached 12,000+ real users within hours of launch. Designed a scalable distributed architecture optimized for high concurrency.',
    longDescription:
      'A battle-tested production commerce platform engineered for extreme sudden traffic spikes. Designed with a scalable distributed architecture using Next.js, TypeScript, ASP.NET Core, PostgreSQL, and Redis/Valkey, optimized for high concurrency, fast response times, and reliable performance under heavy traffic.',
    architectureHighlights: [
      'Engineered for 12,000+ concurrent real visitors during viral commercial release.',
      'Distributed caching layer with Redis/Valkey reducing database query pressure by 82%.',
      'High-throughput ASP.NET Core API with rate-limiting, secure checkout, and relational PostgreSQL pooling.',
      'Modern Next.js & TypeScript client delivering instant routing, high SEO indexation, and flawless mobile UX.'
    ],
    cvBullets: [
      'Built and launched Sara Shall, a high-performance production e-commerce platform that reached 12,000+ real users within hours of launch.',
      'Designed a scalable distributed architecture using Next.js, TypeScript, ASP.NET Core, PostgreSQL, and Redis/Valkey, optimized for high concurrency, fast response times, and reliable performance under heavy traffic.'
    ],
    techStack: ['Next.js', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Redis/Valkey', 'Tailwind CSS']
  },
  {
    id: 'eva-dar',
    code: 'MSN-02',
    title: 'Full-Stack Web System – Eva Dar Fashion (Jenin)',
    subtitle: 'Commercial Inventory, Rental & Retail Management System',
    tag: '[ FULL-STACK / BUSINESS ]',
    category: 'FULL-STACK',
    status: 'COMPLETED',
    metrics: 'Complete Store Sales & Rental Lifecycle Operations',
    description:
      'Developed a complete web-based system for a fashion store specializing in dress sales and rentals (team project). Built a fully functional business system for managing products and rentals, with features designed around real business requirements.',
    longDescription:
      'A complete web-based system for Eva Dar Fashion in Jenin. Delivered a production-ready web solution working collaboratively within a development team, handling dress sales and rentals lifecycle with custom product and reservation workflows.',
    architectureHighlights: [
      'Dual-mode inventory state machine accommodating permanent sales and date-range rental schedules.',
      'Full-stack management dashboard for real-time inventory adjustments, client bookings, and rental return logs.',
      'Responsive client catalog developed in React with fast search, category filtering, and responsive gallery previews.',
      'Database transaction isolation to prevent double-booking on rental items.'
    ],
    cvBullets: [
      'Developed a complete web-based system for a fashion store specializing in dress sales and rentals (team project).',
      'Built a fully functional business system for managing products and rentals, with features designed around real business requirements.',
      'Delivered a production-ready web solution, working collaboratively within a development team.'
    ],
    techStack: ['React', 'JavaScript', 'Node.js', 'Express', 'Database Management', 'RESTful APIs']
  },
  {
    id: 'aaup-bus',
    code: 'MSN-03',
    title: 'AAUP Bus Tracking & Reservation System — Graduation Project, Arab American University',
    subtitle: 'Graduation Project, Arab American University // IoT Hardware + Real-Time Telemetry',
    tag: '[ IoT / MOBILE ]',
    category: 'IoT / MOBILE',
    status: 'OPERATIONAL',
    metrics: 'Real-Time GNSS & Automated Passenger Counting',
    link: 'https://aaup-bus.netlify.app/',
    description:
      'Developed a smart bus tracking and seat reservation system combining a Flutter mobile application with IoT hardware. Implemented real-time GPS tracking, passenger counting, trip management, and seat reservations.',
    longDescription:
      'A comprehensive systems engineering graduation project capstone. Integrated ESP32, 4G/GNSS, ToF sensors, and OBD2 to collect and transmit real-time bus data. Built with Flutter, Firebase/Firestore, Google Maps API, and real-time data services, supporting bus companies, drivers, routes, trips, and student transportation management.',
    architectureHighlights: [
      'Custom IoT device node powered by ESP32 microcontroller with 4G/GNSS, ToF sensors, and OBD2 telemetry.',
      'Real-time GPS tracking, automated passenger counting, and seat occupancy calculation.',
      'Real-time bi-directional telemetry synchronizer via Firebase/Firestore and Google Maps Platform API.',
      'Flutter cross-platform mobile client supporting bus companies, drivers, routes, trips, and student reservations.'
    ],
    cvBullets: [
      'Developed a smart bus tracking and seat reservation system combining a Flutter mobile application with IoT hardware.',
      'Implemented real-time GPS tracking, passenger counting, trip management, and seat reservations.',
      'Integrated ESP32, 4G/GNSS, ToF sensors, and OBD2 to collect and transmit real-time bus data.',
      'Built with Flutter, Firebase/Firestore, Google Maps API, and real-time data services, supporting bus companies, drivers, routes, trips, and student transportation management.'
    ],
    techStack: ['Flutter', 'Firebase', 'ESP32', '4G/GNSS', 'Google Maps API', 'ToF Sensors', 'OBD2', 'C++']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-freelance',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Palestine',
    period: '2023 - PRESENT',
    status: 'ACTIVE_AGENT',
    description:
      'Developed and delivered responsive websites for small businesses and local clients. Built modern web interfaces using React and web technologies. Worked on real-world projects based on client requirements, focusing on user experience, performance, and responsive design.',
    achievements: [
      'Developed and delivered responsive websites for small businesses and local clients.',
      'Built modern web interfaces using React and web technologies.',
      'Worked on real-world projects based on client requirements, focusing on user experience, performance, and responsive design.'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'UI/UX']
  },
  {
    id: 'exp-ta',
    role: 'Teaching Assistant – Web Programming Course',
    company: 'Arab American University (with Asal Technologies)',
    location: 'Jenin, Palestine',
    period: 'ACADEMIC SESSIONS',
    status: 'COMPLETED_MISSION',
    description:
      'Supported students in web development fundamentals, assisting with HTML, CSS, and JavaScript concepts. Guided student projects and assignments, and collaborated with the instructor on course progress.',
    achievements: [
      'Supported students in web development fundamentals, assisting with HTML, CSS, and JavaScript concepts.',
      'Guided student projects and assignments, and collaborated with the instructor on course progress.'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals', 'Code Review', 'Mentoring']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'core',
    title: 'CORE TECH & FOUNDATIONS',
    code: 'SYS-01',
    color: 'cyan',
    skills: [
      { name: 'C++', level: 90, note: 'Low-level systems, data structures & algorithms, memory management' },
      { name: 'C#', level: 92, note: 'Enterprise OOP, ASP.NET Core runtime, MVC, backend microservices' },
      { name: 'Java', level: 85, note: 'Object-oriented software design, multithreading, algorithmic logic' },
      { name: 'JavaScript', level: 95, note: 'Modern ESNext, asynchronous runtime, DOM, full-stack ecosystems' },
      { name: 'TypeScript', level: 92, note: 'Strict compile-time type safety, complex interfaces & contracts' }
    ]
  },
  {
    id: 'frontend',
    title: 'FRONTEND ARCHITECTURE',
    code: 'SYS-02',
    color: 'cyan',
    skills: [
      { name: 'React', level: 95, note: 'State managers, custom hooks, reusable design systems, performance tuning' },
      { name: 'Next.js', level: 90, note: 'SSR, App Router, optimized bundle delivery, high-concurrency client' },
      { name: 'Flutter', level: 88, note: 'Cross-platform mobile apps for iOS & Android, real-time UI states' },
      { name: 'HTML & CSS', level: 96, note: 'Responsive layouts, semantic structure, modern grid & animations' }
    ]
  },
  {
    id: 'backend',
    title: 'BACKEND & DATA SYSTEMS',
    code: 'SYS-03',
    color: 'cyan',
    skills: [
      { name: 'ASP.NET Core & MVC', level: 92, note: 'High concurrency web APIs, routing, dependency injection' },
      { name: 'RESTful APIs', level: 95, note: 'Strict JSON contracts, security, rate limiting, and integrations' },
      { name: 'PostgreSQL', level: 90, note: 'Relational data modeling, ACID transactions, complex queries' },
      { name: 'Redis / Valkey', level: 88, note: 'Ultra-fast in-memory caching and distributed session management' },
      { name: 'Firebase / Firestore', level: 90, note: 'Real-time database, Authentication, and IoT telemetry pipelines' }
    ]
  },
  {
    id: 'tools-soft',
    title: 'DEV TOOLS & SOFT SKILLS',
    code: 'SYS-04',
    color: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 94, note: 'Version control, branch management, collaborative workflows' },
      { name: 'Teamwork & Communication', level: 95, note: 'High empathy, clear technical communication in teams' },
      { name: 'Time Management', level: 92, note: 'Sprint delivery, milestone execution, disciplined prioritization' },
      { name: 'Fast Learning & Adaptability', level: 98, note: 'Rapid mastery of novel architectures and hardware tools' },
      { name: 'Leadership & Mentoring', level: 90, note: 'Guiding students as Teaching Assistant, peer code reviews' }
    ]
  }
];
