/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { IconBox } from "../IconBox/Icon";
import "./card.scss"
export function Card({title,description,icon}) {
  console.log(title);
  return (
    <div className="card border-0 bg-light rounded-3">
    <div className="card-body p-4 p-lg-5 pt-0 pt-lg-0 text-center">
      <IconBox
      icon = {icon}
      ></IconBox>
      <h2 className="fw-bold fs-4">{title}</h2>
      <p className="mb-0">
        {description}
      </p>
    </div>
  </div>
  );
}
