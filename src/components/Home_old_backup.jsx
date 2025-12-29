import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Star, BookOpen, ShieldCheck, Users, Calendar, 
  Award, GraduationCap, CheckCircle, Heart, ChevronRight, MapPin, Phone,
  Mail, Globe, Sparkles, Target, TrendingUp
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

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
              <Star size={14} className="text-yellow-400" /> Trusted by 10,000+ Businesses
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Smart Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Empower your enterprise with cutting-edge technology, innovative strategies, and expert guidance to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-3 group">
                Start Free Trial
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm flex items-center gap-3">
                <Play size={22} />
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">99.9%</div>
                <div className="text-sm text-blue-200">Uptime</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">150+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Dashboard Overview</div>
                      <div className="text-xs text-gray-500">Real-time Analytics</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-green-600" size={24} />
                      <div>
                        <div className="text-xs text-gray-500">Revenue Growth</div>
                        <div className="text-lg font-black text-gray-900">+127%</div>
                      </div>
                    </div>
                    <div className="text-green-600 text-sm font-bold">↑ 23.5%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-600" size={24} />
                      <div>
                        <div className="text-xs text-gray-500">Active Users</div>
                        <div className="text-lg font-black text-gray-900">125.4K</div>
                      </div>
                    </div>
                    <div className="text-blue-600 text-sm font-bold">↑ 18.2%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BarChart className="text-purple-600" size={24} />
                      <div>
                        <div className="text-xs text-gray-500">Conversion Rate</div>
                        <div className="text-lg font-black text-gray-900">34.7%</div>
                      </div>
                    </div>
                    <div className="text-purple-600 text-sm font-bold">↑ 12.3%</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-2xl rotate-12 opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-400 rounded-2xl -rotate-12 opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of tools designed to streamline operations, boost productivity, and drive measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance with sub-second response times for seamless user experience.", color: "blue" },
              { icon: Shield, title: "Bank-Level Security", desc: "Enterprise-grade encryption and compliance with industry standards.", color: "green" },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable cloud architecture that grows with your business needs.", color: "purple" },
              { icon: Target, title: "Precision Analytics", desc: "Advanced insights and reporting to make data-driven decisions.", color: "orange" },
              { icon: Smartphone, title: "Mobile Ready", desc: "Fully responsive design works flawlessly on all devices.", color: "pink" },
              { icon: Lock, title: "Data Privacy", desc: "Your data is encrypted, secured, and never shared with third parties.", color: "red" },
              { icon: Database, title: "Seamless Integration", desc: "Connect with 100+ tools and platforms you already use.", color: "indigo" },
              { icon: Settings, title: "Easy Customization", desc: "Tailor every aspect to match your unique workflow.", color: "teal" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Comprehensive Solutions for Every Need</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Code,
                title: "Custom Development",
                desc: "Bespoke software solutions tailored to your specific business requirements and industry standards.",
                features: ["Full-stack Development", "API Integration", "Database Design", "Quality Assurance"]
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                desc: "Modernize your operations with cutting-edge digital solutions that drive efficiency and innovation.",
                features: ["Process Automation", "Cloud Migration", "Legacy System Upgrade", "Digital Strategy"]
              },
              {
                icon: Briefcase,
                title: "Enterprise Consulting",
                desc: "Strategic guidance from industry experts to optimize your technology investments and workflows.",
                features: ["IT Strategy", "Architecture Design", "Performance Optimization", "Training Programs"]
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border-2 border-blue-100 hover:border-blue-300 transition-all group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <Check className="text-green-500 flex-shrink-0" size={18} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATISTICS SECTION --- */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "10,000+", label: "Active Clients", icon: Users },
              { number: "500M+", label: "Transactions Processed", icon: BarChart },
              { number: "99.9%", label: "Customer Satisfaction", icon: Star },
              { number: "150+", label: "Countries Served", icon: Globe }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <stat.icon className="text-blue-200" size={36} />
                </div>
                <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">What Our Clients Say</h2>
          </motion.div>

          <motion.div 
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <Quote className="text-blue-600 mb-6" size={48} />
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === idx ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
              PRICING PLANS
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Choose Your Perfect Plan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Flexible pricing options designed to scale with your business growth.
            </p>

            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button 
                onClick={() => setActiveTab('monthly')}
                className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'monthly' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setActiveTab('annual')}
                className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'annual' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'}`}
              >
                Annual <span className="text-green-600 text-xs ml-1">Save 20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: activeTab === 'monthly' ? '49' : '470',
                features: ["Up to 10 Users", "10GB Storage", "Basic Support", "API Access", "Mobile Apps"],
                recommended: false
              },
              {
                name: "Professional",
                price: activeTab === 'monthly' ? '99' : '950',
                features: ["Up to 50 Users", "100GB Storage", "Priority Support", "Advanced Analytics", "Custom Integrations", "Dedicated Manager"],
                recommended: true
              },
              {
                name: "Enterprise",
                price: activeTab === 'monthly' ? '249' : '2390',
                features: ["Unlimited Users", "Unlimited Storage", "24/7 Support", "White Label", "SLA Guarantee", "Custom Development"],
                recommended: false
              }
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                {...scaleIn}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-3xl ${plan.recommended ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105' : 'bg-white text-gray-900 border-2 border-gray-100'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-black mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className={plan.recommended ? 'text-blue-200' : 'text-gray-500'}>/{activeTab === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={plan.recommended ? 'text-blue-200' : 'text-green-500'} size={20} />
                      <span className={plan.recommended ? 'text-blue-100' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.recommended ? 'bg-white text-blue-600 hover:shadow-2xl' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join thousands of companies already using our platform to achieve their goals faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-blue-900 px-12 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                Start Your Free Trial
                <ArrowRight size={24} />
              </button>
              <button className="bg-white/10 border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-sm">
                Schedule a Demo
              </button>
            </div>
            <p className="text-blue-200 mt-8">No credit card required • 14-day free trial • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white">TechSolutions</span>
                  <span className="text-xs tracking-wider font-medium text-blue-400">INNOVATION HUB</span>
                </div>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                Empowering businesses worldwide with innovative technology solutions. We're committed to your success through cutting-edge tools and exceptional service.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <button key={i} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Globe size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold text-lg mb-6">Company</h5>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Press', 'Partners', 'Blog'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-lg mb-6">Contact</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-blue-500" size={20} />
                  <span>hello@techsolutions.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="text-blue-500" size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="text-blue-500" size={20} />
                  <span>San Francisco, CA 94102</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TechSolutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
