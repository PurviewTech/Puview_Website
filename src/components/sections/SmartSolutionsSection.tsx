import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { Cross, Package, Search, Shield } from "lucide-react";

const smartSolutions = [
  {
    icon: <Cross className="w-6 h-6" />,
    title: "SmartCare",
    description:
      "AR smart glass solution for telepresence, remote support, EMR collaboration, and training with real-time captioning + translation.",
    gradient: "from-green-500/15 via-emerald-500/15 to-teal-500/15",
    features: ["Telepresence", "Captioning", "Translation", "Compliant"],
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "SmartPick",
    description:
      "AR smart glasses for picking/packing with real-time backend updates. RFID-enabled automated tracking and inventory visibility.",
    gradient: "from-emerald-500/15 via-teal-500/15 to-cyan-500/15",
    features: ["Picking", "RFID", "Realtime", "Inventory"],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SmartInspect",
    description:
      "AR inspection workflows with live remote expert collaboration. Built for global teams with captioning + multilingual support.",
    gradient: "from-blue-500/15 via-cyan-500/15 to-sky-500/15",
    features: ["Collaboration", "Remote Experts", "Multilingual", "Workflows"],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SmartSurveillance",
    description:
      "Head-motion control for remote camera views, optional drone support, and AI threat detection with proactive alerting.",
    gradient: "from-purple-500/15 via-violet-500/15 to-indigo-500/15",
    features: ["Head Control", "AI Detection", "Drone", "Alerts"],
  },
];

export const SmartSolutionsSection = () => {
  return (
    <section
      id="smart-solutions"
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-slate-500/15 to-gray-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-gray-500/15 to-zinc-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-transparent to-zinc-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <FadeInText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              SMART SOLUTIONS PLATFORM
            </span>
          </FadeInText>

          <FadeInText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Our Smart Solutions <br />
              <span className="text-gradient">Platform</span>
            </h2>
          </FadeInText>

          <FadeInText delay={0.2}>
            <p className="text-base sm:text-lg text-muted-foreground">
              AR-powered solutions designed to improve efficiency across industries.
            </p>
          </FadeInText>
        </div>

        {/* ✅ Fits on page (no horizontal scrolling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {smartSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="h-full"
            >
              <GlassCard
                className={`relative p-4 sm:p-5 h-full bg-gradient-to-br ${solution.gradient} transition-all duration-300 hover:shadow-lg`}
                glowColor="mixed"
              >
                {/* Icon */}
                <div className="mb-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary">{solution.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                  {solution.title}
                </h3>

                {/* Description (short + clamped) */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                  {solution.description}
                </p>

                {/* Features (compact) */}
                <div className="space-y-1">
                  {solution.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[11px] sm:text-xs text-primary/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-14 h-14 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="100" cy="0" r="50" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
