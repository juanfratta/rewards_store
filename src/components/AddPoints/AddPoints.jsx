import { useContext } from 'react';
import { RewardStoreContext } from '../../contexts/context';
import { Button, ButtonContainer } from './AddPoint.styled';

const AddPoints = () => {
  const { setPoints } = useContext(RewardStoreContext);

  const handlerAddPoints = async (e) => {
    let points = e.target.value;
    setPoints(points);
  };

  return (
    <ButtonContainer>
      <h5>Add points to your account:</h5>
      <div>
        <Button value={1000} onClick={(e) => handlerAddPoints(e)}>
          1000
        </Button>
        <Button value={5000} onClick={(e) => handlerAddPoints(e)}>
          5000
        </Button>
        <Button value={7500} onClick={(e) => handlerAddPoints(e)}>
          7500
        </Button>
      </div>
    </ButtonContainer>
  );
};

export default AddPoints;
