# Modified [json-server](https://github.com/typicode/json-server) that creates json-error responses

## Getting started

- If not alredy done, install nodejs
- Clone this project
- In the folder it was cloned into, type npm install
- Place this file: [users.json](https://github.com/Cphdat3sem2018f/week6_javascript-2/blob/master/code/users.json) into the ROOT of the project 

## run the server in any of the following ways:
- `npm start`  Run the server with CORS headers, using the file users.json and no auto-fail
- `npm run autofail`  Run the server with CORS headers, using the file users.json. Randomly generates server faults (status:500)
- `npm run autofailnocors`  Run the server WITHOUT CORS headers, tusing he file users.json. Randomly generates server faults (status:500)
- `npm run nocors`  Run the server WITHOUT CORS headers, using the file users.json and with no auto-fail
