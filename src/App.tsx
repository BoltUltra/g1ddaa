import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import EstateManagement from "./components/EstateManagement";
import CreateEstateForm from "@/components/CreateEstateForm.tsx";
import EstatePage from "@/components/EstatePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/estates" element={<EstateManagement />} />
          <Route path="/create-estate" element={<CreateEstateForm />} />
          <Route path="/estate/:id" element={<EstatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
