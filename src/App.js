import Counter from './components/Counter';
import Header from './components/Header';
import Login from './components/Login';
import Todo from './components/Todo';

import { useSelector } from 'react-redux';

function App() {
  const isAuthed = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Login />
      {isAuthed && (
        <>
          <Counter />
          <Todo />
        </>
      )}
    </>
  );
}

export default App;
