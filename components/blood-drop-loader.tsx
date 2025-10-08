"use client"

import { motion } from "framer-motion"

export function BloodDropLoader() {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-4 bg-primary rounded-full"
          style={{
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
