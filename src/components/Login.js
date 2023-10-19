import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = () => {
    dispatch({ type: 'login', key: 'auth' });
  };

  const logoutHandler = () => {
    dispatch({ type: 'logout', key: 'auth' });
  };

  return (
    <>
      {!isAuthed && <button onClick={loginHandler}>login</button>}
      {isAuthed && <button onClick={logoutHandler}>logout</button>}
    </>
  );
};

export default Login;
