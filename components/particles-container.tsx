"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

export const ParticlesContainer = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#f97316", "#ef4444", "#f59e0b"],
          },
          links: {
            color: "#f97316",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  )
}
