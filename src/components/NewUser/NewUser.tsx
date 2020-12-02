import React, { useState, useEffect } from 'react';
import { CardWrapper } from '../GlobalStyle/GlobalStyle.styles';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikField from '../FormikElements/FormikField';
import FormikSelect, { FormikSelectItem } from '../FormikElements/FormikSelect';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';

interface FormValues {
  email: string;
  first_name: string;
  last_name: string;
  jobs_count: number;
  active: boolean;
  slack_username: string;
}

const initialValues: FormValues = {
  email: '',
  first_name: '',
  last_name: '',
  jobs_count: 0,
  active: false,
  slack_username: '',
};

const activeItems: FormikSelectItem[] = [
  {
    label: 'True',
    value: true,
  },
  {
    label: 'False',
    value: false,
  },
];

const SignupSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email!').required('Required!'),
  first_name: Yup.string().required('Required!'),
  last_name: Yup.string().required('Required!'),
});

const NewUser: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    // history.push('/user-index');
    alert(JSON.stringify(values));
  };

  return (
    <CardWrapper>
      <h1>New User</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema}>
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="email" label="Email" required />
              <FormikField name="first_name" label="First Name" required />
              <FormikField name="last_name" label="Last Name" required />
              <FormikField name="jobs_count" label="Jobs Count" type="number" />
              <FormikSelect name="active" items={activeItems} label="Active" required />
              <FormikField name="slack_username" label="Slack User Name" />
              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Create
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CardWrapper>
  );
};

export default NewUser;
