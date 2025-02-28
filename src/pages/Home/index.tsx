import EmployeeAccordion from "../../components/EmployeeAccordion";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";
import { useMedia } from "../../hooks/useMedia";
import useGetEmployees from "./hooks/useGetEmployees";

// Styles
import "./index.scss";

function Home() {
  const { isLoading, employees, isError } = useGetEmployees();
  const isMobile = useMedia("(max-width: 960px)");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header />
      <main className="home">
        <div className="home-container">
          <section>
            <h2>Funcionários</h2>
            <SearchBar size="medium" />
          </section>
          {isMobile ? <EmployeeAccordion /> : <Table employees={employees} />}
        </div>
      </main>
    </>
  );
}

export default Home;
