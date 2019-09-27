const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const validator = require("email-validator");
const chalk = require('chalk');

let args = process.argv.slice(2);
const PORT = 3333

/*
Legal options:
db=filename
fail=nn
cors=0||1
*/
const opts = args.reduce((acc, curVal) => {
  const parts = curVal.split("=");
  acc[parts[0]] = parts[1];
  return acc;
}, {})

const DB = opts.db || "users.json";
let ROUTE = DB.split(".")[0];
ROUTE = "route" ? "/api/users" : ROUTE

console.log(`DB: ${DB}, ROUTE: ${ROUTE}`)

var bodyParser = require('body-parser');
server.use(bodyParser.json()); // for parsing application/json
server.set("view engine", "ejs")

const rules = require("./users_rules").users;
server.get("/", (req, res, next) => res.render(path.join(__dirname, "index.ejs"), 
{ rules,url:"http://localhost:"+PORT+ROUTE, resourse: ROUTE }));


let = cors = opts.cors;
cors = typeof cors === "undefined" ? true : cors;
console.log("CORS Headers: ",cors)

if (cors) {
  server.use(middlewares)
} else {
  const noCors = middlewares.filter(f => f.name != "corsMiddleware")
  server.use(noCors)
}

var fs = require('fs');
var path = require('path');
if (!fs.existsSync(path.join(__dirname, DB))) {
  console.log(chalk.bold("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
  console.log(chalk.red(`File ${DB} was not found, must be present in the ROOT of this project`));
  if (DB === "users.json") {
    console.log(chalk.gray("You can find a copy here: https://github.com/Cphdat3sem2018f/week6_javascript-2/blob/master/code/users.json"))
  }
  console.log(chalk.bold("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
  process.exit(0);
}

//Handle URL that starts with /api/
server.use((req,res,next)=>{
  console.log("URL: "+req.url);
  if(req.url.startsWith("/users")){
    console.log("404")
    return res.status(400).json({
      status: res.statusCode,
      msg: "No content found for this request"
    })
  }
  if(req.url.startsWith("/api/users")){
      req.url = req.url.substring(4,req.url.length);
  }
  next();
})

const router = jsonServer.router(DB);


const REQUESTS_BETWEEN_FAILS = isNaN(opts.fail) ? -1 : Number(opts.fail);
console.log("REQUESTS_BETWEEN_FAILS",REQUESTS_BETWEEN_FAILS)

//Simulate a server fault
server.use((req, res, next) => {
  if (REQUESTS_BETWEEN_FAILS > -1) {
    const rand = Math.floor(Math.random() * REQUESTS_BETWEEN_FAILS);
    if (rand === 0) {
      //Simulate a server fault
      return res.status(500).json({
        status: 500,
        msg: "You are using a server, hardcoded to create temporary errors - Life Sucks ;-)"
      })
    }
  }
  next();
})


//Check incomming request before adding to the "database"
server.use((req, res, next) => {

  if ((req.method === "POST" || req.method === "PUT") && req.url.startsWith("/users")) {
    const body = req.body;
    if (!body || JSON.stringify(body) === "{}") {
      return res.json({ status: 400, msg: "No content included with this request" })
    }
    let msg = [];

    if (body.age < 3 || body.age > 99 || isNaN(body.age)) {
      msg.push("Age must be >= 3 and <= 99");
    }
    if (body.name.length < 3) {
      msg.push("Name must include at least 2 characters");
    }
    if (!(body.gender === "male" || body.gender === "female")) {
      msg.push("Gender must contain 'male' or 'female' ");
    }
    if (!validator.validate(body.email)) {
      msg.push("Not a valid email");
    }

    if (msg.length > 0) {
      return res.status(400).json({ status: 400, msg: msg.join(", ") })
    }
  }
  next();
})



server.use(router);




router.render = function (req, res) {
  if (req.method === "GET" || req.method === "PUT") {
    if (!req.body) {
      return res.status(400).json({ statusCode: 400, msg: "No data included for this request" })
    }
  }
  if (res.statusCode === 404) {
    res.status(res.statusCode).json({
      status: res.statusCode,
      msg: "No content found for this request"
    })
  } else {
    res.json(res.locals.data)
  }
}

server.listen(PORT, () => {
  console.log(chalk.cyan('  \\{^_^}/ hi!'))
  console.log('');
  console.log("Database file " + chalk.blue(DB) + " is loaded")
  console.log(`Modified JSON Server is running on port ${PORT}`)
  console.log(chalk("CORS: ") + cors);
  console.log();
  if (REQUESTS_BETWEEN_FAILS >= 0) {
    console.log(chalk.red("This mode will produce random http-500 errors"))
    console.log()
  }
  console.log(chalk.bold("Resources"))
  console.log(`http://localhost:${PORT}${ROUTE}`);
  console.log()
  console.log(chalk.bold("Home"));
  console.log(`http://localhost:${PORT}`);

})