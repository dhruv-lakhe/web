"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Globe, Cpu } from "lucide-react"

export const FloatingElements = () => {
  const elements = [
    {
      icon: <Code className="h-4 w-4 text-white" />,
      delay: 0,
      duration: 8,
      initialX: "10%",
      initialY: "20%",
    },
    {
      icon: <Database className="h-4 w-4 text-white" />,
      delay: 1,
      duration: 9,
      initialX: "80%",
      initialY: "15%",
    },
    {
      icon: <Server className="h-4 w-4 text-white" />,
      delay: 2,
      duration: 7,
      initialX: "70%",
      initialY: "70%",
    },
    {
      icon: <Globe className="h-4 w-4 text-white" />,
      delay: 3,
      duration: 10,
      initialX: "20%",
      initialY: "80%",
    },
    {
      icon: <Cpu className="h-4 w-4 text-white" />,
      delay: 4,
      duration: 8,
      initialX: "40%",
      initialY: "40%",
    },
  ]

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-glow-sm"
          style={{
            left: element.initialX,
            top: element.initialY,
          }}
          animate={{
            y: ["0%", "-30%", "0%"],
            x: ["0%", "20%", "0%"],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </>
  )
}
