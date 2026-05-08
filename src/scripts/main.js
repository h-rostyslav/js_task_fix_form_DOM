'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  input.id = input.id || input.name;
  label.htmlFor = input.id;

  const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);
  
  label.textContent = capitalizedName;
  input.placeholder = capitalizedName;
  input.parentElement.append(label);
});
