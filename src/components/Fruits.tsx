import React from "react";
import Fruit from "./Fruit";

const Fruits = () => {
  const items: string[] = [];

  const onClick = (text: string): void => alert(text);
  return (
    <div>
      <Fruit items={items} onClick={onClick} />
    </div>
  );
};

export default Fruits; 