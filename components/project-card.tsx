"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "~/components/ui/card"
import { projectTypeIcons, langIndicator } from "./work-projects"
import { ExternalLink } from "lucide-react"
import { Badge } from "~/components/ui/badge"

interface ProjectCardProps {
  project: {
    type: "web" | "lib" | "app"
    lang: string
    title: string
    brief: string
    description: string
    href?: string
    archived?: boolean
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = projectTypeIcons[project.type]

  return (
    <motion.div
      layout
      initial={false}
      animate={{ scale: 1 }}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      whileTap={{ scale: isExpanded ? 1 : 0.98 }}
      transition={{
        layout: { type: "spring", bounce: 0.2 },
      }}
      onClick={() => !isExpanded && setIsExpanded(true)}
      className={isExpanded ? "" : "cursor-pointer"}
    >
      <Card className="border-purple-500/20 bg-gray-900/50 hover:bg-gray-900/80 transition-colors h-full">
        <CardContent className={`p-4 ${isExpanded ? "pb-4" : ""}`}>
          <motion.div layout="position">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-purple-400" />
                  <h3 className="font-medium truncate">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">{project.brief}</p>
              </div>
              {project.lang && langIndicator(project)}
            </div>
          </motion.div>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mt-4 border-t border-purple-500/20 pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{project.description}</p>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </a>
                      )}
                    </div>
                    {project.archived && (
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500 shrink-0">
                        Archived Project
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsExpanded(false)
                    }}
                    className="mt-4 text-sm text-purple-400 hover:text-purple-300"
                  >
                    Show less
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

