import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments } from "../../actions";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderAdminButtons = (comment) => {
    if (comment.userId === this.props.currentUserId) {
      return (
        <div>
          <div className="right floated content">
            <Link
              to={`/comments/edit/${comment.id}`}
              className="ui button primary"
            >
              Edit
            </Link>
            <Link
              to={`/comments/delete/${comment.id}`}
              className="ui button negative"
            >
              Delete
            </Link>
          </div>
        </div>
      );
    }
  };

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right " }}>
          <Link to="comments/new" className="ui button primary">
            Post Comment
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.comments.map((comment) => {
      return (
        <div className="item" key={comment.id}>
          {this.renderAdminButtons(comment)}
          <i className="large middle aligned icon user" />
          <div className="content">
            {comment.title}
            <div className="description">{comment.content}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: Object.values(state.comments),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchComments })(CommentList);
