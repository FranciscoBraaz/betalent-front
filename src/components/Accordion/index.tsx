import { useState } from "react";
import { Root, Item } from "@radix-ui/react-accordion";

import AccordionTrigger from "./subComponents/AccordionTrigger";
import AccordionContent from "./subComponents/AccordionContent";

// Styles
import "./index.scss";

interface AccordionProps {
  triggerHeader: React.ReactNode;
  content: React.ReactNode;
  styleHeader?: React.CSSProperties;
  defaultValue: string;
  ariaLabelReference: string;
  style?: React.CSSProperties;
  onExpand?: () => void;
}

function Accordion({
  triggerHeader,
  content,
  styleHeader,
  defaultValue,
  ariaLabelReference,
  style,
  onExpand = () => {},
}: AccordionProps) {
  const [itemOpen, setItemOpen] = useState(defaultValue);

  async function handleToggleAccordion() {
    setItemOpen((prevValue) => (prevValue === "item-1" ? "" : "item-1"));
    onExpand();
  }

  return (
    <Root
      className="accordion"
      type="single"
      value={itemOpen}
      collapsible
      onValueChange={(value) => {
        if (value === "item-1") onExpand();
      }}
    >
      <Item className="accordion__item" value="item-1">
        <AccordionTrigger
          isOpen={itemOpen === "item-1"}
          styleHeader={styleHeader}
          ariaLabelReference={ariaLabelReference}
          onToggle={handleToggleAccordion}
        >
          {triggerHeader}
        </AccordionTrigger>
        <AccordionContent style={style} ariaLabelReference="employee-details">
          {content}
        </AccordionContent>
      </Item>
    </Root>
  );
}

export default Accordion;
