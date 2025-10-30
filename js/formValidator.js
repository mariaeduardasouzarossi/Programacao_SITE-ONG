export function validateForm(form) {
  const fields = form.querySelectorAll('input[required], textarea[required]');
  let valid = true;
  let errors = [];
  fields.forEach(field => {
    if (!field.value.trim()) {
      valid = false;
      errors.push(`${field.placeholder} é obrigatório.`);
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  if (!valid) {
    alert('Por favor corrija os seguintes erros:\n' + errors.join('\n'));
  }
  return valid;
}
