import data from "./data";
function reducers(state = data, action) {
  if (action.type === "INCREMENT") {
    //console.log("xyz",state);
    //action.id.counter=action.id.counter+1
    return {...state,action.id.counter+1}
  }
  return state;
}
export default reducers;
/*{id: "0", name: "Counter", counter: 0, children: Array(3)}
id: "0"
name: "Counter"
counter: 0
children: Array(3)*/