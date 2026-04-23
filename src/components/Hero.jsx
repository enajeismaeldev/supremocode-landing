export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wide uppercase">Founding Brotherhood | Limited Spots</span>
        </div>

        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
          Live By <span className="text-gold">The Code.</span>
          <br />
          Become Supreme.
        </h1>

        <p className="text-light-gray text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A brotherhood for men who refuse to stay the same.
          <br className="hidden sm:block" />
          Beat yesterday. Every single day.
        </p>

        <a
          href="#waitlist"
          className="inline-block bg-gold hover:bg-gold-dim text-dark font-heading font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          Join The Brotherhood
        </a>

        <div className="mt-6 flex items-center justify-center gap-2 text-light-gray/60 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Founded in <span className="text-gold/80 font-medium">Boston, MA</span></span>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
