import React from "react"; // Make sure to import React

interface Props {
  filterItems: (category: string) => void;
  categories: string[];
}

const Categories = ({ filterItems, categories }: Props) => {
  console.log(categories);
  return (
    <div className="p5-btn-container">
      {categories.map((category: any, index: number) => (
        <button
          type="button"
          className="filtered-btn"
          key={index}
          onClick={() => {
            filterItems(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
