'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;

  const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = capitalizedName;

  input.parentElement.append(label);
});
