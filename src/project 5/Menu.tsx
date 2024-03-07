interface item {
  id: number;
  title: string;
  category: string;
  price: number;
  imgUrl: string;
  description: string;
}

interface Props {
  items: item[];
}
const Menu = ({ items }: Props) => {
  return (
    <div className="section-center">
      {items.map((menuItem: item) => {
        const { id, title, price, imgUrl, description } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={imgUrl} className="p5-photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
