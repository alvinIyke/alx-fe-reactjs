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
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
    password: Yup.string().min(8,'Password must be at least 8 characters').required('Password is required')
    
});

const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
           // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 400))

          // Extract values for submission
        const { username, email, password } = values;

          // Perform registration logic
        console.log('Registration Data:', { username, email });

          // Submit the form data to the server or API
        console.log('Form submitted:', values);
           
          // Reset form and stop submission
        resetForm();
        alert('Registration Successful!');
    } catch (error) {
        console.error('Registration failed', error);
    } finally {
        setSubmitting(false);
    }
  };


 return (
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
                <button type="submit">Click here to Register</button>
            </Form>
        )}
    </Formik>
)};


export default RegistrationForm;