import { forwardRef } from "react";
import { Header, Trigger } from "@radix-ui/react-accordion";

// Styles
import "./index.scss";

interface AccordionTriggerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  styleHeader?: React.CSSProperties;
  ariaLabelReference: string;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  (
    {
      children,
      isOpen,
      onToggle,
      styleHeader,
      ariaLabelReference,
      ...props
    }: AccordionTriggerProps,
    forwardedRef
  ) => {
    return (
      <Header className="accordion__header">
        <Trigger
          className="accordion__trigger"
          {...props}
          ref={forwardedRef}
          aria-describedby={ariaLabelReference}
          asChild
        >
          <div className="accordion__trigger__header-container">
            <div
              className="accordion__trigger__header"
              style={{ ...styleHeader }}
            >
              {children}
              <button
                className="accordion__trigger__selector"
                onClick={onToggle}
              >
                <div className="accordion__trigger__chevron" aria-hidden />
              </button>
            </div>
          </div>
        </Trigger>
      </Header>
    );
  }
);

export default AccordionTrigger;
