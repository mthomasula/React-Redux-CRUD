import React from "react";
import { fetchComment, editComment } from "../../actions";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";

class CommentEdit extends React.Component {
  componentDidMount() {
    this.props.fetchComment(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editComment(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.comment) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Comment</h3>

        <CommentForm
          initialValues={{
            title: this.props.comment.title,
            content: this.props.comment.content,
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { comment: state.comments[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchComment, editComment })(
  CommentEdit
);
