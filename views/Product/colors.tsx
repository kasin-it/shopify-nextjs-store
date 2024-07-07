import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ColorsProps {
  colors: string[]
}

function Colors({ colors }: ColorsProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="color" className="text-base">
        Color
      </Label>
      <RadioGroup
        id="color"
        defaultValue={colors[0].toLocaleLowerCase()}
        className="flex items-center gap-2"
      >
        {colors.map((color) => (
          <Label
            htmlFor={"color-" + color}
            key={color}
            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem id={"color-" + color} value={color.toLowerCase()} />
            {color}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

export default Colors
