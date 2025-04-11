"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import type { RobotFormData } from "../types/robot"

interface RobotFormProps {
  onSubmit: (data: RobotFormData) => void
}

export default function RobotForm({ onSubmit }: RobotFormProps) {
  const [formData, setFormData] = useState<RobotFormData>({
    name: "",
    age: "",
    birthplace: "",
    skill: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-400 font-mono">
            From now on, you must have another robotic identity.
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">
                What would be your new name?
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="text-gray-200">
                What is your age (in operational years)?
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthplace" className="text-gray-200">
                Where were you born?
              </Label>
              <Input
                id="birthplace"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-gray-100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skill" className="text-gray-200">
                What is your special ability?
              </Label>
              <Input
                id="skill"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                required
                className="bg-gray-700 border-gray-600 text-gray-100"
              />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 font-mono tracking-wide py-6">
            Create my robot
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
