/**
 * Training & Certifications Data
 * Centralized certificate data for Yara Mamdouh Khfagi
 *
 * Configurable properties:
 * - imageUrl: Real certificate image in public/ or hosted HTTPS link.
 * - linkedinUrl: Real URL to LinkedIn announcement post. If empty, the post button is hidden.
 */
export const certificates = [
  {
    id: "depi",
    title: "Full Stack .NET Developer",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    program: "Round 4",
    status: "Completed",
    isCompleted: true,
    description: "Intensive government-sponsored initiative specializing in enterprise application development with C#, ASP.NET Core, Entity Framework Core, SQL Server, and modern frontend technologies.",
    skillsGained: [".NET", "ASP.NET Core", "C#", "SQL Server", "EF Core"],
    imageUrl: "/images/certificates/depi.jpg",
    linkedinUrl: "https://lnkd.in/p/dHn6Nv99"
  },
  {
    id: "nti",
    title: "MEAN Stack",
    issuer: "National Telecommunication Institute (NTI)",
    program: "Summer Training",
    status: "Completed",
    isCompleted: true,
    description: "Hands-on specialized summer training program covering MongoDB, Express.js, Angular, and Node.js for scalable full-stack web architectures.",
    skillsGained: ["Angular", "Node.js", "Express", "REST APIs", "Full Stack"],
    imageUrl: "/images/certificates/nti.jpg",
    linkedinUrl: "https://lnkd.in/p/eDgKJJ7F"
  },
  {
    id: "gupco",
    title: "Technical Training",
    issuer: "GUPCO",
    program: "Technical Training",
    status: "Completed",
    isCompleted: true,
    description: "Practical technical training experience exposing students to industrial workflows, software infrastructure, and technical team collaboration.",
    skillsGained: ["Technical Workflows", "Software Infrastructure", "Problem Solving"],
    imageUrl: "/images/certificates/gupco.jpg",
    linkedinUrl: "https://lnkd.in/p/eRSpVihE"
  },
  {
    id: "mtec",
    title: "Full Stack Node.js",
    issuer: "MTEC Academy",
    program: "Professional Track",
    status: "In Progress", // MTEC must remain marked as "In Progress"
    isCompleted: false,
    description: "Advanced program focusing on modern Node.js backend development, asynchronous architectures, RESTful microservices, and JavaScript full-stack engineering.",
    skillsGained: ["Node.js", "Express", "Backend Architecture", "JavaScript"],
    imageUrl: "", // In progress
    linkedinUrl: ""
  }
];

export const certificatesData = certificates;
