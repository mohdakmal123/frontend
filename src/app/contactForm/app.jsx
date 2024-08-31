import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Contact from './contactForm';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name is too short'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message is too short'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
