import { Outlet } from "react-router-dom";
import LandlordDashboardSidebar from "./LandlordDashboardSidebar";

export default function LandlordDashboard() {
  return (
    <>
      <div className="w-[100vw] mt-0 ld:mt-16 flex flex-col min-[320px]:max-sm:justify-center min-[320px]:max-sm:items-center gap-x-2 sm:flex-row xl:ml-12">
        <div className="min-w-[10%] md:w-[23%]">
          <LandlordDashboardSidebar />
        </div>

        <div className=" sm:ml-0 w-[90%] md:w-[65%] md:mx-auto xl:ml-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}
