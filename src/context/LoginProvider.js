import {
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const AdminContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    localStorage.getItem(
      'admin' ? JSON.parse(localStorage.getItem('admin')) : null,
    ),
  );

  useEffect(() => {
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin));
    } else {
      localStorage.removeItem('admin');
    }
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLogin = () => useContext(AdminContext);

export default LoginProvider;
