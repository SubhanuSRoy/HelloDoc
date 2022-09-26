import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Navigate, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Prescripton from "./components/Prescription/Prescripton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Prescripton />
        {/* <div className="md:ml-64">
      <Routes>
        <Route path="" component={<Prescripton/>} />
        
        
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div> */}
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
