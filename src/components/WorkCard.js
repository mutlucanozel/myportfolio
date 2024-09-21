import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {props.view && (
            <NavLink to={props.view} className="buton2">
              Siteye Git
            </NavLink>
          )}
          {props.video && (
            <NavLink to={props.video} className="buton3">
              Videosunu İzle
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
