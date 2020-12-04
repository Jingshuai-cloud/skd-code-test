import React, { useState, useEffect } from 'react';
import { CardWrapper } from '../GlobalStyle/GlobalStyle.styles';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikField from '../FormikElements/FormikField';
import { FormikSelectItem } from '../FormikElements/FormikSelect';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteUser } from '../../API/API';

interface FormValues {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  jobs_count: number;
  active: boolean;
  slack_username: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().lowercase().email('Must be a valid email!').required('Required!'),
  first_name: Yup.string().required('Required!'),
  last_name: Yup.string().required('Required!'),
});

const DeleteUser: React.FC = () => {
  const [user, setUser] = useState({
    id: 'loading...',
    email: 'loading...',
    first_name: 'loading...',
    last_name: 'loading...',
    jobs_count: 0,
    active: false,
    slack_username: '',
  });
  const history = useHistory();
  let location = useLocation();
  let userId = location.pathname.substring(13);

  useEffect(() => {
    fetch(`/api/v2/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.users);
        setUser(json.users);
        console.log(user);
      });
  }, []);

  const token = useSelector((state: any) => state.token);

  const handleSubmit = async (values: FormValues) => {
    const result = await deleteUser(token, values.id);
    console.log(result);
    history.push('/user-index');
  };

  const handleGoback = () => {
    history.push('/user-index');
  };

  return (
    <CardWrapper>
      <h1>User Detail</h1>
      <Formik
        initialValues={user}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        enableReinitialize
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="id" label="ID" disabled />
              <FormikField name="email" label="Email" disabled />
              <FormikField name="first_name" label="First Name" disabled />
              <FormikField name="last_name" label="Last Name" disabled />
              <FormikField name="jobs_count" label="Jobs Count" type="number" disabled />
              <FormikField name="active" label="Active" disabled />
              <FormikField name="slack_username" label="Slack User Name" disabled />
              <div className="button-wrapper">
                <Button variant="contained" color="primary" type="submit">
                  Delete
                </Button>
                <Button variant="contained" color="primary" onClick={handleGoback}>
                  Go back
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </CardWrapper>
  );
};

export default DeleteUser;
