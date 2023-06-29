import { createContext, useContext, useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalUpdate, setModalUpdate] = useState(null),
    [modalCreate, setModalCreate] = useState(null),
    [techList, setTechList] = useState([]);

  const token = localStorage.getItem('@Kenziehub:Token');
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const techRegister = async (formData) => {
    try {
      const { data } = await api.post('/users/techs', formData, header);
      setTechList([...techList, data]);
      setModalCreate(null);
      toast.success(`Tecnologia ${data.title} criada com sucesso`);
    } catch (error) {
      console.error(error);
    }
  };

  const techUpdate = async (formData) => {
    try {
      await api.put(`/users/techs/${modalUpdate.id}`, formData, header);
      const { data } = await api.get('/profile', header);
      setTechList(data.techs);
      toast.success(`Tecnologia ${modalUpdate.title} atualizada com sucesso.`);
      setModalUpdate(null);
    } catch (error) {
      console.error(error);
    }
  };

  const techDelete = async (event) => {
    event.preventDefault();
    try {
      await api.delete(`/users/techs/${modalUpdate.id}`, header);
      setTechList((techList) =>
        techList.filter((tech) => tech.id !== modalUpdate.id)
      );
      toast.success(`Tecnologia ${modalUpdate.title} excluida com sucesso`);
      setModalUpdate(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        modalCreate,
        setModalCreate,
        techRegister,
        techList,
        setTechList,
        modalUpdate,
        setModalUpdate,
        techDelete,
        techUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);
