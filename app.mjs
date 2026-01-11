const btn = document.createElement("button");
btn.innerText = "click me";
btn.id = "btn"

document.getElementById("btn").onclick = () => {
  let name = prompt("what is your name: ");
  alert(`hello ${name}`);
};


const btn_2 = document.getElementById("btn_click")
btn_2.onclick = () => {
  let name = prompt("what is your name: ");
  alert(`hello ${name}`);
};