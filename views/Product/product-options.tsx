import { PlatformProduct } from "@/lib/shopify/types"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import Variants from "@/views/Product/variants"
import { Label } from "@/components/ui/label"

interface ProductOptionsProps {}

interface ProductOptionsProps {
  product: PlatformProduct
}

function ProductOptions({ product }: ProductOptionsProps) {
  return (
    <>
      {product.options.map((option) => (
        <Variants
          key={option.name}
          title={option.name}
          values={option.values}
        />
      ))}

      <div className="grid gap-2">
        <Label htmlFor="quantity" className="text-base">
          Quantity
        </Label>
        <Select defaultValue="1">
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default ProductOptions
