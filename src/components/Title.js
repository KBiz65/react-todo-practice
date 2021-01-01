import React from "react";

function Title() {
  const styles = { color: "#B23DD0" };
  styles.fontSize = "5rem";

  return (
    <div>
      <h1 style={styles}>Kevin's Todo List</h1>
    </div>
  );
}

export default Title;
