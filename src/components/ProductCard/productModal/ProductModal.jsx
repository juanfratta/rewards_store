import ReactModal from 'react-modal';
import Loader from '../../common/Loader';
import {
  ButtonContainer,
  ErrorRedeem,
  LoaderContainer,
  ModalWrapper,
  Redeem,
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
  errorRedeem,
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
            <h4>loading redeem ... </h4>
            <Loader size={'30px'} />
          </LoaderContainer>
        )}
        {redeem && (
          <Redeem>
            <p>{redeem}</p>
          </Redeem>
        )}
        {errorRedeem && (
          <ErrorRedeem>
            <p>{errorRedeem}</p>
          </ErrorRedeem>
        )}
      </ModalWrapper>
    </ReactModal>
  );
};

export default ProductModal;
