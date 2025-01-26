import React from "react";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

interface AccordionProp {
  trigger: string;
  content: string;

  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

interface Props {
  title: string;
  accordion: AccordionProp[];

  cardClassName?: string;
  titleClassName?: string;
  accordionClassName?: string;
}

const AccordionCard = ({ title, accordion, cardClassName, titleClassName, accordionClassName }: Props) => {
  return (
    <Card className={cn("p-6 bg-purple-900/30 border-purple-500/30", cardClassName)}>
      <h3 className={cn("text-xl font-semibold text-white mb-4", titleClassName)}>{title}</h3>
      <Accordion type="single" collapsible className={cn("space-y-2", accordionClassName)}>
        {accordion.map((accordionItem, index) => (
          <AccordionItem value={`item-${index}`} className={accordionItem.itemClassName}>
            <AccordionTrigger className="text-purple-200 hover:text-white">
              {accordionItem.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-purple-200/80">
              {accordionItem.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default AccordionCard;
