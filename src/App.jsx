import React, { useState } from "react";
import Home from "./pages/Home";
import CreateContact from "./pages/Create/CreateContact";
import { Routes,Route } from "react-router-dom";
import UpdateContact from "./pages/Create/UpdateContact";

const App = () => {

  const [id, setId] = useState("");

  return (
    <div className="w-full h-screen absolute">
      <Routes>
        <Route path="/" element={<Home setId={setId} />} />
        <Route path="/create" element={<CreateContact />} />
        <Route path="/update" element={<UpdateContact id={id} />} />
      </Routes>
    </div>
  );
};

export default App;
