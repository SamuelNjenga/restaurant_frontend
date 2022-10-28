import React, { createContext, useContext, useEffect, useState } from "react";

import { getCategories } from "../services/APIUtils";

export const CategoryContext = createContext();

export function useCategories() {
  return useContext(CategoryContext);
}

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      const data = res.data;
      setCategories(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
