import React, { Component } from "react";

class AcademicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  toggleAccordion = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    return (
      <div>
        <div className="accordion">
          <div className="accordion-item">
            <div
              onClick={() => this.toggleAccordion()}
              className="accordion-trigger"
            >
              <h6>
                {this.props.data.courseTitle}, {this.props.data.courseCredits}{" "}
                SKS, {this.props.data.courseYear}, Point{" "}
                {this.props.data.coursePoints}, {this.props.lulus},{" "}
                {this.props.data.courseGrade}
              </h6>
              <div
                className={`accordion-icon ${
                  this.state.isActive ? "is-active" : ""
                }`}
              ></div>
            </div>
            <div
              className={`accordion-content ${
                this.state.isActive ? "is-active" : ""
              }`}
            >
              <ul>
                {this.props.data.courseGradeComponents.map((grade) => {
                  return (
                    <li key={grade.components}>
                      {grade.components}, {grade.weights}%, Nilai {grade.points}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AcademicList;
