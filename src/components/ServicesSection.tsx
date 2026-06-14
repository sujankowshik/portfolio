import FadeIn from './FadeIn';


const SERVICES = [
  {
    number: '01',
    title: 'Full-Stack Web Development',
    description:
      'Building fast, responsive web applications with React, TypeScript, and TailwindCSS, backed by robust backends using Node.js, Express, and Firebase.',
  },
  {
    number: '02',
    title: 'Machine Learning & AI',
    description:
      'Developing and deploying predictive models and data-driven solutions using Python, Flask, and standard ML libraries with focus on accuracy and optimization.',
  },
  {
    number: '03',
    title: 'FinTech & Secure Integrations',
    description:
      'Implementing secure authentication mechanisms (JWT, Firebase Auth), encryption techniques, payment systems (Stripe, PayPal), and financial data APIs.',
  },
  {
    number: '04',
    title: 'Database Design & Management',
    description:
      'Designing, querying, and managing relational databases (MySQL) and NoSQL solutions (Firebase) to ensure data integrity and query efficiency.',
  },
  {
    number: '05',
    title: 'Data Structures & Algorithms',
    description:
      'Leveraging strong analytical skills with 150+ solved problems on platforms like LeetCode and Codeforces to build optimized, algorithmic solutions.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(215, 226, 234, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-cyan-400/20 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-white leading-tight relative inline-block w-fit transition-colors duration-300 group-hover:text-cyan-300"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-slate-300 max-w-2xl animate-pulse-slow"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.8,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
