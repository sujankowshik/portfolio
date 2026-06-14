import { X, Printer, Phone, Mail, Github, Linkedin, Check } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      {/* Print-specific style overrides injected dynamically */}
      <style>{`
        @media print {
          /* Hide everything except the print area */
          body * {
            visibility: hidden;
            background: transparent !important;
          }
          #resume-print-area, #resume-print-area * {
            visibility: visible;
          }
          #resume-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            background: white !important;
            color: black !important;
            padding: 20px !important;
            margin: 0 !important;
          }
          /* Hide close/print header button during print */
          .no-print {
            display: none !important;
          }
          /* Force standard text colors and backgrounds for printing */
          .print-text-black {
            color: #000000 !important;
          }
          .print-text-gray {
            color: #4b5563 !important;
          }
          .print-border-gray {
            border-color: #d1d5db !important;
          }
          .print-bullet {
            color: #000000 !important;
          }
        }
      `}</style>

      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-[2rem] border border-white/10 bg-[#141418] text-slate-100 shadow-2xl">
        
        {/* Header Action Bar */}
        <div className="no-print flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Sujan's Resume</h2>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              <Printer size={16} />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/[0.05] p-2 text-slate-400 transition hover:bg-white/[0.1] hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Paper Preview */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#0C0C0C]">
          <div
            id="resume-print-area"
            className="mx-auto w-full max-w-[800px] rounded-2xl border border-white/10 bg-white p-8 text-black md:p-12 shadow-md print:shadow-none"
          >
            
            {/* Header: Name & Contact Info */}
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 print-text-black uppercase">
                Sujan Kowshik Jilla
              </h1>
              
              <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 print-text-gray">
                <span className="flex items-center gap-1">
                  <Phone size={14} className="text-cyan-600 print-text-black" />
                  +91 7842361318
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail size={14} className="text-cyan-600 print-text-black" />
                  sujankowshikjilla@gmail.com
                </span>
                <span>•</span>
                <a
                  href="https://github.com/sujankowshik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <Github size={14} className="text-cyan-600 print-text-black" />
                  GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/sujankowshikjilla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <Linkedin size={14} className="text-cyan-600 print-text-black" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Education
              </h3>
              
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 print-text-black text-[15px]">
                        Bachelor of Engineering in Computer Science and Engineering
                      </h4>
                      <p className="text-sm text-gray-700 print-text-gray">Anurag University, Hyderabad</p>
                    </div>
                    <span className="text-sm text-gray-600 print-text-gray font-semibold shrink-0">2023 - 2027</span>
                  </div>
                  <p className="text-sm text-gray-600 print-text-gray mt-0.5">CGPA: 9.52</p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 print-text-black text-[15px]">
                        Board of Intermediate Education, Telangana
                      </h4>
                      <p className="text-sm text-gray-700 print-text-gray">Trividyaa Junior College, Hyderabad</p>
                    </div>
                    <span className="text-sm text-gray-600 print-text-gray font-semibold shrink-0">2021 - 2023</span>
                  </div>
                  <p className="text-sm text-gray-600 print-text-gray mt-0.5">Percentage: 97.00%</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Personal Projects
              </h3>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 print-text-black text-[15px]">
                    Financial Portfolio Dashboard
                  </h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-gray-700 print-text-gray">
                    <li>Web application to track investments and analyze financial trends using Yahoo Finance API, Chart.js.</li>
                    <li>Built a responsive dashboard with React.js and Node.js.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 print-text-black text-[15px]">
                    Full-Stack eCommerce Store with Admin Dashboard
                  </h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-gray-700 print-text-gray">
                    <li>Developed secure online shopping platform with user authentication, Stripe/PayPal payment integration.</li>
                    <li>Admin dashboard for inventory, sales, and customer tracking; implemented JWT & Firebase Auth.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 print-text-black text-[15px]">
                    House Price Prediction
                  </h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-gray-700 print-text-gray">
                    <li>Machine learning web application using Flask for real estate analysis, achieving 96% accuracy.</li>
                    <li>Leveraged ML algorithms, CSS, and HTML for a robust solution.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Achievements
              </h3>
              
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700 print-text-gray">
                <li><span className="font-bold text-gray-800 print-text-black">1st Place - Tejas 2K25 (Anurag University)</span>: Secured top position in a competitive tech event.</li>
                <li><span className="font-bold text-gray-800 print-text-black">2nd Place - Hackverse (Anurag University)</span>: Earned 2nd place for innovative solution among top-tier teams.</li>
                <li><span className="font-bold text-gray-800 print-text-black">Top Performer - Visionnova (Anurag University)</span>: Recognized as a top performer in a highly competitive event.</li>
                <li><span className="font-bold text-gray-800 print-text-black">Top 10 Finalist - Udhgam Hackathon (Woxsen University)</span>: Achieved top 10 for developing a creative and impactful project.</li>
                <li><span className="font-bold text-gray-800 print-text-black">Top 10 Finalist - Tech Hack (Anurag University)</span>: Secured top 10 position showcasing technical expertise and problem-solving skills.</li>
              </ul>
            </div>

            {/* Competitive Programming */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Competitive Programming
              </h3>
              
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700 print-text-gray">
                <li>Solved 150+ problems on LeetCode, Codeforces, and GFG.</li>
                <li>Practicing core topics: Arrays, Strings, Graphs, DP, Trees.</li>
              </ul>
            </div>

            {/* Technical Skills and Interests */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Technical Skills & Interests
              </h3>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 print-text-gray">
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Programming Languages:</span> JavaScript, Python, C, Java, SQL
                </div>
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Web Technologies:</span> HTML5, CSS, React.js, Node.js
                </div>
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Databases:</span> MySQL, Firebase
                </div>
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Tools & Frameworks:</span> Git, REST APIs, JWT Authentication, Flask
                </div>
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Finance Security:</span> Secure auth, Encryption, Payment gateways
                </div>
                <div>
                  <span className="font-semibold text-gray-900 print-text-black">Coursework:</span> DSA, OS, OOP, DBMS, Software Engineering
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b-2 border-gray-200 pb-1 print-border-gray print-text-black">
                Certifications
              </h3>
              
              <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700 print-text-gray">
                <li>JPMorgan Chase & Co - Software Engineering Job Simulation (Forage)</li>
                <li>AWS Academy Graduate - AWS Academy Data Engineering</li>
                <li>Python (HackerRank)</li>
                <li>CSS (HackerRank)</li>
              </ul>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ResumeModal;
