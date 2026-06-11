import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, Target } from "lucide-react";

type Page = 'home' | 'about' | 'leadership' | 'speaking' | 'contact' | 'insights';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const careerHighlights = [
  {
    icon: Award,
    title: "Executive Leadership",
    description: "20+ years leading organizations through transformation and growth across multiple industries.",
  },
  {
    icon: Target,
    title: "Strategic Operations",
    description: "Expertise in operational excellence, supply chain optimization, and business process improvement.",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Building high-performance teams and cultivating leadership talent across organizations.",
  },
  {
    icon: BookOpen,
    title: "Thought Leadership",
    description: "Regular speaker and writer on business transformation, governance, and African enterprise.",
  },
];

const education = [
  {
    degree: "Executive Master of Business Administration",
    school: "Ghana Institute of Management and Public Administration (GIMPA)",
    year: "2015",
  },
  {
    degree: "Bachelor of Arts",
    school: "Kwame Nkrumah University of Science and Technology (KNUST)",
    year: "2002",
  },
];

const values = [
  { name: "Integrity", description: "Unwavering commitment to ethical leadership and transparency" },
  { name: "Excellence", description: "Relentless pursuit of the highest standards in all endeavors" },
  { name: "Innovation", description: "Embracing new ideas and approaches to solve complex challenges" },
  { name: "Accountability", description: "Taking ownership and delivering on commitments" },
  { name: "Sustainable Growth", description: "Creating lasting value for stakeholders and communities" },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/60 to-[#0B1F3A]/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              About Christiana
            </p>
            <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Executive Biography
            </h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              A journey of transformation, leadership, and impact across African enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Bio */}
      <section ref={ref} className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781144506/cvv_ttaqk3.png"
                alt="Christiana Akua Feyie Yeboaa Okyere"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
                The Story
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6">
                From Creative Professional to Transformation Executive
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Christiana Akua Feyie Yeboaa Okyere stands as one of Ghana's most influential 
                  corporate leaders, with a career spanning over two decades across industrial 
                  operations, logistics, manufacturing, trade, real estate development, and 
                  strategic communications.
                </p>
                <p>
                  Her journey began in the creative industry, where she built a foundation in 
                  communications, branding, and marketing. This creative background gave her 
                  a unique perspective on business—understanding that successful organizations 
                  must connect with people, not just processes.
                </p>
                <p>
                  As an entrepreneur, Christiana founded and scaled multiple ventures, gaining 
                  firsthand experience in the challenges and opportunities of building businesses 
                  in emerging markets. This entrepreneurial spirit continues to inform her 
                  executive leadership approach.
                </p>
                <p>
                  Today, as Group COO of McDan Group, Christiana leads operations across 
                  multiple business units, driving operational excellence and strategic growth. 
                  Her transformation expertise has been instrumental in restructuring initiatives, 
                  market expansions, and organizational turnarounds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Career Highlights
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Key Areas of Impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#C8A14A]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#C8A14A]" size={24} />
                  </div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Education
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Academic Foundation
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F6F7] rounded-xl p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#0B1F3A] mb-1">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-[#C8A14A] font-medium">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              Core Values
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-white">
              Leadership Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#C8A14A]/50 transition-colors">
                  <h3 className="text-[#C8A14A] font-semibold mb-2">{value.name}</h3>
                  <p className="text-white/50 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6">
              Ready to Connect?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're seeking a board member, keynote speaker, or strategic advisor, 
              Christiana brings the expertise and vision to drive meaningful impact.
            </p>
            <motion.button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-[#C8A14A] text-[#0B1F3A] font-semibold rounded-lg hover:bg-[#b8923f] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}