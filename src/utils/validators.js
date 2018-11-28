import { required } from 'redux-form-validators';

export const validations = {
  username: [required()],
  password: [required()],
};

// it's taken from 'redux-form-validators' npm docs
export const validate = values => {
  const errors = {};
  const fields = Object.keys(validations);
  fields.forEach(field => {
    const value = values[field];
    errors[field] = validations[field]
      .map(validateField => validateField(value, values))
      .find(x => x);
  });
  return errors;
};
