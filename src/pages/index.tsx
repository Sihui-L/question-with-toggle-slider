import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import useQuizQuestions from '../hooks/useQuizQuestions';
import './index.css';

interface QuizQuestion {
  title: string;
  answers: {
    options: string[];
    correctAnswerIndex: number;
  }[];
}

// The background colour changes in proportion to how "correct" the answer is
const getBackgroundColor = (correctAnswersNumber: number, totalAnswers: number): string => {
  if (totalAnswers === correctAnswersNumber) {
    return 'linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)';
  } else if (totalAnswers - 1 === correctAnswersNumber) {
    return 'linear-gradient(180deg, #F1B496 0%, #EA806A 100%)';
  } else if (totalAnswers - 2 === correctAnswersNumber) {
    return 'linear-gradient(180deg, #fce763 0%, #fcbe0c 100%)';
  } else {
    return 'linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)';
  }
}

const QuestionPage: React.FC = () => {
    const [answers, setAnswers] = useState<number[]>([]);
    const [correctAnswersNumber, setCorrectAnswersNumber] = useState<number>(0);
    const question: QuizQuestion | null = useQuizQuestions();
    const totalAnswers = question?.answers.length ?? 0;
    const allAnswersCorrect = correctAnswersNumber === totalAnswers;

    const handleAnswer = (answerIndex: number, isCorrect: boolean): void => {
      // Update the answers array with the new answer result
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[answerIndex] = Number(isCorrect);
            
            // Calculate the new number of correct answers
            const newCorrectAnswersNumber = newAnswers.reduce((sum, point) => sum + point, 0);
            setCorrectAnswersNumber(newCorrectAnswersNumber);

            return newAnswers;
        });
    };

    return (
      <div className='question-container' style={{ background: getBackgroundColor(correctAnswersNumber, totalAnswers) }}>
          {question && question?.answers.length ? (
              <>
                <h2>{question.title}</h2>
                {/* Each answer contains an array of options and a correct answer */}
                  <div className='answers-container'>
                    {question.answers.map(({ options, correctAnswerIndex }, index) => (
                      <Toggle
                        key={`${question.title}-${index}`}
                        optionIndex={index}
                        options={options}
                        correctAnswerIndex={correctAnswerIndex}
                        disabled={allAnswersCorrect}
                        onAnswer={(index: number, isCorrect: boolean) => handleAnswer(index, isCorrect)}
                      />
                    ))}
                  </div>
                      <h2>Your answer is {allAnswersCorrect
                       ? 'correct' : 'incorrect'}</h2>
              </>
            ) : (
                <p>Our teachers are working hard to write questions, please check back later...</p>
            )}
      </div>
    );
};

export default QuestionPage;
