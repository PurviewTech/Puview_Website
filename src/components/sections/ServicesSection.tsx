import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { SmartSolutionsSection } from "./SmartSolutionsSection";
import { useNavigate } from "react-router-dom";
import {
  Wrench,
  Plane,
  Cross,
  Factory,
  Package,
  Building2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
} from "lucide-react";

interface Industry {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  image: string;
  gradient: string;
  videoUrl?: string | null; // ✅ add this (set URL when you have videos)
}

interface Device {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  secondaryCta?: string;
  tourLink?: string;
  image: string;
  gradient: string;
}

const industries: Industry[] = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Remote assistance and real-time documentation for technicians in the field.",
    color: "from-cyan-500 to-blue-500",
    image: "/images/industrial_solutions/fieldservice.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    videoUrl: null, // ✅ put video here when ready
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Aerospace & Defence",
    description: "Mission-critical AR solutions for defense and aviation industries.",
    color: "from-purple-500 to-indigo-500",
    image: "/images/industrial_solutions/aerospace.png",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    videoUrl: null,
  },
  {
    icon: <Cross className="w-8 h-8" />,
    title: "Healthcare",
    description: "AR-assisted surgery, training, and patient care solutions.",
    color: "from-green-500 to-emerald-500",
    image: "/images/industrial_solutions/healthcare.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    videoUrl: null,
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Smart factory solutions with AR-guided assembly and quality control.",
    color: "from-amber-500 to-orange-500",
    image: "/images/industrial_solutions/manufacturing.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    videoUrl: null,
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Warehouse & Logistics",
    description: "AR-powered picking, packing, and inventory management systems.",
    color: "from-emerald-500 to-teal-500",
    image: "/images/industrial_solutions/logistics.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    videoUrl: null,
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Construction & Oil & Gas",
    description: "Safety compliance and remote inspection for hazardous environments.",
    color: "from-slate-500 to-zinc-500",
    image: "/images/industrial_solutions/constructions.png",
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20",
    videoUrl: null,
  },
];

const devices: Device[] = [
  {
    icon: <></>,
    title: "Smart Glasses",
    description:
      "Experience augmented reality with our compatible smart glasses. Overlay digital information on the physical world.",
    cta: "View Compatible Models",
    image: "/images/smart_devices/glasses.png",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
];

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, title, onClose }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) v.play();
    else v.pause();
  };

  const handleMuteToggle = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) await el.requestFullscreen();
    else await document.exitFullscreen();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={containerRef}
        className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls={false}
        />

        {/* Close */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            videoRef.current?.pause();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
          title="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">{title}</h3>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button onClick={handlePlayPause} className="text-white hover:text-primary transition-colors">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button onClick={handleMuteToggle} className="text-white hover:text-primary transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            <button onClick={handleFullscreen} className="text-white hover:text-primary transition-colors">
              <Maximize className="w-5 h-5" />
              <span className="sr-only">{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VideoPlaceholder = ({ title, onClose }: { title: string; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden max-w-2xl w-full aspect-video flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
        title="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="text-center p-8">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">Video is not available yet. It will be updated soon.</p>
      </div>
    </motion.div>
  </motion.div>
);

export const ServicesSection = () => {
  const navigate = useNavigate();

  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState<string | null>(null);

  const openIndustryVideo = (industry: Industry) => {
    if (industry.videoUrl) setSelectedVideo({ url: industry.videoUrl, title: industry.title });
    else setShowPlaceholder(industry.title);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setShowPlaceholder(null);
  };

  return (
    <>
      <section
        id="services"
        className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 dark:from-emerald-950 dark:via-cyan-950 dark:to-blue-950"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <FadeInText delay={0}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Platform Offerings
              </span>
            </FadeInText>

            <FadeInText delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
                Empowering Businesses with <span className="text-primary">Intelligent Solutions</span>
              </h2>
            </FadeInText>

            <FadeInText delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Our AI XR solutions enable industries with intelligent remote assistance, accelerate learning with 3D AR
                models, and document visual inspections in real-time.
              </p>
            </FadeInText>
          </div>

          <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openIndustryVideo(industry)}
              >
                <div
                  className={`
                    relative rounded-2xl sm:rounded-3xl overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]
                    bg-gradient-to-br ${industry.gradient}
                    border border-foreground/10
                    group-hover:border-primary/30
                    transition-all duration-500
                    group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]
                    backdrop-blur-sm
                  `}
                >
                  {/* Image top */}
                  <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                    <motion.img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      initial={{ scale: 1.1, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                  </div>

                  {/* Industry Icon */}
                  <motion.div
                    className={`
                      absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl
                      bg-gradient-to-br ${industry.color}
                      flex items-center justify-center z-10 shadow-lg
                    `}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-white [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8">
                      {industry.icon}
                    </div>
                  </motion.div>

                  {/* Play bubble */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Play className="w-5 h-5 text-primary ml-0.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col p-5 sm:p-6 lg:p-7">
                    <div className="h-[40%]" />

                    <motion.div
                      className="py-3 z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-0">
                        {industry.title}
                      </h3>
                    </motion.div>

                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">{industry.description}</p>

                      <div
                        className={`text-xs px-2 py-1 rounded-full w-fit ${
                          industry.videoUrl
                            ? "bg-green-500/20 text-green-700 dark:text-green-400"
                            : "bg-orange-500/20 text-orange-700 dark:text-orange-400"
                        }`}
                      >
                        {industry.videoUrl ? "Demo Video Available" : "Coming Soon"}
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Keep your existing section */}
        <SmartSolutionsSection />
      </section>

      {/* Modals */}
      {selectedVideo && <VideoPlayer videoUrl={selectedVideo.url} title={selectedVideo.title} onClose={closeModal} />}
      {showPlaceholder && <VideoPlaceholder title={showPlaceholder} onClose={closeModal} />}
    </>
  );
};
