import React, { useState, useEffect } from 'react';
import { CardWrapper } from '../GlobalStyle/GlobalStyle.styles';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikField from '../FormikElements/FormikField';
import FormikSelect, { FormikSelectItem } from '../FormikElements/FormikSelect';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';

interface FormValues {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  jobs_count: number;
  active: boolean;
  slack_username: string;
}

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

const UserDetail: React.FC = () => {
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
  //const [userId, setUserId] = useState('');
  console.log(location.pathname);
  console.log(location.pathname.substring(13));
  // setUserId(location.pathname.substring(13));
  // console.log(userId);

  useEffect(() => {
    fetch(`/api/v2/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.users);
        setUser(json.users);
        console.log(user);
      });
  }, []);

  const handleSubmit = (values: FormValues): void => {
    // history.push('/user-index');
    alert(JSON.stringify(values));
    console.log(user);
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
                Update
              </Button>
            </Form>
          );
        }}
      </Formik>
    </CardWrapper>
  );
};

export default UserDetail;
