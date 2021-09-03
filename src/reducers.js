import data from "./data";
function reducers(state = data, action) {
  if (action.type === "INCREMENT") {
    console.log("xyz", state);
    console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));
    console.log("ddd", data);
    console.log("xyz2", state.counter);
    console.log("abc", action.id);
    console.log("abc11", action.id.id);
    console.log("vbg", action.counter);
    console.log("ss", state);
    console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))

    return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };
  } else {
    return state;
  }
}
export default reducers;
/*{id: "0", name: "Counter", counter: 0, children: Array(3)}
id: "0"
name: "Counter"
counter: 0
children: Array(3)*/
//state.id
/*(parameter) state: {
    id: string;
    name: string;
    counter: number;
    children: {
        id: string;
        name: string;
        counter: number;
        children: {
            id: string;
            name: string;
            counter: number;
        }[];
    }[];
}
/src/reducers.js: Unexpected token (7:10)

   5 |     console.log("xyz1", action);
   6 |     //action.id.counter=action.id.counter+1
>  7 |     while()
     |           ^
   8 |     state.counter = state.counter + 1;
   9 |
  10 |     console.log("xyz2", state.counter);*/
