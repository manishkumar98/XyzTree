import { connect, useDispatch, useSelector } from "react-redux";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import React from "react";

function App() {
  //const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log({ data });
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
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
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};
export default connect(mapStateToProps)(App);
