# Toddy. A React, Redux, Bootstrap Todo App

## Table of Contents

* [Summary](#Summary)

* [Branches](#Branches)

* [Technologies](#Technologies)

* [Features](#Features)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Toddy is a Redux application I made for my students so they can practice refactoring an existing React app to use Redux.

## Branches

| Branch  | Summary |
| ------------- |:-------------:|
| <p align=center>**Main**</p> |The main todo app|
| <p align=center>**Redux**</p> |The Redux refactoring documented step by step|
| <p align=center>**Advanced Router**</p> |The Advanced React-Router refactoring step by step|

## Technologies

React was used for the front end.  
Bootstrap was used for the UI  
Redux was used for state management.  
Router was used for navigational components.  
Mock server was used for the backend to simulate connecting to an API.


## Features

1. Add new todos.

2. View existing todos

3. Delete any todo from the list.

4. When adding a todo if a todo has no title it will be untitled.

5. Each todo get an id, timestamp and random activity from the backend.

6. Each todo can be viewed in details through its own url containing its ID.

7. Invalid todos are handeled correctly and the user is redirected to a 404 page.

8. Each component in the redux branch has all the refactoring steps to switch from state to Redux.

9. Each component in the advanced router branch has all the refactoring steps to implement router params and 404 routing.

## Structure 
**Main Branch**
```
+---public
|       index.html
|       manifest.json
|       robots.txt
|
\---src
    |   index.css
    |   index.js
    |
    +---components
    |       AddTodo.js
    |       App.js
    |       NavBar.js
    |       Todo.js
    |       Todos.js
    |
    \---utils
            api.js
```
**Redux**
```
+---public
|       index.html
|       manifest.json
|       robots.txt
|
\---src
    |   index.css
    |   index.js
    |
    +---actions
    |       todos.js
    |
    +---components
    |       AddTodo.js
    |       App.js
    |       NavBar.js
    |       Todo.js
    |       Todos.js
    |
    +---middleware
    |       index.js
    |       logger.js
    |
    +---reducers
    |       todos.js
    |
    \---utils
            api.js
```
**Advanced Router**
```
+---public
|       404.gif
|       index.html
|       manifest.json
|       robots.txt
|
\---src
    |   index.css
    |   index.js
    |
    +---actions
    |       todos.js
    |
    +---components
    |       AddTodo.js
    |       App.js
    |       NavBar.js
    |       NotFound.js
    |       Todo.js
    |       TodoDetails.js
    |       Todos.js
    |
    +---middleware
    |       index.js
    |       logger.js
    |
    +---reducers
    |       todos.js
    |
    \---utils
            api.js
```


## Usage and Installation

You can get the project up and running in 2 simple steps.

1. Use the following command to install the required packages
```
npm install
```
2. Use the following command to run the project
```
npm start
```

