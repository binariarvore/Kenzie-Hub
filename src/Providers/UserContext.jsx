import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useTechContext } from './TechContext';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null),
    navigate = useNavigate(),
    currentPath = window.location.pathname;
  const { setTechList } = useTechContext();

  useEffect(() => {
    const token = localStorage.getItem('@Kenziehub:Token');

    const loadData = async () => {
      try {
        const { data } = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechList(data.techs);
        navigate(currentPath);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) loadData();
  }, []);

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post('/sessions', formData);
      setUser(data.user);
      setTechList(data.user.techs);
      localStorage.setItem('@Kenziehub:Token', data.token);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Ops! Algo deu errado');
      console.error(error);
    }
  };

  const userRegister = async (formData) => {
    try {
      await api.post('/users', formData);
      toast.success('Conta criada com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Ops! Algo deu errado');
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@Kenziehub:Token');
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
