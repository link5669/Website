import React from 'react';

const LearningOptions = (props) => {
    const options = [
        {text: 'HTML', handler: () => {}, id: 1},
        {text: 'CSS', handler: () => {}, id: 2 },
        {text: 'JavaScript', handler: () => {}, id: 3}
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}>
                {option.text}
        </button>
    ));
    return (
        <div className="learning-options-container">{optionsMarkup}</div>
    )
}
export default LearningOptions;