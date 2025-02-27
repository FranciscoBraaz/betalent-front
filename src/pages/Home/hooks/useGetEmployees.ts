import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

      return response.data;
    } catch (error) {
      return [];
    }
  }

  return {
    employees,
    isLoading,
    isError,
  };
}

export default useGetEmployees;
