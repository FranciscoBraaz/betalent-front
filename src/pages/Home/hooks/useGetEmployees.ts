import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Services
import { getEmployees } from "../../../services/employees";

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
      const data = await getEmployees(searchedValue);

      return data;
    } catch (error) {
      return [];
    }
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
