import React, { Component } from "react";

class StudyPlanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            courseCodePicked: [],
            courseIDPickcked: []
        };

        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
    }

    componentDidMount() {
        var checkboxStudyPlan = document.getElementById('checkbox_' + this.props.data.courseCode)
        checkboxStudyPlan.disabled = true
    }

    toggleAccordion = () => {
        this.setState({
            isActive: !this.state.isActive,
        });
    };

    handleRadio = (id, sksTotal, courseID, courseSessionID) => {
        if ((this.props.maxSKS - this.props.countSKS) - sksTotal < 0) {
            alert("Sisa SKS tidak cukup!")
            document.getElementById('checkbox_' + id).checked = false;
            document.getElementById('checkbox_' + id).disabled = true;
            var radio = document.getElementsByName('radio_' + id);
            for (var i = 0; i < radio.length; i++) {
                radio[i].checked = false;
            }
        } else {
            if (document.getElementById('checkbox_' + id).checked == false) {
                this.props.addSKS(sksTotal, courseID, courseSessionID)
            } else if (document.getElementById('checkbox_' + id).checked == true) {
                this.props.addSKS(0, courseID, courseSessionID)
            }
            document.getElementById('checkbox_' + id).checked = true;
            document.getElementById('checkbox_' + id).disabled = false;
        }

    }

    handleCheckbox = (id, sksTotal) => {
        document.getElementById('checkbox_' + id).disabled = true;
        var radio = document.getElementsByName('radio_' + id);
        for (var i = 0; i < radio.length; i++) {
            radio[i].checked = false;
        }
        this.props.removeSKS(sksTotal, id)
    }

    render() {
        return (
            <div>
                <div>
                    <div className="accordion">
                        <div className="accordion-item">
                            <div
                                onClick={() => this.toggleAccordion()}
                                className="accordion-trigger"
                            >
                                <table style={{ width: '90%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '8%' }}>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id={'checkbox_' + this.props.data.courseCode}
                                                        onChange={() => {
                                                            this.handleCheckbox(this.props.data.courseCode, parseInt(this.props.data.courseCredits, 10))
                                                        }}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor={'checkbox_' + this.props.data.courseCode}
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <h6>
                                                    {this.props.data.courseTitle},{" "}
                                                    {this.props.data.courseCredits} SKS
                                                </h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div
                                    className={`accordion-icon ${this.state.isActive ? "is-active" : ""
                                        }`}
                                ></div>
                            </div>
                            <div
                                className={`accordion-content ${this.state.isActive ? "is-active" : ""
                                    }`}
                            >
                                <table style={{ width: '90%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '8%' }}></td>
                                            <td>
                                                {this.props.data.sessions.map((session) => {
                                                    return (
                                                        <div
                                                            className="custom-control custom-radio"
                                                            key={session.courseSessionID}
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name={'radio_' + this.props.data.courseCode}
                                                                id={session.courseSessionID}
                                                                onChange={() => {
                                                                    this.handleRadio(this.props.data.courseCode, parseInt(this.props.data.courseCredits, 10), this.props.data.courseID,
                                                                        session.courseSessionID)
                                                                }}
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                name={'radio_' + this.props.data.courseCode}
                                                                htmlFor={session.courseSessionID}
                                                            >

                                                                {session.lectures.length == 1 ? <>{session.courseSchedule},{" "}{session.lectures[0].lecture.lectureName}, {" "}{session.room.roomName}</> :
                                                                    <>{session.courseSchedule},{" "}{session.lectures[0].lecture.lectureName},{" "}{session.lectures[1].lecture.lectureName}, {" "}{session.room.roomName}</>}

                                                            </label>
                                                        </div>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyPlanList;
