import React, { createContext, useContext, useEffect, useState } from "react";

import { getMenuItems } from "../services/APIUtils";

export const MenuItemContext = createContext();

export function useMenuItems() {
  return useContext(MenuItemContext);
}

export const MenuItemProvider = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);

  const fetchMenuItems = async () => {
    try {
      const res = await getMenuItems();
      const data = res.data;
      setMenuItems(data);
      setLoadingItems(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <MenuItemContext.Provider
      value={{
        menuItems,
        setMenuItems,
        loadingItems,
        setLoadingItems,
      }}
    >
      {props.children}
    </MenuItemContext.Provider>
  );
};
