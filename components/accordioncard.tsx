import React from "react";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionCard = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30">
      <h3 className="text-xl font-semibold text-white mb-4">FAQ</h3>
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-purple-200 hover:text-white">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent className="text-purple-200/80">
            Getting started is easy! Simply sign up for an account and follow
            our quick start guide.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-purple-200 hover:text-white">
            What are the system requirements?
          </AccordionTrigger>
          <AccordionContent className="text-purple-200/80">
            Our platform works on all modern browsers and devices. No special
            requirements needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default AccordionCard;
