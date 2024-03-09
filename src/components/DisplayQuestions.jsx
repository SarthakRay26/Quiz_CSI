import React from 'react';

function DisplayQuestions({ questions }) {
    console.log(questions); 
    return (
        <div>
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
    );
}

export default DisplayQuestions;