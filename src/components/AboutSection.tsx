const skills = [
  "JavaScript", "Python", "C", "Java", "SQL",
  "HTML5", "CSS", "React.js", "Node.js",
  "MySQL", "Firebase", "Git", "REST APIs",
  "JWT Auth", "Flask", "Data Structures & Algorithms"
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-6 py-24 sm:px-10 lg:px-20 bg-[#0C0C0C]"
    >
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            About
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Column - Bio, Education, Certifications */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-300">
                I'm a Computer Science Engineering student passionate about
                full-stack development, AI integration, and solving complex
                problems through technology.
              </p>

              <p className="text-lg leading-8 text-slate-300">
                I enjoy building scalable applications, participating in
                hackathons, and continuously learning modern technologies.
                My areas of interest include Web Design & Development, FinTech, and Machine Learning.
              </p>
            </div>

            {/* Education */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-3">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-bold text-white text-lg">
                      Bachelor of Engineering in CSE
                    </h4>
                    <span className="text-cyan-300 text-sm font-semibold shrink-0">2023 - 2027</span>
                  </div>
                  <p className="text-slate-300 mt-1">Anurag University, Hyderabad</p>
                  <p className="text-slate-400 text-sm mt-1">CGPA: <span className="text-cyan-400 font-semibold">9.52</span></p>
                </div>

                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-bold text-white text-lg">
                      Board of Intermediate Education
                    </h4>
                    <span className="text-cyan-300 text-sm font-semibold shrink-0">2021 - 2023</span>
                  </div>
                  <p className="text-slate-300 mt-1">Trividyaa Junior College, Hyderabad</p>
                  <p className="text-slate-400 text-sm mt-1">Percentage: <span className="text-cyan-400 font-semibold">97.00%</span></p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-3">
                Certifications
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Software Engineering Job Simulation</p>
                    <p className="text-sm text-slate-400">JPMorgan Chase & Co (Forage)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">AWS Academy Graduate</p>
                    <p className="text-sm text-slate-400">AWS Academy Data Engineering</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Python & CSS Skills Certificates</p>
                    <p className="text-sm text-slate-400">HackerRank Certified</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Achievements & Tech Stack */}
          <div className="space-y-10">
            {/* Tech Stack */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-3 mb-6">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-3">
                Achievements & Hackathons
              </h3>

              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl leading-none">🏆</span>
                  <div>
                    <p className="font-semibold text-white">1st Place — Tejas 2K25</p>
                    <p className="text-sm text-slate-400">Secured top position in a competitive tech event at Anurag University.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl leading-none">🥈</span>
                  <div>
                    <p className="font-semibold text-white">2nd Place — Hackverse</p>
                    <p className="text-sm text-slate-400">Earned 2nd place for innovative solutions among top-tier collegiate teams.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl leading-none">⭐</span>
                  <div>
                    <p className="font-semibold text-white">Top Performer — Visionnova</p>
                    <p className="text-sm text-slate-400">Recognized as a top performer in a highly competitive university hackathon.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl leading-none">🎯</span>
                  <div>
                    <p className="font-semibold text-white">Top 10 Finalist — Udhgam Hackathon</p>
                    <p className="text-sm text-slate-400">Reached top 10 at Woxsen University for developing a creative, high-impact project.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl leading-none">💡</span>
                  <div>
                    <p className="font-semibold text-white">Top 10 Finalist — Tech Hack</p>
                    <p className="text-sm text-slate-400">Showcased robust technical expertise and problem-solving skills at Anurag University.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;