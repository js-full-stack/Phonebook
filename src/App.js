import Content from './Components/Content';
import AppBar from './Components/AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <Content />
    </div>
  );
}

export default App;
