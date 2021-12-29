import React, { Component } from "react";

class AnnounInfo extends Component {

  handleClickMaterial = (url) => {
    window.location = url;
  }

  render() {
    return (
      <div className="card"
        onClick={() => this.handleClickMaterial(this.props.url)}>
        <div className="col-12 col-sm-12 col-lg-12">
          <ul className="list-unstyled list-unstyled-border list-unstyled-noborder">
            <li className="media">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <div className="activities">
                      <div className="activity">
                        <div className={this.props.color}>
                          <i className={this.props.icon}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
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
                          className="text-job text-muted mt-3"
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

export default AnnounInfo;
