import * as yup from 'yup';

const validationBookingSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ0-9\s!@#$%^&*()_+-=`~[\]{}|\\:;"'<>,.?/]+$/,
      'Invalid characters in name'
    )
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name cannot exceed 32 characters'),
  email: yup
    .string()
    .required('Email is required')
    .test(
      'has-one-at-symbol',
      'Email must contain exactly one "@" symbol',
      (value) => (value.match(/@/g) || []).length === 1
    )
    .test(
      'has-dot-after-at-symbol',
      'Email must contain a dot after the "@" symbol',
      (value) => {
        const atIndex = value.indexOf('@');
        const dotIndex = value.indexOf('.', atIndex);
        return dotIndex > atIndex;
      }
    )
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .max(2, 'The comment length should not exceed 200 characters')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?]{8,64}$/,
      'Invalid password format'
    ),
});

export default validationBookingSchema;
