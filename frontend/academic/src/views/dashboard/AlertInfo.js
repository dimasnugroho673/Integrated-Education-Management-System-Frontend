import React, { Component } from "react";

class AlertInfo extends Component {
  render() {
    return (
      <div className="card">
        <div className="col-12 col-sm-12 col-lg-12">
          <ul className="list-unstyled list-unstyled-border list-unstyled-noborder">
            <li className="media">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="activities">
                      <div className="activity">
                        <div className="activity-icon bg-danger text-white shadow-primary">
                          <i className="bi bi-file-earmark-text"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="media-title mb-1">
                      {this.props.data.title}
                    </div>
                    {this.props.data.content.map((content) => {
                      return (
                        <div
                          className="media-description"
                          key={content.message}
                        >
                          {content.message}
                        </div>
                      );
                    })}
                    {this.props.data.content.map((content) => {
                      return (
                        <div
                          className="text-job text-muted"
                          key={content.deadline}
                        >
                          {content.deadline}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AlertInfo;
