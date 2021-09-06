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

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    console.log(state === state1);
    stack.push(state1);
    console.log("de", state1);
    console.log("stack", stack.length);
    while (stack.length > 0) {
      var nodex = stack.pop();
      console.log("stack1", nodex);
      if (nodex.id === action.id.id) {
        nodex.counter += 1;
        break;
      }

      if (nodex.children) {
        var len = nodex.children.length;
        console.log("stack2", len);
        for (var i = 0; i < len; i++) {
          console.log("stack3", nodex.children[i].id);
          console.log("stacxx", action.id.id);
            stack.push(nodex.children[i]);
          /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ if (
            nodex.children[i].children &&
            nodex.children[i].children.length > 0
          ) {
            stack.push(nodex.children[i]);
          }
        }
      }
    }
    console.log("des", state1);
    console.log("x", state1 === state);

    console.log("ddd", data);
    console.log("xyz2", state.counter);
    console.log("abc", action.id);
    console.log("abc11", action.id.id);
    console.log("vbg", action.counter);
    console.log("ss", state);
    console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))
    /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
    /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
    console.log("woe", state1);
    return state1;
  } else return state;
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
/* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
