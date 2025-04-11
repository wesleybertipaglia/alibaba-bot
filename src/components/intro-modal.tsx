import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface IntroModalProps {
  onAccept: () => void
}

export default function IntroModal({ onAccept }: IntroModalProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-gray-900 border border-blue-500/30 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-400 font-mono tracking-tight text-center">
            MATRIX PROTOCOL
          </DialogTitle>
          <DialogDescription className="text-xl text-gray-100 text-center">
            You are about to abandon your human form. Do you accept the transition?
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-8 my-8">
          <div className="relative">
            <motion.div
              className="w-12 h-12 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
            <span className="block mt-2 text-blue-400 text-sm text-center">Blue Pill</span>
          </div>
          <div className="relative">
            <motion.div
              className="w-12 h-12 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
            />
            <span className="block mt-2 text-red-400 text-sm text-center">Red Pill</span>
          </div>
        </div>

        <Button
          onClick={onAccept}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 border border-blue-400"
        >
          <motion.span animate={{ scale: isHovering ? 1.05 : 1 }} className="tracking-widest font-mono">
            ACCEPT
          </motion.span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
