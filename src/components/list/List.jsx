import React from "react";
import "./list.css";
import Userinfo from "./userInfo/Userinfo";
import Chatlist from "./chatList/Chatlist";

function List() {
  return (
    <div className="list">
      <Userinfo />
      <Chatlist />
    </div>
  );
}

export default List;
