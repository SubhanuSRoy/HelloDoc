import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Navigate, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Prescripton from "./components/Prescription/Prescripton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import SucessScreen from "./components/SucessScreen/SucessScreen";
import Home from "./components/Home/Home";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        {/* <Sidebar /> */}
        <div className="h-max bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
          <Routes>
            <Route path="/add" element={<Prescripton />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sucess" element={<SucessScreen />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
