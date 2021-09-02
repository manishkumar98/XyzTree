import data from "./data";
function reducers(state = data, action) {
  if (action.type === "INCREMENT") {
    console.log("xyz", state);
    console.log("xyz1", action);
    //action.id.counter=action.id.counter+1
    state.counter = state.counter + 1;
    console.log("xyz2", state.counter);
    console.log("abc", action.id);
    console.log("vbg", action.counter);
    console.log("ss", state);
    //state.data.filter((elem)=>elem.id===action.id?action.counter+1:action.counter)
    return { ...state };
  }
  return state;
}
export default reducers;
/*{id: "0", name: "Counter", counter: 0, children: Array(3)}
id: "0"
name: "Counter"
counter: 0
children: Array(3)*/
//state.id
