import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransctionTypeCategory } from './styles';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: newTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={props.onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal." />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <form action="">

          <input placeholder="Título" />

          <input type="number" placeholder="Valor" />

          <TransctionTypeCategory>
            <button type="button" >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button" >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransctionTypeCategory>

          <input placeholder="Categoria" />

          <button type="submit">
            Cadastrar
        </button>


        </form>
      </Container>
    </Modal>


  )
}