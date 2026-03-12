import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Bot, Calendar, ChevronRight, LineChart, Sparkles, Stethoscope, Users, Zap } from 'lucide-react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-cyan-400/30 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
          <Stethoscope className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold text-lg tracking-tight">DentaFlow AI</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#proof" className="hover:text-white transition-colors">Testimonials</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">
        Book Demo
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-dot-white opacity-20 z-0"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob z-0"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000 z-0"></div>
      
      <ParticleBackground />

      {/* Parallax Abstract Shapes */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full z-0 hidden lg:block" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/5 rounded-full z-0 hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8">
            <Sparkles className="w-3 h-3" />
            <span>New: Autonomous Patient Reactivation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Scale Your Practice.<br />Zero Extra Effort.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 font-light">
            The first AI infrastructure built exclusively for dental clinics. 
            Automate scheduling, reactivate dormant patients, and increase treatment acceptance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-glow bg-white text-black px-8 py-4 rounded-lg font-medium flex items-center gap-2 group w-full sm:w-auto justify-center">
              Start Scaling Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              <Bot className="w-4 h-4" />
              Talk to AI Assistant
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
    </section>
  );
};

const ValuePropSummary = () => (
  <section className="py-20 relative z-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 md:pt-0 px-4"
        >
          <div className="text-4xl font-bold text-white mb-2">34%</div>
          <div className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Increase in Production</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="pt-8 md:pt-0 px-4"
        >
          <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
          <div className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Patient Communication</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 md:pt-0 px-4"
        >
          <div className="text-4xl font-bold text-white mb-2">15hrs</div>
          <div className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Saved Per Week</div>
        </motion.div>
      </div>
    </div>
  </section>
);

const DetailedValueProp = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Autonomous Reactivation",
      description: "Our AI analyzes your PMS, identifies overdue patients, and engages them in natural, two-way SMS conversations to get them back in the chair."
    },
    {
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
      title: "Treatment Acceptance",
      description: "Follow up on unscheduled treatment plans automatically. The AI explains procedures, handles objections, and offers financing options."
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Smart Scheduling",
      description: "No more phone tag. Patients can book, reschedule, or cancel via text, with the AI updating your calendar in real-time."
    }
  ];

  return (
    <section id="features" className="py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Inference Stack for Dentistry</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Replace manual front-desk tasks with intelligent agents that never sleep, never take breaks, and always follow up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  const testimonials = [
    {
      quote: "The AI booked 14 hygiene appointments in its first weekend while my staff was off. It's like having a super-employee.",
      author: "Dr. Sarah Jenkins",
      role: "Owner, Smile Studio",
      rating: 5,
      rotation: -2
    },
    {
      quote: "We've seen a 40% increase in treatment plan acceptance simply because the AI follows up consistently when we don't have time.",
      author: "Mark Davis",
      role: "Practice Manager",
      rating: 5,
      rotation: 1
    },
    {
      quote: "Incredible ROI. It paid for itself in the first week just by reactivating patients we thought we had lost forever.",
      author: "Dr. Emily Chen",
      role: "Chen Dental Group",
      rating: 4.9,
      rotation: -1
    }
  ];

  return (
    <section id="proof" className="py-32 relative z-20 bg-zinc-950/50 border-y border-white/5 overflow-hidden">
      {/* Subtle background glow for testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 filter blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Trusted by Top Practices</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            See how forward-thinking dentists are transforming their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              style={{ rotate: t.rotation }}
              className="bg-white text-black p-8 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(t.rating) ? 'text-emerald-500' : 'text-emerald-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-bold text-zinc-800">{t.rating}</span>
              </div>
              <p className="text-lg font-medium mb-6 text-zinc-800 leading-snug">"{t.quote}"</p>
              <div>
                <div className="font-bold text-zinc-900">{t.author}</div>
                <div className="text-sm text-zinc-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RevenueCalculator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    leadValue: '',
    subscribers: '',
    emailsPerWeek: ''
  });
  const [calculatedLoss, setCalculatedLoss] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate calculation delay for effect
    setTimeout(() => {
      const subs = parseInt(formData.subscribers) || 0;
      const value = parseInt(formData.leadValue) || 0;
      const emails = parseInt(formData.emailsPerWeek) || 0;
      
      // Arbitrary formula to show "lost revenue"
      // Assume a baseline 2% conversion rate per month if emailing optimally (e.g., 4 times a week).
      // If they send fewer, they lose out on that potential.
      const optimalEmails = 4;
      const missedOpportunity = Math.max(0, optimalEmails - emails) / optimalEmails;
      const monthlyLoss = subs * 0.02 * value * missedOpportunity;
      
      setCalculatedLoss(Math.round(monthlyLoss));
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section className="py-32 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-10 z-0"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 rounded-3xl border border-cyan-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How much is your practice losing?</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Find out exactly how much money you're leaving on the table every month by not having automated email systems installed.
            </p>
          </div>
          
          {calculatedLoss === null ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="jane@smilestudio.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Phone Number <span className="text-zinc-500 font-normal">(Optional)</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Average Value Per Lead ($)</label>
                  <input 
                    type="number" 
                    name="leadValue"
                    required
                    min="0"
                    value={formData.leadValue}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="e.g. 1500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Total Email Subscribers</label>
                  <input 
                    type="number" 
                    name="subscribers"
                    required
                    min="0"
                    value={formData.subscribers}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="e.g. 2500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">How many emails do you send per week?</label>
                <input 
                  type="number" 
                  name="emailsPerWeek"
                  required
                  min="0"
                  value={formData.emailsPerWeek}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="e.g. 0"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isCalculating}
                  className="btn-glow bg-white text-black px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 group w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </span>
                  ) : (
                    <>
                      Calculate Lost Revenue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mb-6">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium text-zinc-300 mb-2">Estimated Monthly Loss</h3>
              <div className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                ${calculatedLoss.toLocaleString()}
              </div>
              <p className="text-zinc-400 max-w-lg mx-auto mb-10">
                Based on your numbers, this is the potential revenue slipping through the cracks every single month. Our AI systems can help you capture it.
              </p>
              <button 
                onClick={() => setCalculatedLoss(null)}
                className="btn-glow bg-white text-black px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 group"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-white/10 text-center text-zinc-500 text-sm relative z-20 bg-black">
    <p>&copy; {new Date().getFullYear()} DentaFlow AI. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <ValuePropSummary />
      <DetailedValueProp />
      <Proof />
      <RevenueCalculator />
      <Footer />
    </div>
  );
}
