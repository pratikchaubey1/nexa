import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const gridX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const gridY = useTransform(smoothY, [-1, 1], [-15, 15]);

  const glowX = useTransform(smoothX, [-1, 1], ["20%", "80%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["20%", "80%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#080612]">

      {/* Ambient glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          left: glowX,
          top: glowY,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.12) 35%, transparent 70%)",
        }}
      />

      {/* Static ambient lights */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl" />

      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid */}
      <motion.div
        className="absolute inset-[-30px] opacity-[0.07]"
        style={{
          x: gridX,
          y: gridY,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(8,6,18,0.75) 100%)",
        }}
      />
    </div>
  );
};

export default Background;