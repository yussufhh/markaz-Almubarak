import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Star, ChevronRight, MapPin, Phone, Mail, 
  Wifi, Coffee, Car, Wind, UtensilsCrossed, Waves, 
  Shield, Clock, CheckCircle, ChevronLeft, ChevronUp,
  Facebook, Instagram, Send, ArrowRight, Users, Bed,
  Calendar, Award, Heart, MessageCircle
} from 'lucide-react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
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

  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Data arrays
  const rooms = [
    {
      name: "Standard Room",
      description: "Comfortable and affordable room perfect for solo travelers and budget-conscious guests.",
      price: "2,500",
      features: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "Breakfast Included"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop"
    },
    {
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and a comfortable workspace for business travelers.",
      price: "4,000",
      features: ["Free Wi-Fi", "AC", "Work Desk", "Mini Fridge", "Breakfast"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop"
    },
    {
      name: "Executive Suite",
      description: "Premium suite with separate living area, perfect for extended stays and special occasions.",
      price: "6,500",
      features: ["Free Wi-Fi", "Living Area", "King Bed", "Room Service", "Premium Breakfast"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    },
    {
      name: "Family Suite",
      description: "Spacious accommodation ideal for families, with extra beds and kid-friendly amenities.",
      price: "7,500",
      features: ["2 Bedrooms", "Family Friendly", "Extra Space", "Full Service"],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      text: "Excellent location near the university! The staff were incredibly friendly and the rooms were spotless. Highly recommend for anyone visiting Garissa.",
      guest: "Ahmed Hassan",
      location: "Nairobi, Kenya",
      rating: 5
    },
    {
      text: "I stayed here for a business trip and was impressed by the professionalism. Great amenities, comfortable bed, and delicious breakfast.",
      guest: "Sarah Wanjiru",
      location: "Mombasa, Kenya",
      rating: 5
    },
    {
      text: "Perfect for families! The staff helped us feel right at home. The food was amazing and the location is very convenient.",
      guest: "Omar Abdullah",
      location: "Garissa, Kenya",
      rating: 5
    },
    {
      text: "Best hotel in Garissa! Clean, affordable, and the service is exceptional. I'll definitely be back.",
      guest: "Fatima Mohamed",
      location: "Wajir, Kenya",
      rating: 5
    }
  ];

  const facilities = [
    { icon: Wifi, name: "Free Wi-Fi", description: "High-speed internet throughout the hotel" },
    { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms" },
    { icon: Car, name: "Free Parking", description: "Secure parking for all guests" },
    { icon: UtensilsCrossed, name: "Restaurant", description: "Delicious local and international cuisine" },
    { icon: Coffee, name: "Breakfast Included", description: "Complimentary breakfast daily" },
    { icon: Waves, name: "Swimming Pool", description: "Outdoor pool for relaxation" },
    { icon: Shield, name: "24/7 Security", description: "Professional security staff on duty" },
    { icon: Clock, name: "24-Hour Reception", description: "Always here to help you" }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop", title: "Hotel Exterior" },
    { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop", title: "Lobby Area" },
    { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop", title: "Deluxe Room" },
    { url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop", title: "Restaurant" },
    { url: "https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=600&h=400&fit=crop", title: "Swimming Pool" },
    { url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&h=400&fit=crop", title: "Conference Room" }
  ];

  const amenityIcons = [
    { icon: Wifi, label: "Wi-Fi" },
    { icon: Coffee, label: "Breakfast" },
    { icon: Car, label: "Parking" },
    { icon: Wind, label: "AC" }
  ];

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      
      {/* ==================== NAVIGATION BAR ==================== */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToTop()}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                <Bed className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                  Bushra Hotel
                </span>
                <span className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                  Garissa, Kenya
                </span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['rooms', 'amenities', 'gallery', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${
                    scrolled 
                      ? 'text-gray-700 hover:text-amber-600' 
                      : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {['rooms', 'amenities', 'gallery', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg capitalize font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop" 
            alt="Bushra Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Welcome to <span className="text-amber-500">Bushra Hotel</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Experience Comfort and Elegance in Garissa
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('rooms')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                View Rooms
              </button>
            </motion.div>

            {/* Quick Info Icons */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {amenityIcons.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <amenity.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-white text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Your Home Away From Home
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Garissa, just minutes from Garissa University, Bushra Hotel offers 
              the perfect blend of comfort, convenience, and hospitality for all travelers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div {...slideIn} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop" 
                  alt="Hotel Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Serving</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div {...fadeIn} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    Strategically located near Garissa University, making it perfect for students, 
                    parents, and university staff. Easy access to local attractions and amenities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Warm Hospitality</h3>
                  <p className="text-gray-600">
                    Our dedicated staff ensures every guest feels welcomed and cared for. 
                    Experience genuine Kenyan hospitality at its finest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service</h3>
                  <p className="text-gray-600">
                    From clean, comfortable rooms to delicious dining options, we maintain 
                    the highest standards to ensure your stay is exceptional.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== ROOMS SECTION ==================== */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Rooms & Suites
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of comfortable and well-appointed rooms designed for your perfect stay
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Room Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    KSh {room.price}/night
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-500 hover:to-amber-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AMENITIES/FACILITIES SECTION ==================== */}
      <section id="amenities" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                {...scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our beautiful hotel and facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-80"
                onClick={() => setActiveGalleryImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeGalleryImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveGalleryImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveGalleryImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-amber-500 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img 
                  src={activeGalleryImage.url} 
                  alt={activeGalleryImage.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="text-center mt-4">
                  <h3 className="text-white text-2xl font-bold">{activeGalleryImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued guests
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl text-gray-700 text-center mb-8 italic leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>

                {/* Guest Info */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].guest}</h4>
                  <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="bg-white hover:bg-amber-500 text-gray-700 hover:text-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="bg-white hover:bg-amber-500 text-gray-700 hover:text-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-amber-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid (Mobile Friendly) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{testimonial.guest}</h5>
                  <p className="text-gray-600 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CALL-TO-ACTION BANNER ==================== */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Experience <span className="text-amber-500">Exceptional Hospitality?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why Bushra Hotel is the preferred choice for travelers in Garissa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Book Your Room Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+254712345678"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: "500+", label: "Happy Guests" },
                { number: "50+", label: "Rooms Available" },
                { number: "24/7", label: "Support" },
                { number: "15+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  {...scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-amber-500 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Contact us for bookings, inquiries, or any assistance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeIn} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your booking requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div {...fadeIn} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">Near Garissa University, Garissa, Kenya</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                    <a href="tel:+254712345678" className="text-gray-600 hover:text-amber-600 transition-colors">
                      +254 712 345 678
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <a href="mailto:info@bushrahotel.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                      info@bushrahotel.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.234567890123!2d39.6234567!3d-0.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjcnMjQuNCJTIDM5wrAzNycyNC40IkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bushra Hotel Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Bed className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Bushra Hotel</h3>
                  <p className="text-gray-400 text-sm">Garissa, Kenya</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your premier destination for comfort and hospitality in Garissa. 
                Experience excellence with every stay.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['rooms', 'amenities', 'gallery', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-amber-500 transition-colors capitalize text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Room Service</li>
                <li>Restaurant & Dining</li>
                <li>Conference Facilities</li>
                <li>Airport Transfer</li>
                <li>Laundry Service</li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="space-y-3 mb-6">
                <a href="tel:+254712345678" className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  +254 712 345 678
                </a>
                <a href="mailto:info@bushrahotel.com" className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  info@bushrahotel.com
                </a>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, link: "#", label: "Facebook" },
                  { icon: Instagram, link: "#", label: "Instagram" },
                  { icon: MessageCircle, link: "#", label: "WhatsApp" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="bg-gray-800 hover:bg-amber-500 p-3 rounded-lg transition-all hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bushra Hotel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-amber-500 transition-colors">Privacy Policy</button>
              <button className="hover:text-amber-500 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== SCROLL TO TOP BUTTON ==================== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all z-40"
            whileHover={{ y: -5 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
