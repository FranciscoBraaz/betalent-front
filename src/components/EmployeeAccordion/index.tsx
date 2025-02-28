import Accordion from "../Accordion";
import Content from "./subComponents/Content";
import TriggerHeader from "./subComponents/TriggerHeader";
interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

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
