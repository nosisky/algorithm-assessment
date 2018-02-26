const strongPassword = (password) => {
  if (password.length < 6) {
    return 6 - password.length;
  } else if (!(/^(?=.*[a-z])(?=.*[A-Z]).+$/).test(password)) {
    return 1;
  } else if (!/^(?=.*\d)(?=.*(_|[^\w]).+$)/.test(password)) {
    return 1;
  } else {
    return true;
  }
}

strongPassword('123567A_kk')
