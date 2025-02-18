"use client"

import { Globe2, MapPin } from 'lucide-react'
import { motion } from "framer-motion"

interface LocationDisplayProps {
  location: string
  className?: string
}

export function LocationDisplay({ location, className }: LocationDisplayProps) {
  const isRemote = location.toLowerCase() === "remote"
  
  return (
    <div className={`flex items-center gap-1 text-blue-300/80 ${className}`}>
      {isRemote ? (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <Globe2 className="h-4 w-4" />
        </motion.div>
      ) : (
        <MapPin className="h-4 w-4" />
      )}
      <span>{location}</span>
    </div>
  )
}

