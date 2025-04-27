import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    // <div className="flex flex-col min-h-screen bg-gray-50 w-full">
    //   <Header />    

     
    // </div>

    <main className="flex-1 p-6 overflow-auto">
    <div className="w-full">
      <Outlet />
    </div>
  </main>
  );
}

export default DashboardLayout;
