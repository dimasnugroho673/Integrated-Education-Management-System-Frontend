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

    handleRadio = (id, sksTotal, courseID, courseTitle, courseLecture, courseRoom, courseSchedule) => {
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
                this.props.addSKS(sksTotal, courseID, id, courseTitle, courseLecture, courseRoom, courseSchedule)
            } else if (document.getElementById('checkbox_' + id).checked == true) {
                this.props.addSKS(0, courseID, id, courseTitle, courseLecture, courseRoom, courseSchedule)
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
                                                        onChange={() => { this.handleCheckbox(this.props.data.courseCode, this.props.data.courseCredits) }}
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
                                                {this.props.data.session.map((session) => {
                                                    return (
                                                        <div
                                                            className="custom-control custom-radio"
                                                            key={session.courseID}
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name={'radio_' + this.props.data.courseCode}
                                                                id={session.courseID}
                                                                onChange={() => {
                                                                    this.handleRadio(this.props.data.courseCode, this.props.data.courseCredits, session.courseID,
                                                                        this.props.data.courseTitle, session.courseLecture, session.courseRoom, session.courseSchedule)
                                                                }}
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                name={'radio_' + this.props.data.courseCode}
                                                                htmlFor={session.courseID}
                                                            >
                                                                {session.courseSchedule}, {session.courseLecture},{" "}
                                                                {session.courseRoom}
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
