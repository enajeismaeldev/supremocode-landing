const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Accountability That Hits Different",
    description: "Daily check-ins with brothers who won't let you slide. No sugar-coating, no participation trophies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Stories That Ignite",
    description: "Real transformation stories from real brothers. Raw, honest, and powerful enough to spark your next chapter.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Events & Meetups",
    description: "In-person gatherings in Boston, MA and virtual sessions worldwide. Brothers connect, challenge each other, and build unbreakable bonds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Coaches Who Push You",
    description: "Paid 1-on-1 or group sessions with coaches who've walked the path. In-person or virtual. No excuses.",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card/30 via-dark to-dark" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            What Is <span className="text-gold">SupremoCode</span>?
          </h2>
          <p className="text-light-gray text-lg max-w-2xl mx-auto leading-relaxed">
            A brotherhood born in Boston, MA, built to pull men out of complacency and keep you locked in on your purpose. 
            Built on action, not just inspiration. It's a covenant between men.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 sm:p-8 rounded-xl border border-dark-border bg-dark-card/50 hover:border-gold/30 hover:bg-dark-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-light-gray text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
