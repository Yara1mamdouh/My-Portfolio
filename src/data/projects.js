/**
 * Projects Data
 * Centralized list of all 9 projects in exact specified order.
 *
 * Availability categories:
 * - "github-and-image": Category A (Configurable GitHub repo + Project Image / Screenshots)
 * - "image-only": Category B (Screenshots available, NO GitHub repository, e.g. Book Rental System, Java Desktop Application)
 *
 * NOTE: Images must be HTTPS URLs (e.g. Cloudinary). When empty (""), an elegant designed SVG placeholder is displayed.
 */
export const projectsData = [
  // ==========================================
  // STRONGEST PROJECTS (Priority 1 - 3)
  // ==========================================
  {
    id: "code-academy",
    title: "Code Academy",
    subtitle: "Educational Programming Curriculum Platform",
    featured: true,
    category: "github-and-image", // Category A
    description: "Built an educational platform for organizing programming and computer science curriculum content. Implemented interactive learning components, responsive layouts, and structured course and unit navigation.",
    technologies: ["Angular", "Bootstrap", "TypeScript", "HTML5", "CSS3"],
    imageUrl: "/images/projects/code-academy.png",
    screenshots: [
      "/images/projects/code-academy.png"
    ],
    githubUrl: "https://github.com/Yara1mamdouh/codeAcademy",
    demoUrl: "",
    accentColor: "#A78BFA",
    iconType: "Code"
  },
  {
    id: "blood-bank-management",
    title: "Blood Bank Management System",
    subtitle: "Enterprise Healthcare Data & Donor Management",
    featured: true,
    category: "github-and-image", // Category A
    description: "Developed a blood bank management application using .NET technologies. Implemented backend functionality for managing blood-bank data, CRUD operations, and database integration.",
    technologies: [".NET", "ASP.NET Core", "C#", "SQL Server", "Entity Framework Core"],
    imageUrl: "/images/projects/blood-bank-management.png",
    screenshots: [
      "/images/projects/blood-bank-management.png"
    ],
    githubUrl: "https://github.com/FatmmaELZahraa/Blood_Bank_DEPI_GP",
    demoUrl: "",
    accentColor: "#F472B6",
    iconType: "Activity"
  },
  {
    id: "restaurant-recipe",
    title: "Restaurant Recipe",
    subtitle: "Culinary & Menu REST API Application",
    featured: true,
    category: "github-and-image", // Category A
    description: "Built a restaurant and recipe application using Node.js. Implemented backend application logic and REST API functionality for handling restaurant and recipe data.",
    technologies: ["Node.js", "JavaScript", "REST APIs", "CRUD Operations", "Express"],
    imageUrl: "/images/projects/restaurant-recipe.png",
    screenshots: [
      "/images/projects/restaurant-recipe.png"
    ],
    githubUrl: "https://github.com/zaidmohamed2004/RecipeHub",
    demoUrl: "",
    accentColor: "#FBBF24",
    iconType: "Utensils"
  },

  // ==========================================
  // REMAINING PROJECTS (4 - 9)
  // ==========================================
  {
    id: "carepoint-pro",
    title: "CarePoint Pro",
    subtitle: "Integrated Clinic Management System",
    featured: false,
    category: "github-and-image", // Category A
    description: "Developed an integrated clinic web application using Angular and Node.js, providing a structured platform for managing clinic operations and connecting frontend interfaces with backend services.",
    technologies: ["Angular", "Node.js", "REST APIs", "CRUD", "CSS3"],
    imageUrl: "/images/projects/carepoint-pro.png",
    screenshots: [
      "/images/projects/carepoint-pro.png"
    ],
    githubUrl: "https://github.com/Yara1mamdouh/Carepoint",
    demoUrl: "",
    accentColor: "#38BDF8",
    iconType: "Stethoscope"
  },
  {
    id: "cravers",
    title: "Cravers",
    subtitle: "Full-Stack Web Application",
    featured: false,
    category: "github-and-image", // Category A
    description: "Developed a full-stack web application with a responsive user interface and structured application logic. Implemented core user-facing functionality and integrated frontend components with backend services.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Backend Services", "Responsive UI"],
    imageUrl: "/images/projects/cravers.png",
    screenshots: [
      "/images/projects/cravers.png"
    ],
    githubUrl: "https://github.com/Yara1mamdouh/Cravers",
    demoUrl: "",
    accentColor: "#FB7185",
    iconType: "Layers"
  },
  {
    id: "book-rental-system",
    title: "Book Rental System",
    subtitle: "Desktop Application for Book Rental Management",
    featured: false,
    category: "image-only", // Category B: Images/screenshots available, NO GitHub repository
    description: "Developed a desktop book rental system with a graphical interface, SQLite database integration, sample data generation using Faker, and PDF report generation using ReportLab.",
    technologies: ["Python", "Tkinter", "SQLite", "Faker", "ReportLab"],
    imageUrl: "/images/projects/book-rental-system.jpg",
    screenshots: [
      "/images/projects/book-rental-system.jpg"
    ],
    githubUrl: "", // Strictly NO GitHub URL as per requirement
    demoUrl: "https://lnkd.in/p/ezVvpSBu",
    accentColor: "#34D399",
    iconType: "BookOpen"
  },
  {
    id: "java-desktop-app",
    title: "Java Desktop Application",
    subtitle: "Sports Store Desktop Application",
    featured: false,
    category: "image-only", // Category B: Images/screenshots available, NO GitHub repository
    description: "Developed a desktop sports store application using Java, implementing core application functionality and object-oriented programming concepts.",
    technologies: ["Java", "OOP", "Desktop GUI", "Data Structures"],
    imageUrl: "/images/projects/java-desktop-app.jpg",
    screenshots: [
      "/images/projects/java-desktop-app.jpg"
    ],
    githubUrl: "", // Strictly NO GitHub URL as per requirement
    demoUrl: "https://lnkd.in/p/eNWqhZjU",
    accentColor: "#818CF8",
    iconType: "ShoppingBag"
  },
  {
    id: "quran-recitation-website",
    title: "Quran Recitation Website",
    subtitle: "Responsive Audio & Recitation Web Platform",
    featured: false,
    category: "github-and-image", // Category A
    description: "Built a responsive website for Quran recitation using HTML, CSS, Bootstrap, and JavaScript.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Audio API"],
    imageUrl: "/images/projects/quran-recitation-website.png",
    screenshots: [
      "/images/projects/quran-recitation-website.png"
    ],
    githubUrl: "https://github.com/Yara1mamdouh/Quran-Recitation-Website",
    demoUrl: "",
    accentColor: "#2DD4BF",
    iconType: "Bookmark"
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    subtitle: "Dynamic Culinary Web Application",
    featured: false,
    category: "github-and-image", // Category A
    description: "Developed a restaurant website using PHP with structured web pages and frontend styling.",
    technologies: ["PHP", "HTML", "CSS", "Frontend Styling"],
    imageUrl: "/images/projects/restaurant-website.png",
    screenshots: [
      "/images/projects/restaurant-website.png"
    ],
    githubUrl: "https://github.com/Yara1mamdouh/Restaurant-Website",
    demoUrl: "",
    accentColor: "#F59E0B",
    iconType: "Globe"
  }
];
