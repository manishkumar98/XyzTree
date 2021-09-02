let data = {
  id: "root",
  name: "Subjects",
  children: [
    {
      id: "p",
      name: "Physics"
    },
    {
      id: "c",
      name: "Chemistry",
      children: [
        {
          id: "pc",
          name: "Physical Chemistry"
        },
        {
          id: "oc",
          name: "Organic Chemisty"
        }
      ]
    },
    {
      id: "m",
      name: "math",
      children: [
        {
          id: "m1",
          name: "Determinant"
        },
        {
          id: "m2",
          name: "Matrices"
        }
      ]
    }
  ]
};
export default data;
