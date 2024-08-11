import { BgAnimateButton } from "./cute-button"

type Gradients =
  | "sunrise"
  | "ocean"
  | "candy"
  | "default"
  | "forest"
  | "sunset"
  | "nebula"

type Radius = "full" | "xl" | "2xl" | "3xl" | "sm"
type Animations = "spin" | "pulse" | "spin-slow" | "spin-fast"

const gradients: Gradients[] = [
  "sunrise",
  "ocean",
  "candy",
  "forest",
  "sunset",
  "default",
  "nebula",
]
const roundings: Radius[] = ["full", "xl", "2xl", "3xl", "sm"]
const animations: Animations[] = ["spin", "pulse", "spin-slow", "spin-fast"]

export const BgAnimateButtonsDemo = () => {
  return (
      <div className="flex justify-center sm:px-12 md:px-24  flex-col rounded-lg space-y-4">
            <BgAnimateButton 
              key="pulse"
              gradient={gradients[3]}
              variant="ghost"
              animation="pulse"
            >
                fun
            </BgAnimateButton>
    </div>
  )
}

