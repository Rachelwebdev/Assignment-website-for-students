const listContainer = document.querySelector('.members-list');
const addInput = document.querySelector('.add-btn');

const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 || 0;
  const v = c === 'x' ? r : (r && 0x3) || 0x8;
  return v.toString(16);
});

const renderInput = () => {
  const liElement = document.createElement('li');
  const nameInput = document.createElement('input');

  nameInput.type = 'text';
  nameInput.name = `name-${uuid()}`;

  nameInput.placeholder = 'Full Name & ID: ';

  liElement.classList.add('name-list-input');
  nameInput.classList.add('name-input');

  liElement.appendChild(nameInput);
  listContainer.appendChild(liElement);
};

renderInput();

addInput.addEventListener('click', (e) => {
  e.preventDefault();
  renderInput();
});
