const requiredValidator: Validator = (value) => {
  if (!value) {
    return ["This field is required"];
  }
  return [""];
};

const emailValidator: Validator = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return ["Invalid email address"];
  }
  return [""];
};
const passwordValidator: Validator = (value) => {
  if (value.length < 8) {
    return ["Password must be at least 8 characters"];
  }
  return [""];
};
const repeatPasswordValidator: Validator = (value, password) => {
  if (password !== value) {
    return ["Passwords must match"];
  }
  return [""];
};

export {
  requiredValidator,
  emailValidator,
  passwordValidator,
  repeatPasswordValidator,
};
