// Types
import { Employee } from "../../../../types/Employee";

// Components
import EmployeeAccordion from "../../../EmployeeAccordion";
import SkeletonMobile from "../SkeletonMobile";

// Styles
import "./index.scss";

function MobileTable({
  employees,
  isLoading,
}: {
  employees: Employee[];
  isLoading?: boolean;
}) {
  return (
    <div className="mobile-table">
      <header>
        <p>FOTO</p>
        <p>NOME</p>
        <div className="mobile-table__action-indicator" />
      </header>
      {isLoading ? (
        <SkeletonMobile />
      ) : (
        <main>
          {employees.map((employee) => (
            <EmployeeAccordion key={employee.id} employee={employee} />
          ))}
        </main>
      )}
    </div>
  );
}

export default MobileTable;
