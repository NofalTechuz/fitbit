import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Admin/Auth/Login';
import Register from './pages/Admin/Auth/Register';
import Home from './pages/Admin/Dashboard/Home';
import AdminAuthGuard from './shared/guards/AdminAuthGuard';
import AdminPageGuard from './shared/guards/AdminPageGuard';
function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AdminPageGuard>
                <Register />
              </AdminPageGuard>
            </>
          }
        ></Route>
        <Route
          path="/admin/login"
          element={
            <AdminPageGuard>
              <Login />
            </AdminPageGuard>
          }
        ></Route>
        <Route
          path="/admin/home"
          element={
            <AdminAuthGuard>
              <Home />
            </AdminAuthGuard>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
