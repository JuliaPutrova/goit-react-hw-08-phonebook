import { Routes, Route } from 'react-router-dom';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import ContactView from './view/ContactsView';
import HomePage from './view/HomePage';
import AppBar from './components/AppBar/AppBar';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from './redux/auth/auth-selectors';

function App() {
  const isLoggedIn = useSelector(isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(isLoggedIn));
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactView />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// anaanan
// anaanan@mail.com
//qaz1234
