import Accordion from "../Accordion";

function EmployeeAccordion() {
  return (
    <Accordion
      triggerHeader={<h2>Funcionários</h2>}
      content={<div>Conteúdo do Accordion</div>}
      defaultValue=""
      ariaLabelReference="employee-details"
    />
  );
}

export default EmployeeAccordion;
