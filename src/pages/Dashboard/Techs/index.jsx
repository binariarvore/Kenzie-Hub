import { useTechContext } from '../../../Providers/TechContext';
import { Ul, Li } from './styles';
import UpdateModal from './Update';

const List = () => {
  const { setModalUpdate, techList } = useTechContext();

  return (
    <>
      <Ul>
        {techList.map((tech) => {
          return (
            <Li onClick={() => setModalUpdate(tech)} key={tech.id}>
              <p>{tech.title}</p>
              <span>{tech.status}</span>
            </Li>
          );
        })}
      </Ul>
      <UpdateModal />
    </>
  );
};

export default List;
