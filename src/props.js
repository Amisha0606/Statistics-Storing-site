import React from "react"
import './props.css';
import './App.css';
import { Link} from "react-router-dom";

export default function Card(props) {
    return (
      <a href={props.link}>
        <section className="props--container">
          <img src={props.img} className="icon" />
          <div className="card--text">
            {/* <p>{props.title}</p> */}
            <Link to={props.link}>{props.title}</Link>
          </div>
        </section>
      </a>
    );
}
