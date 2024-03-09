import React from 'react';
import styles from "./Question.module.css";

function Question({ number }) {
    return (
        <div className={styles.question}>
            <label htmlFor={`question${number}`}>Question {number}: </label>
            <input type="text" id={`question${number}`} name={`question${number}`} className={styles.questionInput} placeholder='Enter the question here...'/>
            <br />
            <input type="text" className={styles.option} name={`option${number}1`} placeholder="Option 1" />
            <input type="text" className={styles.option} name={`option${number}2`} placeholder="Option 2" />
            <input type="text" className={styles.option} name={`option${number}3`} placeholder="Option 3" />
            <input type="text" className={styles.option} name={`option${number}4`} placeholder="Option 4" />
            <br />
            <label htmlFor={`answer${number}`}>Correct Answer:</label>
            <select id={`answer${number}`} name={`answer${number}`}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select><br /><br />
        </div>
    );
}

export default Question;

