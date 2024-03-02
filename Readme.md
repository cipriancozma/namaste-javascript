### 1. How JavaScript works?

R: Everything in JavaScript happens inside an execution context.<br>
JavaScript is a synchrounous single-threaded language.<br>
Single threaded means that JavaScript can execute one command at a time.<br>
Synchronous means that JavaScript can execute the code in a specific order.<br>

### 2. How JavaScript code is executed?

R: When a JS app is run, a global execution context is created. <br>
Important is that JS divides the execution into Memory Allocation Phase and Code Execution Phase. <br>
In the first phase memory is allocated for every variable and function. The variables are defined being undefined and the functions are defined with the block of code. <br>
In the second phase the values are allocated to the variables defined in the Memory Allocation Phase. So undefined will be replaced with the value. <br>
Each function will create a new execution context with the specific phases, Memory Allocation Phase and Code Execution Phase. <br>

### 3. Hoisting in JavaScript (variables & functions)

R:
