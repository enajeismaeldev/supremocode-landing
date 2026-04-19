import Hero from "./components/Hero";
import TheCode from "./components/TheCode";
import About from "./components/About";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SupremoCode" className="h-12 w-auto" />
            <span className="font-heading font-bold text-xl tracking-tight">
              Supremo<span className="text-gold">Code</span>
            </span>
          </div>
          <a
            href="#waitlist"
            className="hidden sm:inline-block bg-gold/10 hover:bg-gold/20 text-gold font-medium text-sm px-5 py-2 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <Hero />
      <TheCode />
      <About />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
