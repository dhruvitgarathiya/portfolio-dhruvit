import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I build tech that solves problems.
I’m a full-stack developer and an aspiring software engineer with a strong foundation in MERN stack, Golang, and backend development. With expertise in Data Structures, Algorithms, DBMS, OOP, OS, and Computer Networks, I focus on writing efficient, scalable, and maintainable code.

From developing web applications with React, Node.js, and Express to exploring microservices with Go, I’m passionate about building robust backend architectures that power real-world applications. My interests extend to cloud computing, system design, and DevOps, as I continuously refine my skills to stay ahead in the tech industry.

I believe in building solutions that matter—leveraging technology to create impactful and scalable systems. Let’s connect and collaborate`;

export const ABOUT_TEXT = `I am Dhruvit Garathiya, a B.Tech 3rd-year IT student at L.D. College of Engineering with a strong foundation in MERN stack development, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Data Structures (DS), Computer Networks (CN), and Operating System (OS) fundamentals. I also have basic proficiency in Golang and a keen interest in backend development.

As an aspiring software engineer, I am passionate about building scalable and efficient applications. I enjoy solving problems, learning new technologies, and continuously improving my skills to stay up-to-date with industry trends.`;

export const EXPERIENCES = [
  {
    year: "Oct 2022 - May 2024",
    role: "Founder & Fullstack Dev",
    company: "Inexia",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Unreal Engine 5", "Blender", "Python", "C++"],
  },
  {
    year: "June 2023 - Oct 2023",
    role: "Research Intern",
    company: "Orbitx India Aerospace",
    description: `Worked on Aviation Systems for Reusable Launch Vehicles, contributing to system improvements & reliability. Collaborated with a team of 10 engineers to enhance the efficiency by 15%.`,
    technologies: ["Python", "Machine Learning", "PyTorch"],
  },
  {
    year: "Sep 2022 - Mar 2024",
    role: "Vice President & Tech Head",
    company: "Droid Robotics Club (GLAU)",
    description: `Mentored over 50 students in IoT and robotics projects, leading to a 30% increase in project completion rates. Organized and led 10+ workshops and seminars on advanced robotics, impacting over 200 students.`,
    technologies: ["Python", "C/C++", "Arduino", "Raspberry Pi", "ROS"],
  },
];

export const BLOG_POSTS = [
  {
    title: "Understanding React Hooks",
    excerpt:
      "An introduction to React Hooks and how they can be used to manage state and side effects in functional components.",
    link: "/blog/react-hooks",
  },
  {
    title: "Getting Started with Vite",
    excerpt:
      "A guide to setting up a new project with Vite, a fast and modern build tool for web development.",
    link: "/blog/vite-setup",
  },
  {
    title: "CSS Grid Layout",
    excerpt:
      "Learn how to create complex and responsive layouts with CSS Grid.",
    link: "/blog/css-grid",
  },
];

export const PROJECTS = [
  {
    title: "FullStack Job portal",
    image: project1,
    description:
      "A fully functional job portal web application with features like user authentication, job-serach, Application management, recrutier dashboard, error-tracking",
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "sentry",
      "Clerk",
    ],
  },
  {
    title: "url-shortner Website",
    image: project2,
    description:
      "A fully functional url-shortner website with features like shorting the url.",
    technologies: ["Node.js", "MongoDB"],
  },
  {
    title: "Text-trammer App",
    image: project3,
    description:
      "	Easily convert text case, clear the text area, count word occurrences, and copy to clipboard with a single click. Enjoy dark mode for comfortable viewing and seamless navigation using React Router",
    technologies: ["HTML", "CSS", "Reactjs", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Ahmedabad, Gujarat, India",
  phoneNo: "+91 9510125285",
  email: "dhruvitgarthiya@gmail.com",
};
