# Getting started with my TodoApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing the App

In order to Install the App, please pull it from the repository.
Then please install the dependencies with npm i.

Once the dependencies are installed you have following options.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## App description

- in Assets you will find imgs, svgs.
- in Components you will find Folders with the subcomponents, each folder contains
  a js and a sass file.
- in Redux you will find the store, actions and the slice reducer.
  For the app i used the modern approach. All actions have 3 stages.
  Pending, Fullfilled and Rejected to catch the error.
- In Styles you will find sass files in order to make the app responsive plus a reset file

### App flow

Once the app mounts i fetch data from db, then i only add data
when the server confirms with 200, otherwise the AppError component will catch the error. So each actions only happens when the server responds with 200.

User will see a spinner when an action occurs.

User can add todos by clicking in the todo field, then save it by clicking the SAVE button.
User can delete the todo by clicking the DELETE button.
Use can cancel the action by clicking the CANCEL button.

To complete a todo click on the left checkmark, then it changes to a X and the text is crossed.
When todo is completed, user can only delete the todo when he clicks into the field.
By hitting the X button you uncomplete it.

### App Errors

There a are 2 Error catchers.

1. When Server responds with an Error, user can then Reload the page.
2. When User loses internet connection an overlay appears and the user cant do anything untill he connects with the internet
