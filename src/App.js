import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import React from "react";
import { increment } from "./actions/index";
const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  console.log("mapStateToProps1", state);
  //console.log("mapStateToProps2",.nodes);
  console.log("ddssw", state);
  return {
    data: state
    //nodes:state.nodes
    //data:nodes
  };
};
const mapDispatchToProps = (dispatch) => {
  // console.log("alpha",increment.id)
  return {
    increment: (id) => {
      //console.log("zxc", id, counter);
      dispatch(increment(id));
    }
  };
};
const App = (props) => {
  //const [nodes,setNodes]=useState(0);
  //const nodes=useSelector((state)=>state.nodes);

  const increment = (id, counter) => {
    // e.preventDefault();
    console.log("yq", id);
    console.log("counter", counter);
    //working fime
    props.increment({
      id: id,
      counter: counter
    });
  };
  //const dispatch = useDispatch();
  //const data = useSelector((state) => state);
  //console.log(state);
  //console.log({ data });
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
                //  console.log("dede", nodes.id);
                //console.log("deded", nodes.id);

                increment(nodes.id, nodes.counter);
                //setNodes(nodes.id);
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
  console.log("heythere", props.data);
  return (
    <div className="App">
      <h1>Creating a static tree</h1>
      <TreeView>{renderTree(props.data)}</TreeView>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
//{
/* 1:{
    id:1,
    counter:0,
    child:[2],

  },
  2:{
    id:2,
    counter:0,
    child:[],
  }

}*/
