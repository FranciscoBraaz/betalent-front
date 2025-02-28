import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Employee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

function useGetEmployees() {
  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  async function fetchEmployees() {
    try {
      const response = await axios.get("http://localhost:3001/employees");
      const formattedData = response.data.map((employee: Employee) => ({
        ...employee,
        admission_date: formatDate(employee.admission_date),
        phone: formatPhone(employee.phone),
      }));

      return formattedData;
    } catch (error) {
      return [];
    }
  }

  function formatDate(dateValue: string) {
    const date = new Date(dateValue);
    const formatted = new Intl.DateTimeFormat("pt-BR").format(date);
    return formatted;
  }

  function formatPhone(phone: string) {
    return phone
      .replace(/\D/g, "") // Remove tudo que não for número
      .replace(/^(\d{2})(\d)/, "+$1 $2") // Adiciona o código do país
      .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona o DDD
      .replace(/(\d{5})(\d{1,4})/, "$1-$2") // Adiciona o traço
      .replace(/(-\d{4})\d+?$/, "$1"); // Impede mais números depois do traço
  }

  return {
    employees,
    isLoading,
    isError,
  };
}

export default useGetEmployees;
