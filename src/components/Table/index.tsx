// Types
import { Employee } from "../../types/Employee";

// Custom hooks
import { useMedia } from "../../hooks/useMedia";

// Components
import SkeletonDesktop from "./subComponents/SkeletonDesktop";
import MobileTable from "./subComponents/MobileTable";

// Styles
import "./index.scss";

const columns = ["image", "name", "job", "admission_date", "phone"];

function Table({
  employees,
  isLoading,
}: {
  employees: Employee[];
  isLoading?: boolean;
}) {
  const isMobile = useMedia("(max-width: 960px)");

  if (isMobile) {
    return <MobileTable employees={employees} isLoading={isLoading} />;
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-header">
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      {isLoading ? (
        <SkeletonDesktop />
      ) : (
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="table-row">
              {columns.map((column) => (
                <td
                  key={column}
                  title={String(employee[column as keyof Employee])}
                >
                  {column === "image" ? (
                    <img
                      className="employee-image"
                      width={34}
                      height={34}
                      src={employee.image}
                      alt={employee.name}
                    />
                  ) : (
                    employee[column as keyof Employee]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default Table;
