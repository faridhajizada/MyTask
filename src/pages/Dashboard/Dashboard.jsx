import React from "react";
import Card from "../../components/Card/Card";

function Dashboard() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Welcome to My Dashboard</h2>
          </div>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
