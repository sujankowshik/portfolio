import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onDownloadResumeClick: () => void;
}

const HeroSection = ({ onDownloadResumeClick }: HeroSectionProps) => {
  const socials = [
    { icon: Github, href: "https://github.com/sujankowshik" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sujankowshikjilla/" },
    { icon: Mail, href: "mailto:sujankowshikjilla@gmail.com" },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0C0C0C] px-6 py-24 sm:px-10 lg:px-20">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-3xl"
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:65px_65px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <p className="text-sm tracking-wider text-cyan-300">
              Available For Internships
            </p>
          </motion.div>

          {/* Heading */}
          <div className="space-y-6">
            
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-black leading-none text-white sm:text-7xl lg:text-[7rem]"
            >
              Sujan
              <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kowshik
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="max-w-2xl text-xl leading-9 text-slate-300"
            >
              Full Stack Developer crafting scalable web applications,
              AI-powered products, and immersive digital experiences
              with modern technologies.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-10"
          >
            {[
              { value: "150+", label: "DSA Problems" },
              { value: "5+", label: "Hackathons" },
              { value: "9.52", label: "CGPA" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-4xl font-black text-cyan-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-5"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-3 rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={onDownloadResumeClick}
              className="rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400 hover:bg-white/[0.05]"
            >
              Download Resume
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-5 pt-2"
          >
            {socials.map(({ icon: Icon, href }, index) => (
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-300 backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          
          {/* Outer Glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Main Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl"
          >
            
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/10" />

            {/* Mini Top Blur */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10">
              
              {/* Profile Circle */}
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-5xl font-black text-white backdrop-blur-xl">
                SK
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-3xl font-bold text-white">
                  Software Engineer
                </h3>

                <p className="mt-3 text-slate-400">
                  Anurag University • Hyderabad
                </p>
              </div>

              {/* Cards */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                
                {[
                  "React Developer",
                  "AI Enthusiast",
                  "Problem Solver",
                  "Tech Explorer",
                ].map((item) => (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {item}
                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;