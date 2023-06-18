import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import SideNav from "../shared_components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <div className="flex">
        <SideNav />
        <div className="w-3/4 absolute right-0 overflow-y-auto">
          <div
            style={{
              backgroundImage:
                "url('https://img.redbull.com/images/c_crop,x_0,y_0,h_4128,w_8256/c_fill,w_1490,h_710/q_auto,f_auto/redbullcom/2022/6/21/fc9itii98dyr4imm5z1a/crankworx-stop-1-innsbruck-full-recap-program-szymon-godziek')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-base-200 relative m-10 p-5 rounded-2xl"
          >
            <Outlet></Outlet>
            <div className="absolute lg:bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-base-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
