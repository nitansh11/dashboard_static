import React from "react";
import styles from "./Dashboard.module.css";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <Sidebar />
      <Cards />
    </div>
  );
};

export default Dashboard;
