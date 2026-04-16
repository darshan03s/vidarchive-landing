'use client'

import { Brush, Download, Film, History, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import * as motion from 'motion/react-client'

const features = [
  {
    icon: Terminal,
    iconClass: 'bg-red-200 text-red-600',
    title: 'Powered by yt-dlp',
    description: 'Reliable extraction engine'
  },
  {
    icon: Film,
    iconClass: 'bg-green-200 text-green-600',
    title: 'FFmpeg integration',
    description: 'Format conversion & processing'
  },
  {
    icon: Download,
    iconClass: 'bg-blue-200 text-blue-600',
    title: 'Download queue',
    description: 'Manage multiple downloads easily'
  },
  {
    icon: History,
    iconClass: 'bg-orange-200 text-orange-600',
    title: 'History',
    description: 'Revisit downloads and urls'
  },
  {
    icon: Brush,
    iconClass: 'bg-purple-200 text-purple-600',
    title: 'Clean Desktop UI',
    description: 'No terminal needed'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const
    }
  }
}

const Features = () => {
  return (
    <motion.div
      className="features flex items-center justify-center flex-wrap gap-4 font-montserrat"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <motion.span
            key={feature.title}
            variants={itemVariants}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'flex items-center gap-3 p-6 rounded-md'
            )}
          >
            <Icon className={cn('p-2 rounded-md size-8', feature.iconClass)} />
            <span className="flex flex-col">
              <span className="text-center text-xs font-semibold">{feature.title}</span>
              <span className="text-center text-[10px] font-light">{feature.description}</span>
            </span>
          </motion.span>
        )
      })}
    </motion.div>
  )
}
export default Features
