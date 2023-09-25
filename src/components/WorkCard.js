import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return ( <div className="project-card">
  <img src={props.imgsrc} alt="image" />
  <h2 className="project-title">{props.title}</h2>
<div className="pro-details">
<p>{props.text}</p>
<div className="pro-btns">
<NavLink to={props.view} className="buton2">
Detaylı İncele
</NavLink>
<NavLink to={props.video} className="buton2">
Videosunu İzle
</NavLink>
</div>
</div>
</div>
  );
}

export default WorkCard