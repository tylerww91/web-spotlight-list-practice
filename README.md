## Display a list practice

The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

There are only so many things we do in an app.

[Here is a list of the 10 major plain JavaScript patterns.](https://github.com/alchemycodelab/student-resources/blob/main/curriculum-notes/web/documentation/patterns.md)

Let's practice the 'display a list' and 'render function' patterns.

**Scoring rubric: 2.5 point for each array displayed to the page.**

## Goal

Render 4 separate lists of things to the same index.html file. Minimally,

-   one list should be a list of string,
-   one should be a list of simple objects,
-   one should be a list of objects where one property is a nested object,
-   STRETCH:
    -   and one should be a list of objects where one property is an array.

## Setup

Start with the [list practice template repo](https://github.com/alchemycodelab/display-a-list-practice).

## Process

Repeat the following process 4 times, with 4 different domains, all in the same template:

> Note: do this process **one array at a time**. Do not write 4 arrays, then 4 render functions, etc. Please work through the first array, then the first render function, then the first display function.

Come up with a domain for this data (lie 'dogs' or 'candies'). Let's assume you picked 'candies':

1.  Rename `array-one.js` to `candies-data.js`. In that data file:
    -   create an exported variable with an array of at least 3 objects for that domain
    -   (each object should have at least 3 properties)
    -   Objects in the array should all have the same properties:
        ```js
        {
            name: 'Twix',
            flavor: 'chocolate caramel',
            type: 'candy bar'
        }
        ```
1.  In `index.html`:
    -   Rename the header to your domain, e.g. `<h2>Candies</h2>`
    -   Rename the `id` of your list container, e.g. `<ul id="candy-list"></ul>`
    -   Design a `<li>` element, simple is best:
        ```html
        <li class="candy-item">
            <h2>Twix</h2>
            <p>chocolate caramel candy bar</p>
        </li>
        ```
1.  Rename `render-one.js` to `render-candy.js` file for your candy array
    -   Write a render function that accepts one object and returns DOM elements.
    -   This function should return an `<li>` element with a css class of 'candy-item'.
    -   Create a minimum of two child elements (`h2`, `span`, `p` etc.) for putting in the properties of the object
1.  In `app.js`:
    -   `import` your array and render function
    -   Grab the list element from the DOM.
    -   Loop through your array, and for each object"
        -   render a candy element using the render function
        -   append the element to the container element you grabbed from the DOM
