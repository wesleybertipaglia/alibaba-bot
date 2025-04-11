export interface RobotParts {
  head: string
  body: string
  arms: string
  feet: string
}

export interface Robot {
  id: string
  name: string
  age: string
  birthplace: string
  skill: string
  parts: RobotParts
  likes?: number
  createdAt?: string
}

export interface RobotFormData {
  name: string
  age: string
  birthplace: string
  skill: string
}
