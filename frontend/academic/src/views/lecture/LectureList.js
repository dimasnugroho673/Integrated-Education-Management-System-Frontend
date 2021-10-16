/* eslint-disable react/prop-types */
import React, { Component } from "react";

class LectureList extends Component {

  handleClickMaterial(param) {
    // window.location.href = "http://localhost:8080/el/" + param + "/info";
    alert(param);
  }

  // handleClickMaterial() {
  //   window.location.href = "/dashboard";
  // }

  render() {
    return (
      <div className="col-md-4">
        <div
          className="card card-course"
          onClick={() => this.handleClickMaterial(this.props.data.courseID)}>
          <div className="row">
            <div className="col-5" style={{ verticalAlign: "middle", textAlign: "center" }}>
              <img src="assets/image/logo_mini.png" className="image-course-thumbnail" alt={"Image " + this.props.data.courseTitle}></img>
            </div>
            <div className="col-7">
              <h5 className="text-course-title">{this.props.data.courseTitle}</h5>
              <p className="card-text text-course-schedule">{this.props.data.courseSchedule}</p>
            </div>
          </div>

          <div className="card-body" >
            <span className="card-text">{this.props.data.courseRoom}</span><br></br>
            <span className="card-text">{this.props.data.courseLecture}</span><br></br>
            <span className="card-text">{this.props.data.courseCredits} SKS</span>
          </div>
          <div className="card-footer">
            {this.props.newinfo.map((info) => {
              if (info.length != 0) {
                return (<div className="text-center" key={info.msgid}>
                  <span className="badge badge-green"><b>Ada Info Baru</b></span>
                </div>);
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LectureList;
