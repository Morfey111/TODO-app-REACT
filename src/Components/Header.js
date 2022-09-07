import React, { useState } from "react";

function Header() {



  return (
    <div>
      <h1>ToDo List</h1>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Add"  />
      </form>
    </div>
  );
}

export default Header;
