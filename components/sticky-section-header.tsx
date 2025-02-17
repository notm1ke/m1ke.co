"use client"

import { useEffect, useRef, useState } from "react"
import { Separator } from "~/components/ui/separator"
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

interface StickyHeaderProps {
  title: string
  className?: string
}

export function StickySectionHeader({ title, className }: StickyHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)
  
  const { scrollY } = useScroll()
  const headerHeight = 40 // Approximate height of the header
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.boundingClientRect.top <= headerHeight) {
          setIsStuck(true)
        } else {
          setIsStuck(false)
        }
      },
      { threshold: [1], rootMargin: `-${headerHeight}px 0px 0px 0px` }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-4 mb-6 sticky -top-px z-10 ${className}`}
      style={{
        paddingTop: isStuck ? "1rem" : "0",
        paddingBottom: isStuck ? "1rem" : "0",
        backgroundColor: isStuck ? "rgba(0,0,0,0.8)" : "transparent",
        backdropFilter: isStuck ? "blur(8px)" : "none",
      }}
    >
      <h2 className="text-xl font-semibold text-purple-400">{title}</h2>
      <Separator className="flex-1 bg-purple-500/40" />
    </motion.div>
  )
}

