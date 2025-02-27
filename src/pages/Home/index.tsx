import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import useGetEmployees from "./hooks/useGetEmployees";

// Styles
import "./index.scss";

function Home() {
  const { isLoading, employees, isError } = useGetEmployees();

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
        </div>
      </main>
    </>
  );
}

export default Home;
