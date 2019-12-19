import React from 'react';
import Questions from './Questions';

const QuestionsList = (props) => {
    return (
        Questions.map((item) => {
            const { id, ques, options } = item;
            return <fieldset id={id}>
                <h3>{id}) {ques}</h3>
                <ul>
                    {options.map((option) => {
                        const { correct } = option;
                        return <li style={{ listStyleType: "none" }}>
                            <input type="radio" name={id} onClick={() => { props.handleChange(id, correct) }} required/>{option.value}
                        </li>
                    })}
                </ul>
            </fieldset>
        })
    );
}

export default QuestionsList;