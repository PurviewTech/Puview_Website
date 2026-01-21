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
    UtensilsCrossed,
    Briefcase,
    LibraryBig,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ✅ Your existing 3D hero
import { RfidHeroScene } from "@/components/3d/RfidHeroScene";

export default function RfidAssetManagement() {
    const navigate = useNavigate();

    // Kitchen collapsible section state
    const [expandedKitchenSection, setExpandedKitchenSection] = useState("types");

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

    const toggleKitchen = (section) => {
        setExpandedKitchenSection((prev) => (prev === section ? null : section));
    };

    const handleScrollTo = (id) => {
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
                                    Intelligent <span className="text-primary">Automation</span> for Track and Trace
                                </h1>
                            </FadeInText>



                            <FadeInText delay={0.2}>
                                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
                                    Streamline operations, improve audits, and maintain complete visibility using RFID —
                                    tailored for large kitchens & canteens, office assets, and modern libraries.
                                </p>
                            </FadeInText>

                            <FadeInText delay={0.3}>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <MagneticButton variant="primary" size="lg" onClick={() => handleScrollTo("solutions")}>
                                        Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                                    </MagneticButton>
                                    <MagneticButton variant="secondary" size="lg" onClick={handleRequestDemo}>
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
                                        <UtensilsCrossed className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Kitchen & Canteens</h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            Improve workflow efficiency, food safety, inventory management and equipment tracking.
                                        </p>
                                        <MagneticButton variant="secondary" size="sm" onClick={() => handleScrollTo("kitchen")}>
                                            View Kitchen Content
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
                                        <h3 className="text-xl font-semibold mb-2">Office Asset Management</h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            Automate tracking for IT devices and office equipment with real-time visibility and audits.
                                        </p>
                                        <MagneticButton variant="secondary" size="sm" onClick={() => handleScrollTo("office")}>
                                            View Office Content
                                        </MagneticButton>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-6" delay={0.15}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <LibraryBig className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Library Management</h3>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            Streamline circulation, enhance security, reduce manual labor, and enable faster inventory.
                                        </p>
                                        <MagneticButton variant="secondary" size="sm" onClick={() => handleScrollTo("library")}>
                                            View Library Content
                                        </MagneticButton>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </section>

                {/* =========================
            KITCHEN CONTENT (NO IMAGES)
        ========================== */}
                <section id="kitchen" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <FadeInText>
                                <h2 className="text-3xl sm:text-4xl font-semibold">
                                    RFID Solutions for <span className="text-primary">Large Kitchens & Canteens</span>
                                </h2>
                            </FadeInText>
                            <FadeInText delay={0.1}>
                                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                                    Streamline operations, enhance food safety, and optimize inventory management with RFID tracking.
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
                                <h3 className="text-2xl font-semibold text-primary mb-3">Transforming Kitchen Operations</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    By incorporating RFID technology, large kitchens and canteens can dramatically improve workflow
                                    efficiency, enhance food safety protocols, and ensure timely maintenance of critical equipment.
                                    Our RFID solutions provide real-time tracking and management capabilities that reduce costs while
                                    improving service quality.
                                </p>
                            </GlassCard>
                        </motion.div>

                        <div className="space-y-6">
                            {/* Types */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="rounded-2xl overflow-hidden border border-border bg-card/40">
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between px-6 py-5 bg-muted/40 text-left"
                                        onClick={() => toggleKitchen("types")}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-semibold">Types of RFID Tags for Kitchens</h3>
                                        {expandedKitchenSection === "types" ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </button>

                                    {expandedKitchenSection === "types" && (
                                        <div className="p-6 grid md:grid-cols-3 gap-6">
                                            <Card className="bg-background border-border">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-lg text-primary">Laundry/Fabric RFID Tags</CardTitle>
                                                    <CardDescription>For linens, uniforms, aprons, towels</CardDescription>
                                                </CardHeader>
                                                <CardContent className="text-sm text-muted-foreground space-y-2">
                                                    <p>
                                                        <span className="font-semibold text-foreground">Usage:</span> Ideal for managing linens,
                                                        uniforms, aprons, and kitchen towels.
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold text-foreground">Benefits:</span> Automated tracking ensures
                                                        proper laundering cycles and reduces losses.
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            <Card className="bg-background border-border">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-lg text-primary">Polyester RFID Tags</CardTitle>
                                                    <CardDescription>For utensils, containers, medium-duty equipment</CardDescription>
                                                </CardHeader>
                                                <CardContent className="text-sm text-muted-foreground space-y-2">
                                                    <p>
                                                        <span className="font-semibold text-foreground">Usage:</span> Perfect for utensils,
                                                        containers, and medium-duty kitchen equipment.
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold text-foreground">Benefits:</span> Highly durable and resistant
                                                        to heat, moisture, and cleaning agents.
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            <Card className="bg-background border-border">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-lg text-primary">Hard RFID Tags</CardTitle>
                                                    <CardDescription>For ovens, refrigerators, dishwashers</CardDescription>
                                                </CardHeader>
                                                <CardContent className="text-sm text-muted-foreground space-y-2">
                                                    <p>
                                                        <span className="font-semibold text-foreground">Usage:</span> Designed for heavy-duty
                                                        equipment like ovens, refrigerators, and dishwashers.
                                                    </p>
                                                    <p>
                                                        <span className="font-semibold text-foreground">Benefits:</span> Withstand extreme conditions
                                                        for long-term tracking of high-value assets.
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Business Benefits */}
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="rounded-2xl overflow-hidden border border-border bg-card/40">
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between px-6 py-5 bg-muted/40 text-left"
                                        onClick={() => toggleKitchen("benefits")}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-semibold">Business Benefits</h3>
                                        {expandedKitchenSection === "benefits" ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </button>

                                    {expandedKitchenSection === "benefits" && (
                                        <div className="p-6 grid md:grid-cols-2 gap-6">
                                            <Card className="bg-background border-border">
                                                <CardHeader>
                                                    <CardTitle className="text-xl text-primary">Operational Efficiency</CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4 text-sm">
                                                    {[
                                                        {
                                                            title: "Streamlined inventory management",
                                                            desc: "Reduce manual counting by up to 95% with automated systems",
                                                        },
                                                        {
                                                            title: "Reduced losses and theft",
                                                            desc: "Typically decreases inventory shrinkage by 20–30%",
                                                        },
                                                        {
                                                            title: "Labor optimization",
                                                            desc: "Redirect staff from manual tracking to value-added activities",
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
                                                    <CardTitle className="text-xl text-primary">Quality & Compliance</CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4 text-sm">
                                                    {[
                                                        {
                                                            title: "Enhanced food safety standards",
                                                            desc: "Automated compliance tracking and documentation",
                                                        },
                                                        {
                                                            title: "Optimized maintenance schedules",
                                                            desc: "Extend equipment lifespan by up to 40% with proper maintenance",
                                                        },
                                                        {
                                                            title: "Data-driven decision making",
                                                            desc: "Comprehensive analytics for continuous improvement",
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
                                    Smart RFID Solutions for <span className="text-primary">Office Asset Management</span>
                                </h2>
                            </FadeInText>
                            <FadeInText delay={0.1}>
                                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                                    Streamline your office inventory tracking with advanced RFID technology.
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
                                            Revolutionize Your Asset Management
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            In today&apos;s dynamic office environment, managing assets like computers, desks, chairs,
                                            and other equipment can be challenging. RFID technology provides a smart solution by automating
                                            asset tracking, ensuring that office equipment is always accounted for and easily located.
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Our RFID asset management system offers real-time tracking, automated inventory counts,
                                            and detailed reporting to help you maintain complete visibility of your office assets.
                                        </p>
                                    </GlassCard>

                                    <GlassCard className="p-6">
                                        <h4 className="text-xl font-semibold mb-4">Outcome Highlights</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                                                <div className="text-3xl font-semibold text-foreground mb-1">99%</div>
                                                <div className="text-sm text-muted-foreground">Asset Tracking Accuracy</div>
                                            </div>
                                            <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                                                <div className="text-3xl font-semibold text-foreground mb-1">85%</div>
                                                <div className="text-sm text-muted-foreground">Time Saved on Inventory</div>
                                            </div>
                                            <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                                                <div className="text-3xl font-semibold text-foreground mb-1">60%</div>
                                                <div className="text-sm text-muted-foreground">Reduction in Lost Assets</div>
                                            </div>
                                            <div className="rounded-xl border border-border bg-background/50 p-4 text-center">
                                                <div className="text-3xl font-semibold text-foreground mb-1">24/7</div>
                                                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>
                            </TabsContent>

                            {/* Tags */}
                            <TabsContent value="tags">
                                <div className="mb-6 text-center">
                                    <h3 className="text-2xl font-semibold">Types of RFID Tags for Office Asset Management</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Choose the right RFID tags for your specific office equipment and environment
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Card className="bg-background border-border">
                                        <CardHeader className="pb-2">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                                <Tag className="h-6 w-6" />
                                            </div>
                                            <CardTitle>Polyester RFID Tags</CardTitle>
                                            <CardDescription>Flexible and durable for general office assets</CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-sm text-muted-foreground space-y-3">
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Usage:</span>
                                                <p>Ideal for office furniture, equipment, and personal assets like printers and monitors.</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Benefits:</span>
                                                <p>
                                                    Resistant to wear and can be attached to various office items without compromising aesthetics
                                                    or functionality.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-background border-border">
                                        <CardHeader className="pb-2">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                                <Cpu className="h-6 w-6" />
                                            </div>
                                            <CardTitle>Flexible IT Asset RFID Tags</CardTitle>
                                            <CardDescription>Specialized for electronic equipment</CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-sm text-muted-foreground space-y-3">
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Usage:</span>
                                                <p>Specifically designed for IT equipment such as computers, laptops, tablets, and monitors.</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Benefits:</span>
                                                <p>Enable seamless tracking of electronic equipment for security, usage, and maintenance.</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-background border-border">
                                        <CardHeader className="pb-2">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                                <HardDrive className="h-6 w-6" />
                                            </div>
                                            <CardTitle>Hard RFID Tags</CardTitle>
                                            <CardDescription>Robust for high-value equipment</CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-sm text-muted-foreground space-y-3">
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Usage:</span>
                                                <p>Used for larger, high-value office assets like server racks and heavy equipment.</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="font-semibold text-foreground">Benefits:</span>
                                                <p>
                                                    Rigid structure ensures they remain intact even when affixed to frequently moved or high-use
                                                    items.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            {/* Benefits */}
                            <TabsContent value="benefits">
                                <div className="mb-6 text-center">
                                    <h3 className="text-2xl font-semibold">Benefits of RFID Asset Management</h3>
                                    <p className="text-muted-foreground mt-2">
                                        Discover how RFID technology can transform your office asset management
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
                                                    Track and manage office furniture and IT equipment in real-time, preventing loss or theft.
                                                    Get instant location information and movement history.
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
                                                <h4 className="text-xl font-semibold mb-2">Maintenance Management</h4>
                                                <p className="text-muted-foreground">
                                                    Schedule maintenance checks and track warranties on office equipment with automated alerts
                                                    for service due dates and warranty expirations.
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
                                                <h4 className="text-xl font-semibold mb-2">Audit & Inventory Control</h4>
                                                <p className="text-muted-foreground">
                                                    Quick audits with automated scanning. Complete inventory checks in minutes instead of days.
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
                                                    Detailed reporting and analytics: utilization, location history, and maintenance records.
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
                                                    Automated alerts for unauthorized movement. Create zones and receive boundary-violation
                                                    notifications.
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
                                                <h4 className="text-xl font-semibold mb-2">Streamlined Management</h4>
                                                <p className="text-muted-foreground">
                                                    Simplify check-in/check-out and automate asset lifecycle management to reduce overhead.
                                                </p>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>

                                <div className="mt-10">
                                    <GlassCard className="p-8">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                            <div>
                                                <h4 className="text-2xl font-semibold mb-2">Ready to transform your asset management?</h4>
                                                <p className="text-muted-foreground">
                                                    Our RFID solutions can be customized to meet your office requirements. Contact our team today.
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
            LIBRARY CONTENT (NO IMAGES)
        ========================== */}
                <section id="library" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <FadeInText>
                                <h2 className="text-3xl sm:text-4xl font-semibold">
                                    RFID Tags for <span className="text-primary">Library Management</span>
                                </h2>
                            </FadeInText>
                            <FadeInText delay={0.1}>
                                <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-3">
                                    Streamline operations, enhance security, and improve user experience with RFID tracking.
                                </p>
                            </FadeInText>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <GlassCard className="p-8">
                                <h3 className="text-2xl font-semibold text-primary mb-3">Transforming Library Operations</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    RFID technology has revolutionized library management by providing a more efficient, accurate,
                                    and automated system for tracking and managing library assets such as books, magazines, and multimedia
                                    items.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-4">
                                    With RFID tags, libraries can streamline their operations, reduce manual labor, enhance security,
                                    and provide a better experience for both staff and patrons.
                                </p>
                            </GlassCard>

                            <GlassCard className="p-8">
                                <h3 className="text-2xl font-semibold text-primary mb-3">Key Benefits</h3>
                                <div className="space-y-4 text-sm">
                                    {[
                                        {
                                            icon: <Clock className="w-5 h-5" />,
                                            title: "Time Efficiency",
                                            desc: "Reduce checkout and inventory time by up to 60% compared to barcode systems.",
                                        },
                                        {
                                            icon: <ShieldCheck className="w-5 h-5" />,
                                            title: "Enhanced Security",
                                            desc: "Prevent theft and unauthorized removal with advanced security gates.",
                                        },
                                        {
                                            icon: <BarChart2 className="w-5 h-5" />,
                                            title: "Data Analytics",
                                            desc: "Gain insights into collection usage and patron behavior patterns.",
                                        },
                                        {
                                            icon: <Users className="w-5 h-5" />,
                                            title: "Improved Experience",
                                            desc: "Provide faster service and self-checkout options for patrons.",
                                        },
                                    ].map((b) => (
                                        <div key={b.title} className="flex items-start gap-3">
                                            <div className="mt-0.5 p-2 rounded-full bg-primary/10 text-primary">{b.icon}</div>
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
                                    Trends in Barcode / Magnetic Stripe / RFID Library Labels
                                </h3>
                                <p className="text-muted-foreground mb-3">
                                    Traditional library management uses magnetic stripes and barcodes for security.
                                </p>
                                <p className="text-muted-foreground mb-3">
                                    They are cost-effective but have significant limitations such as low automation and inefficient barcode
                                    scanning.
                                </p>
                                <p className="text-muted-foreground mb-3">
                                    Inventory checks can be time-consuming and restricted by limited service hours.
                                </p>
                                <p className="text-muted-foreground">
                                    RFID systems not only boost efficiency but also enable unmanned libraries.
                                </p>
                            </GlassCard>
                        </div>

                        <div className="mt-10">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-semibold">Hardware</h3>
                                <p className="text-muted-foreground mt-2">
                                    Explore the power of RFID with state-of-the-art hardware solutions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <Card className="bg-background border-border">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">RFID Gate</CardTitle>
                                        <CardDescription>High-throughput tracking at entry/exit</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-2">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Exceptional RF sensitivity</li>
                                            <li>Long read ranges</li>
                                            <li>High throughput for seamless asset tracking</li>
                                            <li>Power over Ethernet (PoE)</li>
                                            <li>Supports up to eight RF ports</li>
                                            <li>Durable and easy to deploy</li>
                                            <li>Boosts efficiency and accuracy</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background border-border">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">FX9600 Fixed UHF RFID Reader</CardTitle>
                                        <CardDescription>High-volume environments</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-2">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Top-tier performance for high-volume environments</li>
                                            <li>Seamless asset tracking and inventory management</li>
                                            <li>Power over Ethernet (PoE) support</li>
                                            <li>Long-range read capabilities</li>
                                            <li>Durable design for rugged conditions</li>
                                            <li>Enhances operational efficiency</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background border-border">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">Zebra MC3330xR UHF RFID Reader</CardTitle>
                                        <CardDescription>Mobile tracking and inventory</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-2">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>High performance in rugged environments</li>
                                            <li>Excellent read range and throughput</li>
                                            <li>Designed for mobile tracking and inventory management</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="bg-background border-border">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">Zebra AN150 Antenna</CardTitle>
                                        <CardDescription>Long-range RFID applications</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground space-y-2">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Excellent for long-range RFID applications</li>
                                            <li>Durable and weather-resistant design</li>
                                            <li>Compatible with various RFID systems</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
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
                                Let’s deploy RFID tracking with real-time visibility, audits, and insights — across kitchens, offices,
                                and libraries.
                            </p>
                            <div className="flex justify-center">
                                <MagneticButton variant="primary" size="lg" onClick={handleRequestDemo}>
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
