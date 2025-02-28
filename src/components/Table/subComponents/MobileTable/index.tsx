import EmployeeAccordion from "../../../EmployeeAccordion";

// Styles
import "./index.scss";

interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

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
