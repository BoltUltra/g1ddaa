import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import EstateManagement from "./components/EstateManagement";
import CreateEstateForm from "@/components/CreateEstateForm.tsx";
import EstatePage from "@/components/EstatePage";
import { Toaster } from "react-hot-toast";
import Homepage from "@/components/Homepage.tsx";

function App() {
  return (
    <Router>
      <Toaster />
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/estates" element={<EstateManagement />} />
          <Route path="/create-estate" element={<CreateEstateForm />} />
          <Route path="/estate/:id" element={<EstatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
