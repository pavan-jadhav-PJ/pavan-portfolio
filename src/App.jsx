import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">PJ.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero / Home */}
      <section id="home" className="hero">

        {/* Profile Photo */}
        <div className="profile-photo-container">
          <img
            src="/pavan.jpg"
            alt="Pavan Jadhav"
            className="profile-photo"
          />
        </div>

        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Pavan <span>Jadhav</span>
        </h1>

        <h2>MCA Student • Software Developer • Tech Enthusiast</h2>

        <p className="hero-description">
          Second Year MCA student passionate about software development,
          data science, databases and cloud technologies. I enjoy
          learning new technologies and turning ideas into practical
          solutions.
        </p>

        <div className="hero-buttons">

          <a href="#resume" className="btn primary-btn">
            View Resume
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:pavanj1504@gmail.com">
            Email
          </a>

        </div>

      </section>


      {/* About */}
<section id="about" className="section about-section">

  <p className="section-label">ABOUT ME</p>

  <div className="about-heading">
    <h2>Who I Am</h2>

    <p>
      A curious developer who enjoys learning, building and
      exploring new technologies.
    </p>
  </div>

  <div className="about-grid">

    {/* About Text */}
    <div className="about-content">

      <p className="section-text">
        I am a Second Year Master of Computer Applications (MCA)
        student at Modern College of Engineering, with a strong
        interest in software development and emerging technologies.
      </p>

      <p className="section-text">
        I have a foundation in programming, databases, web
        development, data science and cloud computing. I enjoy
        applying what I learn to practical projects and continuously
        improving my technical skills.
      </p>

      <p className="section-text">
        My goal is to build a strong career in the software industry
        while gaining real-world experience and exploring technologies
        that solve practical problems.
      </p>

    </div>


    {/* Highlights */}
    <div className="about-highlights">

      <div className="about-card">
        <span className="about-card-number">01</span>
        <div>
          <h3>Development</h3>
          <p>
            Building applications and strengthening my programming
            skills.
          </p>
        </div>
      </div>

      <div className="about-card">
        <span className="about-card-number">02</span>
        <div>
          <h3>Data & AI</h3>
          <p>
            Exploring data science, machine learning and data
            visualization.
          </p>
        </div>
      </div>

      <div className="about-card">
        <span className="about-card-number">03</span>
        <div>
          <h3>Cloud & Technology</h3>
          <p>
            Learning cloud platforms, databases and modern
            technologies.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

      {/* Skills */}
      <section id="skills" className="section">

        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">

          <div className="skill">Java</div>
          <div className="skill">Python</div>
          <div className="skill">C / C++</div>
          <div className="skill">SQL</div>
          <div className="skill">HTML / CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">MySQL</div>
          <div className="skill">Oracle</div>
          <div className="skill">Git & GitHub</div>

        </div>

      </section>


      {/* Education */}
      <section id="education" className="section">

        <p className="section-label">EDUCATION</p>

        <h2>My Academic Journey</h2>

        <div className="education-card">

          <h3>Master of Computer Applications</h3>

          <p>Modern College of Engineering</p>

          <span>2025 – Present</span>

        </div>

        <div className="education-card">

          <h3>Bachelor of Science in Computer Science</h3>

          <p>Computer Science</p>

        </div>

      </section>


      {/* Resume */}
      <section id="resume" className="resume-section">

        <div className="resume-content">

          <p className="section-label">MY RESUME</p>

          <h2>My Professional Profile</h2>

          <p className="resume-description">
            Interested in knowing more about my education, technical
            skills and experience? Take a look at my resume.
          </p>

          <div className="resume-card">

            <div className="resume-icon">
              📄
            </div>

            <div className="resume-info">

              <h3>Pavan Jadhav</h3>

              <p>
                MCA Student • Software Developer
              </p>

              <span>
                Resume • PDF
              </span>

            </div>

            <div className="resume-actions">

              <a
                href="/Pavan_Jadhav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary-btn"
              >
                View Resume
              </a>

              <a
                href="/Pavan_Jadhav_Resume.pdf"
                download
                className="btn secondary-btn"
              >
                Download
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact-section">

        <p className="section-label">CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          Feel free to connect with me through the platforms below.
        </p>

        <div className="social-links">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:pavanj1504@gmail.com">
            Email
          </a>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section projects-section">

        <p className="section-label">MY PROJECTS</p>

        <h2>Things I've Built</h2>

        <p className="section-text">
          A selection of academic and personal projects where I applied
          programming, database, web development and machine learning
          concepts to build practical solutions.
        </p>

        <div className="projects-grid">


          {/* Project 1 */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Student Performance Prediction
            </h3>

            <p>
              A machine learning application that analyzes student
              academic data and predicts performance using data
              preprocessing, visualization and classification techniques.
            </p>

            <div className="project-tech">

              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>React</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Banking Management System
            </h3>

            <p>
              A desktop banking management application for managing
              customers, accounts, deposits, withdrawals and transactions
              using a database-driven architecture.
            </p>

            <div className="project-tech">

              <span>Java</span>
              <span>Java Swing</span>
              <span>JDBC</span>
              <span>Oracle</span>
              <span>SQL</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              Online Expense Tracker
            </h3>

            <p>
              A web-based expense management system that allows users
              to track expenses, manage categories and visualize
              financial data through charts and reports.
            </p>

            <div className="project-tech">

              <span>PHP</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Python</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>


          {/* Project 4 */}
          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>
              IoT Weather Data Logger
            </h3>

            <p>
              An IoT-based weather monitoring system that collects
              environmental data using sensors and a microcontroller
              and sends the collected information for monitoring.
            </p>

            <div className="project-tech">

              <span>ESP32</span>
              <span>DHT11</span>
              <span>IoT</span>
              <span>Sensors</span>
              <span>Cloud</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Pavan Jadhav. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default App