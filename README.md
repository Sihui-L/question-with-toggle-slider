# Toggle Component

This is a customizable and responsive toggle component built with **React** and **TypeScript**. The component is responsive, supporting dynamic border-radius changes based on the current active option and adapting layout for different screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sihui-L/question-with-toggle-slider.git
   cd question-with-toggle-slider
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assumptions and Limitations

### Assumptions

1. **Questions and Answers Format**: The quiz questions are expected to have a standard structure, where each question contains a title, a set of answer options, and a correct answer. The current implementation assumes this structure is always available.
2. **Number of Options**: The `Toggle` component is designed to handle either 2 or 3 options. Any modifications to support more or fewer options would require updates to the `Toggle` component.
3. **Correct Answer Validation**: Only one of the options can be the correct answer.
4. **Initial State**: The `Toggle` component randomly selects an initial option on mount. This behavior may need to be modified for specific use cases where a predefined initial state is required.
5. **Quiz Data Source**: The `useQuizQuestions` hook currently fetches or generates quiz questions in a synchronous manner. This assumes that the data is available immediately when the component mounts. For real-world applications, this would typically need to handle asynchronous data fetching.

### Limitations

1. **Responsive Design**: The `Toggle` component is designed for only 2 or 3 options.
2. **Accessibility**: Basic accessibility is implemented, but the project may require further refinement to ensure full accessibility.
3. **Edge Case Handling**: The current implementation does not handle certain edge cases, such as empty questions or answers. It assumes that the quiz data is always complete and valid.
4. **Global Styles**: The project uses global CSS styles, which may lead to potential conflicts if integrated into larger projects.
