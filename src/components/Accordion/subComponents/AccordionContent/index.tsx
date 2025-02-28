import { forwardRef } from "react";
import { Content } from "@radix-ui/react-accordion";

// Styles
import "./index.scss";

interface AccordionTriggerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  ariaLabelReference: string;
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ children, style, ariaLabelReference, ...props }, forwardedRef) => (
    <Content
      className="accordion__content"
      style={style}
      aria-labelledby={ariaLabelReference}
      aria-describedby={ariaLabelReference}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Content>
  )
);

export default AccordionContent;
