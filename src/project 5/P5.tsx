import "./App.css";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

interface item {
  id: number;
  title: string;
  category: string;
  price: number;
  imgUrl: string;
  description: string;
}

const all = ["all", ...new Set(items.map((item: item) => item.category))];

const P5 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(all);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="p5-title">
          <h2>Our Menu</h2>
          <div className="p5-underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default P5;
