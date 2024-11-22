import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
    const initialValues = {
      username: '',
      email: '',
      password: '',
    };
  
// Validation Schema
const validationSchema = Yup.object({
    username: Yup.string()
       .required('Username is required'),
    email: Yup.string()
       .email('Invalid email address')
       .required('Email is required')
    password: Yup.string()
       .min(8,'Password must be at least 8 characters')
       .required('Password is required')
    
});

const FormikForm = () => (
    <Formik
        initialValues={{ username: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
)};


export default FormikForm;