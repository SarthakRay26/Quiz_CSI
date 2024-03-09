import React, { useState } from 'react';
import Question from './Question';
import styles from "./QuizForm.module.css";

function QuizForm() {
    const [questions, setQuestions] = useState([{ number: 1, text: '', options: ['', '', '', ''] }]);
    const [inputs, setInputs] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const addQuestion = () => {
        const number = questions.length + 1;
        setQuestions([...questions, { number: number, text: '', options: ['', '', '', ''] }]);
    };

    const handleQuestionChange = (index) => (event) => {
        const newQuestions = [...questions];
        newQuestions[index].text = event.target.value;
        setQuestions(newQuestions);
        setInputs(inputs => [...inputs, event.target.value]);
        console.log(newQuestions); 
    };

    const handleOptionChange = (questionIndex, optionIndex) => (event) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = event.target.value;
        setQuestions(newQuestions);
        setInputs(inputs => [...inputs, event.target.value]);
        console.log(newQuestions); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log(questions); 
    };

    return (
        <div>
            <form id="quizForm" onSubmit={handleSubmit}>
                <label className={styles.title} htmlFor="quizTitle">Quiz Title : </label>
                <input type="text" className={styles.quizTitle} name="quizTitle" placeholder='Enter a title'/><br /><br />
                <br></br>
                <div id="questions">
                    {questions.map((question, index) => (
                        <Question
                            key={index}
                            number={question.number}
                            text={question.text}
                            options={question.options}
                            onQuestionChange={handleQuestionChange(index)}
                            onOptionChange={handleOptionChange(index)}
                        />
                    ))}
                </div>
                <button type="button" id="addQuestion" onClick={addQuestion}>Add Question</button>
                <button type="submit" id="submitQuiz">Submit Quiz</button>
            </form>
            {submitted && (
                <div>
                    <h2>Submitted Quiz</h2>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <h3>{question.text}</h3>
                            <ul>
                                {question.options.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default QuizForm;