import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Calendar } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

const inquiryTypes = [
  { id: "board", label: "Board Opportunities" },
  { id: "speaking", label: "Speaking Engagements" },
  { id: "advisory", label: "Strategic Advisory" },
  { id: "media", label: "Media Interviews" },
  { id: "collaboration", label: "Professional Collaborations" },
];

export default function ContactPage({ }: ContactPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry. Christiana's team will respond within 48 hours.");
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390223/bacck_jtcnfj.png"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              Connect
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">Contact</h1>
            <div className="w-24 h-px bg-[#C8A14A]/70 mt-4" />
          </div>
        </div>
      </section>

      {/* Page introduction */}
      <section className="relative py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-white/20 bg-[#0B1F3A] shadow-2xl shadow-black/10 p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[#C8A14A] text-sm uppercase tracking-widest mb-4 font-semibold">
                  Connect
                </p>
                <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6">
                  Let's Connect
                </h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  Whether you are exploring board opportunities, speaking engagements,
                  strategic collaborations, or professional conversations, I welcome the
                  opportunity to connect.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Areas of Inquiry
                </p>
                <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Board Opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Speaking Engagements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Strategic Advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Media Interviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A14A]/40 flex-shrink-0" />
                    Professional Collaborations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C8A14A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif text-[#0B1F3A] mb-6">
                Inquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedInquiry(type.id)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          selectedInquiry === type.id
                            ? "bg-[#C8A14A] text-[#0B1F3A]"
                            : "bg-[#F5F6F7] text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F6F7] rounded-lg border border-transparent focus:border-[#C8A14A] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F6F7] rounded-lg border border-transparent focus:border-[#C8A14A] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F6F7] rounded-lg border border-transparent focus:border-[#C8A14A] focus:outline-none transition-colors"
                    placeholder="Your organization"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#F5F6F7] rounded-lg border border-transparent focus:border-[#C8A14A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif text-[#0B1F3A] mb-6">
                Connect with the Team
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C8A14A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C8A14A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F3A] mb-1">Email</h3>
                    <p className="text-gray-600">contact@christianaokyere.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C8A14A]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C8A14A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F3A] mb-1">Phone</h3>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C8A14A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C8A14A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B1F3A] mb-1">Location</h3>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn & Calendar */}
                <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 px-6 bg-[#0B1F3A] text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-[#0B1F3A]/90 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 px-6 bg-[#C8A14A] text-[#0B1F3A] font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-[#b8923f] transition-colors"
                >
                  <Calendar size={18} />
                  Schedule Call
                </motion.button>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781390574/1781390096350-019ec31f-2e91-7e91-aee6-06b8e0a27896_difmdk.png"
                  alt="Christiana team contact"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}