"use strict";var inputs=document.querySelectorAll("input");inputs.forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),e.id=e.id||e.name,t.htmlFor=e.id;var a=e.name[0].toUpperCase()+e.name.slice(1);t.textContent=a,e.placeholder=a,e.parentElement.append(t)});
//# sourceMappingURL=js_task_fix_form_DOM.41d73656.js.map
