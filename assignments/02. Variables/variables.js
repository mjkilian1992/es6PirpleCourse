/**
    Prior to ES6, var was the only way of declaring variables in JavaScript. Variables declared with
    var are function scoped, meaning that they are always accessible from anywhere within the scope of the
    function they are declared in (even before their declaration statement due to hoisting, explained later) or
    in the global scope if defined outside of a function.

    In all but the most niche contexts it is preferable to avoid using var in favour of let or const, discussed below.
    Function scoping can easily lead to programming errors and introduce subtle bugs.
*/
function testVarDeclaration(outputFlag) {
    if (outputFlag){
        var output = 'Cheese';
    }
    // Valid since var is scoped to the testVarDeclaration() function
    // Will also work regardless of the truthiness of outputFlag thanks to hoisting. This is explained later
    console.log(output);
}

/**
 * In ES6 two new block-scoped variable definitions were introduced: let and const. Both can also be declared in the
 * global scope.
 *
 * Let declares a block-scoped variable which can be assigned or reassigned after declaration. They may be initialized
 * with a value on declaration or left defined.
 *
 * In ES6 let is the preferred way to define a variable whose assignment will change after declaration.
 */
function testLetDeclaration(){
    if (true){
        let output = 'Cheese';
    }
    /*
     * This will raise a reference error since the output variable is scoped to the if block.
     */
    console.log(output);
}

/**
 * A potential trap here is that JavaScript allows var variables to be implicitly declared by assigning a value to
 * a valid variable name, without the var keyword. Continuing the example above:
 */
 function testLetDeclaration(){
    if (true){
        let output = 'Cheese';
    }
    output = 'Toast';
    /*
     * This will actually output 'Toast' but it is not reassigning the output variable inside the if block. A new function scoped
     * variable called output is implicitly defined and set to 'Toast' and this is what is logged!
     */
    console.log(output);
}

/**
 * const is also block scoped but must be initialized with a value and cannot be reassigned after this initialization.
 * This is, as the name suggests, useful for defining constants which should not accidentally be changed.
 */

 // Defining a shared constant in the global scope
 const DONT_CHANGE_THIS = 'Immutable';
 function badFunction() {
    // Invalid as we are attempting to reassign a constant
    DONT_CHANGE_THIS = 'changed';
 }

/**
* Finally we discuss hoisting. In JavaScript variables are 'hoisted' to the top of their scope, meaning that
* regardless of where they are declared, the program behaves as if they were declared at the start of the scope.
*
* For var variables, the two examples below are functionally equivalent.
*/
function beforeHoisting(){
    if (true){
        // do something here
    }
    var x = 1;
    console.log(x);
}

function afterHoisting() {
    var x;
    if (true){
        // do something here
    }
    x = 1;
    console.log(x);
}

/**
 *  Since var is function scoped, the declarations of var variables are implicitly hoisted to the top of the function.
 *  This has the strange consequence that var variables can be assigned and referenced before they are declared, e.g:
 */
 function assignBeforeDeclaration(){
     x = 1;
     if(true) {
         // do some more stuff
     }
     var x;
     // Logs 1. The var declaration is hoisted above it's assignment.
     console.log(x);
 }

 /**
  * Let and const variables are also hoisted to the top of their scope (the block), however they are not usable until
  * explicitly declared. The hoisting only makes the scope 'aware' of the variable.
  */
