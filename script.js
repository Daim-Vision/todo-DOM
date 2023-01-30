const inp = document.querySelector(".main__inp");
const bttn = document.querySelector(".main__addButton");
// const list = document.querySelector('.main__list');
const div = document.querySelector(".main__items");
const list = document.createElement("div");
const form = document.querySelector("#form");
div.append(list);
list.style.color = "rgb(159, 174, 188)";
list.style.marginTop = "20px";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inp.value) {

    console.log(inp.value);
    const li = document.createElement("li");
    const rem = document.createElement("button");
    const korz = document.createElement("img");

    li.style.backgroundColor = "rgb(45, 51, 53)";
    li.style.borderRadius = "10px";
    li.style.margin = "5px";
    li.style.alignItems = "end";

    korz.src = "./18297.png";

    korz.style.height = "10px";
    korz.style.width = "10px";
    rem.style.backgroundColor = "rgb(159, 174, 188)";
    rem.append(korz);
    rem.style.border = "1px solid black";
    rem.style.borderRadius = "10px";
    rem.style.margin = "5px";

    rem.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    li.textContent = inp.value;
    li.append(rem);
    inp.value = "";
    list.style.listStyleType = "none";
    list.prepend(li);
    // const input = document.createElement('input');
    
  }
});
