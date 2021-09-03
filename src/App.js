import { connect, useDispatch, useSelector } from "react-redux";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import React from "react";
import { increment } from "./actions/index";
const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  console.log("mapStateToProps1", state);
  //console.log("mapStateToProps2",.nodes);
  return {
    data: state
    //nodes:state.nodes
  };
};
const mapDispatchToProps = (dispatch) => {
  //console.log("alpha",id)
  return {
    increment: (id, counter) => dispatch(increment(id, counter))
  };
};
function App(props) {
  const increment = (id, counter) => {
    props.increment({
      id: id,
      counter: counter
    });
  };
  //const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log({ data });
  const renderTree = (nodes) =>
    nodes && (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={
          <div>
            {nodes.name + " " + nodes.counter + " "}
            <button
              onClick={() => {
                console.log("dede", nodes.id);
                increment(nodes.id, nodes.counter);
              }}
            >
              +
            </button>

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
