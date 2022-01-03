function validateForm(obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === "" || isNaN(obj[keys[i]]) === true) {
      return false;
    }
  }
  return true;
}

export { validateForm };
