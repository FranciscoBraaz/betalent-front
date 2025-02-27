import useGetEmployees from "./hooks/useGetEmployees";

function Home() {
  const { isLoading, employees, isError } = useGetEmployees();

  console.log("employees", employees);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>index</div>;
}

export default Home;
