import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Styles
import "./styles/index.scss";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
