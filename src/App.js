import { useState, useEffect } from 'react';
import Home from './Home';
import LoggedIn from './LoggedIn';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <LoggedIn setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      <Home setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;