import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { Image } from "cloudinary-react";
import { Circles, Rings } from "react-loading-icons";

import { useCategories } from "../../contexts/CategoryContext";
import { useMenuItems } from "../../contexts/MenuItemContext";
import { getItemsBasedOnTitle } from "../../services/APIUtils";

import "./Main.css";
import "./Menu.css";

const Menu = () => {
  const { categories, loadingCategories } = useCategories();
  const { menuItems, loadingItems, setLoadingItems } = useMenuItems();
  let [items, setItems] = useState([]);

  useEffect(() => {
    setItems(menuItems);
  }, [menuItems]);

  return (
    <div>
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
          <div
            className="row categories__menu"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {loadingCategories ? (
              <Rings height={"3em"} />
            ) : (
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <Button
                    onClick={() => {
                      setItems(menuItems);
                    }}
                    variant="text"
                  >
                    <li
                      data-filter="*"
                      // className="filter-active"
                    >
                      All
                    </li>
                  </Button>
                  {categories.map((category) => {
                    return (
                      <Button
                        key={category.id}
                        onClick={async () => {
                          try {
                            setLoadingItems(true);
                            const res = await getItemsBasedOnTitle(
                              category.name
                            );
                            const data = res.data[0].menuItems;
                            setItems(data);
                            setLoadingItems(false);
                          } catch (err) {
                            console.log(err);
                            setLoadingItems(false);
                          }
                        }}
                      >
                        <div>
                          <li data-filter=".filter-starters">
                            {category.name}
                          </li>
                        </div>
                      </Button>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div
            className="row menu-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {loadingItems ? (
              <Circles height={"3em"} />
            ) : (
              items.map((menuItem) => {
                return (
                  <div
                    className="col-lg-6 menu-item filter-starters"
                    key={menuItem.id}
                  >
                    <Image
                      key={menuItem.id}
                      cloudName={process.env.REACT_APP_CLOUD_NAME}
                      publicId={`${menuItem.image}`}
                      className="menu-img"
                      crop="scale"
                    />
                    <div className="menu-content">
                      <a>{menuItem.name}</a>
                      <span>KSH{menuItem.price}</span>
                    </div>
                    <div className="menu-ingredients">
                      {menuItem.description}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
