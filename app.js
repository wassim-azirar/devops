var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var favicon = require("serve-favicon");
var helmet = require("helmet");
var indexRouter = require("./routes/index");
var morgan = require("morgan");
var path = require("path");
var rateLimit = require("express-rate-limit");
var responseTime = require("response-time");
var usersRouter = require("./routes/users");

var app = express();

var limiter = new rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
});

app.disable("x-powered-by");

app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(favicon(__dirname + "/favicon.ico"));
app.use(helmet());
app.use(limiter);
app.use(morgan("dev"));
app.use(responseTime());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
