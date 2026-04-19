import { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/xeevkbzn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl tracking-tight mb-3">
            Welcome to the Brotherhood.
          </h2>
          <p className="text-light-gray text-lg">
            You're in, {name}. We'll be in touch when the doors open.
            <br />The Code starts now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight mb-4">
            Become a <span className="text-gold">Founding Brother</span>
          </h2>
          <p className="text-light-gray text-lg">
            Join the waitlist. Be among the first men to live by The Code.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-xl border border-dark-border bg-dark-card/80 backdrop-blur-sm"
        >
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What do your brothers call you?"
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-border text-white placeholder-light-gray/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Where do we reach you?"
                className="w-full px-4 py-3 rounded-lg bg-dark border border-dark-border text-white placeholder-light-gray/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold hover:bg-gold-dim text-dark font-heading font-bold text-lg py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "I'm Ready"}
          </button>

          <p className="text-center text-light-gray/50 text-xs mt-4">
            No spam. Just brotherhood.
          </p>
        </form>
      </div>
    </section>
  );
}
