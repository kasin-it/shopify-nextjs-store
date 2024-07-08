import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface VariantsProps {
  title: string
  values: string[]
}

function Variants({ title, values }: VariantsProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={title} className="text-base">
        {title}
      </Label>
      <RadioGroup
        id={title}
        defaultValue={values[0].toLocaleLowerCase()}
        className="flex items-center gap-2"
      >
        {values.map((value) => (
          <Label
            htmlFor={title + "-" + value}
            key={value}
            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
          >
            <RadioGroupItem
              id={title + "-" + value}
              value={value.toLowerCase()}
            />
            {value}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

export default Variants
