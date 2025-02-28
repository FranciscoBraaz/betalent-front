import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Types
import { Employee } from "../../../types/Employee";

function useGetEmployees() {
  const [searchedValue, setSearchedValue] = useState("");

  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["employees", searchedValue],
    queryFn: fetchEmployees,
  });

  async function fetchEmployees() {
    try {
      let url = "http://localhost:3001/employees";
      if (searchedValue) {
        url = `http://localhost:3001/employees?q=${searchedValue}`;
      }
      const { data } = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const formattedData = data.map((employee: Employee) => ({
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

  function handleSearch(value: string) {
    setSearchedValue(value);
  }

  return {
    employees,
    isLoading,
    isError,
    handleSearch,
  };
}

export default useGetEmployees;
