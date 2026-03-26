[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17396131)
# Calculator Project Instructions

## Instructions
You will create a basic calculator that performs addition, subtraction, multiplication, and division. This project will help you apply what you've learned about functions, DOM manipulation, and basic error handling in JavaScript.

---

## Plan

### Objective
Define the purpose of the calculator.

### Features
- **Input Handling**: Users input numbers and operations via buttons.
- **Operations**: The calculator performs the selected operation when the equal button (`=`) is clicked.
- **Clear Functionality**: A "Clear" button resets the calculator.

### Requirements
1. The calculator must perform four operations: addition, subtraction, multiplication, and division.
2. Users will interact with the calculator using buttons for numbers (`0-9`) and operations (`+`, `-`, `*`, `/`).
3. A display area will show the current input and the result.
4. Implement error handling to:
   - Prevent division by zero.
   - Handle invalid or incomplete operations.
5. This calculator only needs to process a single operation at a time.

---

### Break Down the Problem
1. **Variables**:
   
2. **Functions**:
   - Handle number button clicks.
   - Handle operation button clicks.
   - Perform the calculation.
   - Reset the calculator.

---

### Edge Cases
- Division by zero.
- Pressing `=` without valid inputs.
- Resetting the calculator when incomplete data is entered.

---

## Design

### HTML Structure
- A grid-based structure with buttons for:
  - Digits (`0-9`).
  - Operations (`+`, `-`, `*`, `/`).
  - Equal (`=`) and Clear buttons.
- A display area to show inputs and results.

---

### Visual Layout
Attach a wireframe showing the design.

---

## Function Design

### Write Pseudo Code for Each Function
1. **`add(num1, num2)`**: 
   - Accepts two numbers as parameters and adds them.

2. **`subtract(num1, num2)`**: 
   - Accepts two numbers as parameters and subtracts `num2` from `num1`.

3. **`multiply(num1, num2)`**: 
   - Accepts two numbers as parameters and multiplies them.

4. **`divide(num1, num2)`**: 
   - Accepts two numbers as parameters and divides `num1` by `num2`.

5. **`clear()`**:
   - Resets all variables and updates the display.

6. **`calculate()`**:
   - Takes user inputs and returns the correct answer.

---

## Implement
1. Write your code in JavaScript.
2. Include **descriptive comments** for readability.

---

## Test

### Unit Testing
Test each function individually:
- `add()`
- `subtract()`
- `multiply()`
- `divide()`
- `clear()`
- `calculate()`

### Edge Cases
1. Division by zero.
2. Non-numeric input.

### User Input Tests

| Calculation | First Number | Operator | Second Number | Output | Is the Output Correct? |
|-------------|--------------|----------|---------------|--------|------------------------|
| 1           | 1            | +        | 1             |        |                        |
| 2           | 16           | -        | 4             |        |                        |
| 3           | 3            | *        | 5             |        |                        |
| 4           | 20           | /        | 4             |        |                        |
| 5           | 394          | +        | 1234          |        |                        |
| 6           | 1234         | -        | 7890          |        |                        |
| 7           | 0            | *        | 12            |        |                        |
| 8           | 12           | /        | 0             |        |                        |
| 9           | a            | +        | 4             |        |                        |
| 10          | 4            | <        | 12            |        |                        |

---

### Retest if Needed

| Calculation | First Number | Operator | Second Number | Output | Is the Output Correct? |
|-------------|--------------|----------|---------------|--------|------------------------|
| 1           | 1            | +        | 1             |        |                        |
| 2           | 16           | -        | 4             |        |                        |
| 3           | 3            | *        | 5             |        |                        |
| 4           | 20           | /        | 4             |        |                        |
| 5           | 394          | +        | 1234          |        |                        |
| 6           | 1234         | -        | 7890          |        |                        |
| 7           | 0            | *        | 12            |        |                        |
| 8           | 12           | /        | 0             |        |                        |
| 9           | a            | +        | 4             |        |                        |
| 10          | 4            | <        | 12            |        |                        |

---

## Deploy
1. Grade your project using the rubric below.
2. Highlight the block indicating the level you believe you achieved for each criterion.
3. Submit your assignment on Google Classroom.

---

## Maintain
- How would you expand on this project?

---

# Project Rubric

| **Criteria**                     | **Exceeds Expectations** (100%)                                                                                                                                                                                                                       | **Meets Expectations** (90%)                                                                                                                                                                                                           | **Approaching Expectations** (75%)                                                                                                                                                              | **Needs Improvement** (50%)                                                                                                                                           | **Did Not Attempt** (0)       |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| **Plan** (8 points)               | Thoroughly defines project goals, features, and technical requirements. Clear planning and requirements documentation.                                                                                                                              | Defines most project goals and requirements, with minor gaps in planning details.                                                                                                                                                     | Basic goals or requirements outlined but lacks comprehensive planning.                                                                                                                         | Minimal planning or requirements identified, unclear project direction.                                                                                   | Did Not Attempt              |
| **Design** (8 points)             | Detailed wireframe, mock-up, or storyboard with logical layout, user-friendly navigation, and a clear aesthetic that reflects project goals.                                                                                                         | Design is mostly complete and functional but lacks some detail in layout or user flow.                                                                                                                                                 | Design is basic or lacking in some critical user flow or layout.                                                                                                                                | Minimal design elements or poor organization.                                                                                                             | Did Not Attempt              |
| **Implement (on-time submission)** (10 points) | Project submitted on or before start of class on due date.                                                                                                                                                                                     | Project submitted by the end of day on due date.                                                                                                                                                                                       | Project submitted one or two days late.                                                                                                                                                          | Project submitted less than one week late based on due date (If due Monday must be submitted by midnight Sunday).                                                                                | Over one week late           |
| **Test** (8 points)               | Comprehensive testing conducted; identified issues logged and addressed effectively.                                                                                                                                                                | Adequate testing conducted with minor issues unaddressed.                                                                                                                                                                              | Minimal testing with several issues remaining.                                                                                                                                                    | Little to no testing conducted; major issues unresolved.                                                                                                  | Did Not Attempt              |
| **Maintain** (8 points)           | Develops detailed plans for future development that could lead to a new release.                                                                                                                                                                   | Develops plans for future development that includes significant changes/improvements to the program.                                                                                                                                   | Includes some ideas for future development that change/improve the program but lacks planning.                                                                                                  | Includes ideas for future development but they make no significant change to the program.                                                                 | Did Not Attempt              |
| **HTML Structure and Syntax** (10 points) | HTML is correctly structured and valid. Tags are closed properly, indentation is consistent, and semantic tags are used appropriately.                                                                                                          | HTML is mostly correct, with minor syntax or structure issues that don’t affect the display.                                                                                                                                          | Multiple syntax or structural errors; improper use of tags or inconsistent indentation.                                                                                                         | HTML is minimally functional, with numerous errors affecting display and readability.                                                                                                           | Did Not Attempt              |
| **CSS Placement and Organization** (5 points) | CSS is primarily external, with internal or inline styles only where necessary for overriding specific styles. CSS is organized and easy to read.                                                                                              | CSS is mostly external, with minimal and justifiable use of internal or inline styles.                                                                                                                                                 | CSS is partially external, but internal or inline styles are used without clear justification.                                                                                                  | CSS is mostly internal or inline, with poor organization.                                                                                                                                        | Did Not Attempt              |
| **Project Functionality: Core Features** (20 points) | All required core features are implemented and work as specified.                                                                                                                                                                              | Most core features work as specified, with minor issues.                                                                                                                                                                               | Core features are partially implemented, but functionality is limited or inconsistent.                                                                                                         | Minimal core functionality is present, but major features do not work.                                                                                                                           | Did Not Attempt              |
| **User Experience and Visual Design** (8 points) | Visual design is cohesive, elements are aligned, and the layout is intuitive. User interactions are smooth and logical.                                                                                                                         | Visual design is mostly cohesive, but some minor alignment or layout issues exist.                                                                                                                                                     | Visual design is functional but lacks consistency or has significant alignment issues.                                                                                                          | Visual design is disorganized, with poor alignment and user flow.                                                                                                                               | Did Not Attempt              |
| **Comments** (15 points)          | Comments are detailed, insightful, and enhance understanding.                                                                                                                                                                                     | Comments are present and relevant.                                                                                                                                                                                                     | Comments are vague or lack detail.                                                                                                                                                               | Comments are missing or minimal.                                                                                                                                                                | Did Not Attempt              |
