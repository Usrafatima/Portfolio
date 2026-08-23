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

const projectsData = [
  {
    id: 1,
    title: "Black Swan",
    subtitle: "AI-Powered Financial Market Intelligence & Risk Analysis Platform",
    achievement: "🏆 Honourable Mention — Qdrant Hackathon 2026",
    isBlackSwan: true,
    blog: "https://qdrant.tech/blog/vector-space-hackathon-winners-2026/#black-swan-yusra",
    desc: "An AI-powered financial intelligence platform that analyzes market data, detects unusual patterns, and provides context-aware insights using advanced AI and vector search.",
    fullDesc: "Black Swan is an AI-powered financial market intelligence platform built to identify and analyze unusual market events and potential black swan scenarios. The system combines financial data with AI-powered reasoning and semantic search to help users understand market movements, risks, and emerging anomalies. Qdrant Vector Database powers the semantic search and retrieval layer, while FastAPI provides the backend and Next.js, React, and Tailwind CSS power the frontend. The project was selected for an Honourable Mention at the Qdrant Hackathon 2026, recognizing its use of vector search and AI to address financial intelligence and risk analysis.",
    image: "/images/swan.png",
    tags: [
      "🏆 Qdrant Hackathon — Honourable Mention",
      "AI",
      "Qdrant Vector DB",
      "FastAPI",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Financial Analytics",
      "RAG",
      "Semantic Search",
    ],
    link: "https://lnkd.in/p/dDaxY8Z2",
    liveDemo: "https://lnkd.in/p/dDaxY8Z2",
    github: "https://github.com/Usrafatima/black-swan",
    linkedin: "https://lnkd.in/p/dDaxY8Z2",
  },
  {
    id: 2,
    title: "Nexa Support",
    subtitle: "AI-Powered Multi-Channel Customer Support System",
    desc: "AI-powered multi-channel customer support with smart automation and escalation",
    fullDesc: "Nexa Support is an AI-powered 24/7 customer support platform developed for Hackathon 5 that automates customer queries across Email, WhatsApp, and Web Forms. It acts as a virtual support agent that converts user queries into tickets, generates intelligent responses using Google Gemini 2.5 Flash, and resolves over 85% of issues automatically while escalating complex cases to human agents. The system ensures fast response times, efficient ticket management, and seamless multi-channel communication, making it a scalable and cost-effective solution for modern support systems.",
    image: "/images/nexa.png",
    tags: ["FastAPI", "Python", "Nextjs", "PostgreSQL", "Kafka", "Gemini", "Meta API", "Docker", "Kubernetes"],
    link: "https://www.linkedin.com/posts/yusra-fatima-245967366_nexa-support-hackathon-5-project-nexa-support-ugcPost-7439130898689699840-Zc4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
    liveDemo: null,
    github: null,
    linkedin: "https://www.linkedin.com/posts/yusra-fatima-245967366_nexa-support-hackathon-5-project-nexa-support-ugcPost-7439130898689699840-Zc4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
  },
  {
    id: 3,
    title: "Session X",
    subtitle: "Smart Global Market Sessions & Trading Intelligence Platform",
    desc: "A real-time trading intelligence platform that helps traders track global market sessions, ICT Kill Zones, market overlaps, and weekly candle openings across different time zones.",
    fullDesc: "Session X is a smart trading intelligence platform designed to help traders monitor global financial market sessions from a single interface. It provides real-time clocks for major trading markets, including New York, London, Tokyo, and Sydney, while automatically handling time-zone differences and daylight saving time. The platform also highlights ICT Kill Zones, session overlaps, market open and close times, and weekly FX candle openings. An intelligent notification system provides timely alerts for important trading events, with Firebase Cloud Messaging and PWA support enabling push notifications across devices. The application was built with Next.js, React, TypeScript, and Tailwind CSS, with Firebase used for notifications and backend services and Twelve Data integrated for market data.",
    image: "/images/session.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "FCM Push Notifications",
      "PWA",
      "Twelve Data API",
      "Trading Sessions",
      "ICT Kill Zones",
    ],
    link: "https://sessionx-trading.vercel.app/",
    liveDemo: "https://sessionx-trading.vercel.app/",
    github: "https://github.com/Usrafatima/SessionX",
    linkedin: null,
  },
  {
    id: 4,
    title: "Marvel Saga",
    subtitle: "Interactive Marvel Cinematic Universe Discovery Platform",
    desc: "A full-featured Marvel fan platform with authentication, interactive quizzes, MCU timelines, movie discovery, and Marvel news — bringing the entire Marvel experience into one interactive web application.",
    fullDesc: "Marvel Saga is an interactive web platform built for Marvel fans to explore the Marvel Cinematic Universe in one place. The platform includes user authentication and login functionality, allowing users to access the application's personalized features. Users can explore Marvel movies and upcoming releases, read Marvel-related blogs and news, test their knowledge through interactive quizzes, and navigate the MCU through a chronological timeline. The project combines modern frontend development with authentication, responsive UI design, structured content management, and interactive user experiences to create a complete Marvel-focused entertainment platform.",
    image: "/images/marvel.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Authentication",
      "Interactive Quiz",
      "MCU Timeline",
      "Marvel Movies",
      "Blog Platform",
      "Responsive Design",
    ],
    link: "https://marvel-sagaa.vercel.app/",
    liveDemo: "https://marvel-sagaa.vercel.app/",
    github: "https://github.com/Usrafatima/MarvelSaga-blog",
    linkedin: null,
  },
  {
    id: 5,
    title: "Rescue Nest",
    subtitle: "AI-Powered Wildlife Rescue & Emergency Response Platform",
    desc: "An AI-powered platform designed to connect wildlife in need with rescuers, organizations, and communities through intelligent reporting, location-based coordination, and real-time emergency response.",
    fullDesc: "Rescue Nest is an AI-powered wildlife rescue and emergency response platform built to make reporting, locating, and coordinating wildlife rescues faster and more efficient. Users can report injured, endangered, or stranded animals, provide their location and relevant details, and connect with nearby rescuers or organizations. The platform features an interactive map for location-based rescue coordination and an AI-powered system to assist with animal identification, situation assessment, and rescue guidance. The frontend was developed using Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Leaflet, while the backend was built with FastAPI. Rescue Nest demonstrates practical experience in AI integration, geospatial technology, full-stack development, and technology-driven social impact.",
    image: "/images/rescue.png",
    tags: [
      "AI",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Leaflet",
      "Geolocation",
      "Wildlife Rescue",
    ],
    link: null,
    liveDemo: null,
    github: "https://github.com/Usrafatima/RescueNest",
    linkedin: null,
  },
  {
    id: 6,
    title: "TaskPilot",
    subtitle: "Cloud-Native Event-Driven Microservices Productivity Platform",
    desc: "A cloud-native productivity platform with microservices architecture, event-driven communication, and task automation.",
    fullDesc: "TaskPilot is a cloud-native productivity application that evolved from a monolithic FastAPI backend into a scalable microservices architecture. The system features task management with authentication (JWT and Google OAuth), and was refactored into independent services (task, audit, reminder, recurring) communicating through an event-driven architecture using Dapr and Kafka (Redpanda). The frontend was developed with Next.js and Tailwind CSS, while the backend leveraged FastAPI and SQLModel. The entire application was containerized with Docker and deployed on Kubernetes (Minikube for local development), demonstrating real-world skills in distributed systems, async communication, and cloud deployment.",
    image: "/images/taskpilot.png",
    tags: ["Gemini", "Vector DB", "FastAPI", "JWT, Google OAuth", "Kubernetes (Minikube, AKS/GKE ready)", "Docker, Docker Compose", "Kafka / Redpanda"],
    link: "https://task-pilot-inky.vercel.app/",
    liveDemo: "https://task-pilot-inky.vercel.app/",
    github: "https://github.com/Usrafatima/To-do-app/tree/main",
    linkedin: null,
  },
  {
    id: 7,
    title: "Autonomous 24/7 AI Workflow Automation Platform",
    subtitle: "24/7 AI-powered workflow automation system",
    desc: "An autonomous AI system that monitors, plans, and executes business tasks across multiple platforms with minimal human intervention.",
    fullDesc: "This project focuses on building an AI Employee that works 24/7 to automate core business workflows across platforms like Gmail, WhatsApp, and LinkedIn. It continuously monitors incoming data, understands tasks using an AI reasoning engine, and executes actions such as replying to emails, qualifying leads, scheduling meetings, and generating or posting content. The system includes a human-in-the-loop approval layer for sensitive operations, ensuring both automation and control, and runs on a scheduled cycle with zero manual intervention while maintaining detailed logs for transparency and tracking. By automating repetitive tasks, it significantly improves efficiency and allows greater focus on strategy and growth. The tech stack includes Python for core logic, FastAPI for backend and APIs, Playwright for browser automation, Gemini AI for reasoning and task understanding, Windows Task Scheduler for continuous execution, and Obsidian for logging and dashboard visualization.",
    image: "/images/post.png",
    tags: ["Python", "FastAPI", "Obsidian", "Gemini", "Playwright", "Windows Task Scheduler", "Automation"],
    link: "https://www.linkedin.com/posts/yusra-fatima-245967366_ai-automation-businessautomation-ugcPost-7433845662045061120-4pBu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
    liveDemo: null,
    github: null,
    linkedin: "https://www.linkedin.com/posts/yusra-fatima-245967366_ai-automation-businessautomation-ugcPost-7433845662045061120-4pBu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrpIpUB1208pyjyqz7Ly9_BYNFRuAZwnlg",
  },
  {
    id: 8,
    title: "Humanoid-Robot-Book",
    subtitle: "AI-Powered Content Creation",
    desc: "Generate entire books or high-quality long-form content from simple prompts.",
    fullDesc: "Physical AI & Humanoid Robotics is an interactive AI-powered learning platform designed to teach the fundamentals of embodied AI and robotics through a modern, hands-on approach. Built for a hackathon, the project transforms traditional static content into a dynamic learning experience by combining a structured curriculum with an intelligent RAG-based chatbot that provides real-time explanations, translations, and contextual assistance. The platform covers key topics such as sensors, control systems, ROS2, simulation environments, and Vision-Language-Action models, while also offering practical coding examples to reinforce learning. Developed using Next.js, React, and Tailwind CSS, and deployed on Vercel, it functions as a complete AI-native educational ecosystem that bridges the gap between theory and real-world robotics, making complex concepts more accessible, interactive, and engaging for learners.",
    image: "/images/humanoidbook.png",
    tags: ["LLMs", "Rag Chatbot", "API", "VectorDb", "Spec-Driven Development", "Gemini", "Nextjs", "Tailwind"],
    link: "https://humaoid-robot-book-q6en.vercel.app/",
    liveDemo: "https://humaoid-robot-book-q6en.vercel.app/",
    github: "https://github.com/Usrafatima/Humanoid-robot-book",
    linkedin: null,
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
  projectsData,
  projectsData as projects,
};

