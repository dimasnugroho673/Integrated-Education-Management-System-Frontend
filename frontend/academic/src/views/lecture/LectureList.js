/* eslint-disable react/prop-types */
import React, { Component } from "react";

class LectureList extends Component {

  handleClickMaterial(courseId, courseSessionId) {
    window.location.href = "/el/" + courseId + "/info";
    localStorage.setItem("course-id-active", courseId);
    localStorage.setItem("course-session-id-active", courseSessionId);
  }

  render() {
    return (
      <div className="col-md-4">
        <div
          className="card card-course p-2"
          onClick={() => this.handleClickMaterial(this.props.data.courseID, this.props.data.session.courseSessionID)}>
          <div className="row">
            <div className="col-3" style={{ verticalAlign: "middle", textAlign: "center" }}>
              <img src={"https://raw.githubusercontent.com/dimasnugroho673/Integrated-Education-Management-System-Frontend/main/assets/images/ilus-course.jpg?token=ALBMY5KE2BN7QITSKABLORTBZNPFM"} className="image-course-thumbnail ml-2" alt={"Image " + this.props.data.courseTitle}></img>
            </div>
            <div className="col-7 text-left">
              <h5 className="text-course-title ml-3">{this.props.data.courseTitle}</h5>
              <p className="card-text text-course-schedule ml-3">{this.props.data.session.courseSchedule}</p>
            </div>
          </div>

          <div className="card-body">
            <p className="card-text mb-2"><span class="iconify mr-2" style={{ fontSize: '20px' }} data-icon="uil:apps"></span> {this.props.data.session.room.roomName}</p>
            <p className="card-text mb-2"><span class="iconify mr-2" style={{ fontSize: '20px' }} data-icon="uil:user-md"></span> {this.props.data.session.lectures.length == 1 ? <>{this.props.data.session.lectures[0].lecture.lectureName}</> :
              <>{this.props.data.session.lectures[0].lecture.lectureName},{" "}{this.props.data.session.lectures[1].lecture.lectureName}</>}</p>
            <p className="card-text mb-2"><span class="iconify mr-2" style={{ fontSize: '20px' }} data-icon="uil:newspaper"></span> {this.props.data.courseCredits} SKS</p>
          </div>
          <div className="card-footer">
            <div className="text-center">
              <span className="badge badge-green"><b>Info terbaru</b></span>
            </div>
          </div>
          {/* <div className="card-footer">
            {this.props.newinfo.map((info) => {
              if (info.length != 0) {
                return (<div className="text-center" key={info.msgid}>
                  <span className="badge badge-green"><b>Ada Info Baru</b></span>
                </div>);
              }
            })}
          </div> */}
        </div>
      </div>
    );
  }
}

export default LectureList;
