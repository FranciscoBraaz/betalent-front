// Custom hooks
import useGetEmployees from "./hooks/useGetEmployees";

// Components
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Table from "../../components/Table";

// Styles
import "./index.scss";

function Home() {
  const { isLoading, employees, isError, handleSearch } = useGetEmployees();

  return (
    <>
      <Header />
      <main className="home">
        <div className="home-container">
          <section>
            <h2>Funcionários</h2>
            <SearchBar size="medium" onChange={handleSearch} />
          </section>
          {isError && <p>Houve um erro ao buscar funcionários</p>}
          {!isError && <Table employees={employees} isLoading={isLoading} />}
        </div>
      </main>
    </>
  );
}

export default Home;
