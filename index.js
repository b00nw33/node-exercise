// This app creates a web server to listen to incoming requests
// Use express.js to enable it

// Using "type": "commonjs"  ES5
const express = require("express");
// Using "type": "module"    ES6+
// import express from "express";

const cors = require("cors");     // prevent cross-site request forgery (CSRF)

const PORT = 8888;                // create custom port that the app listens to
const HOST = "127.0.0.1";         // domain (ip address)
const OS = require("os");         // logging the platform running the server
const ENV = "DEV";                // set the mode of development of this project (nothing to do with .env, DEV, UAT, PROD)

const app = express();            // invoke express library to be consumed to run the browser
app.use(express.json());          // middleware to handle JSON data
app.use(cors())

// Create endpoints that this server application listens to
// GET, POST, PUT, DELETE, PATCH
app.get("/", (req, resp) => {
    // return resp.status(300).send("Test 300");
    resp.statusCode = 418;
    const msg = "Hello FSD Learner. Running Node.js for 418.";
    return resp.send(msg);
});

app.get("/about", (req, resp) => {
    // return resp.status(300).send("Test 300");
    resp.statusCode = 303;
    const msg = "<h1>About this website.</h1>";
    return resp.send(msg);
});

app.post("/login", (req, resp) => {
  const { username, password } = req.body;
  
  console.log(`Username received: ${username}`);
  console.log(`Password received: ${password}`);

  //test
  return resp.status(403);

  // Validate input
  if (!username || !password) {
    return resp.status(400).json({ error: "Username and password required" });
  }

  const pseudoUsername = "user1";
  const pseudoPassword = "1234"

  if (username === pseudoUsername && password === pseudoPassword)
    return resp.status(200).json({ msg: "Welcome" });



  // Here you'd normally check against a database
  // For demo: accept any credentials
  resp.json({ 
    success: true, 
    message: "Login successful!" 
  });
});

// start app to listen via HOST and PORT (http://127.0.0.1:8888)
app.listen(PORT, HOST);
console.log(`Running service on http://${HOST}:${PORT} on OS-${OS.platform()}`);