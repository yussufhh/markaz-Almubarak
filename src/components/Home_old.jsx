import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Star, BookOpen, ShieldCheck, Users, Calendar, 
  Award, GraduationCap, CheckCircle, Heart, ChevronRight, MapPin, Phone,
  Mail, Globe, Zap, Target, TrendingUp, Code, Smartphone, Cloud, 
  Lock, BarChart, Database, Layers, Send, Check, Quote, Briefcase,
  MessageSquare, Play, Download, ExternalLink, Search, Settings
} from 'lucide-react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const testimonials = [
    {
      text: "This platform has revolutionized how we manage our business operations. The efficiency gains have been remarkable.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp Inc.",
      rating: 5
    },
    {
      text: "Outstanding service and support. The team went above and beyond to ensure our success.",
      author: "Michael Chen",
      role: "Director of Operations, Global Systems",
      rating: 5
    },
    {
      text: "Best investment we've made for our company. ROI was visible within the first month.",
      author: "Emily Rodriguez",
      role: "Founder, StartupHub",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-white">
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>TechSolutions</span>
              <span className={`text-xs tracking-wider font-medium ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>INNOVATION HUB</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Services', 'Solutions', 'Pricing', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} size={28} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t shadow-lg mt-4"
          >
            <div className="px-6 py-4 space-y-4">
              {['Services', 'Solutions', 'Pricing', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>
        <div className="w-10 h-10 bg-[#E6C17A] rounded-lg flex items-center justify-center rotate-45 group hover:rotate-0 transition-transform duration-300">
          <span className="text-[#0F3D2E] font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform">M</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#E6C17A] font-bold text-lg leading-none tracking-wider">MARKAZ</span>
          <span className="text-white text-xs tracking-[0.2em] font-light">ALMUBARAK</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Programs', 'About Us', 'Success Stories', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-[#E6C17A] text-sm font-medium transition-colors">
            {item}
          </a>
        ))}
        <button className="bg-[#E6C17A] text-[#0F3D2E] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Enroll Today
        </button>
      </div>

      <button className="md:hidden text-[#E6C17A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </nav>

  {/* --- HERO SECTION --- */}
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F3D2E]">
    {/* CSS Pattern Background */}
    <div className="absolute inset-0 opacity-10" style={{ 
      backgroundImage: `radial-gradient(circle at 2px 2px, #E6C17A 1px, transparent 0)`,
      backgroundSize: '40px 40px' 
    }}></div>
    
    {/* Animated Gradient Orb */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#E6C17A]/10 rounded-full blur-[120px] animate-pulse"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#E6C17A] text-xs font-semibold tracking-widest uppercase mb-6">
          <Star size={14} /> Established 2017 • Eastleigh, Nairobi
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Nurturing Young Hearts with the Light of <span className="text-[#E6C17A]">Qur’an & Sunnah</span>
        </h1>
        <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
          Providing a structured, child-friendly Islamic education for the next generation. We focus on authentic knowledge, character building, and academic excellence.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#E6C17A] text-[#0F3D2E] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(230,193,122,0.3)] transition-all flex items-center gap-2 group">
            Enroll Your Child Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Explore Programs
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden lg:block"
      >
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="h-64 bg-gradient-to-br from-[#E6C17A] to-[#d4ae61] rounded-3xl p-8 flex flex-col justify-end shadow-2xl">
               <BookOpen size={40} className="text-[#0F3D2E] mb-4" />
               <div className="text-[#0F3D2E] font-bold text-xl leading-tight">Authentic Curriculum</div>
            </div>
            <div className="h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"></div>
          </div>
          <div className="space-y-4">
            <div className="h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"></div>
            <div className="h-64 border-2 border-[#E6C17A] rounded-3xl p-8 flex flex-col justify-end">
               <ShieldCheck size={40} className="text-[#E6C17A] mb-4" />
               <div className="text-white font-bold text-xl leading-tight">Safe Environment</div>
            </div>
          </div>
        </div>
        {/* Geometric Accent */}
        <div className="absolute -top-10 -left-10 w-32 h-32 border border-[#E6C17A]/20 rounded-full"></div>
      </motion.div>
    </div>
  </section>

  {/* --- TRUST METRICS --- */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { val: "200+", label: "Students Educated", icon: Users },
          { val: "7+", label: "Years of Excellence", icon: Calendar },
          { val: "Certified", label: "Qualified Teachers", icon: Award },
          { val: "Annual", label: "Graduation Events", icon: GraduationCap },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center mb-4 group-hover:bg-[#0F3D2E] transition-colors duration-300">
              <stat.icon className="text-[#0F3D2E] group-hover:text-[#E6C17A] transition-colors" size={28} />
            </div>
            <h3 className="text-3xl font-black text-[#0F3D2E] mb-1">{stat.val}</h3>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* --- PROGRAMS SECTION --- */}
  <section id="programs" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0F3D2E] mb-4">Our Fields of Study</h2>
        <div className="w-20 h-1.5 bg-[#E6C17A] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">Providing a holistic curriculum that balances memorization, understanding, and practical application.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Qur’an Memorization", sub: "Hifdh", desc: "Systematic memorization with focus on retention and spiritual connection.", icon: BookOpen },
          { title: "Hadith Studies", sub: "Sunnah", desc: "Exploring the sayings and actions of Prophet Muhammad (PBUH) for daily life.", icon: Star },
          { title: "Qira’at & Tajweed", sub: "Recitation", desc: "Mastering the rules of phonetics and the beautification of the Qur’an.", icon: Heart },
          { title: "Aqeedah & Fiqh", sub: "Jurisprudence", desc: "Building a firm foundation in Islamic beliefs and practical rulings.", icon: ShieldCheck },
          { title: "Islamic Character", sub: "Akhlaq", desc: "Developing noble manners, discipline, and a servant-hearted personality.", icon: CheckCircle },
          { title: "Arabic Language", sub: "Linguistics", desc: "Understanding the language of revelation to deepen spiritual insight.", icon: Award }
        ].map((p, i) => (
          <motion.div 
            key={i}
            {...fadeIn}
            className="group relative bg-white border border-gray-100 p-10 rounded-[2rem] shadow-xl hover:shadow-[#E6C17A]/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F3D2E]/5 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-[#E6C17A]/10 transition-colors"></div>
            <p className="text-[#E6C17A] font-bold text-xs uppercase tracking-[0.2em] mb-4">{p.sub}</p>
            <div className="w-12 h-12 bg-[#0F3D2E] rounded-xl flex items-center justify-center mb-6 text-[#E6C17A] group-hover:scale-110 transition-transform">
              <p.icon size={24} />
            </div>
            <h4 className="text-2xl font-bold text-[#0F3D2E] mb-4">{p.title}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>
            <div className="flex items-center text-[#0F3D2E] font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ChevronRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* --- WHY CHOOSE US --- */}
  <section id="about-us" className="py-24 bg-[#0F3D2E] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl font-bold text-[#E6C17A] mb-8 leading-tight">Why Families Choose Markaz-Almubarak</h2>
          <div className="space-y-8">
            {[
              { t: "Child-Friendly Environment", d: "Safe, clean, and welcoming spaces designed specifically for young learners." },
              { t: "Structured Curriculum", d: "Age-appropriate lessons that ensure consistent progress throughout the years." },
              { t: "Small Class Sizes", d: "Personalized attention for every child to ensure no heart is left behind." },
              { t: "Eastleigh Community Trust", d: "A decade of serving Nairobi parents with integrity and religious excellence." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#E6C17A]/30 flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#E6C17A]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">{item.t}</h4>
                  <p className="text-white/60">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl"
        >
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-[#E6C17A] rounded-2xl mb-6">
              <Users size={32} className="text-[#0F3D2E]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Register for 2024/2025</h3>
            <p className="text-white/70 mb-8">Spaces are limited. Secure your child's place in our upcoming intake.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Parent Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E6C17A]" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E6C17A]" />
              <button className="w-full bg-[#E6C17A] text-[#0F3D2E] py-4 rounded-xl font-bold hover:bg-[#d4ae61] transition-all">
                Request Enrollment Pack
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* --- GRADUATION & ACHIEVEMENTS --- */}
  <section id="success-stories" className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Our Legacy of Excellence" sub="Celebrating milestones and community recognition since our founding in 2017." />
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Annual Graduations", text: "Honoring our Hifdh students in grand ceremonies with local scholars.", icon: GraduationCap },
          { title: "Parent Participation", text: "Regular workshops and seminars to bridge the gap between home and madrasa.", icon: Users },
          { title: "Regional Recognition", text: "Ranked as one of Eastleigh's most trusted centers for authentic knowledge.", icon: Award },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
          >
            <div className="w-16 h-16 bg-[#0F3D2E]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <item.icon size={32} className="text-[#0F3D2E]" />
            </div>
            <h4 className="text-xl font-bold text-[#0F3D2E] mb-3">{item.title}</h4>
            <p className="text-gray-500">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* --- CONVERSION CTA --- */}
  <section className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-[#0F3D2E] to-[#1a5d48] rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden"
      >
        {/* Geometric Accent Decoration */}
        <div className="absolute top-0 right-0 p-10 opacity-10">
           <div className="w-40 h-40 border-4 border-[#E6C17A] rotate-45"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
          Give Your Child the Gift of <span className="text-[#E6C17A]">Islamic Knowledge</span>
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto relative z-10">
          Join hundreds of families in Eastleigh Section 3 who have entrusted their children's spiritual growth to Markaz-Almubarak.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button className="bg-[#E6C17A] text-[#0F3D2E] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
            Register Now
          </button>
          <button className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
            Contact the Center
          </button>
        </div>
      </motion.div>
    </div>
  </section>

  {/* --- FOOTER --- */}
  <footer className="bg-[#0F3D2E] pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#E6C17A] rounded-xl flex items-center justify-center rotate-45">
              <span className="text-[#0F3D2E] font-bold text-2xl -rotate-45">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#E6C17A] font-bold text-2xl tracking-wider uppercase">Markaz-Almubarak</span>
              <span className="text-white/40 text-xs tracking-[0.3em]">ESTABLISHED 2017</span>
            </div>
          </div>
          <p className="text-white/60 max-w-sm leading-relaxed text-lg italic">
            "Nurturing the hearts of the Ummah with authentic knowledge according to the Qur’an and Sunnah."
          </p>
        </div>
        
        <div>
          <h5 className="text-white font-bold text-lg mb-6">Contact Us</h5>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/60">
              <MapPin className="text-[#E6C17A]" size={20} />
              <span>Eastleigh Section 3, Nairobi, KE</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Phone className="text-[#E6C17A]" size={20} />
              <span>+254 7XX XXX XXX</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <Calendar className="text-[#E6C17A]" size={20} />
              <span>Mon - Fri: 8am - 4pm</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold text-lg mb-6">Stay Connected</h5>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#E6C17A] hover:text-[#0F3D2E] transition-all cursor-pointer">
                <Star size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Markaz-Almubarak. All Islamic values respected.
        </p>
        <div className="flex gap-8 text-white/30 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-[#E6C17A]">Privacy Policy</a>
          <a href="#" className="hover:text-[#E6C17A]">Enrollment Terms</a>
        </div>
      </div>
    </div>
  </footer>
</div>
  );
};

const SectionHeader = ({ title, sub }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-[#0F3D2E] mb-4">{title}</h2>
    <div className="w-20 h-1.5 bg-[#E6C17A] mx-auto rounded-full mb-6"></div>
    <p className="text-gray-600 max-w-2xl mx-auto">{sub}</p>
  </div>
);

export default Home;