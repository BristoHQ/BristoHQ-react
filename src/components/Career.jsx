import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Career.css";

// Sample job data - Replace this with your actual data source
const jobsData = [
  // Uncomment below to show sample jobs
  /* 
  {
    id: 1,
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    urgent: false,
    description: "We're looking for an experienced full stack developer to join our growing team...",
    postedDate: "Posted 3 days ago",
    salary: "₹8-15 LPA",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    responsibilities: [
      "Develop and maintain web applications using modern technologies",
      "Collaborate with cross-functional teams to define and implement features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "3+ years of experience in full stack development",
      "Strong proficiency in React and Node.js",
      "Experience with TypeScript and modern JavaScript",
      "Knowledge of database design and optimization",
      "Excellent problem-solving and communication skills"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full-time", 
    location: "Bangalore",
    urgent: true,
    description: "Join our design team to create beautiful and intuitive user experiences...",
    postedDate: "Posted 1 day ago",
    salary: "₹6-12 LPA",
    experience: "2-4 years",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers to implement designs"
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing design projects",
      "Understanding of user-centered design principles",
      "Experience with design systems and component libraries"
    ]
  }
  */
];

const JobModal = ({ job, isOpen, onClose }) => {
  const applyForJob = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(
      `Hi BristoHQ Team,\n\nI am interested in applying for the ${jobTitle} position. Please find my resume attached.\n\nBest regards,`
    );
    window.location.href = `mailto:hr@bristohq.me?subject=${subject}&body=${body}`;
  };

  if (!isOpen || !job) return null;

  return (
    <div className={`modal ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="job-detail-title">{job.title}</div>
        <div className="job-detail-meta">
          <span className="job-badge">{job.type}</span>
          <span
            className={`job-badge ${job.location === "Remote" ? "remote" : ""}`}
          >
            {job.location}
          </span>
          {job.urgent && <span className="job-badge urgent">Urgent</span>}
          <span className="job-badge">{job.salary}</span>
          <span className="job-badge">{job.experience}</span>
        </div>

        <div className="job-section">
          <h3>About the Role</h3>
          <p>{job.description}</p>
        </div>

        <div className="job-section">
          <h3>Key Responsibilities</h3>
          <ul>
            {job.responsibilities?.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="job-section">
          <h3>Requirements</h3>
          <ul>
            {job.requirements?.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="job-section">
          <h3>Required Skills</h3>
          <div className="job-meta">
            {job.skills?.map((skill, index) => (
              <span key={index} className="job-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="apply-section">
          <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>
            Ready to Apply?
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Send your resume and portfolio to get started with {job.title}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => applyForJob(job.title)}
          >
            Apply Now
          </button>
          <button
            className="btn"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job, onClick }) => (
  <div className="job-card" onClick={() => onClick(job)}>
    <div className="job-title">{job.title}</div>
    <div className="job-meta">
      <span className="job-badge">{job.type}</span>
      <span
        className={`job-badge ${job.location === "Remote" ? "remote" : ""}`}
      >
        {job.location}
      </span>
      {job.urgent && <span className="job-badge urgent">Urgent</span>}
      <span className="job-badge">{job.salary}</span>
    </div>
    <div className="job-description">{job.description}</div>
    <div className="job-posted">{job.postedDate}</div>
    <button
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        onClick(job);
      }}
    >
      View Details
    </button>
  </div>
);

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <div className="page-title">Join Our Team</div>
        <div className="page-desc">
          Build the future of software with BristoHQ. We're looking for
          passionate developers, designers, and innovators to join our growing
          team.
        </div>
      </div>

      {/* Jobs Section */}
      <section id="jobs">
        <div className="section-title">Open Positions</div>

        {/* Jobs Grid */}
        {jobsData.length > 0 ? (
          <div className="jobs-grid">
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} onClick={handleJobClick} />
            ))}
          </div>
        ) : (
          /* No Jobs Available State */
          <div className="no-jobs">
            <div className="no-jobs-icon">💼</div>
            <h3>No Open Positions</h3>
            <p>
              We don't have any open positions right now, but we're always
              looking for talented individuals. Check back soon or send us your
              resume!
            </p>
            <Link to="/#contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        )}
      </section>

      {/* Job Detail Modal */}
      <JobModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} />

      <Footer />
    </>
  );
}
