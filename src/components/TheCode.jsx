const principles = [
  {
    number: "I",
    title: "Beat Yesterday",
    description: "Every day you wake up with one mission: be better than the man you were 24 hours ago. No exceptions.",
  },
  {
    number: "II",
    title: "Embrace The Hard Path",
    description: "Comfort is where ambition goes to die. Seek the resistance. That's where growth lives.",
  },
  {
    number: "III",
    title: "Accept The Call Out",
    description: "Your brothers will hold a mirror to your face. Don't flinch. The truth is how we sharpen each other.",
  },
  {
    number: "IV",
    title: "Share Your Story",
    description: "Vulnerability isn't weakness — it's the hardest kind of strength. Your story will ignite someone else's fire.",
  },
  {
    number: "V",
    title: "Show Up. Always.",
    description: "Motivation fades. Discipline doesn't. Consistency is the only currency that compounds.",
  },
  {
    number: "VI",
    title: "Guard Your Purpose",
    description: "Know what you're called for. Protect it with everything you have. Let nothing pull you off course.",
  },
  {
    number: "VII",
    title: "Rise Together",
    description: "Iron sharpens iron. No man reaches supreme alone. We climb together or not at all.",
  },
];

export default function TheCode() {
  return (
    <section className="py-24 px-6 bg-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            The <span className="text-gold">Code</span>
          </h2>
          <p className="text-light-gray text-lg max-w-xl mx-auto">
            Seven principles. Non-negotiable. This is what every brother lives by.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group flex items-start gap-5 sm:gap-6 p-5 sm:p-6 rounded-xl border border-dark-border bg-dark-card/50 hover:border-gold/30 hover:bg-dark-card transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center font-heading font-bold text-gold text-lg sm:text-xl group-hover:bg-gold/20 transition-colors duration-300">
                {principle.number}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
                  {principle.title}
                </h3>
                <p className="text-light-gray text-sm sm:text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
