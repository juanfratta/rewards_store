import ReactModal from 'react-modal';
import Loader from '../../common/Loader';
import {
  ButtonContainer,
  LoaderContainer,
  ModalWrapper,
} from './ProductModal.styled';

import './styles.css';

ReactModal.setAppElement('div');

const ProductModal = ({
  isOpen,
  showModal,
  image,
  name,
  loadRedeem,
  redeem,
}) => {
  return (
    <ReactModal isOpen={isOpen} showModal={showModal} className="Modal">
      <ModalWrapper>
        <ButtonContainer>
          <button onClick={() => showModal(false)}>x</button>
        </ButtonContainer>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        {loadRedeem && (
          <LoaderContainer>
            <h4>load redeem ... </h4>
            <Loader size={'30px'} />
          </LoaderContainer>
        )}
        {redeem && <h4>{redeem}</h4>}
      </ModalWrapper>
    </ReactModal>
  );
};

export default ProductModal;
