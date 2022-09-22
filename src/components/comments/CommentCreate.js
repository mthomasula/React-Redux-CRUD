import React from "react";

import { connect } from "react-redux";
import { createComment } from "../../actions";
import CommentForm from "./CommentForm";

class CommentCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createComment(formValues);
  };

  render() {
    return (
      <div>
        <h3>Comment</h3>
        <CommentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createComment })(CommentCreate);
