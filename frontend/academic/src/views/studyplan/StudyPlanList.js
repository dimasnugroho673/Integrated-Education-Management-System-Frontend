import React, { Component } from "react";

class StudyPlanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            sks: 0,
        };

        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
    }

    toggleAccordion = () => {
        this.setState({
            isActive: !this.state.isActive,
        });
    };

    handleRadio = (id, sksTotal, studyTaken) => {
        document.getElementById(id).checked = true;
        document.getElementById(id).disabled = false;
        this.setState({
            sks: this.state.sks + sksTotal,
        });
        
        this.props.calculateSKS(sksTotal, studyTaken)
        // this.props.calculateStudyTaken(studyTaken)
    }

    handleCheckbox = (id, courseTitle, sksTotal) => {
        document.getElementById(courseTitle).disabled = true;
        var radio = document.getElementsByName(id);
        for (var i = 0; i < radio.length; i++) {
            radio[i].checked = false;
        }
        this.setState({
            sks: this.state.sks - sksTotal,
        });
    }

    componentDidMount() {
        var checkboxStudyPlan = document.getElementById(this.props.data.courseTitle)
        checkboxStudyPlan.disabled = true
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
                                                        id={this.props.data.courseTitle}
                                                        onClick={() => { this.handleCheckbox(this.props.data.courseCode, this.props.data.courseTitle, this.props.data.courseCredits) }}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor={this.props.data.courseTitle}
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
                                                {this.props.data.session.map((session, index) => {
                                                    return (
                                                        <div
                                                            className="custom-control custom-radio"
                                                            key={session.courseID}
                                                        >
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name={this.props.data.courseCode}
                                                                id={session.courseID}
                                                                onClick={() => { this.handleRadio(this.props.data.courseTitle, this.props.data.courseCredits, this.props.data.session[index]) }}
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                name={this.props.data.courseCode}
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
