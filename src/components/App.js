import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import CommentList from "./comments/CommentList";
import CommentCreate from "./comments/CommentCreate";
import CommentEdit from "./comments/CommentEdit";
import CommentDelete from "./comments/CommentDelete";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={CommentList} />
          <Route path="/comments/new" exact component={CommentCreate} />
          <Route path="/comments/edit/:id" exact component={CommentEdit} />
          <Route path="/comments/delete/:id" exact component={CommentDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
