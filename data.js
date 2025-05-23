const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
  },
};

const data = {
  name: "John",
  age: 20,
};

const updateName = (name) => {
  return {
    ...data,
    name,
  };
};

updateName("Jane");
