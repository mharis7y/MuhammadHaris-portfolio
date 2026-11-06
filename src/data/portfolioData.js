export const personalInfo = {
  name: "Muhammad Haris",
  role: "React Native Developer",
  shortRole: "Software Engineer / React Native Developer",
  location: "Peshawar, Pakistan",
  email: "mharis7y@gmail.com",
  phone: "+92 3130437889",
  linkedin: "https://www.linkedin.com/in/mharis7y/",
  github: "https://github.com/mharis7y",
  resumeUrl: "/Muhammad_Haris_Resume.pdf",
};

export const heroData = {
  greeting: "Hi, I am",
  name: "Muhammad Haris",
  role: "React Native Developer",
  socials: [
    { name: "Email", icon: "email", url: "mailto:mharis7y@gmail.com" },
    { name: "GitHub", icon: "github", url: "https://github.com/mharis7y" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mharis7y/" },
  ],
  photo: "/images/hero-cutout.webp",
};

export const mobileLabData = {
  title: "REACT NATIVE",
  subtitle: "MOBILE ENGINEERING & ARCHITECTURE",
  badgeText: "RN",
  paragraph:
    "Specialized in architecting high-performance, cross-platform mobile applications with React Native, Expo, and native ecosystem integrations. Experienced across the full mobile stack—delivering reusable, responsive UI components with NativeWind, implementing persistent state architectures with Zustand and SQLite, and engineering secure real-time backends with Firebase Authentication, Cloud Firestore, and Appwrite REST APIs.",
  moreContent:
    "From end-to-end mobile architecture to production release, I focus on clean component design, token-based session persistence, and memory-conscious data synchronization. Whether implementing LSB steganography algorithms in HushTalk, synchronizing multi-role marketplace workflows in Zen Mart Pro, or building offline-first member systems in GymBook, I deliver reliable, performant mobile products.",
};

export const aboutData = {
  title: "ABOUT ME",
  paragraph:
    "I am a Software Engineer with a Bachelor's degree in Computer Science from City University of Science and Information Technology, Peshawar. Passionate React Native developer with hands-on production experience from an Android engineering internship at Zenvyro Labs and independently engineered mobile applications. I specialize in turning complex requirements into smooth, intuitive mobile experiences with Expo, Firebase, Zustand, and offline-first data stores.",
  services: [
    {
      id: "design",
      title: "DESIGN",
      type: "design",
      description:
        "I build reusable, responsive UI components across Android and iOS screens, standardizing shared design systems in NativeWind and React Native to guarantee visual and functional consistency.",
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      type: "development",
      description:
        "End-to-end mobile app engineering using React Native, Expo Router, and TypeScript. Integrating token-based Firebase Auth, Cloud Firestore real-time streams, and REST APIs with seamless error handling.",
    },
    {
      id: "maintenance",
      title: "MAINTENANCE",
      type: "maintenance",
      description:
        "Ensuring long-term app stability through offline caching with SQLite and AsyncStorage, performance profiling, memory optimization, and structured version control practices with Git.",
    },
  ],
};

export const skillsData = {
  title: "SKILLS",
  groups: [
    {
      id: "using-now",
      title: "USING NOW:",
      skills: [
        { name: "REACT NATIVE", color: "#53C1DE", iconType: "react" },
        { name: "EXPO", color: "#000020", iconType: "expo" },
        { name: "JAVASCRIPT", color: "#F7DF1E", iconType: "javascript" },
        { name: "TYPESCRIPT", color: "#007ACC", iconType: "typescript" },
        { name: "TAILWIND CSS", color: "#06B6D4", iconType: "tailwind" },
        { name: "ZUSTAND", color: "#443E38", iconType: "zustand" },
        { name: "FIREBASE", color: "#FFA611", iconType: "firebase" },
        { name: "GIT", color: "#F05032", iconType: "git" },
        { name: "NODEJS", color: "#539E43", iconType: "nodejs" },
        { name: "APPWRITE", color: "#FD366E", iconType: "appwrite" },
        { name: "REST API", color: "#0F766E", iconType: "api" },
      ],
    },
    {
      id: "other-skills",
      title: "OTHER SKILLS:",
      skills: [
        { name: "PYTHON", color: "#3776AB", iconType: "python" },
        { name: "SQLITE", color: "#003B57", iconType: "sqlite" },
        { name: "POSTMAN", color: "#FF6C37", iconType: "postman" },
      ],
    },
  ],
};

export const portfolioData = {
  title: "PORTFOLIO",
  bannerImage: "/images/mountains-banner.jpg",
  categories: ["ALL", "CODED", "DESIGNED"],
  projects: [
    {
      id: "hushtalk",
      slug: "hushtalk",
      title: "HushTalk",
      tag: "coded, designed",
      category: ["ALL", "CODED", "DESIGNED"],
      highlight: true,
      shortDesc: "Image & Video Steganography Mobile App",
      fullDesc:
        "A secure mobile communication app that combines real-time messaging with LSB-based steganography to conceal and extract encrypted messages inside images and videos without visible media quality degradation. Engineered end-to-end with React Native, Expo, Appwrite backend, and Firebase Auth.",
      tech: "React Native · Expo · Appwrite · LSB Steganography · Firebase",
      image: "/images/projects/hushtalk-icon.png",
      icon: "/images/projects/hushtalk-icon.png",
      screenshots: [
        "/images/projects/hushtalk-home.jpeg",
        "/images/projects/hushtalk-chats.jpeg",
        "/images/projects/hushtalk-vault.jpeg",
        "/images/projects/hushtalk-secret.png",
      ],
      github: "https://github.com/mharis7y/HushTalk",
      demo: "https://github.com/mharis7y/HushTalk",
    },
    {
      id: "zenmart",
      slug: "zen-mart-pro",
      title: "Zen Mart Pro",
      tag: "coded, designed",
      category: ["ALL", "CODED", "DESIGNED"],
      highlight: false,
      shortDesc: "4-in-1 Multi-Vendor E-Commerce Ecosystem",
      fullDesc:
        "Enterprise-grade 4-in-1 marketplace platform built for Super Admin, Vendor, Customer, and Rider roles with instantaneous Cloud Firestore synchronization and local cart caching via SharedPreferences.",
      tech: "Flutter · Firebase Firestore · Role-Based Auth · SharedPreferences",
      image: "/images/projects/zen-mart-icon.png",
      icon: "/images/projects/zen-mart-icon.png",
      screenshots: [
        "/images/projects/zenmart-customer.png",
        "/images/projects/zenmart-admin.png",
        "/images/projects/zenmart-vendor.png",
        "/images/projects/zenmart-rider.png",
      ],
      github: "https://github.com/mharis7y/zen-mart-pro",
      demo: "https://github.com/mharis7y/zen-mart-pro",
    },
    {
      id: "gymbook",
      slug: "gymbook",
      title: "GymBook",
      tag: "coded, designed",
      category: ["ALL", "CODED", "DESIGNED"],
      highlight: false,
      shortDesc: "Gym Management & Fitness Member Tracker",
      fullDesc:
        "Custom fitness management app developed for a local gym (Taj Fitness). Features offline-first SQLite database architecture, subscription tracking, member attendance logs, and workout routines.",
      tech: "React Native · Expo Router · SQLite · AsyncStorage · Tailwind CSS",
      image: "/images/projects/gymbook-icon.png",
      icon: "/images/projects/gymbook-icon.png",
      screenshots: [
        "/images/projects/gymbook-finance.jpeg",
        "/images/projects/gymbook-login.jpeg",
        "/images/projects/gymbook-settings.jpeg",
        "/images/projects/gymbook-splash.jpeg",
      ],
      github: "https://github.com/mharis7y/GymBook",
      demo: "https://github.com/mharis7y/GymBook",
    },
  ],
};

export const contactData = {
  title: "CONTACT",
  paragraph:
    "I am currently looking for an entry-level mobile developer role or freelance collaborations where I can build impactful React Native applications. Have a question or want to work together? Send me a message!",
  phone: "+92 3130437889",
  email: "mharis7y@gmail.com",
  location: "Peshawar, Pakistan",
};

export const footerData = {
  copyright: "@2026 Muhammad Haris All Rights Reserved.",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mharis7y/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/mharis7y", icon: "github" },
    { name: "Email", url: "mailto:mharis7y@gmail.com", icon: "email" },
    { name: "Phone", url: "tel:+923130437889", icon: "phone" },
  ],
};
