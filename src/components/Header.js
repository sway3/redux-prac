import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header>
      <h1>Redux</h1>
      {!isAuthed && <h3>Please login.</h3>}
      {isAuthed && <h3>Welcome!</h3>}
    </header>
  );
};

export default Header;
