import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import VariantWrapper from "@/components/variant-wrapper"

function Specification() {
  return (
    <VariantWrapper variant={"secondary"}>
      <section className="container px-4 md:px-6">
        <div className="space-y-6 md:space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Technical Specifications
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Explore the detailed specifications of our premium headphones.
            </p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Specification</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell>7.1 x 6.7 x 3.2 inches</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>9.8 oz (278g)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Driver Size</TableCell>
                <TableCell>40mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Frequency Response</TableCell>
                <TableCell>20Hz - 20kHz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Impedance</TableCell>
                <TableCell>32 Ohms</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bluetooth Version</TableCell>
                <TableCell>5.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Battery Life</TableCell>
                <TableCell>Up to 20 hours</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Charging Time</TableCell>
                <TableCell>2 hours</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Materials</TableCell>
                <TableCell>
                  Stainless steel, aluminum, and memory foam ear cups
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </VariantWrapper>
  )
}

export default Specification
