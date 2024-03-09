import React, { useState } from 'react';
import QuizForm from './QuizForm';
import DisplayQuestions from './DisplayQuestions';

function ParentComponent() {
    const [questions, setQuestions] = useState([{ number: 1, text: '', options: ['', '', '', ''] }]);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <QuizForm questions={questions} setQuestions={setQuestions} setSubmitted={setSubmitted} />
            {submitted && <DisplayQuestions questions={questions} />}
        </div>
    );
}

export default ParentComponent;