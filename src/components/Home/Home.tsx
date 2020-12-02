import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikField from '../FormikElements/FormikField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { LoginCard } from './Home.styles';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email!').required('Required!'),
  password: Yup.string().required('Required!'),
});

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (values: FormValues): void => {
    history.push('/user-index');
  };

  return (
    <LoginCard>
      <h1>Log in</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignupSchema}>
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="email" label="Email" required />
              <FormikField name="password" label="Password" required type="password" />
              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </LoginCard>
  );
};

export default Home;
