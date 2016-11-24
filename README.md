# ES6

## Let

In its most basic form, let is a sibling to var. But declarations made with let are scoped to the blocks in which they occur, rather than being "hoisted" to the enclosing function's scope as vars do:

```js

  function foo() {
    a = 1;                  // careful, `a` has been hoisted!

    if (a) {
    var a;              // hoisted to function scope!
    let b = a + 2;      // `b` block-scoped to `if` block!

    console.log( b );   // 3
    }

    console.log( a );       // 1
    console.log( b );       // ReferenceError: `b` is not defined
  }

```

Basically, any place a block occurs (like a { .. } pair), a let can create a block scoped declaration inside it. So wherever you need to create limited-scope declarations, use let.

## Arrow functions

The word **function** was replaced for the token **=>** instead left side is the right side.

The *'this'* is **global**.

> **arguments**, **typeof** and **instanceof** will not be created or defined to a function

## Array from

Create a new instance from array-like to array.
