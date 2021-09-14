/* eslint-disable eqeqeq */
import React, { useState } from "react";
import menu from "./data";
import { Button } from "./button";
import { Card } from "./cards";

export const Menu = () => {
  const category = menu.map((value, i) => value.category);
  const setcategory = new Set(category);
  const setmenu = ["All", ...setcategory];
  // console.log(setmenu)
  // console.log(setcategory);
  // console.log(category);

  const [item, setitem] = useState(menu);

  function selectedItem(chosen) {
    if (chosen == "All") {
      return setitem(menu);
    }

    const filter = menu.filter((items) => items.category == chosen);
    setitem(filter);
    console.log(filter);
  }

  return (
    <div>
      <Button category={setmenu} fun={selectedItem} />
      <div>
        {item.map((i) => (
          <Card item={i} />
        ))}
      </div>
    </div>
  );
};
