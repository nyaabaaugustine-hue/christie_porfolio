import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#F5F6F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 lg:p-12 border border-[#C8A14A]/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-3 font-medium">
                Stay Informed
              </p>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0B1F3A] mb-3">
                Thought Leadership & Insights
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive monthly insights on leadership, business transformation, and industrial development across Africa.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-[#0B1F3A]"
                >
                  <CheckCircle size={20} className="text-[#C8A14A]" />
                  <span className="text-sm font-medium">Thank you for subscribing.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="px-5 py-3 bg-[#F5F6F7] border border-gray-200 rounded-lg text-sm text-[#0B1F3A] placeholder:text-gray-400 focus:outline-none focus:border-[#C8A14A] transition-colors w-full sm:w-72"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#0B1F3A] text-white font-medium text-sm rounded-lg hover:bg-[#0B1F3A]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <Send size={14} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
