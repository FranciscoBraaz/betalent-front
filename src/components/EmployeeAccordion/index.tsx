// Types
import { Employee } from "../../types/Employee";

// Components
import Accordion from "../Accordion";
import Content from "./subComponents/Content";
import TriggerHeader from "./subComponents/TriggerHeader";

function EmployeeAccordion({ employee }: { employee: Employee }) {
  return (
    <Accordion
      triggerHeader={
        <TriggerHeader photo={employee.image} name={employee.name} />
      }
      styleHeader={{ backgroundColor: "#fff", height: 60 }}
      content={
        <Content
          admissionDate={employee.admission_date}
          job={employee.job}
          phone={employee.phone}
        />
      }
      defaultValue=""
      ariaLabelReference="employee-details"
    />
  );
}

export default EmployeeAccordion;
