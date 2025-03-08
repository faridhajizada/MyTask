import React from "react";
import "./Card.scss";

function Card() {
  return (
    <section id="card">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="card-item users">
              <h3>Users</h3>
              <p>90</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card-item sales">
              <h3>Sales</h3>
              <p>$13000</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card-item orders">
              <h3>Orders</h3>
              <p>67</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card-item delivery">
              <h3>Delivery</h3>
              <p>34</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
