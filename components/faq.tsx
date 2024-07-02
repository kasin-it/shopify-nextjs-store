import React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import { ChevronDownIcon } from "lucide-react"
import VariantWrapper from "./variant-wrapper"

interface QuestionItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQProps {
  questions: QuestionItem[]
  variant?: "primary" | "secondary"
}

function FAQ({ questions, variant = "primary" }: FAQProps) {
  return (
    <VariantWrapper variant={variant}>
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {questions.map(({ question, answer }, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80">
                  {question}
                  <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4 text-muted-foreground">
                  {answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </VariantWrapper>
  )
}

export default FAQ
