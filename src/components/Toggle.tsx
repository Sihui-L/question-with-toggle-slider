import React, { useState, useEffect } from 'react';
import './toggle.css';

interface ToggleProps {
    options: string[],
    correctAnswerIndex: number,
    optionIndex: number,
    onAnswer: (index: number, isCorrect: boolean) => void,
    disabled: boolean,
}

const Toggle: React.FC<ToggleProps> = ({ options, optionIndex, correctAnswerIndex, onAnswer, disabled }) => {
    const [activeIndex, setActiveIndex] = useState<number>(() => Math.floor(Math.random() * options.length));
    const optionCount = options.length;

    // Notify the parent component of the answer when the active index changes
    useEffect(() => {
      const isCorrectAnswer = activeIndex === correctAnswerIndex;
      onAnswer(optionIndex, isCorrectAnswer);
    }, []);
    
    const handleToggle = (index: number) => {
      if (!disabled) {
        setActiveIndex(index);
        const isCorrectAnswer = index === correctAnswerIndex;
        onAnswer(optionIndex, isCorrectAnswer);
      }
    };

    // Dynamically set the border-radius of the slider based on the active index
    const getSliderRadius = (): string => {
      if (activeIndex === 0) return '24px 24px 0 0';
      else if (activeIndex === 1 && optionCount === 3) return '0';
      return '0 0 24px 24px';
    }

    return (
        <div className='toggle-container' style={{ '--activeIndex': activeIndex, '--optionCount': optionCount, '--borderRadius':  getSliderRadius()} as React.CSSProperties}>
            <div className="toggle-slider"/>
              {options.map((answer, index) => (
                <div
                    key={answer}
                    className={`toggle-option ${disabled ? 'disabled' : ''}`}
                    onClick={() => handleToggle(index)}
                    tabIndex={disabled ? -1 : 0}
                    role="button"
                    aria-pressed={activeIndex === index}
                >
                    {answer}
                </div>
            ))}
        </div>
    );
};

export default Toggle;
