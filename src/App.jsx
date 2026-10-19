import Contact from "./Contact"
import Navbar from "./Component/Navbar"
import profile from "./assets/profile.jpg"
import "./App.css"
import { useState } from "react"
import NameSaver from "./NameSaver"
import SocialLinks from "./SocialLinks"
import ProjectGallery from "./ProjectGallery"
import Footer from "./Component/Footer";
import Reveal from "./Component/Reveal";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: "💻",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Java",
      "C#",
  
    ],
  },
  {
    title: "Database Management",
    icon: "🗄️",
    skills: ["MySQL", "Database Design", "ER Diagrams"],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: ["GitHub", "Visual Studio","XAMPP","PyCharm","Jupyter Notebook"],
  },
 
  {
    title: "Soft Skills",
    icon: "🌸",
    skills: [
      "Team Leadership",
      "Problem Solving",
      "Communication",
      "Critical Thinking",
      "Quick Learning Ability",
      "Decision Making",
      "Self-Motivation"
    ],
  },
];



const projects = [
  {
    id: 1,
    title: "Restaurant Management System",
    year: "2023",
    technology: "HTML, CSS",
    description:
      "A web application for presenting Resinformation and managing menu details.",
    features: [
      "Menu Management: Adds, updates, and manages food and beverage items.",
      "Order Management: Creates and tracks customer orders efficiently.",
      "Table Management: Manages table availability and customer seating.",
      "Reservation Management: Schedules and tracks table bookings.",
      "Restaurant opening hours and contact information",
      "Billing and Payments: Calculates order totals and generates customer receipts.",
      "Staff Management: Manages employee information and staff access.",
      "Sales Reports: Displays daily sales, popular menu items, and revenue summaries."

    ],
    images: [
      "/images/Res1.png",
      "/images/Res2.png",
      "/images/Res3.png",
      "/images/Res4.png",
      "/images/Res5.png",
      "/images/Res6.png",
      "/images/res7.png",
      "/images/Res8.png",
      "/images/Res9.png",
      "/images/Res10.png",
      "/images/Res11.png",
      "/images/Res12.png",
    ],
  
  },
  
  {
    id: 4,
    title: "Dental Clinic Management System",
    year: "2025",
    technology: "C#, .NET, SQL Server",
    description:
      "A desktop application designed to manage patient registration, interactive dental charting, appointment scheduling, and clinical billing.",
    features: [
      "Patient informRegisters new patients and maintains comprehensive medical histories.ation management",
      "Provides a visual 32-tooth panel to log specific dental treatments.",
      "Manages daily bookings and tracks dentist availability.",
      "Tracks active dental procedures, prescriptions, and multi-stage care plans.",
      "Calculates procedural fees and prints itemized payment receipts.",
      "Restricts sensitive medical data and financial reports to authorized staff.",
      "Displays daily patient counts, completed treatments, and revenue summaries."
    ],
    images: [
      "/images/dental1.jpg",
      "/images/dental2.jpg",
      "/images/dental3.jpg",
      "/images/dental4.jpg",
      "/images/dental5.jpg",
       "/images/dental6.jpg",
        "/images/dental7.jpg",

    ],
  },
  
{
  id: 5,
  title: "Secure Online Voting System",
  year: "2026",
  description:
    "A web-based voting system designed to support voter authentication, secure vote submission, and election result management.",
  technology: "Java, JSP, MySQL",

  features: [
    "Voter registration and login",
    "User authentication",
    "One voter, one vote validation",
    "Election and candidate management",
    "Secure vote storage",
    "Election result display",
    "Voting activity audit records",
  ],

  images: [
    "/images/Usecase1.png",
    "/images/usecase2.png",
    "/images/Picture1.png",
      "/images/Picture2.png",
      "/images/Picture3.png",
      "/images/Picture4.png",
      "/images/Picture5.png",
      "/images/Picture6.png",
      "/images/Picture7.png",
      "/images/Picture8.png",
      "/images/Picture9.png",
      "/images/Picture10.png",
      "/images/Picture11.png",
  ],

  documents: [
    {
      name: "SRS Document (PDF)",
      file: "/documents/complete OODD(2).pdf",
    },
    {
      name: "Database Design (PDF)",
      file: "/documents/DDD(2).docx",
    },
  
  ],
},


  {
    id: 6,
    title: "Agriculture N-gram Predictor",
    year: "2026",
    technology: "Python · Streamlit · Pandas · NLTK",
    description:
      "A web application for predicting the next word in Myanmar agricultural text using an N-gram language model.",
    features: [
      "Agricultural CSV dataset processing",
      "Next-word prediction for agricultural text",
      "Prediction probabilities display",
      "Model evaluation using Top-3 Accuracy",
      "Interactive and user-friendly web interface",
      "Uses Unigram, Bigram, and Trigram models to analyze word sequences.",
      "Provides a simple and user-friendly interface using Streamlit.",
      "Presents predicted words and their corresponding scores.",
      "Dataset Management: Supports agricultural text data loading and processing for prediction tasks."
    ],
    images: [
      "/images/ar1.png",
      "/images/ar2.png",
      "/images/ar3.png",
    ],
  },
];


function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span>{skill.icon}</span>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </div>
  )
}


function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className="project-card">
      <p className="project-year">{project.year}</p>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <span className="project-tech">
        {project.technology}
      </span>

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Show Less ♡" : "View Details ♡"}
      </button>

      {showDetails && (
        <div className="project-details">
          <h4>Key Features</h4>

          <ul>
            {project.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-screenshot"
            />
          )}

          {project.document && (
            <a
              href={project.document}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              View / Download Documentation
            </a>
          )}
        </div>
      )}
    </article>
  )
}



function App() {
  const [message, setMessage] = useState("Hello, Hay Mi! 💗")
  const [showAbout, setShowAbout] = useState(false)
  return (
    <>
    <div>

</div>
      <Navbar />
<div className="message-box">
  <h2>{message}</h2>

  <div className="message-buttons">
    <button onClick={() => setMessage("You can do it! 🎀")}>
      Say Hello
    </button>

    <button onClick={() => setMessage("Keep learning React! ✨")}>
      Motivate Me
    </button>

    <button onClick={() => setMessage("Hello, Hay Mi! 💗")}>
      Reset
    </button>
  </div>
</div>


      <section id="home" className="home-section">
        <img
  src={profile}
  alt="Hay Mi Kyaw profile"
  className="profile-picture"
/>
  <h1>Hi, I'm Hay Mi Kyaw 💗</h1>
  <h2>Future Software Developer</h2>
  <p>
    I'm a final-year Computer Science student
    passionate about software development.
  </p>

  
  <div className="home-buttons">
    <a
      href="/CV Form-1.pdf"
      download="CV Form.pdf"
      className="home-btn download-btn"
    >
      📄 Download CV
      
<div className="social-links">
  <a
    href="https://www.facebook.com/hay.mi.kyaw.261302"
    target="_blank"
    rel="noreferrer"
  >
    💗 Facebook
  </a>

  <a
    href="https://github.com/haymikyaw8-prog
    "
    target="_blank"
    rel="noreferrer"
  >
    🐱 GitHub
  </a>

  <a href="tel:09988787621">
  📞 09988787621
</a>
</div>
    </a>

    <a href="#contact" className="home-btn contact-btn">
      Contact Me 💌
    </a>
  </div>
</section>
<Reveal>
      
<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-heading">
      <span className="about-label">GET TO KNOW ME</span>
      <h2>About Me</h2>
      <p>
        A little introduction about who I am, what I learn,
        and what I want to achieve.
      </p>
    </div>

    <div className="about-grid">
    
      <div className="about-main">
        <div className="about-card about-intro">
          <h3>Hello, I'm Hay Mi Kyaw! 💗</h3>
          <p>
            I'm a final-year Computer Science studentwho enjoys exploring technology and creating digital solutions. I like learning how websites and software work, experimenting with new ideas, and improving my technical skills through hands-on practice.
          </p>
          <div className="about-languages">
    <h3>🌸 Languages</h3>
    <p>🇲🇲 Myanmar — Native</p>
    <p>🇬🇧 English — Intermediate</p>
    <p>🇯🇵 Japanese — Basic</p>
  </div>
        </div>

        <div className="about-card">
          <h3>🎓 Education</h3>
          <h4>University of Computer Studies(Mdy)</h4>
          <p>Bachelor of Computer Science (B.C.Sc.)</p>
          <span className="about-tag">Final Year</span>
        </div>

        <div className="about-card">
          <h3>🎯 Career Objective</h3>
          <p>
           My goal is to become a skilled software developer who can build practical, reliable, and user-friendly applications. I'm looking forward to learning from experienced developers and gaining real-world experience through an internship.
          </p>
        </div>

        <div className="about-card">
          <h3>💡 Areas of Interest</h3>
          <div className="about-interests">
            <span>Web Development</span>
            <span>Frontend Development</span>
            <span>Backend Development</span>
            <span>Database Design</span>
            <span>Software Engineering</span>
          </div>
        </div>
      </div>

      <aside className="about-sidebar">
        <div className="about-facts">
          <h3>✨ Quick Facts</h3>

          <div className="about-fact">
            <span className="fact-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Madaya,Mandalay</p>
            </div>
          </div>

          <div className="about-fact">
            <span className="fact-icon">🎓</span>
            <div>
              <h4>Education</h4>
              <p>Final-Year Computer Science Student</p>
            </div>
          </div>

          <div className="about-fact">
            <span className="fact-icon">💻</span>
            <div>
              <h4>Technical Focus</h4>
              <p>Java, JavaScript, PHP, Python, MySQL,react</p>
            </div>
          </div>

          <div className="about-fact">
            <span className="fact-icon">🚀</span>
            <div>
              <h4>Experience</h4>
              <p>Academic Software Projects</p>
            </div>
          </div>
        </div>

        <div className="about-quote">
          <span>“</span>
          <p>
            “Exploring new technologies and bringing innovative ideas to life.”
          </p>
          <small>— My Journey</small>
        </div>
      </aside>
    </div>
  </div>
</section>
</Reveal>

     <section id="skills" className="skills-section">
  <h2>My Skills <span>♡</span></h2>
  <p className="skills-subtitle">
    Technologies I use and skills I continue to develop.
  </p>

  <div className="skills-grid">
    {skillCategories.map((category) => (
      <div className="skill-card" key={category.title}>
        <h3>
          <span>{category.icon}</span> {category.title}
        </h3>

        <div className="skill-tags">
          {category.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      
<section id="projects" className="projects-section">
  <p className="section-label">MY WORK</p>

  <h2>
    My Academic Projects <span>♡</span>
  </h2>

  
<div className="projects-grid">
  {projects.map((project) => (
    <ProjectGallery
      key={project.id}
      project={project}
    />
  ))}
</div>

</section>





      <section id="contact" className="contact-section">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Contact Me <span>♡</span></h2>
        <p>Thank you for visiting my portfolio! 💗</p>
      </section>
     <div className="contact-layout">
  <div className="contact-form-side">
 
    <Contact />
  </div>

  <div className="contact-info-side">
    <SocialLinks />
  </div>
</div>

<NameSaver />
      

     

   <Footer />
    </>
  )
}

export default App
