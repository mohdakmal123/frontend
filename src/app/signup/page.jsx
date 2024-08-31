'use client';
import { IconCircleCheck, IconLoader } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password : Yup.string().required('Password id Required')
  .matches(/[a-z]/, 'Lowercase Letter Required')
  .matches(/[A-Z]/, 'Uppercase Letter Required')
  .matches(/[0-9]/, 'Number is Required')
  .matches(/\W/, 'Special Character Required'),
  confirmPassword : Yup.string().required('Confirm Password is Required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match')

});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values,{ resetForm, setSubmitting}) => {

//setTimeout(() => {
  //console.log(values);
  //resetForm();
  //setSubmitting(false);
// }, 3000);

      // making a request
      axios.post('http://localhost:5000/user/add', values)
      .then((response) => {
        console.log(response.status);
        resetForm();
        toast.success('User registered successfully')
      }).catch((err) => {
        console.log(err);
        console.log(err.response?.data);
        setSubmitting(false);
       toast.error(err?.response?.data?.message);
        
      });
    },
    validationSchema: SignupSchema
  });

  return (
    <div className='flex justify-center items-center h-screen' >
      <div className="w-full max-w-md mx-auto">
        <div className='rounded-lg border-2 shadow p-8'>

          <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Signup Form</h1>
          <form onSubmit={signupForm.handleSubmit} >
            <label htmlFor="name">Full Name</label>
            <span className='text-sm ml-4 text-red-500'>{signupForm.touched.name && signupForm.errors.name}</span>
            <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}
            />


            <label htmlFor="email">Email Address</label>
            <span className='text-sm ml-4 text-red-500'>{signupForm.touched.email && signupForm.errors.email}</span>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500' : '')}
            />

            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 text-red-500'>{signupForm.touched.password && signupForm.errors.password}</span>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <span className='text-sm ml-4 text-red-500'>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>
            <input id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmPassword} type="password"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) ? 'border-red-500' : '')}
            />

            <button type='submit' disabled={signupForm.isSubmitting}
              className='flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
            >
              {signupForm.isSubmitting ? <IconLoader className='animate-spin'size={20}/> : < IconCircleCheck/>}
              <span>{signupForm.isSubmitting ? 'Please Wait': "Submit"}</span>
              </button>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;