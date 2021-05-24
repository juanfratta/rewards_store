import { useContext } from 'react';
import { RewardStoreContext } from '../../contexts/context';

const AddPoints = () => {
  const { setPoints } = useContext(RewardStoreContext);

  const handlerAddPoints = async (e) => {
    let points = e.target.value;
    setPoints(points);
  };

  return (
    <div>
      <h3>Add points to your account:</h3>
      <button value={1000} onClick={(e) => handlerAddPoints(e)}>
        1000
      </button>
      <button value={5000} onClick={(e) => handlerAddPoints(e)}>
        5000
      </button>
      <button value={7500} onClick={(e) => handlerAddPoints(e)}>
        7500
      </button>
    </div>
  );
};

export default AddPoints;
