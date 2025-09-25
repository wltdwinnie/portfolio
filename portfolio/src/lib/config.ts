export const siteConfig = {
  name: "Win Lei Thawdar",
  nickname: "Winnie",
  role: "Computer Science Student",
  university: "Singapore Management University", 
  tagline: "Passionate about coding, creativity, and making positive impact through technology.",
  location: "Singapore",
  email: "winleithawdar2005@gmail.com",
  phone: "+95 9 975 545 660",
  
  links: {
    github: "https://github.com/wltdwinnie",
    linkedin: "https://www.linkedin.com/in/winleithawdar",
    devpost: "https://devpost.com/wltdwinnie",
    instagram: "https://www.instagram.com/winleithawdar/",
  },

  about: {
    intro: "I'm a Computer Science undergraduate at SMU studying with ASEAN Scholarship, passionate about coding, creativity, and technology. My hobbies include analytical aspects like coding, managing projects, and artistic pursuits like drawing and playing ukulele.",
    mission: "Beyond academics, I'm deeply committed to making positive impact in our society through extensive volunteer work, ranging from teaching Computer Science for kids to project management.",
    
    skills: {
      programming: ["Java", "Python", "C++", "HTML/CSS", "JavaScript", "TypeScript"],
      technologies: ["Next.js", "React", "Tailwind CSS", "Git", "Vercel", "Node.js"],
      tools: ["Microsoft Office", "Google Workspace", "Adobe Photoshop", "VS Code", "Figma"],
      soft: ["Leadership", "Project Management", "Communication", "Problem-Solving", "Creativity", "Critical Thinking"]
    }
  },

  education: [
    {
      institution: "Singapore Management University",
      degree: "BSc Computer Science",
      period: "2024 - Present",
      scholarship: "ASEAN Undergraduate Scholarship",
      status: "Current",
      description: "Pursuing comprehensive Computer Science education with focus on software engineering, algorithms, and system design."
    },
    {
      institution: "Royal Academic Institute",
      degree: "Ontario Secondary School Diploma (OSSD)",
      period: "2023",
      grade: "93% Overall",
      achievements: ["7A* in Cambridge IGCSE", "Exemplary Effort Award"],
      description: "Completed high school with exceptional academic performance across multiple subjects."
    },
    {
      institution: "IIP International School",
      degree: "International General Certificate for Secondary Education (IGCSE)",
      period: "2022",
      grade: "7A*",
      description: "Completed secondary education with exceptional academic performance across multiple subjects."
    }
  ],

  experience: [
    {
      role: "Operations Director",
      organization: "The Forward Society",
      period: "Sep 2023 - Apr 2024",
      type: "Volunteer Leadership",
      location: "Myanmar",
      achievements: [
        "Led multiple cross-functional teams",
        "Implemented efficiency systems and workflows", 
        "Won 'Volunteer of the Term' award 3 consecutive times",
        "Coordinated community outreach programs"
      ],
      description: "Directed operations for educational non-profit, managing teams and implementing systems that improved organizational efficiency."
    },
    {
      role: "Graphic Designer",
      organization: "Start Smart",
      period: "Aug 2023 - Jan 2024", 
      type: "Creative Volunteer",
      location: "Remote",
      achievements: [
        "Created brand-aligned visual designs",
        "Increased social media engagement by 40%",
        "Designed promotional materials for campaigns",
        "Maintained consistent brand identity"
      ],
      description: "Developed visual content and brand materials for educational technology startup, focusing on clean, modern design principles."
    },
    {
      role: "CS Curriculum Development Team Member",
      organization: "Thate Pan Hub",
      period: "Nov 2023 - Feb 2024",
      type: "Education Volunteer", 
      location: "Myanmar",
      achievements: [
        "Co-taught Hour of Code 2023 event",
        "Enhanced Computer Science curriculum for children",
        "Developed age-appropriate coding exercises",
        "Mentored 50+ students in programming basics"
      ],
      description: "Contributed to computer science education initiatives, developing curriculum and teaching programming fundamentals to young learners."
    }
  ],

  activities: [
    {
      name: "KAI Math Club",
      role: "Active Member",
      period: "Feb - Jun 2023",
      location: "Royal Academic Institute",
      skills: ["Critical Thinking", "Mathematical Problem-Solving", "Analytical Reasoning", "Teamwork"],
      description: "Participated in advanced mathematics discussions and problem-solving sessions, developing strong analytical and critical thinking capabilities."
    },
    {
      name: "KAI Arts & Crafts Club", 
      role: "Active Member",
      period: "Feb - Jun 2023",
      location: "Royal Academic Institute", 
      skills: ["Creativity", "Portfolio Development", "Art Critique", "Visual Communication"],
      description: "Engaged in various artistic projects and portfolio development, enhancing creative expression and visual communication skills."
    }
  ],

  languages: [
    { 
      name: "Burmese (Myanmar)", 
      level: "Native",
      proficiency: "Full professional proficiency in speaking, reading, and writing"
    },
    { 
      name: "English", 
      level: "Professional (IELTS 7.5)",
      breakdown: "Reading: 8, Listening: 7.5, Speaking: 7, Writing: 6.5",
      proficiency: "Advanced professional proficiency across all skills"
    },
  ],

  projects: [
    {
      title: "AutoGreen.sg",
      description: "A comprehensive sustainability platform for Singapore's Green Plan 2030. Chrome extension with intelligent product scanning and Next.js web application for eco-friendly shopping on Lazada and FoodPanda.",
      tags: ["Next.js", "React", "TypeScript", "Chrome Extension", "PostgreSQL", "Tailwind CSS"],
      type: "Team Project",
      year: "2024",
      category: "Web Development",
      status: "Completed",
      teamSize: "5 members",
      achievements: [
        "Top 10 teams in Ellipsis Tech Series Hackathon",
        "Smart product detection with 95% accuracy",
        "Chrome extension with 1000+ scanned products",
        "Real-time environmental impact tracking"
      ],
      technologies: ["Next.js 15.5.2", "React 19", "TypeScript", "Tailwind CSS v4", "Chrome Extension API", "Neon Database", "PostgreSQL"],
      highlights: [
        "Built for Singapore's Green Plan 2030",
        "Supports Lazada and FoodPanda platforms",
        "Interactive dashboard with leaderboards",
        "Automated eco-product detection"
      ],
      links: {
        live: "https://autogreen-sg.vercel.app/",
        github: "https://github.com/Onyxxx17/AutoGreen.sg",
        demo: "https://autogreen-sg.vercel.app/"
      },
      collaborators: ["Aung Ye Thant Hein", "Chue Myat Sandy", "Htet Shwe Win Than", "Wunna Aung"]
    },
    {
      title: "RentLah!",
      description: "A comprehensive student housing platform for Singapore universities. Features verified listings, campus proximity search, budget filters, and integrated chat system for students to find safe accommodations.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Socket.io", "Drizzle ORM"],
      type: "Team Project", 
      year: "2024",
      category: "Web Development",
      status: "Completed",
      teamSize: "5 members",
      achievements: [
        "Verified listings system for safety",
        "Google Maps integration for location search",
        "Real-time chat with Socket.io",
        "Student-focused budget filtering"
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Drizzle ORM", "Better Auth", "Socket.io", "Google Maps API", "Tailwind CSS", "shadcn/ui"],
      highlights: [
        "University-focused accommodation search",
        "Verified listings for student safety",
        "Campus proximity calculations",
        "Modern responsive UI design"
      ],
      links: {
        github: "https://github.com/wltdwinnie/RentLah-HEAP"
      },
      collaborators: ["Aung Ye Thant Hein", "Chue Myat Sandy", "Htet Shwe Win Than", "Lin Khant Pe Thein"]
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js 15 and TypeScript. Features clean lavender theme, multi-page navigation, contact forms, and comprehensive showcase of my projects and experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
      type: "Personal Project",
      year: "2024", 
      category: "Web Development",
      status: "Ongoing",
      achievements: [
        "Clean, minimal lavender design theme",
        "Multi-page navigation with persistent header",
        "Responsive design for all devices",
        "Integrated contact form functionality"
      ],
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS v3", "shadcn/ui", "Lucide React", "next-themes"],
      highlights: [
        "Modern App Router architecture",
        "Dark/light mode support",
        "Performance optimized",
        "Accessible design (WCAG compliant)"
      ],
      links: {
        live: "https://winleithawdar.vercel.app",
        github: "https://github.com/wltdwinnie/portfolio"
      }
    },
    
    {
      title: "Pokémon Egg Hatcher Game",
      description: "Interactive Java application featuring object-oriented design, user interface components, and game logic implementation. Built with modular architecture and comprehensive user feedback systems.",
      tags: ["Java", "OOP", "Game Development", "UI Design"],
      grade: "97%",
      type: "Academic Project",
      year: "2023",
      category: "Software Development",
      achievements: [
        "Object-Oriented Programming principles",
        "Interactive user interface design", 
        "Game state management",
        "Modular code architecture"
      ],
      technologies: ["Java", "Swing", "OOP Design Patterns"],
      highlights: [
        "Comprehensive game logic implementation",
        "User-friendly interface design",
        "Modular and maintainable code structure",
        "Achievement of 97% grade"
      ]
    },
    {
      title: "Photoshop Essentials Workshop Leadership",
      description: "Successfully planned and executed a comprehensive 2-day online workshop teaching Adobe Photoshop fundamentals to over 100 participants from diverse backgrounds.",
      tags: ["Workshop", "Leadership", "Design", "Education"],
      type: "Leadership Project",
      year: "2023",
      category: "Community Education",
      achievements: [
        "100+ participants across 2 days",
        "Hands-on learning curriculum",
        "Live demonstration sessions",
        "Resource material development"
      ],
      impact: "Improved digital literacy for 100+ community members",
      technologies: ["Adobe Photoshop", "Online Teaching Platforms"],
      highlights: [
        "Large-scale workshop coordination",
        "Educational curriculum development",
        "Community impact and engagement",
        "Skill development for participants"
      ]
    },
    {
      title: "Professional Graphic Design Portfolio",
      description: "Comprehensive collection of digital artwork, social media graphics, and brand identity materials created for various organizations and personal projects.",
      tags: ["Photoshop", "Design", "Branding", "Visual Arts"],
      type: "Creative Project",
      year: "2023",
      category: "Visual Design",
      achievements: [
        "50+ original digital artworks",
        "Brand identity development",
        "Social media content creation",
        "Print and digital media design"
      ],
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Design Principles"],
      highlights: [
        "Diverse portfolio of design work",
        "Brand identity projects",
        "Social media graphics",
        "Professional design principles"
      ]
    },
    {
      title: "Ozone Layer Deterioration Research",
      description: "In-depth scientific research project investigating continued ozone layer deterioration despite international CFC ban implementations, featuring original analysis and hand-drawn molecular energy diagrams.",
      tags: ["Research", "Chemistry", "Environmental Science", "Analysis"],
      grade: "94%", 
      type: "Academic Project",
      year: "2023",
      category: "Scientific Research",
      achievements: [
        "Original scientific research",
        "Statistical data analysis",
        "Hand-drawn energy diagrams",
        "Environmental impact assessment"
      ],
      technologies: ["Scientific Research Methods", "Data Analysis", "Academic Writing"],
      highlights: [
        "Independent research project",
        "Environmental science focus",
        "High academic achievement",
        "Original analysis and findings"
      ]
    }
  ]
};
