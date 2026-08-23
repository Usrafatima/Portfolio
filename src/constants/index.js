const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Education",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "AI Agents", imgPath: "/images/concepts.svg" },
  { text: "LLMs", imgPath: "/images/ideas.svg" },
  { text: "Automation", imgPath: "/images/designs.svg" },
  { text: "RAG", imgPath: "/images/code.svg" },
  { text: "AI Systems", imgPath: "/images/ideas.svg" },
  { text: "Vector Search", imgPath: "/images/concepts.svg" },
  { text: "Multi-Agent", imgPath: "/images/designs.svg" },
  { text: "Intelligence", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "AI Products Built" },
  { value: 10, suffix: "+", label: "Models / APIs Used" },
  { value: 15, suffix: "+", label: "Tech Stack Tools" },
  { value: 24, suffix: "/7", label: "Building & Learning" },
];

const logoIconsList = [
  {
    imgPath: "https://api.iconify.design/logos:openai-icon.svg?color=%23ffffff",
    name: "OpenAI",
  },
  {
    imgPath: "/images/logos/gemini-text.svg",
    name: "Gemini",
  },
  {
    imgPath: "/images/logos/claude-text.svg",
    name: "Claude",
  },
  {
    imgPath: "https://cdn.simpleicons.org/huggingface/FFD21E",
    name: "Hugging Face",
  },
  {
    imgPath: "https://cdn.simpleicons.org/langchain/white",
    name: "LangChain",
  },
  {
    imgPath: "https://cdn.simpleicons.org/tensorflow/FF6F00",
    name: "TensorFlow",
  },
  {
    imgPath: "https://cdn.simpleicons.org/pytorch/EE4C2C",
    name: "PyTorch",
  },
  {
    imgPath: "https://cdn.simpleicons.org/fastapi/05998B",
    name: "FastAPI",
  },
  {
    imgPath: "https://cdn.simpleicons.org/nvidia/76B900",
    name: "NVIDIA",
  },
  {
    imgPath: "https://cdn.simpleicons.org/python/3776AB",
    name: "Python",
  },
  {
    imgPath: "https://cdn.simpleicons.org/docker/2496ED",
    name: "Docker",
  },
  {
    imgPath: "https://cdn.simpleicons.org/nextdotjs/white",
    name: "Next.js",
  },
  {
    imgPath: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    name: "Tailwind CSS",
  },
  {
    imgPath: "https://cdn.simpleicons.org/typescript/3178C6",
    name: "TypeScript",
  },
  {
    imgPath: "https://cdn.simpleicons.org/git/F05032",
    name: "Git",
  },
  {
    imgPath: "https://cdn.simpleicons.org/githubcopilot/white",
    name: "GitHub Copilot",
  },
  {
    imgPath: "https://cdn.simpleicons.org/react/61DAFB",
    name: "React",
  },
  {
    imgPath: "https://cdn.simpleicons.org/nodedotjs/339933",
    name: "Node.js",
  },
  {
    imgPath: "https://cdn.simpleicons.org/threedotjs/white",
    name: "Three.js",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const educationCards = [
  {
    review: "I consistently work on understanding advanced AI concepts and applying them in real-world projects. My progress at GIAIC highlights my commitment and growing expertise in AI Engineering.",
    imgPath: "/images/logos/giaic-logo.png",
    logoPath: "/images/logos/giaic-logo.png",
    title: "AI Engineering Student",
    date: "February 2023 - Present",
    responsibilities: [
      "Actively training in Generative AI, LLMs, and Agentic Workflows at GIAIC.",
      "Developing end-to-end software solutions with a focus on practical execution and modern tech stacks.",
      "Building and deploying real-world projects while maintaining a high academic standard.",
    ],
  },
  {
  review: "Currently pursuing a BS in Statistics with Finance at Federal Urdu University, I am developing strong analytical and research skills through practical work using statistical tools and methodologies.",
  imgPath: "/images/logos/fuaast.png",
  logoPath: "/images/logos/fuaast.png",
  title: "BS Statistics with Finance",
  date: "Federal Urdu University of Arts, Science & Technology | 2023 - Present",
  responsibilities: [
    "Performing statistical analysis using SPSS, Minitab, and EViews for academic projects.",
    "Applying concepts such as hypothesis testing, regression analysis, and data interpretation.",
    "Working with real-world datasets to extract insights and support data-driven decision making.",
  ],
},
];

const experienceCards = [
  {
    review: "Led AI-focused development initiatives at CodeClix, contributing to full-stack web applications while coordinating team tasks, implementing AI features, and collaborating with developers to deliver project milestones.",
    imgPath: "/images/celix.png",
    logoPath: "/images/celix.png",
    title: "AI Team Lead Intern — CodeCelix",
    date: "Internship | June - Sep 2026",
    responsibilities: [
      "Led the development team in planning, implementing, and delivering project features.",
      "Developed AI-powered application features using modern web technologies and AI APIs.",
      "Coordinated tasks, reviewed contributions, and supported team members with debugging and technical issues.",
      "Collaborated with team members to improve application functionality, performance, and user experience.",
    ],
  },
  {
    review: "Completed a one-month internship in social media management, where I gained hands-on experience in content creation, audience engagement, and digital branding.",
    imgPath: "https://api.iconify.design/mdi:bullhorn.svg?color=%23ffffff",
    logoPath: "https://api.iconify.design/mdi:bullhorn.svg?color=%23ffffff",
    title: "Social Media Intern",
    date: "1 Month Internship | 2025",
    responsibilities: [
      "Created and scheduled social media content to improve engagement and reach.",
      "Assisted in managing social media platforms and responding to audience interactions.",
      "Analyzed basic performance metrics to understand content effectiveness.",
    ],
  },
];

const expLogos = [
  {
    name: "GIAIC",
    imgPath: "/images/logos/giaic-logo.png",
  },
  {
    name: "FUUAST",
    imgPath: "/images/logos/fuuast-logo.png",
  },
  {
    name: "Projects",
    imgPath: "/images/logos/company-logo-1.png",
  },
];

const testimonials = [
  {
    name: "GIAIC Mentor",
    mentions: "@giaic_official",
    review:
      "Yusra is one of our most dedicated students. Her progress in AI Engineering and her ability to turn theory into high-quality code is truly impressive.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Tech Lead",
    mentions: "@lead_dev",
    review:
      "I’ve seen Yusra’s work on various AI projects. Her understanding of modern LLM pipelines and RAG systems is far beyond her years. She is ready for the professional world.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Project Partner",
    mentions: "@dev_collab",
    review:
      "Collaborating with Yusra was seamless. She brings energy, technical expertise, and a result-oriented mindset to every build. A very promising developer.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Academic Supervisor",
    mentions: "@university",
    review:
      "Yusra stands out in her cohort. Her 7th-semester projects demonstrate a deep understanding of software engineering and a passion for modern technology.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Client Feedback",
    mentions: "@upwork",
    review:
      "Professional, fast, and highly skilled. Yusra delivered a complex AI-powered frontend that exceeded our expectations. Highly recommended!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Hackathon Judge",
    mentions: "@ai_hack",
    review:
      "Yusra’s team built one of the most innovative AI solutions I’ve seen. Her ability to execute under pressure and deliver a working prototype was stellar.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "github",
    imgPath: "https://cdn.simpleicons.org/github/white",
    link: "https://github.com/Usrafatima",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/yusra-fatima-245967366/",
  },
]

const aiSystemSkills = [
  {
    name: "Backend Development",
    skills: ["FastAPI", "Python", "Node.js / Express", "REST API Development"],
    status: "ACTIVE",
    subtext: "optimizing server-side logic...",
    color: "green",
  },
  {
    name: "Frontend Development",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "DEPLOYED",
    subtext: "rendering user interfaces...",
    color: "blue",
  },
  {
    name: "AI & Automation",
    skills: ["Google Gemini", "Groq / LLM APIs", "LangChain", "Prompt Engineering", "AI Agents & Automation"],
    status: "TRAINING",
    subtext: "processing neural patterns...",
    color: "yellow",
  },
  {
    name: "AI Tools & Models",
    skills: ["Claude", "OpenAI / Codex", "Gemini", "Grok", "AI Coding Agents", "LLM APIs"],
    status: "CONNECTED",
    subtext: "loading model configs...",
    color: "cyan",
  },
  {
    name: "APIs & Integrations",
    skills: ["REST APIs", "Firebase", "Google OAuth", "Third-Party API Integration", "n8n Automation"],
    status: "CONNECTED",
    subtext: "bridging external systems...",
    color: "cyan",
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Database Design", "Data Modeling"],
    status: "STABLE",
    subtext: "structuring persistent data...",
    color: "purple",
  },
  {
    name: "Cloud & Deployment",
    skills: ["Docker", "Vercel", "Netlify", "GitHub Actions", "CI/CD"],
    status: "STABLE",
    subtext: "containerizing environments...",
    color: "green",
  },
  {
    name: "AI Infrastructure",
    skills: ["Qdrant", "RAG", "Vector Search", "Embeddings"],
    status: "RUNNING",
    subtext: "managing vector stores...",
    color: "cyan",
  },
  {
    name: "System Design & Engineering",
    skills: ["Multi-Agent Systems", "Workflow Automation", "Full-Stack Architecture", "Error Handling & Debugging"],
    status: "ACTIVE",
    subtext: "architecting solutions...",
    color: "purple",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  educationCards,
  experienceCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  aiSystemSkills,
};
