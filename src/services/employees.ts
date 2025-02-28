import { api } from "./api";

// Types
import { Employee } from "../types/Employee";

// Utils
import { formatDate, formatPhone } from "../utils";

export async function getEmployees(searchedValue: string) {
  let url = "/employees";

  if (searchedValue) {
    url = `/employees?q=${searchedValue}`;
  }

  const { data } = await api.get(url);

  const formattedData = data.map((employee: Employee) => ({
    ...employee,
    admission_date: formatDate(employee.admission_date),
    phone: formatPhone(employee.phone),
  }));

  return formattedData;
}
