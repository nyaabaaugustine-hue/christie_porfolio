import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Calendar } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

const inquiryTypes = [
  { id: "board", label: "Board Opportunities" },
  { id: "speaking", label: "Speaking Engagements" },
  { id: "advisory", label: "Strategic Advisory" },
  { id: "media", label: "Media Interviews" },
  { id: "collaboration", label: "Executive Collaboration" },
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
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt=""
            className="w-full h-full object-contain opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Contact
            </p>
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              For board inquiries, speaking engagements, and strategic partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif text-[#0B1F3A] mb-6">
                Send an Inquiry
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
                Contact Information
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

              {/* Executive Assistant */}
              <div className="bg-[#F5F6F7] rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-[#0B1F3A] mb-4">Executive Assistant</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For scheduling and immediate inquiries, please contact Christiana's 
                  executive assistant.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8A14A]/20 flex items-center justify-center">
                    <span className="text-[#C8A14A] font-semibold text-sm">EA</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#0B1F3A]">Executive Office</p>
                    <p className="text-gray-500 text-sm">ea@christianaokyere.com</p>
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
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}