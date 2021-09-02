import { connect, useDispatch, useSelector } from "react-redux";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import React from "react";
import { increment } from "./actions/index";
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => dispatch(increment(id))
  };
};
function App(props) {
  const increment = (id) => {
    props.increment({
      id: id
    });
  };
  //const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log({ data });
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <div>
          {nodes.name + " " + nodes.counter + " "}
          <button onClick={() => increment(nodes.id)}>+</button>

          <a href="#" style={{ color: "black", textDecoration: "none" }}>
            ×
          </a>
          <a href="#">Add child</a>
        </div>
      }
      counter={nodes.counter}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div className="App">
      <h1>Creating a static tree</h1>
      <TreeView>{renderTree(data)}</TreeView>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
