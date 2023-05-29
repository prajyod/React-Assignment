// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "<h1>Hello World<h1>"
// root.appendChild(heading);

const root = React.createElement("div", { class: "title" }, [
  React.createElement("h1", { id: "header1" }, "Heading H1"),
  React.createElement("h1", { id: "header2" }, "Heading H2"),
  React.createElement("h1", { id: "header3" }, "Heading H3"),
]);

const rootDom = ReactDOM.createRoot(document.getElementById("root"));
rootDom.render(root);
