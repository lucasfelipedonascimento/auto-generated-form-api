import { Question } from "./Question"

export type Form = {
  id: string
  name: string
  questions: Question[]
}