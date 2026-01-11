const btn = document.createElement("button");
btn.textContent = "click me";

btn.onclick = () => {
  let name = prompt("what is your name: ");
  alert(`hello ${name}`);
};
