import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashStyles from "../styles/dashboard.module.scss";
import ResumeForm from "../../ResumeForm/page";
import Templates from "../../Templates/page";

function Dashboard() {

  return (
    <div className={DashStyles.container}>
      <ResumeForm />
      <Templates />
    </div>
  );
}

export default Dashboard;