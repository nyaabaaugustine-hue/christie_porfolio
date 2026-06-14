import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Target, RefreshCw, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

type Page = 'home' | 'about' | 'leadership' | 'board' | 'speaking' | 'contact' | 'insights' | 'blog';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const areasOfExpertise = [
  {
    icon: Briefcase,
    title: "Corporate Leadership",
    description: "Leading organizations through growth, change, and transformation.",
  },
  {
    icon: Target,
    title: "Business Strategy",
    description: "Developing growth strategies and translating them into actionable plans.",
  },
  {
    icon: RefreshCw,
    title: "Organizational Transformation",
    description: "Improving structures, systems, and performance.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description: "Building businesses and creating new opportunities.",
  },
  {
    icon: Shield,
    title: "Governance",
    description: "Strengthening accountability, leadership, and strategic oversight.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion",
    description: "Identifying opportunities and creating pathways for sustainable growth.",
  },
];

const education = [
  {
    degree: "Executive MBA",
    school: "Ghana Institute of Management and Public Administration (GIMPA)",
  },
  {
    degree: "Bachelor of Arts",
    school: "Kwame Nkrumah University of Science and Technology (KNUST)",
  },
];

const leadershipPhilosophy = [
  { name: "Strategic Thinking", description: "Creating clarity in complexity." },
  { name: "Operational Excellence", description: "Turning strategy into measurable outcomes." },
  { name: "People Development", description: "Building strong leaders and high-performing teams." },
  { name: "Value Creation", description: "Driving sustainable business growth." },
  { name: "Legacy", description: "Creating institutions and opportunities that endure." },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[360px] lg:h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781182454/hero_image_christiana_x6uiuj.png"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/70 to-[#0B1F3A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div>
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-2 font-medium">
              {t('about.label')}
            </p>
            <h1 className="text-4xl lg:text-5xl font-serif text-white tracking-tight">{t('about.title')}</h1>
            <div className="w-24 h-px bg-[#C8A14A]/70 mt-4" />
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 xl:py-24 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-white/20 bg-[#0B1F3A] shadow-2xl shadow-black/10 p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[#C8A14A] text-sm uppercase tracking-widest mb-4 font-semibold">
                  Introduction
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Christiana Akua Feyie Yeboaa Okyere is a Corporate Executive, Entrepreneur, and Growth Strategist
                  with more than twenty years of experience leading businesses, driving organizational transformation,
                  and creating sustainable growth across multiple industries.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Her professional journey reflects a unique combination of entrepreneurial ambition and executive leadership,
                  spanning communications, entrepreneurship, executive management, organizational transformation, and growth strategy.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Recognized for her ability to bridge vision and execution, Christiana has consistently demonstrated a capacity
                  to build businesses, lead teams, improve performance, and create sustainable value.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 lg:p-8 max-w-sm">
                <p className="text-[#C8A14A] uppercase tracking-[0.18em] text-xs font-semibold mb-4">
                  Core Focus
                </p>
                <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <li>Entrepreneurship and executive leadership</li>
                  <li>Business transformation and growth strategy</li>
                  <li>Operations, logistics, and industrial development</li>
                </ul>
              </div>
            </div>
          </div>
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
                The Journey
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A] mb-6">
                Executive Biography
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Christiana Akua Feyie Yeboaa Okyere is a Corporate Executive, Entrepreneur, and Growth Strategist
                  with more than twenty years of experience leading businesses, driving organizational transformation,
                  and creating sustainable growth across multiple industries.
                </p>
                <p>
                  Her professional journey reflects a unique combination of entrepreneurial ambition and executive leadership.
                  Beginning her career in communications, branding, and strategic marketing, she developed a deep understanding
                  of business development, stakeholder engagement, and market positioning. These experiences laid the foundation
                  for a broader leadership journey that would eventually span entrepreneurship, executive management,
                  organizational transformation, and growth strategy.
                </p>
                <p>
                  As an entrepreneur, Christiana successfully established and led ventures that provided strategic services
                  and business solutions to organizations across various sectors. Through these experiences, she gained firsthand
                  insight into business creation, growth management, customer engagement, team leadership, and operational execution.
                </p>
                <p>
                  Over time, her career evolved into increasingly strategic leadership roles where she focused on organizational
                  growth, operational excellence, and transformation. Her work has involved helping organizations strengthen systems,
                  improve performance, align strategy with execution, and create sustainable pathways for growth.
                </p>
                <p>
                  What distinguishes Christiana's leadership approach is her ability to combine entrepreneurial thinking with
                  corporate discipline. She understands the realities of building organizations from the ground up while also
                  appreciating the governance, accountability, and strategic oversight required to lead complex enterprises.
                </p>
                <p>
                  Her expertise spans business transformation, growth strategy, operational leadership, governance,
                  organizational effectiveness, and stakeholder management. She is particularly passionate about helping
                  organizations navigate change, unlock opportunities, and achieve long-term success.
                </p>
                <p>
                  Beyond her executive responsibilities, Christiana is committed to leadership development, mentorship,
                  and contributing to conversations around entrepreneurship, governance, and economic growth. She believes
                  that strong leadership, effective institutions, and innovative enterprises play a critical role in
                  shaping Africa's future.
                </p>
                <p>
                  She holds an Executive MBA from the Ghana Institute of Management and Public Administration (GIMPA)
                  and a Bachelor of Arts degree from the Kwame Nkrumah University of Science and Technology (KNUST).
                </p>
                <p>
                  Today, she continues to focus on building sustainable organizations, supporting growth initiatives,
                  and contributing to business and economic development through leadership, strategy, and entrepreneurship.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mb-4 font-medium">
              The Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Evolution of a Leader
            </h2>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-0 right-0 h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-[#C8A14A]/20 via-[#C8A14A]/50 to-[#C8A14A]/20" />
              {/* Animated arrow at the end */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="drop-shadow-md">
                  <path d="M0 8H28M28 8L20 1M28 8L20 15" stroke="#C8A14A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {[
                { title: "Creative Foundation", description: "Christiana's professional journey began in communications, design, branding, and marketing. These early experiences developed the strategic thinking, creativity, and communication skills that continue to influence her leadership approach today." },
                { title: "Entrepreneurial Builder", description: "Driven by a passion for creating solutions and opportunities, she established businesses that served clients across multiple industries. Through entrepreneurship, she gained firsthand experience in business growth, leadership, customer engagement, and organizational development." },
                { title: "Executive Leader", description: "Over time, her responsibilities evolved beyond entrepreneurship into broader executive leadership roles focused on strategic execution, growth, operational excellence, and organizational transformation." },
                { title: "Growth Strategist", description: "Today, Christiana combines entrepreneurial insight with executive leadership experience to support organizations in navigating complexity, unlocking growth opportunities, and building sustainable futures." },
              ].map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Premium node */}
                  <div className="relative mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 200 }}
                      className="w-[104px] h-[104px] rounded-full bg-[#0B1F3A] flex items-center justify-center relative"
                    >
                      <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#C8A14A]/20 to-transparent" />
                      <div className="w-[88px] h-[88px] rounded-full bg-[#0B1F3A] flex items-center justify-center border border-[#C8A14A]/30">
                        <span className="text-[#C8A14A] font-serif text-3xl font-bold">{index + 1}</span>
                      </div>
                      {/* Gold ring pulse */}
                      <div className="absolute inset-0 rounded-full border border-[#C8A14A]/10 animate-ping" style={{ animationDelay: `${index * 0.5}s`, animationDuration: "3s" }} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3">{stage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-[51px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C8A14A]/20 via-[#C8A14A]/50 to-[#C8A14A]/20" />

            <div className="space-y-12">
              {[
                { title: "Creative Foundation", description: "Christiana's professional journey began in communications, design, branding, and marketing. These early experiences developed the strategic thinking, creativity, and communication skills that continue to influence her leadership approach today." },
                { title: "Entrepreneurial Builder", description: "Driven by a passion for creating solutions and opportunities, she established businesses that served clients across multiple industries. Through entrepreneurship, she gained firsthand experience in business growth, leadership, customer engagement, and organizational development." },
                { title: "Executive Leader", description: "Over time, her responsibilities evolved beyond entrepreneurship into broader executive leadership roles focused on strategic execution, growth, operational excellence, and organizational transformation." },
                { title: "Growth Strategist", description: "Today, Christiana combines entrepreneurial insight with executive leadership experience to support organizations in navigating complexity, unlocking growth opportunities, and building sustainable futures." },
              ].map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[104px] h-[104px] rounded-full bg-[#0B1F3A] flex items-center justify-center relative">
                      <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#C8A14A]/20 to-transparent" />
                      <div className="w-[88px] h-[88px] rounded-full bg-[#0B1F3A] flex items-center justify-center border border-[#C8A14A]/30">
                        <span className="text-[#C8A14A] font-serif text-3xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    {/* Arrow pointing right */}
                    {index < 3 && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rotate-90">
                        <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                          <path d="M0 8H20M20 8L12 1M20 8L12 15" stroke="#C8A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content card */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 mt-2">
                    <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3">{stage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 lg:py-20 xl:py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,161,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,161,74,0.03)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C8A14A]/[0.06] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C8A14A] text-5xl lg:text-7xl font-serif leading-none block mb-6">"</span>
            <blockquote className="text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-8">
              Growth does not happen by chance. It happens when vision, leadership, discipline, and execution come together.
            </blockquote>
            <div className="w-12 h-px bg-[#C8A14A]/50 mx-auto" />
            <p className="text-[#C8A14A] text-sm tracking-widest uppercase mt-6 font-medium">
              Christiana Akua Feyie Yeboaa Okyere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
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
              Areas of Expertise
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#0B1F3A]">
              Key Areas of Impact
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExpertise.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C8A14A]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#C8A14A]" size={28} />
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
      <section className="py-16 lg:py-20 xl:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781469308/vvv_ajrrv5.png"
            alt="Education background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1F3A]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
              Academic Background
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div>
                  <h3 className="font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-white/70">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
              Leadership Philosophy
            </p>
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
                Leadership Philosophy
              </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              Sustainable growth is achieved when vision, people, systems, and execution
              work together toward a common purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leadershipPhilosophy.map((value, index) => (
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
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
               Interested in board opportunities, speaking engagements, strategic conversations, or executive leadership collaborations?
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