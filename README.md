# react-redux-tutorial

https://www.youtube.com/watch?v=CVpUuw9XSjY

Redux is useful for managing state in React especially in large apps with lots of components- state in react only flows in one direction (from higher-level components to lower-level components), but redux makes it possiple to access state across the app without having to store state in the highest-common-denominator component. State is stored seperately in the store and can be accessed exactly where it is needed- no more need for prop drilling!

For smaller projects, the disadvantage of having to install and import a lot of standard language and functions that can be easily accomplished in react all on its own. However, for complex projects (or projects that are likely to become complex), with lots of pieces of state to be stored and needed across lots of components, redux provides a valuable way to manage those complexities.

A few key terms:

The store holds all the state needed for the App

store.js incorporates

combineReducers.js (or similar) is where

<!-- If there is only one type of state it still makes sense to consolidate all reducers using combineReducers so that the App can be easily scaled up  -->

Action describes what is being accomplished

  <!-- * an action is a simple function that returns an object * -->

Reducers describe how the action changes the state in the store

Dispatch executes action by sending commands via reducers

A note on file structure- it is always easier to
