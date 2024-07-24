import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./navigation/routes/router";
import { AppInitializer } from "./utils/AppInitializer";
import "./styles/BaseStyles.module.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInitializer>
        <Routes />
        <ToastContainer closeOnClick position="bottom-right" theme="colored" />
      </AppInitializer>
    </QueryClientProvider>
  );
}

export default App;
