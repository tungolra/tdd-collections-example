# [Freecodecamp Tutorial](https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/#how-to-test-react-components) - Notes

## Tests with Jest

### What Is Test-Driven Development?

- Test-driven development (TDD) is a coding practice where you write the result you want your program to produce before creating the program.

- test file must be named with <code><file_name>.test.js</code>

### Running Tests

- to run all test files:
  - <code>npm run test</code>
- to run a specific test file:
  - <code>npm run test <file_name></code>
- to run your test automatically, add the --watchAll option to your <code>package.json's test field.</code> - <code>{
  "scripts": {
  "test": "jest --watchAll"
  }
  } </code>
  <em>Note: You can quit the watch mode by pressing the Q key on your keyboard.</em>

### Methods

- test() is one of Jest's global methods. It accepts three arguments:
  - The name of the test ("addition of 4 and 6 to equal 10").
  - A function containing the expectations you wish to test.
  - An optional timeout argument.
- describe() method we used in the snippet above is optional code—it helps organize related test cases into groups. Accepts two arguments:
  1. A name you wish to call the test case group—for instance "additionCalculator's test cases".
  2. A function containing your test cases.

### Important

- Jest does not currently recognize ES6 modules.

## Unit Tests

### What is a Unit Test in Test-Driven Development?

- A unit test is a test you write to assess the functionality of an independent piece of a program. In other words, a unit test checks if a fully isolated unit of program is working as intended.
- a unit test's core purpose is to check whether an independent piece of program (called unit) behaves as intended under various test cases.

### What is an Integration Test?

- An integration test assesses the functionality of a dependent piece of program. In other words, an integration test checks if a program—which depends on other code—is working as intended.

### What is an End-to-End Test?

- An End-to-End (E2E) test assesses the functionality of a user interface. In other words, E2E checks if your user interface is working as intended.

### What are Test Doubles?

- Test doubles are the imitation objects used to mimic real dependencies like databases, libraries, networks, and APIs.
- A test double allows you to bypass the natural objects on which your program depends. They let you test your code independently of any dependencies.

  - For instance, suppose you need to verify if an error detected in your app originates from an external API or your code.

  - But suppose the API's service is available only in production—not in the development environment. In that case, you've got two options:

    1. Wait until your app goes live—which could take months.
    2. Clone the API so you can continue your test irrespective of the dependency's availability.

- Typical examples of test doubles are dummy objects, mocks, fakes, and stubs.
  - A <strong>dummy</strong> is a test double used to mimic the value of a specific dependency.
  - <strong>Mock</strong> is a test double used to mimic an external dependency without considering the responses the dependency may return.
  - A <strong>stub</strong> is a test double used to mimic an external dependency while returning hand-coded values. You can use the returned value to assess your program's behavior with various test case responses from the dependency.
  - <strong>Fake</strong> is a test double used to create a working test implementation of an external dependency with dynamic values.

