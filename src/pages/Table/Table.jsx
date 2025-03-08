import React from "react";
import "./Table.scss";

function Table() {
  const users = [
    {
      id: 1,
      name: "Farid Hajizada",
      email: "admin@shaftali.az",
      role: "Admin",
    },
    {
      id: 2,
      name: "Ilkin Gurbanov",
      email: "developer@shaftali.az",
      role: "Developer",
    },
    {
      id: 3,
      name: "Emil Gasarayev",
      email: "contact@shaftali.az",
      role: "SEO",
    },
  ];

  return (
    <section id="table">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>User List</h2>
          </div>
          <div className="list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
