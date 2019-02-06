import React, { Component } from "react";

class Pagination extends Component {
  onPaginationClick = event => {
    const page = +event.target.innerText;
    this.props.handlePagination(page);
  };
  render() {
    const { currentPage, pages } = this.props;
    console.log(currentPage, pages);
    const isEnd = currentPage === pages;
    const isStart = currentPage === 1;
    const coef = -1 * +isEnd + +isStart;
    console.log(coef);
    let pageValues = [];
    for (let i = 0; i < 3; i++) {
      const displayingValue = currentPage - 1 + coef + i;
      if (displayingValue <= pages && displayingValue >= 1) {
        pageValues.push(displayingValue);
      }
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {/* <li className={`page-item ${isStart ? "disabled" : ""}`}>
            <button type="button" className="btn btn-link">
              Prev
            </button>
          </li> */}
          {pageValues.map(page => (
            <li className="page-item">
              <button
                type="button"
                className={`btn ${
                  page === currentPage ? "btn-primary" : "btn-link"
                }`}
                onClick={this.onPaginationClick}
              >
                {page}
              </button>
            </li>
          ))}

          {/* <li className={`page-item ${isEnd ? "disabled" : ""}`}>
            <button type="button" className="btn btn-link">
              Next
            </button>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
