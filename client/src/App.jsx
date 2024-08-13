import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { authLogout, checkAuth } from "./components/Auth";
import About from "./components/About";
import Profile from './components/Profile';
import Logout from "./components/Logout";
import Clients from "./components/Clients";
import Labours from "./components/Labours";
import Suppliers from "./components/Suppliers";
import Users from "./components/Users";
import Form from "./components/ClientForm";
import ClientsTable from "./components/ClientTable";
import SuppliersForm from "./components/SuppliersForm";
import SuppliersTable from "./components/SuppliersTable";
import LabourForm from "./components/LabourForm";
import LabourTable from "./components/LabourTable";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/labours" element={<Labours />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/clientForm" element={<Form />} />
          <Route path="/clientTable" element={<ClientsTable />} />
          <Route path="/suppliersForm" element={<SuppliersForm />} />
          <Route path="/suppliersTable" element={<SuppliersTable />} />
          <Route path="/labourForm" element={<LabourForm />} />
          <Route path="/labourTable" element={<LabourTable />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} /> {/* Root route */}
      </Routes>
    </Router>
  );
};

export default App;
