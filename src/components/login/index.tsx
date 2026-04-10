import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AppContext } from '../../context';

function LoginPage() {
    const {theme , ToggleTheme } = useContext(AppContext)

    console.log(theme , "theme from context")
    return (
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} ` }>
        <h1 className='text-4xl font-bold '>Login</h1> <button onClick={() => ToggleTheme()}>Dark/Light Mode</button>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors: any = {};
                if (!values.email) {
                    errors.email = 'Email is Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                 if (!values.password) {
                    errors.password = 'Password is required';
                } else if(values.password.length  < 8){
                    errors.password = 'Password must be at least 8 characters long';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                   toast.success("Form Submitted successfully!");
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col gap-4 pt-4'>
                    <Field className=' border border-black' type="email" autoComplete='off' name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field className=' border border-black' type="password" autoComplete='off' name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button className='bg-black text-white' type="submit" disabled={isSubmitting}>
                         {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    <Link to="/react-practice/counter" className='text-blue-500 underline'>Go to Counter</Link>
                </Form>
            )}
        </Formik>
        </div>
    )
}

export default LoginPage