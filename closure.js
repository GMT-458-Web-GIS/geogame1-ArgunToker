Closures in the Project
Closures were used to maintain data encapsulation and simplify repetitive tasks:

Example: Maintaining the State of Current Question:

The loadQuestion function captures the currentIndex variable and retrieves data for the current question.

**
function loadQuestion() {
    const question = hints[currentMode][currentIndex];
    hintElement.textContent = question.hint;
    scoreElement.textContent = `Score: ${score}`;
}
**

  Benefits:

Reduces redundancy by capturing variables like currentIndex and currentMode.
Simplifies the process of updating the question and score dynamically.
