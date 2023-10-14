import React from "react";

import Itemslist from "./Itemslist";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <Itemslist
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p> your list is empty</p>
      )}
    </>
  );
};

export default Content;
