# [Freecodecamp Tutorial by Oluwatobi Sofela](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/#how-to-test-react-components) - Notes

## How to Test React Components

### Test Runner vs. React Component Testing Tool: What's the Difference?

- A test runner is a tool developers use to run a test script and print the test's results on the command line (CLI).
  - Typical examples of test runners are Jasmine, Mocha, Tape, and Jest.
- A React component testing tool provides helpful APIs for defining a component's test cases.
  - For instance, suppose you need to test your project's <App /> component. In such a case, you will use a React component testing tool to define the component's test cases.
  - Typical examples are Enzyme and the React Testing Library

### What is Jest?

- jest is the test runner tool we will use to run this project's test scripts and print the test results on the command line.

### What is @testing-library/react?

- @testing-library/react is the React Testing Library which gives you the APIs you need to write test cases for your React components.

### What is @testing-library/jest-dom?

- @testing-library/jest-dom provides some set of custom Jest matchers for testing the DOM's state.
- <em>Note: Jest already comes with lots of matchers, so using jest-dom is optional. jest-dom simply extends Jest by providing matchers that make your test more declarative, clear to read, and easy to maintain.</em>

### What is @testing-library/user-event?

- @testing-library/user-event provides the userEvent API for simulating users' interaction with your app on a web page.

### Run tests command

-to run all test files:
<code>npm test</code>

- to run specific test file:
  <code>npm test App.test.js</code>
- Jest will look for tests in any of the following places [(src)](https://dfrase.medium.com/testing-react-with-jest-axe-and-react-testing-library-accessibility-34b952240f53):

  - Files with <code>.js</code> suffix in <code>__tests__</code> folders.
  - Files with <code>.test.js</code> suffix.
  - Files with <code>.spec.js</code> suffix.
  - It is convention to put each test file next to the code it is testing

### Methods

- <code>test()</code> is one of Jest's global methods. We use it to run a test case. The method accepts three arguments:
  - The name of the test ("codesweetly test heading")
  - A function containing the expectations you wish to test
  - An optional timeout argument
- <code>render()</code> is one of the React Testing Library APIs. We use it to render the component we wish to test.
- <code>expect()</code> is a Jest method that lets you test the output of your code.
- <code>screen</code> is a React Testing Library's object containing numerous methods for finding elements on a page.
- <code>getByRole()</code> is one of the React Testing Library's query methods for finding elements on a page.
- <code>toHaveTextContent()</code> is one of jest-dom's custom matchers that you can use to confirm the presence of a text content in a specific node.
- <code>/codesweetly test/i</code> is a regular expression syntax that we used to specify a case-insensitive search for codesweetly test.
- <code>describe()</code> is one of Jest's global methods. It is optional code that helps organize related test cases into groups. describe() accepts two arguments:
  1. A name you wish to call the test case group—for instance, "App component".
  2. A function containing your test cases.
- <code>userEvent</code> is the React Testing Library's package containing several methods for simulating users' interaction with an app.
  - For instance, in the snippet above, we used <code>userEvent</code>'s <code>click()</code> method to simulate a click event on the button element.

# [Freecodecamp Tutorial by TK](https://www.freecodecamp.org/news/tdd-functions-and-react-components/) - Testing Practices

- TDD is just a process of 3 steps:

  - Make a test
    - We start writing a simple test to cover how we expect the software works.
  - Make it run
    - Then we make the first implementation of the code (class, function, script, etc).
  - Make it right
    - If the software works as expected, time to make it right. Time to make it better

- The aim is to:

  - build tests that:
    - Ensure the software works appropriately
    - Give the confidence to ship code to production
    - Make us think about software design
  - tests that make software:
    - Easy to maintain
    - Easy to refactor
  - when writing your tests, first is to think about use cases and simulate how it should be used (as a function, component, or used by a real user).

- apply this TDD thing into simple functions.
