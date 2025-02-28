// Types
import { Employee } from "../../../../types/Employee";

// Components
import EmployeeAccordion from "../../../EmployeeAccordion";

// Styles
import "./index.scss";

function MobileTable({ employees }: { employees: Employee[] }) {
  return (
    <div className="mobile-table">
      <header>
        <p>FOTO</p>
        <p>NOME</p>
        <div className="mobile-table__action-indicator" />
      </header>
      <main>
        {employees.map((employee) => (
          <EmployeeAccordion key={employee.id} employee={employee} />
        ))}
      </main>
    </div>
  );
}

export default MobileTable;
