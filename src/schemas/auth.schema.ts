import joi from "joi";

const signup = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

export { signup, login };