import * as yup from 'yup';

export const initialValues = {
  name: '',
  location: '',
  contact: '',
};

export const validationSchema = yup.object({
  name: yup.string().required('Es requerido'),
  location: yup.string(),
  contact: yup.string(),
});
