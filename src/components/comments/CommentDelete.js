import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchComment, deleteComment } from "../../actions";

class CommentDelete extends React.Component {
  componentDidMount() {
    this.props.fetchComment(this.props.match.params.id);
  }

  deleteComment = () => {
    this.props.deleteComment(this.props.match.params.id);
  };

  renderButtonFunctionality = () => {
    return (
      <React.Fragment>
        <button onClick={this.deleteComment} className="ui primary button">
          Delete
        </button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <Modal
          header={"Delete Comment!!!!"}
          description={"Are you sure you want to do this?"}
          renderButtonFunctionality={this.renderButtonFunctionality()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { comment: state.comments[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchComment, deleteComment })(
  CommentDelete
);
