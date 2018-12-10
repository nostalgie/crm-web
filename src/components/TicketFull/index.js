import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Update from "components/Update";

class TicketFull extends React.Component {
  render() {
    const {
      createdAt,
      description,
      firstName,
      lastName,
      phoneNumber,
      updates
    } = this.props;
    const date = new Date(createdAt);
    return (
      <div className="card">
        <h6 className="card-header">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <span className="nav-link active">
                {`КОМПАНИЯ:${firstName + " " + lastName}`}
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active">{`тел.${phoneNumber}`}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">
                {`от ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
              </span>
            </li>
          </ul>
        </h6>
        <div className="card-body">
          <p className="card-text text-center">{description}</p>
          <div className="d-flex flex-coloum">
            {
              <div className="container-fluid d-flex flex-column">
                {updates.map(update => {
                  return <Update key={`update_${update.id}`} {...update} />;
                })}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

TicketFull.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string,
  type: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  updates: PropTypes.array.isRequired
};
export default TicketFull;
