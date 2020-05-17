import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCode, faEye } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props) => {
  const { repository } = props;
  return (
    <div className="list-item">
      <div className="row">
        <div className="col-6">
          <h5>
            {repository.name}
          </h5>
        </div>
        <div className="col-6">
          <div className="text-right">           
            <FontAwesomeIcon icon={faEye} /> Watch:
            <span className="watch"> {repository.watchers_count}</span>
          </div>
        </div>
      </div>
      <div>
        <span>
          id: <span className="rep-id">{repository.id}</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faCode} />
          <span className="programming-languarge">
            {repository.programming_languarge}
          </span>
        </span>
        <span>
          <FontAwesomeIcon icon={faStar} />
          <span className="star">{repository.star}</span>
        </span>
      </div>
    </div>
  );
};

export default ListItem;
