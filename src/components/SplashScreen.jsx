import { motion } from "framer-motion";
import hospitalVideo from "../assets/hospital.mp4";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover"
        src={hospitalVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay (IMPORTANT for luxury look) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text content */}
      <motion.div
        className="relative text-center text-gold"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
         <u> Arogya Royale</u>
        </h1>

        <p className="mt-3 text-slate-300 text-lg">
          Premium Healthcare Experience
        </p>
      </motion.div>
    </motion.div>
  );
}