/**
 * Profile & Personal Information
 * Centralized data for Yara Mamdouh Khfagi
 * To update personal portrait: replace portraitUrl with your hosted HTTPS image link (e.g. Cloudinary).
 */
export const profileData = {
  fullName: "Yara Mamdouh Khfagi",
  title: "Software Engineer",
  subtitle: "Full Stack | .NET & Node.js",
  fullTitle: "Software Engineer | Full Stack | .NET & Node.js",
  location: "Shibin El Qanater, Qalyubia, Egypt",
  email: "yarakhfagi@gmail.com",
  linkedin: "https://linkedin.com/in/yara-khfagi/",
  github: "https://github.com/Yara1mamdouh",
  
  // Local CV PDF file path inside public/ directory
  cvUrl: "/cv/Yara-Khfagi-CV.pdf",

  // Portrait image URL - set to real image in public/images/
  portraitUrl: "/images/yara-profile.jpg",

  shortIntro: "Passionate Software Engineer specializing in Full Stack, .NET and Node.js. Building high-performance, database-driven web applications and clean backend architectures with dedication to quality and modern engineering practices.",

  aboutSummary: "I am a Computer Science and Artificial Intelligence student at Benha University with a strong interest in Full Stack Development and Backend Engineering. I have hands-on experience building web applications using .NET, Node.js, and modern frontend technologies. Through academic projects and technical training, I have developed practical skills in designing, developing, and working with database-driven applications. I am continuously improving my technical and problem-solving abilities and looking for opportunities to grow as a Full Stack or Backend Developer.",

  highlights: [
    {
      id: "cs-ai",
      title: "Computer Science & AI Student",
      subtitle: "Benha University (Expected 2027, GPA 3.55)",
      icon: "GraduationCap"
    },
    {
      id: "full-stack",
      title: "Full Stack Engineering",
      subtitle: "End-to-end web apps with React, Angular & modern UI",
      icon: "Layers"
    },
    {
      id: "backend",
      title: "Backend Development",
      subtitle: "ASP.NET Core, .NET, Node.js & REST APIs",
      icon: "Server"
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      subtitle: "Rigorous problem-solving & competitive training",
      icon: "Sparkles"
    }
  ],

  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "" }
  ]
};

export const profile = profileData;
