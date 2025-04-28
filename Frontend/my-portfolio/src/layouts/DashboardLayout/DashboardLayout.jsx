
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
   <>
    <Header />
            <Outlet />
   </>

    
    
 
  );
}

export default DashboardLayout;
