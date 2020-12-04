import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikField from '../FormikElements/FormikField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { LoginCard } from './Home.styles';
import { fetchLogin } from '../../API/API';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilters';
import AddTodo from './AddTodo';
import Token from './Token';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../redux/actions/action';

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
  const token = useSelector((state: any) => state.token);

  const history = useHistory();
  const [loginMsg, SetLoginMsg] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (values: FormValues) => {
    const loginStatus = fetchLogin(values);
    loginStatus.then((res) => {
      res.json().then((re) => {
        if (re.message !== 'ok') {
          SetLoginMsg(re.message);
        } else {
          dispatch(setToken(res.headers.get('Authorization')));
          history.push('/user-index');
        }
      });
    });
  };

  return (
    <>
      <LoginCard>
        <h1>Log in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
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
        <p>{loginMsg}</p>
      </LoginCard>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
      <Token />
      <h1>{token}</h1>
    </>
  );
};

//export default Home;

// const mapStateToProps = (state: any) => {
//   return { token: state.token };
// };

export default connect(null, { setToken })(Home);
