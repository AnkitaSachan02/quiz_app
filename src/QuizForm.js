import React, { useState, Fragment } from 'react';
import Modal from 'react-modal';
import QuestionsList from './QuestionsList';

const QuizForm = () => {
  let myFormRef = '';
  const [rightQues, setRightQues] = useState([]);
  const [wrongQues, setWrongQues] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const handleChange = (id, correct) => {
    const wrongQuesIndex = wrongQues.indexOf(id);
    const rightQuesIndex = rightQues.indexOf(id);
    if (correct) {
      if (wrongQuesIndex > -1) {
        wrongQues.splice(wrongQuesIndex, 1);
        setWrongQues(wrongQues);
      }
      if (rightQuesIndex === -1) {
        setRightQues([id, ...rightQues]);
      }
    } else {
      if (rightQuesIndex > -1) {
        rightQues.splice(rightQuesIndex, 1);
        setRightQues(rightQues);
      }
      if (wrongQuesIndex === -1) {
        setWrongQues([id, ...wrongQues]);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalIsOpen(true)
  }

  const closeModal = () => {
    myFormRef.reset();
    setModalIsOpen(false);
  }

  return (
    <Fragment>
      <Modal
        contentLabel="Result"
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {rightQues.length !== 0 ? <Fragment>
          <p> Right Questions: </p>
          {rightQues.map((id) => <text>{id} </text>)}
        </Fragment> : null}
        {wrongQues.length !== 0 ? <Fragment>
          <p> Wrong Questions: </p>
          {wrongQues.map((id) => <text>{id} </text>)}
        </Fragment> : null}
      </Modal>
      <h1>React Quiz</h1>
      <form onSubmit={handleSubmit} ref={(el) => myFormRef = el}>
        <QuestionsList handleChange={handleChange} />
        <button className="Submit" type="submit">Submit</button>
      </form>
    </Fragment>
  );
}

export default QuizForm;
