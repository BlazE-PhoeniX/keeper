import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";

function Header() {
  return (
    <header>
      <h1>
        Keeper <AssignmentIcon style={{ fontSize: 30, marginBottom: -5 }} />
      </h1>
    </header>
  );
}

export default Header;
