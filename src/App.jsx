import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles, Layout } from "./styles/GlobalStyles";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Clients from "./pages/clients/Clients";
import Billing from "./pages/billing/Billing";
import Calendar from "./pages/calendar/Calendar";
import Rutas from "./pages/rutas/Rutas";
import SidebarMenu from './components/sideBarMenu/SideBarMenu';
import { useSidebarStore } from './store/sidebarStore';

const App = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <Router>
      <GlobalStyles />

      <Layout isOpen={isOpen}>
        <SidebarMenu />
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/facturacion" element={<Billing />} />
          <Route path="/calendario" element={<Calendar />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
