import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <strong>
          Copyright © 2020
          <a href="http://issam-elyazri.cm">Easy LEave</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.1
        </div>
      </footer>
    );
  }
}
