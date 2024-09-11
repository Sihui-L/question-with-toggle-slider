import { useEffect, useState } from 'react';

interface Answer {
    options: string[];
    correctAnswerIndex: number;
}

interface Question {
    title: string;
    answers: Answer[];
}

const questions: Question[] = [
  {
    title: 'An animal cell contains:',
    answers: [
      { options: ['Cell wall', 'Ribosomes'], correctAnswerIndex: 1 },
      { options: ['Cytoplasm', 'Chloroplast'], correctAnswerIndex: 0 },
      { options: ['Partially permeable membrane', 'Impermeable membrane'], correctAnswerIndex: 0 },
      { options: ['Cellulose', 'Mitochondria'], correctAnswerIndex: 1 },
    ],
  },
  {
    title: 'Ideal office conditions:',
    answers: [
      { options: ['Good pay', 'Bad pay'], correctAnswerIndex: 0 },
      { options: ['lot of meetings', 'less meetings'], correctAnswerIndex: 1 },
      { options: ['free coffee', 'expensive coffee'], correctAnswerIndex: 0 },
      { options: ['bear in office', 'dog in office'], correctAnswerIndex: 1 },
    ],
  },
  {
    title: 'Let\'s test 3 options - ideal life conditions:',
    answers: [
      { options: ['just 🐈 / 🐕', 'cats and dogs', 'no pets'], correctAnswerIndex: 1 },
      { options: ['work from home', 'on-site', 'hybrid'], correctAnswerIndex: 0 },
      { options: ['healthy', 'minor health problems', 'serious health problems'], correctAnswerIndex: 0 },
      { options: ['have some friends', 'no friends', 'have best friend(s)'], correctAnswerIndex: 2 },
    ],
  },
];

// Fisher-Yates shuffle algorithm to shuffle answers
const shuffleAnswers = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffleGetQuestion = (questions: Question[]): Question => {
  const questionIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[questionIndex];
  
  // Shuffle the answers within the selected question
  return {
    ...selectedQuestion,
    answers: shuffleAnswers(selectedQuestion.answers),
  };
};

const useQuizQuestions = () => {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const newQuestion = shuffleGetQuestion(questions);
    setQuestion(newQuestion);
  }, []);

  return question;
};

export default useQuizQuestions;
