import { useState, useEffect } from "react";

interface color {
  rgb: any;
  weight: any;
  hex: any;
}

interface Props {
  color: color;
  index: number;
}

const SingleColor = ({ color, index }: Props) => {
  const [alert, setAlert] = useState(false);
  const bcg = color.rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText("#" + color.hex);
      }}
      className={`single-color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p>{"#" + color.hex}</p>
      {alert && <p>Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
