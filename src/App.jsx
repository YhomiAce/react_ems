import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import FeatureComponent from "./components/FeatureComponent";
import PricingComponent from "./components/PricingComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/home" element={<EmployeeList />} />
        <Route path="/features" element={<FeatureComponent />} />
        <Route path="/pricing" element={<PricingComponent />} />
      </Routes>

      <FooterComponent />
    </QueryClientProvider>
  );
}

export default App;
