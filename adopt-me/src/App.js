  // Your code is going to go here
  const Pet = (props)=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h3", {}, props.breed),
           ]
      )
  }
  const App = ()=>{
    return React.createElement(
      "div",
      {},
      [
          React.createElement("h1", {}, "Adopt Me"),
          React.createElement(Pet,{
              name: "Boby",
              animal: "Dog",
              breed: "German Shepherd"
          }),
          React.createElement(Pet,{
            name: "Simba",
            animal: "Dog",
            breed: "Kawaida"
        }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
