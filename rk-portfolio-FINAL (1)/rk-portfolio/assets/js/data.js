/* ═══════════════════════════════════════
   DATA.JS — All Portfolio Data
   Single source of truth
═══════════════════════════════════════ */
window.RK = {};

/* ── SKILLS ─────────────────────────── */
RK.skills = [
  {
    cat: "Core Civil / Structural",
    skills: [
      {n:"Structural Analysis",c:"o"},{n:"Concrete Technology",c:"o"},
      {n:"IS Codes (800/456/875/1893)",c:"o"},{n:"ASCE 7-16",c:"o"},
      {n:"Load Calculations",c:"o"},{n:"Estimation & BOQ",c:"o"},
      {n:"Geotechnical Investigation",c:"o"},{n:"Urban Planning",c:"o"},
    ],
    level: 85, levelLabel: "Advanced", domain: "Engineering"
  },
  {
    cat: "Civil CAD & BIM",
    skills: [
      {n:"AutoCAD",c:"c"},{n:"Revit",c:"c"},{n:"Tekla Structures",c:"c"},
      {n:"ArcGIS",c:"c"},{n:"MS Project",c:"c"},
    ],
    level: 80, levelLabel: "Proficient", domain: "Civil IT"
  },
  {
    cat: "Programming & Dev",
    skills: [
      {n:"Python",c:"c"},{n:"C / C++",c:"c"},{n:"HTML",c:"c"},
      {n:"CSS",c:"c"},{n:"JavaScript",c:"c"},{n:"React & Vite",c:"g"},
      {n:"Full Stack",c:"g"},{n:"MIT App Inventor",c:"c"},
    ],
    level: 72, levelLabel: "Intermediate", domain: "IT"
  },
  {
    cat: "Office & Design",
    skills: [
      {n:"MS Word",c:""},{n:"MS PowerPoint",c:""},{n:"MS Project",c:""},
      {n:"Canva",c:"p"},{n:"Photoshop",c:"p"},
      {n:"UI/UX Design",c:"p"},{n:"Excel Automation",c:""},
    ],
    level: 78, levelLabel: "Proficient", domain: "Design / IT"
  },
  {
    cat: "Soft Skills",
    skills: [
      {n:"Leadership",c:"g"},{n:"Project Management",c:"g"},
      {n:"Teamwork",c:"g"},{n:"Time Management",c:"g"},
      {n:"Communication",c:"g"},{n:"Event Coordination",c:"g"},
      {n:"Problem Solving",c:"g"},
    ],
    level: 92, levelLabel: "Expert", domain: "General"
  },
  {
    cat: "Research & Certifications",
    skills: [
      {n:"Concrete Materials Research",c:"p"},{n:"Geospatial Tech",c:"p"},
      {n:"Stock Market Analysis",c:"p"},{n:"Cyber Security",c:"p"},
      {n:"App Development",c:"p"},
    ],
    level: 65, levelLabel: "Developing", domain: "Research"
  },
];

/* ── PROJECTS ─────────────────────────
   NO DUPLICATES — each project once only
   Sources: WordPress blog + resumes
────────────────────────────────────── */
RK.projects = [
  /* CIVIL */
  {
    id: "c1", cat: "civil",
    num: "CIVIL // 01",
    title: "Self-Healing Concrete",
    desc: "Investigated bacteria-based autonomous crack-repair mechanisms in concrete. Experimental study on compressive strength recovery and crack-width closure using Bacillus subtilis. Presented at KPR College, Coimbatore.",
    tags: ["Concrete","Materials Research","Structural","Bacteria"],
    link: "https://kprcas.ac.in", linkText: "KPR College ↗"
  },
  {
    id: "c2", cat: "civil",
    num: "CIVIL // 02",
    title: "E-Waste as Partial Replacement in Concrete",
    desc: "Research on using electronic waste (PCB fragments, shredded e-waste) as partial aggregate replacement in concrete mix. Study on workability, compressive strength and sustainability metrics.",
    tags: ["E-Waste","Sustainability","Concrete","Research"],
    link: "https://gmrit.edu.in", linkText: "AI-PITS 2024 ↗"
  },
  {
    id: "c3", cat: "civil",
    num: "CIVIL // 03",
    title: "Coconut Fibre in Concrete for Sustainability",
    desc: "Research on using coconut fibre as natural fibre reinforcement in concrete to enhance tensile strength, crack resistance and reduce carbon footprint. From WordPress blog (Core section).",
    tags: ["Natural Fibre","Sustainability","Concrete","Green Building"],
    link: "https://ranjithkumar67.wordpress.com/CORE/", linkText: "Blog ↗"
  },
  {
    id: "c4", cat: "civil",
    num: "CIVIL // 04",
    title: "Complex Building — Planning, Analysis, Design & Estimation",
    desc: "End-to-end design project: architectural planning, structural analysis to IS codes, detailed design of beams/columns/slabs, and complete BOQ cost estimation for a multi-storey complex building.",
    tags: ["IS Codes","Structural Design","AutoCAD","Estimation","BOQ"],
    link: "https://www.kongu.ac.in", linkText: "KEC Project ↗"
  },
  {
    id: "c5", cat: "civil",
    num: "CIVIL // 05",
    title: "Soil Testing — Hospital Construction, Namakkal",
    desc: "Real-world geotechnical investigation for a hospital site in Namakkal (2023). Tests included bearing capacity, moisture content, sieve analysis and settlement prediction for foundation design.",
    tags: ["Geotechnical","Field Work","Site Investigation","Soil Analysis"],
    link: "#", linkText: "Field Project"
  },
  /* IT / SOFTWARE */
  {
    id: "s1", cat: "it",
    num: "SOFTWARE // 01",
    title: "Battery Management App",
    desc: "Mobile application built using MIT App Inventor & scripting. Monitors battery health, usage patterns, charge cycles. Presented at KEC Ideathon. From WordPress Software page.",
    tags: ["MIT App Inventor","Mobile App","Battery","IoT"],
    link: "https://ranjithkumar67.wordpress.com/software/", linkText: "Blog ↗"
  },
  {
    id: "s2", cat: "it",
    num: "SOFTWARE // 02",
    title: "Smart Attendance Recorder",
    desc: "QR-code-based attendance system built using MIT App Inventor & scripting. Automates student attendance tracking, generates real-time reports and stores data in structured format. KEC Ideathon.",
    tags: ["QR Code","MIT App Inventor","Attendance","Automation"],
    link: "https://www.kongu.ac.in", linkText: "KEC Ideathon ↗"
  },
  {
    id: "s3", cat: "it",
    num: "SOFTWARE // 03",
    title: "Calculator App",
    desc: "Feature-complete calculator application built using MIT App Inventor & scripting, handling arithmetic, history log and adaptive UI. Part of KEC software development series.",
    tags: ["MIT App Inventor","Mobile App","Calculator","UI/UX"],
    link: "https://ranjithkumar67.wordpress.com/software/", linkText: "Blog ↗"
  },
  /* AI / TOOLS */
  {
    id: "a1", cat: "ai",
    num: "AI-TOOL // 01",
    title: "Multi-Role Professional Activity Tracker",
    desc: "Complete 6-sheet Excel workbook for Engineering + IT professionals. Features KPI dashboard, DailyLog (450 live formulas), LearningLog, Engineering Codes reference, Weekly Auto-Review, VBA macros. Zero formula errors.",
    tags: ["Excel","VBA","SUMPRODUCT","TEXTJOIN","COUNTIFS","Automation"],
    link: "#", linkText: "Download Tool"
  },
  {
    id: "a2", cat: "ai",
    num: "AI-TOOL // 02",
    title: "Portfolio Website v1 — Editorial Theme",
    desc: "First professional portfolio — warm editorial design (Syne + DM Sans), scroll-reveal animations, KPI hero stats, engineering code support badges, monthly review dashboard. Single-file HTML/CSS/JS.",
    tags: ["HTML","CSS","JS","Portfolio","Syne Font","Animations"],
    link: "#", linkText: "View v1"
  },
  {
    id: "a3", cat: "ai",
    num: "AI-TOOL // 03",
    title: "Futuristic Portfolio v2 (This Site)",
    desc: "This portfolio — Orbitron + Rajdhani futuristic theme, dark/light toggle, project category tabs, skills table, research section, timeline, Google Form contact, source code protection. Deployable on Vercel/Netlify.",
    tags: ["HTML","CSS","JS","Dark/Light","Animations","Source Protection"],
    link: "#", linkText: "You Are Here"
  },
  /* GENERAL */
  {
    id: "g1", cat: "general",
    num: "GENERAL // 01",
    title: "VISTA'23 — National Paper Presentation Event",
    desc: "Organized and coordinated national-level technical paper presentation. Managed registrations, judging panels, scheduling and certificates for 100+ participants across institutions.",
    tags: ["Event Management","ISTE","Leadership","Coordination"],
    link: "https://www.kongu.ac.in", linkText: "KEC Events ↗"
  },
  {
    id: "g2", cat: "general",
    num: "GENERAL // 02",
    title: "CEANS'24 — National Brick Modelling Event",
    desc: "Led organization of national-level brick modelling competition — theme design, judging criteria, venue logistics and documentation for students across Tamil Nadu.",
    tags: ["Leadership","Civil Events","ISTE","Brick Modelling"],
    link: "https://www.kongu.ac.in", linkText: "KEC ↗"
  },
  {
    id: "g3", cat: "general",
    num: "GENERAL // 03",
    title: "AVENTURO'24 — Coding & Treasure Hunt",
    desc: "National-level inter-college event — designed coding challenges, clue-based treasure hunt and managed multi-team logistics for 200+ students from across Tamil Nadu.",
    tags: ["Coding Event","Gamification","Coordination","Multi-team"],
    link: "https://www.kongu.ac.in", linkText: "KEC ↗"
  },
  /* PERSONAL */
  {
    id: "p1", cat: "personal", personal: true,
    num: "PERSONAL // 01",
    title: "WordPress Blog — ranjithkumar67",
    desc: "",
    tags: [],
    link: "https://ranjithkumar67.wordpress.com", linkText: "Visit Blog ↗"
  },
  {
    id: "p2", cat: "personal", personal: true,
    num: "PERSONAL // 02",
    title: "LinkedIn Profile",
    desc: "",
    tags: [],
    link: "https://in.linkedin.com/in/ranjithkumar-rajendran-b62a6024b", linkText: "View LinkedIn ↗"
  },
  {
    id: "p3", cat: "personal", personal: true,
    num: "PERSONAL // 03",
    title: "IISc Bangalore — Research Internship Selection",
    desc: "",
    tags: [],
    link: "https://iisc.ac.in", linkText: "IISc Bangalore ↗"
  },
  {
    id: "p4", cat: "personal", personal: true,
    num: "PERSONAL // 04",
    title: "Air Brick Infra — Interior Designing, Delhi",
    desc: "",
    tags: [],
    link: "#", linkText: "Company"
  },
];

/* ── RESEARCH PAPERS ─────────────────── */
RK.papers = [
  {
    type: "Conference Paper · 2024",
    title: "E-Waste as Partial Replacement in Concrete",
    venue: "GMRIT — AI-PITS 2024 International Conference, Rajam\nAlso presented at KEC, Erode",
    badge: "AI-PITS 2024"
  },
  {
    type: "Paper Presented · 2023",
    title: "Self-Healing Concrete — Bacterial Crack Repair",
    venue: "KPR College of Engineering, Coimbatore\nNational Level Symposium",
    badge: "KPR Symposium"
  },
  {
    type: "Research Work · 2024",
    title: "Usage of Coconut Fibre in Concrete for Sustainability",
    venue: "Kongu Engineering College, Erode\nDepartment Research Work",
    badge: "KEC Research"
  },
];

/* ── RESEARCH AREAS ──────────────────── */
RK.resAreas = [
  { area:"Self-Healing Concrete",      domain:"Civil / Materials",     focus:"Bacteria-induced CaCO₃ precipitate for autonomous crack sealing",  status:"Published",  sc:"g" },
  { area:"E-Waste in Concrete",         domain:"Civil / Sustainability", focus:"Electronic waste as partial aggregate for strength & sustainability",status:"Published",  sc:"g" },
  { area:"Coconut Fibre in Concrete",   domain:"Civil / Green Build",   focus:"Natural fibre reinforcement for tensile strength & carbon reduction", status:"Published",  sc:"g" },
  { area:"Advanced Geospatial Tech",    domain:"Civil / GIS",           focus:"ArcGIS applications in site planning, disaster mapping & urban analysis",status:"Certified",sc:"c" },
  { area:"Structural Analysis Automation",domain:"Civil / IT",          focus:"Python + automation for batch structural post-processing",            status:"Ongoing",    sc:"o" },
  { area:"AI/ML in Civil Engineering",  domain:"Civil / AI",            focus:"Machine learning for structural health monitoring & failure prediction",status:"Exploring", sc:"o" },
  { area:"App Development",             domain:"IT",                    focus:"MIT App Inventor, Python scripting for mobile applications",           status:"Active",     sc:"c" },
  { area:"Cyber Security",              domain:"IT / Security",         focus:"Major cyber security incidents — Harvard / Open Learn certified",       status:"Certified",  sc:"c" },
];

/* ── TIMELINE ─────────────────────────── */
RK.timeline = [
  { period:"2024 – 2025", role:"Chairperson — ISTE KEC Students Chapter", org:"Indian Society for Technical Education · Kongu Engineering College, Erode" },
  { period:"2023 – 2025", role:"Treasurer — ISTE KEC Students Chapter",   org:"Managed chapter finances, event budgets and fund allocation" },
  { period:"2022 – 2025", role:"Department Coordinator — ISTE",            org:"Indian Society for Technical Education — 3 continuous years of service" },
  { period:"2022 – 2024", role:"Executive Member — Civil Engineering Association", org:"Kongu Engineering College · Organized department events and industry interactions" },
  { period:"2023",        role:"Field Investigator — Soil Testing, Namakkal", org:"Real-world geotechnical investigation for hospital construction project" },
  { period:"VISTA'23",   role:"Organiser — National Paper Presentation",   org:"Coordinated 100+ participants across institutions" },
  { period:"CEANS'24",   role:"Organiser — National Brick Modelling Event", org:"Designed event format, judging criteria and logistics" },
  { period:"AVENTURO'24",role:"Coordinator — National Coding & Treasure Hunt", org:"Created coding challenges and managed 200+ student multi-team event" },
];

/* ── EDUCATION ─────────────────────────── */
RK.edu = [
  { yr:"2021 – 2025", inst:"Kongu Engineering College", deg:"B.E. Civil Engineering · Erode, Tamil Nadu", score:"7.59", scoreUnit:"CGPA" },
  { yr:"2021",        inst:"SKV Matric Hr. Sec. School", deg:"HSC — Class XII · Namakkal", score:"89.18", scoreUnit:"%" },
  { yr:"2019",        inst:"SKV Matric Hr. Sec. School", deg:"SSLC — Class X · Namakkal",  score:"86.2",  scoreUnit:"%" },
];

/* ── CERTIFICATIONS ─────────────────────── */
RK.certs = [
  { icon:"🐍", name:"Python Programming",           by:"IIT Madras & GUVI" },
  { icon:"🔐", name:"Major Cyber Security Incidents",by:"Open Learn University & Harvard University" },
  { icon:"🛰", name:"Advanced Geospatial Technology",by:"Certification Course" },
  { icon:"📈", name:"Analysis of Stock Market",      by:"Certification Course" },
  { icon:"🏆", name:"2nd Prize — Technical Quiz",    by:"Technovanza 2K23 · Shree Venkateshwara Hi-Tech Engineering College" },
  { icon:"🔬", name:"IISc Bangalore — Research Selected", by:"Selected & Waitlisted · Indian Institute of Science, Bangalore" },
  { icon:"🏙", name:"Air Brick Infra — Internship Selected", by:"Interior Designing & Sales · New Delhi" },
  { icon:"📱", name:"App Development — MIT App Inventor", by:"Battery Monitor · Smart Attendance · Calculator Apps" },
];

/* ── CONTACT LINKS ─────────────────────── */
RK.contactLinks = [
  { type:"Phone",    val:"+91 9597928987",                          href:"tel:+919597928987" },
  { type:"WhatsApp", val:"wa.me/+919597928987",                     href:"https://wa.me/+919597928987" },
  { type:"Email",    val:"ranjithrajendran2510@gmail.com",           href:"mailto:ranjithrajendran2510@gmail.com" },
  { type:"LinkedIn", val:"ranjithkumar-rajendran-b62a6024b",        href:"https://in.linkedin.com/in/ranjithkumar-rajendran-b62a6024b" },
  { type:"Blog",     val:"ranjithkumar67.wordpress.com",             href:"https://ranjithkumar67.wordpress.com" },
  { type:"Location", val:"Namakkal, Tamil Nadu · Open to Relocation",href:"#" },
];
