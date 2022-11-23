/**
 * This function will accept details about a person
 * and create an object for them.
 *
 * @param {string} name The persons's full name
 * @param {number} age The person's age
 * @param {boolean} isDeveloper Whether or not the person is a developer
 * @returns {Object} The person object
 */
function createPerson(name, age, isDeveloper) {
  return {
    name: name,
    age: age,
    isDeveloper: isDeveloper,
  };
}

class Person {
  /**
   * Creates a person
   *
   * @param {string} name The persons's full name
   * @param {number} age The person's age
   * @param {boolean} isDeveloper Whether or not the person is a developer
   * @returns {Object} The person object
   */
  constructor(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }
}

/**
 * Outputs details about a person.
 *
 * @param {Person} person
 */
function printDetails(person) {
  console.log("new change");
}

/**
 * Gives you numbers.
 *
 * @returns {numbers[]}
 */
function getNumbers() {
  return [10, 80, 130, 150];
}

const numbers = getNumbers();
