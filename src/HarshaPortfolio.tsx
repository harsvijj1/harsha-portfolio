import React, { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Briefcase, GraduationCap,
  Code, Award, ChevronRight, CheckCircle2, Star, Layers, Database, Terminal,
  Languages,
  FileCode,
  Wrench
} from 'lucide-react';

// Interfaces
interface Project {
  title: string;
  period?: string;
  description: string;
  highlights: string[];
}

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  projects: Project[];
}

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('summary');

  const resumeData = {
    name: "Harsha Srikanth Karna",
    role: "Principal Member – Development Lead",
    contact: {
      email: "hars_vijj@yahoo.co.in",
      phone: "+1 (929) 465 5547",
      address: "Nashua, NH 03062"
    },
    summary: [
      "15+ years of experience as a Full Stack Lead with primary technologies as Java/J2EE, Restful services, Spring boot, Hibernate, Oracle Cloud Infrastructure, OCI, MERN stack, React, Redux, Node JS, Redux Saga, Advanced Javascript ES6, Typescript, Knockout JS & Oracle commerce cloud.",
      "4 years of Cloud development experience in Oracle Cloud Infrastructure - OCI (similar to AWS or Microsoft Azure)",
      "Around 7 years of e-commerce applications development using ATG e-commerce platform and Oracle Commerce Cloud",
      "Strong business knowledge in e-commerce, banking and financial domains",
      "Profound knowledge and lead experience in Java, Spring boot, Microservices, Docker, Oracle db, Mongo db, Node JS and Restful Web Services",
      "Worked on a wide variety of UI technologies like React, Redux, Server Side Rendering, Node JS, Knockout JS, bootstrap, AJAX, Jquery, webpack, HTML5, CSS3 and Typescript",
      "Good experience in web application development, performance optimization techniques & Critical rendering path optimizations",
      "Proficient in full-stack development of software products from requirement analysis to system study, designing, coding, testing, de-bugging, documentation, and delivery",
      "Strong working experience with version control tools like GIT, Clearcase and Perforce",
      "Working experience with object-oriented design, analysis and agile methodologies",
    ],
    skills: {
      languages: ["Java", "J2EE", "JavaScript", "TypeScript", "Node JS"],
      cloud: ["OCI (Oracle Cloud Infrastructure)", "AWS", "Azure"],
      frontend: ["React", "Redux", "Redux Saga", "Knockout JS", "HTML5", "CSS3", "Bootstrap"],
      backend: ["Spring Boot", "Microservices", "Hibernate", "RESTful Web Services", "Docker"],
      tools: ["Terraform", "GIT", "Bitbucket", "JIRA", "Grafana", "Postman"]
    },
    experience: [
      {
        company: "Oracle America Inc.",
        location: "Nashua, NH",
        role: "Principal Member – Development Lead",
        period: "Nov 2016 – Present",
        projects: [
          {
            title: "OCI Operator Access Control",
            description: "End-to-end development of the Operator Access Control service.",
            highlights: [
              "Led the Console UI development using React, Redux, and TypeScript.",
              "Integrated Notifications, Logs, and Metrics services.",
              "Optimized UI performance, improving page load speeds by 50%."
            ]
          }
        ]
      },
      {
        company: "Experis US Inc. (Cisco Systems)",
        location: "Durham, NC",
        role: "Sr. Programmer Analyst",
        period: "Jan 2016 – Oct 2016",
        projects: [
          {
            title: "CDETS Issue Tracking",
            description: "Full-stack development for Cisco's internal defect tracking system.",
            highlights: [
              "Developed RESTful services and GWT UI components.",
              "Delivered high-priority user stories and resolved critical defects."
            ]
          }
        ]
      }
    ],
    education: "B.Tech in Electronics and Communication, JNTU Hyderabad (2007)",
    certifications: [
      "OCI Certified Cloud Applications Developer",
      "Sun Certified Java Programmer (SCJP)"
    ]
  };

  const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-3 mb-6 border-b pb-2 border-slate-200">
      <Icon className="text-sky-500/100" size={24} />
      <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 bg-slate-900 text-white p-8 lg:sticky lg:top-0 lg:h-screen shadow-xl">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold tracking-tight">{resumeData.name}</h1>
          <p className="text-blue-400 font-medium mt-1">{resumeData.role}</p>
        </div>

        <div className="space-y-4 mb-10 text-sm">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Mail size={16} className="text-blue-400" />
            <span>{resumeData.contact.email}</span>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <Phone size={16} className="text-blue-400" />
            <span>{resumeData.contact.phone}</span>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <MapPin size={16} className="text-blue-400" />
            <span>{resumeData.contact.address}</span>
          </div>
        </div>

        <nav className="space-y-1">
          {['summary', 'experience', 'skills', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-all font-medium ${activeTab === tab ? 'bg-sky-500/100 text-white' : 'text-slate-400 hover:bg-slate-800'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 max-w-5xl">
        {activeTab === 'summary' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <SectionHeader icon={User} title="Professional Profile" />
            <div className="grid gap-4">
              {resumeData.summary.map((point, i) => (
                <div key={i} className="flex text-left gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-10 animate-in slide-in-from-bottom-2 duration-500">
            <SectionHeader icon={Briefcase} title="Experience" />
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-sky-500/100" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-sky-700/100 font-semibold">{exp.company} | {exp.period}</p>
                </div>
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-4">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" /> {proj.title}
                    </h4>
                    <p className="text-slate-600 text-sm italic mb-3">{proj.description}</p>
                    <ul className="space-y-2">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex gap-2 text-slate-700 text-sm">
                          <ChevronRight className="text-blue-400 shrink-0" size={16} /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <div className="md:col-span-2">
              <SectionHeader icon={Code} title="Technical Stack" />
            </div>
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="capitalize font-bold text-slate-800 mb-4 flex items-center gap-2">
                  {category === 'languages' && <Languages size={18} />}
                  {category === 'cloud' && <Layers size={18} />}
                  {category === 'backend' && <Database size={18} />}
                  {category === 'frontend' && <FileCode size={18} />}
                  {category === 'tools' && <Wrench size={18} />}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-yellow-50 text-sky-700/100 text-xs font-bold rounded-full border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <SectionHeader icon={GraduationCap} title="Education" />
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="font-bold text-lg">{resumeData.education}</p>
                <p className="text-sky-700/100 font-medium">University Top Ranker</p>
              </div>
            </div>
            <div>
              <SectionHeader icon={Award} title="Certifications" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                    <Award className="text-yellow-500" />
                    <span className="font-medium text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;