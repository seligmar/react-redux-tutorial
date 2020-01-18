# react-redux-tutorial

https://www.youtube.com/watch?v=CVpUuw9XSjY

React Redux is useful for managing state especially in large apps with lots of components- data in react only flows in one direction, but redux makes it possiple to access data across the app without having to store all data/state in the highest component. State is stored seperately in the store and data can be accessed exactly where it is needed- no more need for prop drilling.

The store holds all the state needed for the app

Action describes what is being accomplished

  <!-- * an action is a simple function that returns an object * -->

Reducers describe how the action changes the state in the store

Dispatch executes action by sending commands via reducers
