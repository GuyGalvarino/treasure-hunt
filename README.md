# treasure-hunt
A treasure hunt game.

## Deployment Link
Game: https://treasure-hunt-90rx.onrender.com/<br>
Admin: https://treasure-hunt-90rx.onrender.com/admin

## About the project
It aims to access the accuracy and attention to detail of a person. The game has 5 clues hidden in 5 rooms along with an initial clue to get started. Each clue leads to the next clue and finally, the key to the treasure. Finding the key ends the game with a success. However, there are two dead-ends hidden in the game, clicking which immediately ends the game with a failure.

## Soft-skill assessment method
- Accuracy: For accuracy the number of interactions are taken into consideration. A minimum of 12 interactions (two for each hidden clue and two additional for the key) are required unless someone gets extremely lucky and finds the key before that (the key is activated after any hidden clue has been found and can be discovered). It ranges from 0 to 100
- Attention to detail: Paying more attention to the details would cause less amount of time to be taken. For more than or equal to an hour, the score is set to 0. It ranges from 0 to 100

## Features
- React frontend
- Node and Express backend
- A login and registration page
- The game page
- A stats page for showing past records and soft-skill scores
- Token based authentication
- MongoDB for storing user data
- An admin portal for viewing the status of every user

## Environment variables required
- ``MONGODB_URI``: for the MongoDB database's URI
- ``SECRET``: for tokens
- ``PORT`` (optional): for the port number

## Instructions to setup the project for development
1. Download/clone the repo
2. Run ``npm install`` at the root of the project
3. Create a ``.env`` file at the root of the project with environment variables for ``MONGODB_URI`` (the database's URI) and ``SECRET`` (secret string for token authentication). An optional ``PORT`` variable maybe created to define the port number, otherwise it starts at ``3001``
4. For development, run ``npm run dev`` to start the server

## All instructions
### Install dependencies
``npm install``
### Production start
``npm start``
### Development start
``npm run dev``
### Run tests
``npm run test``
