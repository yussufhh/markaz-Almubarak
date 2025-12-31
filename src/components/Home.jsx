import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import LanguageSelector from './LanguageSelector';
import { 
  Menu, X, ArrowRight, Star, BookOpen, ShieldCheck, Users, Calendar, 
  Award, GraduationCap, CheckCircle, Heart, ChevronRight, MapPin, Phone,
  Mail, Globe, Sparkles, Target, TrendingUp, Clock, Video, Download,
  MessageCircle, Share2, Facebook, Twitter, Instagram, Linkedin, Play,
  BookMarked, Lightbulb, Zap, Trophy, Gift, Bell, Search, Filter,
  Layout, FileText, BarChart, PieChart, Activity, Headphones, Music
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const slideIn = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const parentTestimonials = [
    {
      text: t('testimonials.parent1.text'),
      parent: t('testimonials.parent1.parent'),
      location: t('testimonials.parent1.location'),
      rating: 5,
      image: "FA"
    },
    {
      text: t('testimonials.parent2.text'),
      parent: t('testimonials.parent2.parent'),
      location: t('testimonials.parent2.location'),
      rating: 5,
      image: "HI"
    },
    {
      text: t('testimonials.parent3.text'),
      parent: t('testimonials.parent3.parent'),
      location: t('testimonials.parent3.location'),
      rating: 5,
      image: "AM"
    },
    {
      text: t('testimonials.parent4.text'),
      parent: t('testimonials.parent4.parent'),
      location: t('testimonials.parent4.location'),
      rating: 5,
      image: "OK"
    }
  ];

  const events = [
    { title: t('events.annualGraduation'), date: "March 15, 2024", type: t('events.types.graduation') },
    { title: t('events.quranCompetition'), date: "April 20, 2024", type: t('events.types.competition') },
    { title: t('events.parentWorkshop'), date: "May 10, 2024", type: t('events.types.workshop') },
    { title: t('events.ramadanProgram'), date: "June 5, 2024", type: t('events.types.special') }
  ];

  const stats = [
    { value: t('stats.activeStudents.value'), label: t('stats.activeStudents.label'), sublabel: t('stats.activeStudents.sublabel'), icon: Users },
    { value: t('stats.yearsExcellence.value'), label: t('stats.yearsExcellence.label'), sublabel: t('stats.yearsExcellence.sublabel'), icon: Calendar },
    { value: t('stats.certifiedStaff.value'), label: t('stats.certifiedStaff.label'), sublabel: t('stats.certifiedStaff.sublabel'), icon: Award },
    { value: t('stats.hifdh.value'), label: t('stats.hifdh.label'), sublabel: t('stats.hifdh.sublabel'), icon: GraduationCap },
    { value: t('stats.teachers.value'), label: t('stats.teachers.label'), sublabel: t('stats.teachers.sublabel'), icon: BookOpen },
    { value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label'), sublabel: t('stats.satisfaction.sublabel'), icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % parentTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-blue-100/50 py-3' 
          : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 overflow-hidden ${
              scrolled 
                ? 'bg-white' 
                : 'bg-white'
            }`}>
              <img src={logo} alt="Markaz-Almubarak Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-2xl leading-none tracking-tight ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}>
                {t('nav.brandName')}
              </span>
              <span className={`text-xs tracking-widest font-bold ${
                scrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                {t('nav.brandSubtitle')}
              </span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-6">
            {[
              { name: t('nav.home'), href: '#hero' },
              { name: t('nav.programs'), href: '#programs' },
              { name: t('nav.about'), href: '#about-us' },
              { name: t('nav.success'), href: '#success-stories' },
              { name: t('nav.contact'), href: '#contact' }
            ].map((item, idx) => (
              <motion.a 
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-sm font-bold transition-all relative group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  scrolled ? 'bg-blue-600' : 'bg-blue-200'
                }`}></span>
              </motion.a>
            ))}
            <LanguageSelector />
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-blue-900 shadow-xl shadow-blue-900/20'
              } px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-2xl transition-all duration-300`}
            >
              {t('nav.enrollNow')}
            </motion.button>
          </div>

          <button 
            className="lg:hidden relative z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-blue-900' : 'text-white'} size={30} strokeWidth={2.5} />
            ) : (
              <Menu className={scrolled ? 'text-blue-900' : 'text-white'} size={30} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-blue-100 shadow-2xl"
            >
              <div className="px-6 py-6 space-y-3">
                {[
                  { name: t('nav.home'), href: 'hero' },
                  { name: t('nav.programs'), href: 'programs' },
                  { name: t('nav.about'), href: 'about-us' },
                  { name: t('nav.success'), href: 'success-stories' },
                  { name: t('nav.contact'), href: 'contact' }
                ].map((item) => (
                  <motion.a 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    href={`#${item.href}`}
                    className="block text-gray-700 font-bold hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-2 pb-2">
                  <LanguageSelector />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all mt-4">
                  {t('nav.enrollNow')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-md shadow-xl"
            >
              <Star size={16} className="text-blue-300" fill="currentColor" />
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                {t('hero.badge')}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8"
            >
              {t('hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200">
                {t('hero.title2')}
              </span> {t('hero.title3')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300">
                {t('hero.title4')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center gap-3 group"
              >
                <span>{t('hero.enrollButton')}</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500/20 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-500/30 transition-all backdrop-blur-md"
              >
                {t('hero.exploreButton')}
              </motion.button>
            </motion.div>
            
            {/* Enhanced Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-14 flex flex-wrap items-center gap-8"
            >
              {[
                { value: t('stats.activeStudents.value'), label: t('hero.stats.students'), icon: Users },
                { value: t('stats.yearsExcellence.value'), label: t('hero.stats.years'), icon: Calendar },
                { value: t('stats.certifiedStaff.value'), label: t('hero.stats.certified'), icon: Award }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <stat.icon className="text-blue-300" size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Feature Card */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 relative z-10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BookOpen className="text-white" size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t('features.islamicStudies')}</div>
                      <div className="text-xs text-blue-200">{t('features.comprehensiveCurriculum')}</div>
                    </div>
                  </div>
                  <Sparkles className="text-blue-300" size={24} />
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: BookOpen, title: t('features.hifdh.title'), subtitle: t('features.hifdh.subtitle') },
                    { icon: Heart, title: t('features.akhlaq.title'), subtitle: t('features.akhlaq.subtitle') },
                    { icon: ShieldCheck, title: t('features.aqeedah.title'), subtitle: t('features.aqeedah.subtitle') },
                    { icon: Globe, title: t('features.arabic.title'), subtitle: t('features.arabic.subtitle') }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="text-blue-300" size={24} />
                        <div>
                          <div className="text-xs text-blue-200">{item.subtitle}</div>
                          <div className="text-base font-bold text-white">{item.title}</div>
                        </div>
                      </div>
                      <CheckCircle className="text-blue-400" size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between text-xs text-blue-200 mb-2">
                    <span>Student Satisfaction</span>
                    <span className="font-bold text-white">98%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '98%' }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Decorative Cards */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-xl"
              ></motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl opacity-20 blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- TRUST METRICS SECTION --- */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 rounded-full text-sm font-bold mb-6 shadow-lg"
            >
              <Trophy className="text-blue-600" size={18} />
              {t('trustMetrics.badge')}
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              {t('trustMetrics.heading')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {t('trustMetrics.headingHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('trustMetrics.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 relative overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <stat.icon className="text-white" size={32} strokeWidth={2.5} />
                    </div>
                    <Sparkles className={`text-blue-400 ${hoveredCard === idx ? 'animate-spin' : ''}`} size={24} />
                  </div>
                  
                  <div className="text-5xl font-black text-blue-900 mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-bold text-lg mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: idx * 0.2, duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlights */}
          <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t('trustMetrics.fastTrack.title'), desc: t('trustMetrics.fastTrack.description') },
              { icon: Target, title: t('trustMetrics.goalOriented.title'), desc: t('trustMetrics.goalOriented.description') },
              { icon: Heart, title: t('trustMetrics.caringEnvironment.title'), desc: t('trustMetrics.caringEnvironment.description') }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROGRAMS SECTION --- */}
      <section id="programs" className="py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-6 shadow-xl"
            >
              <BookOpen className="text-white" size={18} />
              {t('programs.badge')}
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              {t('programs.heading')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {t('programs.headingHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('programs.description')}
            </p>
          </motion.div>

          {/* Program Filters */}
          <motion.div 
            {...fadeIn}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {[
              { key: 'all-programs', label: t('programs.filters.all') },
              { key: 'core', label: t('programs.filters.core') },
              { key: 'advanced', label: t('programs.filters.advanced') },
              { key: 'language', label: t('programs.filters.language') }
            ].map((filter, idx) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(filter.key)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-blue-200 hover:border-blue-400'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: t('programs.quranMemorization.title'),
                subtitle: t('programs.quranMemorization.subtitle'),
                category: "core",
                description: t('programs.quranMemorization.description'),
                icon: BookOpen,
                gradient: "from-blue-600 to-blue-700",
                features: t('programs.quranMemorization.features', { returnObjects: true })
              },
              {
                title: t('programs.hadithStudies.title'),
                subtitle: t('programs.hadithStudies.subtitle'),
                category: "core",
                description: t('programs.hadithStudies.description'),
                icon: Star,
                gradient: "from-cyan-600 to-cyan-700",
                features: t('programs.hadithStudies.features', { returnObjects: true })
              },
              {
                title: t('programs.qiraatTajweed.title'),
                subtitle: t('programs.qiraatTajweed.subtitle'),
                category: "advanced",
                description: t('programs.qiraatTajweed.description'),
                icon: Heart,
                gradient: "from-indigo-600 to-indigo-700",
                features: t('programs.qiraatTajweed.features', { returnObjects: true })
              },
              {
                title: t('programs.aqeedahFiqh.title'),
                subtitle: t('programs.aqeedahFiqh.subtitle'),
                category: "core",
                description: t('programs.aqeedahFiqh.description'),
                icon: ShieldCheck,
                gradient: "from-blue-700 to-indigo-700",
                features: t('programs.aqeedahFiqh.features', { returnObjects: true })
              },
              {
                title: t('programs.islamicCharacter.title'),
                subtitle: t('programs.islamicCharacter.subtitle'),
                category: "core",
                description: t('programs.islamicCharacter.description'),
                icon: CheckCircle,
                gradient: "from-teal-600 to-cyan-600",
                features: t('programs.islamicCharacter.features', { returnObjects: true })
              },
              {
                title: t('programs.arabicLanguage.title'),
                subtitle: t('programs.arabicLanguage.subtitle'),
                category: "language",
                description: t('programs.arabicLanguage.description'),
                icon: Globe,
                gradient: "from-sky-600 to-blue-600",
                features: t('programs.arabicLanguage.features', { returnObjects: true })
              },
              {
                title: t('programs.islamicHistory.title'),
                subtitle: t('programs.islamicHistory.subtitle'),
                category: "advanced",
                description: t('programs.islamicHistory.description'),
                icon: BookMarked,
                gradient: "from-violet-600 to-purple-600",
                features: t('programs.islamicHistory.features', { returnObjects: true })
              },
              {
                title: t('programs.duaAdhkar.title'),
                subtitle: t('programs.duaAdhkar.subtitle'),
                category: "core",
                description: t('programs.duaAdhkar.description'),
                icon: Music,
                gradient: "from-rose-600 to-pink-600",
                features: t('programs.duaAdhkar.features', { returnObjects: true })
              },
              {
                title: t('programs.fiqhWorship.title'),
                subtitle: t('programs.fiqhWorship.subtitle'),
                category: "advanced",
                description: t('programs.fiqhWorship.description'),
                icon: Activity,
                gradient: "from-emerald-600 to-teal-600",
                features: t('programs.fiqhWorship.features', { returnObjects: true })
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <program.icon className="text-white" size={32} strokeWidth={2.5} />
                    </div>
                    <div className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      {program.subtitle}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  
                  <ul className="space-y-2.5 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-bold text-sm flex items-center gap-2 group/btn"
                  >
                    <span>{t('programs.learnMore')}</span>
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} />
                  </motion.button>
                </div>

                {/* Card Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-sm">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-black mb-4">{t('programs.contactTeam.heading')}</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              {t('programs.contactTeam.description')}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center gap-3"
            >
              <MessageCircle size={20} />
              <span>{t('programs.contactTeam.buttonText')}</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section id="about-us" className="py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full text-sm font-bold mb-6 backdrop-blur-md shadow-xl"
            >
              <ShieldCheck className="text-blue-300" size={18} />
              {t('whyChooseUs.badge')}
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {t('whyChooseUs.heading')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {t('whyChooseUs.headingHighlight')}
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t('whyChooseUs.description')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div {...fadeIn} className="space-y-6">
              {[
                {
                  title: t('whyChooseUs.reason1.title'),
                  description: t('whyChooseUs.reason1.description'),
                  icon: ShieldCheck,
                  stats: t('whyChooseUs.reason1.stats')
                },
                {
                  title: t('whyChooseUs.reason2.title'),
                  description: t('whyChooseUs.reason2.description'),
                  icon: Target,
                  stats: t('whyChooseUs.reason2.stats')
                },
                {
                  title: t('whyChooseUs.reason3.title'),
                  description: t('whyChooseUs.reason3.description'),
                  icon: Users,
                  stats: t('whyChooseUs.reason3.stats')
                },
                {
                  title: t('whyChooseUs.reason4.title'),
                  description: t('whyChooseUs.reason4.description'),
                  icon: Star,
                  stats: t('whyChooseUs.reason4.stats')
                },
                {
                  title: t('whyChooseUs.reason5.title'),
                  description: t('whyChooseUs.reason5.description'),
                  icon: Award,
                  stats: t('whyChooseUs.reason5.stats')
                },
                {
                  title: t('whyChooseUs.reason6.title'),
                  description: t('whyChooseUs.reason6.description'),
                  icon: Clock,
                  stats: t('whyChooseUs.reason6.stats')
                }
              ].map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-6 items-start bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <reason.icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-black text-xl">{reason.title}</h4>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-bold">
                        {reason.stats}
                      </span>
                    </div>
                    <p className="text-blue-100 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              {...scaleIn}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-3xl shadow-2xl"
            >
              <div className="text-center mb-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-6 shadow-2xl"
                >
                  <Users className="text-white" size={48} strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-4xl font-black text-white mb-4">{t('whyChooseUs.registration.heading')}</h3>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                  {t('whyChooseUs.registration.description')}
                </p>
              </div>
              
              <form className="space-y-5">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t('whyChooseUs.registration.parentName')} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder={t('whyChooseUs.registration.email')} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder={t('whyChooseUs.registration.phone')} 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <select 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-blue-900">{t('whyChooseUs.registration.selectProgram')}</option>
                    <option value="hifdh" className="bg-blue-900">{t('whyChooseUs.registration.programOptions.hifdh')}</option>
                    <option value="islamic-studies" className="bg-blue-900">{t('whyChooseUs.registration.programOptions.islamicStudies')}</option>
                    <option value="arabic" className="bg-blue-900">{t('whyChooseUs.registration.programOptions.arabic')}</option>
                    <option value="all" className="bg-blue-900">{t('whyChooseUs.registration.programOptions.all')}</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-blue-200 pointer-events-none" size={20} />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3"
                >
                  <span>{t('whyChooseUs.registration.submitButton')}</span>
                  <ArrowRight size={20} strokeWidth={3} />
                </motion.button>
                <p className="text-blue-200 text-sm text-center">
                  {t('whyChooseUs.registration.disclaimer')}
                </p>
              </form>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/10">
                <div className="text-center">
                  <ShieldCheck className="text-blue-300 mx-auto mb-2" size={24} />
                  <div className="text-white text-xs font-bold">{t('whyChooseUs.registration.verified')}</div>
                </div>
                <div className="text-center">
                  <Award className="text-blue-300 mx-auto mb-2" size={24} />
                  <div className="text-white text-xs font-bold">{t('whyChooseUs.registration.certified')}</div>
                </div>
                <div className="text-center">
                  <Star className="text-blue-300 mx-auto mb-2" size={24} />
                  <div className="text-white text-xs font-bold">{t('whyChooseUs.registration.trusted')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-black text-white mb-6">{t('whyChooseUs.videoTour.heading')}</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              {t('whyChooseUs.videoTour.description')}
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-blue-50 transition-all"
                >
                  <Play className="text-blue-600 ml-1" size={32} fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SUCCESS STORIES SECTION --- */}
      <section id="success-stories" className="py-28 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-6 shadow-xl"
            >
              <Trophy className="text-white" size={18} />
              {t('successStories.badge')}
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              {t('successStories.heading')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                {t('successStories.headingHighlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('successStories.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: t('successStories.achievement1.title'),
                description: t('successStories.achievement1.description'),
                icon: GraduationCap,
                highlight: t('successStories.achievement1.highlight'),
                gradient: "from-blue-600 to-blue-700",
                image: "🎓"
              },
              {
                title: t('successStories.achievement2.title'),
                description: t('successStories.achievement2.description'),
                icon: Users,
                highlight: t('successStories.achievement2.highlight'),
                gradient: "from-cyan-600 to-cyan-700",
                image: "👨‍👩‍👧‍👦"
              },
              {
                title: t('successStories.achievement3.title'),
                description: t('successStories.achievement3.description'),
                icon: Award,
                highlight: t('successStories.achievement3.highlight'),
                gradient: "from-indigo-600 to-indigo-700",
                image: "🏆"
              }
            ].map((achievement, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              >
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-24 h-24 bg-gradient-to-br ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <achievement.icon className="text-white" size={48} strokeWidth={2.5} />
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-black mb-4 uppercase tracking-wider">
                    {achievement.highlight}
                  </div>
                  <h4 className="text-2xl font-black text-blue-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">{achievement.description}</p>
                </div>

                {/* Decorative Number */}
                <div className="absolute top-4 right-4 text-6xl opacity-5 font-black text-blue-900">
                  {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <motion.div {...fadeInUp} className="mb-20">
            <h3 className="text-3xl font-black text-blue-900 text-center mb-12">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Calendar className="text-white" size={24} />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                      {event.type}
                    </span>
                  </div>
                  <h5 className="font-black text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Clock size={14} />
                    {event.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Parent Testimonials */}
          <motion.div {...fadeIn}>
            <h3 className="text-4xl font-black text-blue-900 text-center mb-12">
              {t('successStories.testimonialsHeading')}
            </h3>
            
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-xl border border-blue-200 relative overflow-hidden"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-9xl text-blue-100 font-serif leading-none">"</div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-blue-600" fill="currentColor" size={24} />
                      ))}
                    </div>
                    
                    <p className="text-2xl lg:text-3xl text-gray-800 mb-10 leading-relaxed italic font-medium">
                      "{parentTestimonials[activeTestimonial].text}"
                    </p>
                    
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                        {parentTestimonials[activeTestimonial].image}
                      </div>
                      <div>
                        <div className="font-black text-blue-900 text-xl">
                          {parentTestimonials[activeTestimonial].parent}
                        </div>
                        <div className="text-gray-600 flex items-center gap-2">
                          <MapPin size={14} />
                          {parentTestimonials[activeTestimonial].location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-3 mt-10">
                {parentTestimonials.map((_, idx) => (
                  <motion.button 
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    whileHover={{ scale: 1.2 }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 w-12' 
                        : 'bg-blue-200 w-3 hover:bg-blue-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-20">
              {[
                { label: t('successStories.statistics.parentSatisfaction'), value: "98%", icon: Heart },
                { label: t('successStories.statistics.studentRetention'), value: "95%", icon: Users },
                { label: t('successStories.statistics.graduationRate'), value: "92%", icon: GraduationCap },
                { label: t('successStories.statistics.communityRating'), value: "4.9/5", icon: Star }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl border border-blue-200 text-center shadow-sm hover:shadow-lg transition-all"
                >
                  <stat.icon className="text-blue-600 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-black text-blue-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION SECTION --- */}
      <section className="py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block p-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl mb-10 shadow-2xl"
            >
              <Sparkles className="text-white" size={64} strokeWidth={2} />
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              {t('cta.heading')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200">
                {t('cta.headingHighlight')}
              </span>
            </h2>
            
            <p className="text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-14 py-6 rounded-xl font-black text-xl hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center gap-3 group"
              >
                <span>{t('cta.registerButton')}</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500/20 border-2 border-white/30 text-white px-14 py-6 rounded-xl font-bold text-xl hover:bg-blue-500/30 transition-all backdrop-blur-md flex items-center justify-center gap-3"
              >
                <Phone size={24} />
                <span>{t('cta.contactButton')}</span>
              </motion.button>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {t('cta.benefits', { returnObjects: true }).map((text, idx) => {
                const icons = [ShieldCheck, Gift, Bell];
                const Icon = icons[idx];
                return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20"
                >
                  <Icon size={20} className="text-blue-300" />
                  <span className="font-bold">{text}</span>
                </motion.div>
                );
              })}
            </div>

            {/* Contact Methods */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
              {[
                { icon: Phone, text: "+254 7XX XXX XXX", label: t('cta.callUs') },
                { icon: Mail, text: "info@markaz-almubarak.com", label: t('cta.emailUs') },
                { icon: MapPin, text: "Eastleigh Sec 3, Nairobi", label: t('cta.visitUs') }
              ].map((contact, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-blue-100 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <contact.icon size={20} className="text-blue-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-blue-300">{contact.label}</div>
                    <div className="font-bold text-white">{contact.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-gradient-to-b from-blue-950 to-blue-900 pt-24 pb-10 border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                  <img src={logo} alt="Markaz-Almubarak Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl text-white tracking-wide">Markaz-Almubarak</span>
                  <span className="text-xs tracking-widest font-bold text-blue-300">EST. 2017</span>
                </div>
              </div>
              <p className="text-blue-200 max-w-md leading-relaxed mb-6 italic text-base">
                "{t('footer.tagline')}"
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, idx) => (
                  <motion.button 
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all"
                  >
                    <social.icon size={20} />
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h5 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                <Layout size={20} className="text-blue-400" />
                {t('footer.quickLinks.heading')}
              </h5>
              <ul className="space-y-3">
                {[
                  { key: 'aboutUs', label: t('footer.quickLinks.aboutUs') },
                  { key: 'programs', label: t('footer.quickLinks.ourPrograms') },
                  { key: 'admissions', label: t('footer.quickLinks.admissions') },
                  { key: 'successStories', label: t('footer.quickLinks.successStories') },
                  { key: 'contact', label: t('footer.quickLinks.contact') },
                  { key: 'faq', label: t('footer.quickLinks.faq') }
                ].map(item => (
                  <li key={item.key}>
                    <motion.a 
                      href={`#${item.key.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={16} className="text-blue-400 group-hover:text-blue-300" />
                      <span className="font-medium">{item.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h5 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400" />
                {t('footer.programs.heading')}
              </h5>
              <ul className="space-y-3">
                {[
                  { key: 'hifdh', label: t('footer.programs.hifdh') },
                  { key: 'tajweed', label: t('footer.programs.tajweed') },
                  { key: 'islamicStudies', label: t('footer.programs.islamicStudies') },
                  { key: 'arabic', label: t('footer.programs.arabic') },
                  { key: 'character', label: t('footer.programs.character') },
                  { key: 'fiqh', label: t('footer.programs.fiqhAqeedah') }
                ].map(item => (
                  <li key={item.key}>
                    <motion.a 
                      href="#programs"
                      whileHover={{ x: 5 }}
                      className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <CheckCircle size={14} className="text-blue-400 group-hover:text-blue-300" />
                      <span className="font-medium">{item.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                <Phone size={20} className="text-blue-400" />
                {t('footer.contactInfo.heading')}
              </h5>
              <div className="space-y-5">
                <div className="flex items-start gap-3 text-blue-200">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-white mb-1">{t('footer.contactInfo.addressLabel')}</div>
                    <span className="text-sm" dangerouslySetInnerHTML={{ __html: t('footer.contactInfo.addressText').replace(/\n/g, '<br />') }}></span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-blue-200">
                  <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-white mb-1">{t('footer.contactInfo.phoneLabel')}</div>
                    <span className="text-sm">{t('footer.contactInfo.phoneText')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-blue-200">
                  <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-white mb-1">{t('footer.contactInfo.emailLabel')}</div>
                    <span className="text-sm">{t('footer.contactInfo.emailText')}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-blue-200">
                  <Clock className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-white mb-1">{t('footer.contactInfo.hoursLabel')}</div>
                    <span className="text-sm" dangerouslySetInnerHTML={{ __html: t('footer.contactInfo.hoursText').replace(/\n/g, '<br />') }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                  <Bell className="text-blue-400" size={24} />
                  {t('footer.newsletter.heading')}
                </h4>
                <p className="text-blue-200">{t('footer.newsletter.description')}</p>
              </div>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')} 
                  className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-400 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <span>{t('footer.newsletter.buttonText')}</span>
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-blue-300 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-8 text-blue-300 text-sm">
              <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors font-medium">
                {t('footer.privacyPolicy')}
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors font-medium">
                {t('footer.termsOfService')}
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors font-medium">
                {t('footer.enrollmentTerms')}
              </motion.a>
            </div>
          </div>

          {/* Credits */}
          <div className="mt-8 text-center">
            <p className="text-blue-400 text-xs">
              {t('footer.credits')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
