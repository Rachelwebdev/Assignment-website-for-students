const form = document.querySelector("#form");
const listContainer = document.querySelector(".members-list");
const addInput = document.querySelector(".add-btn");

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const renderInput = () => {
  const liElement = document.createElement("li");
  const nameInput = document.createElement("input");

  nameInput.type = "text";
  nameInput.name = `name-${uuid()}`;

  nameInput.placeholder = `Full Name & ID: `;

  liElement.classList.add("name-list-input");
  nameInput.classList.add("name-input");

  liElement.appendChild(nameInput);
  listContainer.appendChild(liElement);
};

renderInput();

addInput.addEventListener("click", (e) => {
  e.preventDefault();
  renderInput();
});
