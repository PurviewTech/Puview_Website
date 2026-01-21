import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Tag,
  Cpu,
  HardDrive,
  Search,
  Wrench,
  Database,
  Layers,
  Monitor,
  Shield,
  Clock,
  ShieldCheck,
  BarChart2,
  Users,
  Briefcase,
  Building2,
  Sparkles,
  Route,
  Radar,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ✅ Your existing 3D hero
import { RfidHeroScene } from "@/components/3d/RfidHeroScene";

type ExpandSection = "types" | "automation" | "benefits" | null;

export default function RfidAssetManagement() {
  const navigate = useNavigate();

  // Enterprise collapsible section state
  const [expandedEnterpriseSection, setExpandedEnterpriseSection] =
    useState<ExpandSection>("automation");

  // Office tabs state
  const [officeTab, setOfficeTab] = useState("overview");

  useEffect(() => {
    document.title = "RFID Asset Management - PurviewTech";
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const toggleEnterprise = (section: Exclude<ExpandSection, null>) => {
    setExpandedEnterpriseSection((prev) => (prev === section ? null : section));
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleRequestDemo = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        {/* HERO */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.10)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.14)_1px,transparent_0)] bg-[size:56px_56px]" />

            {/* ✅ 3D scene (transparent canvas) */}
            <div className="absolute inset-0 opacity-70 pointer-events-none">
              <div className="w-full h-full">
                <RfidHeroScene />
              </div>
            </div>

            {/* Readability overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/90" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <FadeInText>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  RFID Asset Management
                </span>
              </FadeInText>

              <FadeInText delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-foreground tracking-tight">
                  Intelligent <span className="text-primary">Automation</span>{" "}
                  for Track and Trace
                </h1>
              </FadeInText>

              <FadeInText delay={0.2}>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
                  RFID captures assets automatically (no line-of-sight), and AI
                  turns those reads into actions—real-time visibility, faster
                  audits, anomaly detection, and predictive operations. Built for{" "}
                  <span className="text-foreground font-medium">
                    enterprise facilities
                  </span>
                  ,{" "}
                  <span className="text-foreground font-medium">
                    office assets
                  </span>{" "}
                  and{" "}
                  <span className="text-foreground font-medium">
                    communities/campuses
                  </span>
                  .
                </p>
              </FadeInText>

              <FadeInText delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    onClick={() => handleScrollTo("solutions")}
                  >
                    Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                  </MagneticButton>
                  <MagneticButton
                    variant="secondary"
                    size="lg"
                    onClick={handleRequestDemo}
                  >
                    Request a Demo
                  </MagneticButton>
                </div>
              </FadeInText>
            </div>
          </div>
        </section>

        {/* QUICK NAV CARDS */}
        <section id="solutions" className="py-14 sm:py-18 relative bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-6" delay={0.05}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Enterprise & Facilities
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Automated tracking for tools, equipment, consumables, and
                      high-value assets—connected to workflows, audits, and AI
                      alerts.
                    </p>
                    <MagneticButton
                      variant="secondary"
                      size="sm"
                      onClick={() => handleScrollTo("enterprise")}
                    >
                      View Enterprise Content
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6" delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Office Asset Management
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Track IT devices and office equipment with real-time
                      visibility, audit trails, and automated check-in/out.
                    </p>
                    <MagneticButton
                      variant="secondary"
                      size="sm"
                      onClick={() => handleScrollTo("office")}
                    >
                      View Office Content
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6" delay={0.15}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Communities & Campuses
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Shared asset tracking across residential communities,
                      campuses, labs, and common areas—secure, self-serve, and
                      automated.
                    </p>
                    <MagneticButton
                      variant="secondary"
                      size="sm"
                      onClick={() => handleScrollTo("communities")}
                    >
                      View Community Content
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* =========================
            ENTERPRISE CONTENT (NO IMAGES)
        ========================== */}
        <section id="enterprise" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <FadeInText>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  RFID for{" "}
                  <span className="text-primary">Enterprise & Facilities</span>
                </h2>
              </FadeInText>
              <FadeInText delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                  Evidence-driven automation: RFID captures every movement
                  automatically, while AI highlights anomalies, predicts issues,
                  and recommends actions.
                </p>
              </FadeInText>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  How It Works (Automation Proof)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Radar className="w-5 h-5" />,
                      title: "RFID Capture (No manual scans)",
                      desc: "Readers detect tags automatically—no line-of-sight like barcodes.",
                    },
                    {
                      icon: <Route className="w-5 h-5" />,
                      title: "Workflow Actions",
                      desc: "Events trigger check-in/out, gate alerts, stock updates, and audit logs.",
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      title: "AI Insights",
                      desc: "Detect anomalies, forecast shortages, and predict maintenance/service needs.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-background/40 p-5"
                    >
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="p-2 rounded-full bg-primary/10">
                          {item.icon}
                        </span>
                        <p className="font-semibold text-foreground">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Evidence you can show in audits:
                    </span>{" "}
                    each tag read becomes a timestamped event (who/what/where),
                    creating an immutable asset trail. That trail powers real-time
                    dashboards and compliance reporting.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <div className="space-y-6">
              {/* Types */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-card/40">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 bg-muted/40 text-left"
                    onClick={() => toggleEnterprise("types")}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Tag Types (Enterprise-grade)
                    </h3>
                    {expandedEnterpriseSection === "types" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {expandedEnterpriseSection === "types" && (
                    <div className="p-6 grid md:grid-cols-3 gap-6">
                      <Card className="bg-background border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-primary">
                            On-Metal RFID Tags
                          </CardTitle>
                          <CardDescription>
                            For metal tools, racks, machinery
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <span className="font-semibold text-foreground">
                              Usage:
                            </span>{" "}
                            IT racks, industrial tools, equipment frames.
                          </p>
                          <p>
                            <span className="font-semibold text-foreground">
                              Benefit:
                            </span>{" "}
                            Reliable reads on metal surfaces.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-primary">
                            Durable Label Tags
                          </CardTitle>
                          <CardDescription>
                            For cartons, assets, packaging
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <span className="font-semibold text-foreground">
                              Usage:
                            </span>{" "}
                            Boxes, devices, furniture, general assets.
                          </p>
                          <p>
                            <span className="font-semibold text-foreground">
                              Benefit:
                            </span>{" "}
                            Fast rollout, low-cost tagging at scale.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-primary">
                            Hard / Rugged Tags
                          </CardTitle>
                          <CardDescription>
                            For harsh environments and long life
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                          <p>
                            <span className="font-semibold text-foreground">
                              Usage:
                            </span>{" "}
                            Outdoor yards, heavy equipment, high-value assets.
                          </p>
                          <p>
                            <span className="font-semibold text-foreground">
                              Benefit:
                            </span>{" "}
                            Withstands heat, wash, dust, impact.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Automation + AI */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-card/40">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 bg-muted/40 text-left"
                    onClick={() => toggleEnterprise("automation")}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Automation + AI Layer (Evidence)
                    </h3>
                    {expandedEnterpriseSection === "automation" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {expandedEnterpriseSection === "automation" && (
                    <div className="p-6 grid md:grid-cols-2 gap-6">
                      <Card className="bg-background border-border">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary">
                            RFID Automation (What happens automatically)
                          </CardTitle>
                          <CardDescription>
                            Triggered by reads + rules (no manual updates)
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          {[
                            {
                              title: "Auto check-in / check-out",
                              desc: "Assets update status when entering/leaving zones or gates.",
                            },
                            {
                              title: "Real-time inventory & audits",
                              desc: "Cycle counts become automated reads, not manual scanning.",
                            },
                            {
                              title: "Security alerts",
                              desc: "Unauthorized movement triggers alerts with location + time.",
                            },
                          ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                              <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                                <CheckCircle className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  {item.title}
                                </p>
                                <p className="text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary">
                            AI Layer (What becomes intelligent)
                          </CardTitle>
                          <CardDescription>
                            Converts reads into decisions + recommendations
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          {[
                            {
                              title: "Anomaly detection",
                              desc: "Detect unusual movement patterns, missing assets, odd dwell times.",
                            },
                            {
                              title: "Predictive maintenance",
                              desc: "Combine usage/movement with service history to predict failures.",
                            },
                            {
                              title: "Forecasting & optimization",
                              desc: "Predict stockouts, optimize replenishment, improve utilization.",
                            },
                          ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                              <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                                <Sparkles className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  {item.title}
                                </p>
                                <p className="text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      <div className="md:col-span-2">
                        <GlassCard className="p-6" hoverEffect={false}>
                          <h4 className="text-lg font-semibold mb-2">
                            What you can show as proof (deliverables)
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            {[
                              {
                                icon: <Database className="w-5 h-5" />,
                                title: "Event Logs",
                                desc: "Timestamped tag reads mapped to zones, gates, and workflows.",
                              },
                              {
                                icon: <BarChart2 className="w-5 h-5" />,
                                title: "Audit Reports",
                                desc: "Cycle-count accuracy, asset trail, movement history, SLA logs.",
                              },
                              {
                                icon: <Shield className="w-5 h-5" />,
                                title: "Exception Evidence",
                                desc: "Anomaly alerts, boundary violations, missing/ghost asset events.",
                              },
                            ].map((e) => (
                              <div
                                key={e.title}
                                className="rounded-xl border border-border bg-background/50 p-4"
                              >
                                <div className="flex items-center gap-2 text-primary mb-2">
                                  {e.icon}
                                  <p className="font-semibold text-foreground">{e.title}</p>
                                </div>
                                <p className="text-muted-foreground">{e.desc}</p>
                              </div>
                            ))}
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Business Benefits */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-card/40">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 bg-muted/40 text-left"
                    onClick={() => toggleEnterprise("benefits")}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Business Benefits (Outcomes)
                    </h3>
                    {expandedEnterpriseSection === "benefits" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {expandedEnterpriseSection === "benefits" && (
                    <div className="p-6 grid md:grid-cols-2 gap-6">
                      <Card className="bg-background border-border">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary">
                            Operations
                          </CardTitle>
                          <CardDescription>
                            Automation reduces manual effort and errors
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          {[
                            {
                              title: "Faster audits",
                              desc: "Automated reads reduce audit time from days to hours (site dependent).",
                            },
                            {
                              title: "Reduced losses",
                              desc: "Zone + gate alerts help reduce shrinkage and misplaced assets.",
                            },
                            {
                              title: "Higher accuracy",
                              desc: "No line-of-sight scanning means fewer misses than barcode workflows.",
                            },
                          ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                              <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                                <CheckCircle className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">{item.title}</p>
                                <p className="text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border">
                        <CardHeader>
                          <CardTitle className="text-xl text-primary">
                            Security & Compliance
                          </CardTitle>
                          <CardDescription>
                            Strong audit trail + actionable evidence
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          {[
                            {
                              title: "Complete asset trail",
                              desc: "Who/what/where/time events support compliance and investigations.",
                            },
                            {
                              title: "Automated exception handling",
                              desc: "Boundary violations and unusual movement are flagged instantly.",
                            },
                            {
                              title: "AI-assisted insights",
                              desc: "Predict issues earlier, reduce downtime, and optimize usage.",
                            },
                          ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                              <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">{item.title}</p>
                                <p className="text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================
            OFFICE CONTENT (NO IMAGES)
        ========================== */}
        <section id="office" className="py-16 sm:py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <FadeInText>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  Smart RFID Solutions for{" "}
                  <span className="text-primary">Office Asset Management</span>
                </h2>
              </FadeInText>
              <FadeInText delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                  Evidence-first tracking: live location history, automated
                  check-in/out, and audit-ready reports.
                </p>
              </FadeInText>
            </div>

            <Tabs value={officeTab} onValueChange={setOfficeTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="tags">RFID Tags</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
              </div>

              {/* Overview */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlassCard className="p-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Automate Office Asset Visibility
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      RFID replaces manual spreadsheets and ad-hoc barcode scans.
                      Assets are tracked by zones and movement events, producing
                      an audit trail by default.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      AI can flag unusual movements, detect missing assets, and
                      highlight utilization gaps for better planning.
                    </p>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <h4 className="text-xl font-semibold mb-4">Outcome Highlights</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <div className="text-3xl font-semibold text-foreground mb-1">99%</div>
                        <div className="text-sm text-muted-foreground">
                          Tracking Accuracy (site dependent)
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <div className="text-3xl font-semibold text-foreground mb-1">85%</div>
                        <div className="text-sm text-muted-foreground">
                          Time Saved on Inventory
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <div className="text-3xl font-semibold text-foreground mb-1">60%</div>
                        <div className="text-sm text-muted-foreground">
                          Reduction in Lost Assets
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <div className="text-3xl font-semibold text-foreground mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">
                          Real-time Monitoring
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </TabsContent>

              {/* Tags */}
              <TabsContent value="tags">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    Types of RFID Tags for Office Asset Management
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Choose the right RFID tags for your equipment and environment
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-background border-border">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                        <Tag className="h-6 w-6" />
                      </div>
                      <CardTitle>Durable Label Tags</CardTitle>
                      <CardDescription>Flexible + cost-effective</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Usage:</span>
                        <p>Furniture, printers, monitors, peripherals.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Benefit:</span>
                        <p>Fast deployment at scale with clean asset labeling.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                        <Cpu className="h-6 w-6" />
                      </div>
                      <CardTitle>IT Asset RFID Tags</CardTitle>
                      <CardDescription>Optimized for electronics</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Usage:</span>
                        <p>Laptops, desktops, tablets, IT accessories.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Benefit:</span>
                        <p>Secure lifecycle tracking + simplified audits.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                        <HardDrive className="h-6 w-6" />
                      </div>
                      <CardTitle>Hard / On-metal Tags</CardTitle>
                      <CardDescription>High-value equipment</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Usage:</span>
                        <p>Server racks, heavy devices, metal enclosures.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">Benefit:</span>
                        <p>Reliable reads even on metal surfaces.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Benefits */}
              <TabsContent value="benefits">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    Benefits of RFID Asset Management
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Automation + evidence for security, compliance, and audits
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Search className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Asset Tracking</h4>
                        <p className="text-muted-foreground">
                          Real-time location and movement history for devices,
                          furniture, and shared assets.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Maintenance Management
                        </h4>
                        <p className="text-muted-foreground">
                          Track warranties and automate service reminders based
                          on utilization and lifecycle events.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Database className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Audit & Inventory Control
                        </h4>
                        <p className="text-muted-foreground">
                          Automated counts and audit-ready reports with a complete
                          asset trail.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Layers className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Enhanced Visibility</h4>
                        <p className="text-muted-foreground">
                          Utilization analytics, location history, and exception
                          views—powered by AI insights.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Increased Security</h4>
                        <p className="text-muted-foreground">
                          Alerts for unauthorized movement with zone-based
                          controls and event evidence.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Monitor className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Streamlined Management
                        </h4>
                        <p className="text-muted-foreground">
                          Simplify asset lifecycle workflows: allocation,
                          returns, repairs, and decommissioning.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                <div className="mt-10">
                  <GlassCard className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">
                          Ready to transform your asset management?
                        </h4>
                        <p className="text-muted-foreground">
                          We’ll map your zones, define workflows, and deliver
                          dashboards + audit evidence.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Link to="/ContactUs">
                          <MagneticButton variant="primary" size="lg">
                            Contact Sales
                          </MagneticButton>
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* =========================
            COMMUNITIES CONTENT (NO IMAGES)
        ========================== */}
        <section id="communities" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <FadeInText>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  RFID for{" "}
                  <span className="text-primary">Communities & Campuses</span>
                </h2>
              </FadeInText>
              <FadeInText delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                  Track shared assets (tools, devices, lab gear, sports
                  equipment) with automated check-in/out, loss prevention, and
                  AI-powered exception detection.
                </p>
              </FadeInText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  What gets automated in communities
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      icon: <Route className="w-5 h-5" />,
                      title: "Self-serve circulation",
                      desc: "Residents/students borrow and return shared items with automated event logging.",
                    },
                    {
                      icon: <ShieldCheck className="w-5 h-5" />,
                      title: "Boundary + zone controls",
                      desc: "Gates/zones alert when assets move unexpectedly across secure areas.",
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      title: "AI exception detection",
                      desc: "Find unusual borrowing patterns, missing assets, and high-risk shrinkage zones.",
                    },
                    {
                      icon: <BarChart2 className="w-5 h-5" />,
                      title: "Utilization analytics",
                      desc: "Know what assets are used most, under-used, or due for maintenance/replacement.",
                    },
                  ].map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                        {b.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{b.title}</p>
                        <p className="text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Why it’s “evidence-ready”
                </h3>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      icon: <Clock className="w-5 h-5" />,
                      title: "Time-stamped trails",
                      desc: "Every movement becomes a time-stamped event for audits and investigations.",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Security proof",
                      desc: "Gate events + zone violations generate clear, actionable evidence.",
                    },
                    {
                      icon: <Database className="w-5 h-5" />,
                      title: "Structured logs",
                      desc: "Standardized asset event logs integrate with dashboards and ERP/CMMS.",
                    },
                  ].map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">
                        {b.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{b.title}</p>
                        <p className="text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="mt-10">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Hardware (Typical)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Configure based on zones, gates, and mobility requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">RFID Gate</CardTitle>
                      <CardDescription>Entry/exit tracking + alerts</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>High-throughput tracking</li>
                        <li>Security + boundary alerts</li>
                        <li>PoE supported</li>
                        <li>Durable deployment</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        Fixed UHF RFID Reader
                      </CardTitle>
                      <CardDescription>Zones, rooms, storage</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Multi-antenna support</li>
                        <li>Reliable zone reads</li>
                        <li>PoE supported</li>
                        <li>Rugged build</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        Handheld RFID Reader
                      </CardTitle>
                      <CardDescription>Mobile audits + search</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fast cycle counts</li>
                        <li>Locate missing assets</li>
                        <li>Great for large campuses</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Antenna</CardTitle>
                      <CardDescription>Extend read zones</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Long-range setups</li>
                        <li>Indoor/outdoor options</li>
                        <li>Compatible with readers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </GlassCard>
            </div>

            <div className="mt-10 text-center">
              <Link to="/ContactUs">
                <MagneticButton variant="primary" size="lg">
                  Contact Sales <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-24 relative bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <GlassCard className="p-8 sm:p-12 text-center" glowColor="purple">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                Want RFID for <span className="text-primary">Your Facility?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Deploy RFID automation with real-time visibility, audit evidence,
                and AI-driven insights—across enterprises, offices, and
                communities/campuses.
              </p>
              <div className="flex justify-center">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={handleRequestDemo}
                >
                  Request a Demo <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </div>
            </GlassCard>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
