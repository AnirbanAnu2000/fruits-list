import React from "react";

const Fruit = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default Fruit; 