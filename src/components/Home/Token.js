import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../redux/actions/action';
import { useHistory } from 'react-router-dom';

const Token = ({ token, setToken }) => {
  const history = useHistory();
  const handleClick = () => {
    setToken('123');
    history.push('/user-index');
  };

  return (
    <div>
      <p>{token}</p>
      <button onClick={handleClick}>click click</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { token: state.token };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setToken })(Token);
