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

R: When the JS engine gets our script, the first thing it does is setting up memory for the data in our code. No code is executed at this point, it's simply just preparing everything for execution. <br>
Functions are stored with a reference to the entire function.<br>
With variables it's a bit different. With **let** and **const** variables are stored **uninitialized**. <br>
Variables declared with **var** are stored with the default value of **undefined**. <br>
What is presented above is happening in the **Memory allocation phase**. <br>
In order to prevent to accidentally reference an undefined variable, like we can have with var, a **reference error** gets thrown if we try to access uninitialized variables. The zone before their actual declaration is called **temporal dead zone**. <br>
Functions and variables are stored in memory for an execution context before we execute the code. This is called **hoisting**. <br>

### 4. How functions work in JS && Variable Envinronment
