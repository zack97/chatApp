import React from "react";
import "./addUser.css";

function addUser() {
  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    const username = formData.get("username");

    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jessi Anna</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
}

export default addUser;
