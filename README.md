# Drone Flight Planner

## What's this?

This project is a drone flight planner made for the browser.

The project is built with React with ```create-react-app``` for Typescript.

I used React Hooks and functional components instead of class components. Hooks enhances the readability and reusability of code as well as simplifies lifecycles methods of the virtual DOM. Leaflet library is used to render maps on the app. Leaflet draw was also used to draw polylines on the map.

Passing props between components in this case is also pretty cheap, consisting only on one level of depth. There is no need of using any state management tool like Redux or React Context. The props are passed directly from Parent Component to Child Component.

In order to make React components more readable and better structured I decided to implement styled components. Every component has its own folder inside src/components and styles files are separated from the file of the functional commponent. At the same type styled'components enables the use of a theme provider that makes the code also more readable and keeps the different colors and breakpoints for example just under one file. 

## Technologies and libraries I used

- HTML5, CSS3
- Typescript
- leaflet
- leaflet-draw
- react.js
- styled-components

## Set Up

To make it run just clone the repository, install all the dependencies with ```npm install```. You just need to run the server and the client in you local directory with the command ```npm start```.

## Screenshots

### Screen 1

![Screen 1](https://github.com/l-legren/drone-flight-planner/blob/master/public/screenshot1.jpg)

### Screen 2

![Screen 2](https://github.com/l-legren/drone-flight-planner/blob/master/public/screenshot1.jpg)
