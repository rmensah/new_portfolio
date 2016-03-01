var express = require('express');
var app = express();
var session = require('express-session');
var middleware = require('middleware')

var PORT = process.env.PORT || 8080;

app.use(middleware);
app.use(session({
	secret: 'snow storm',
	cookie: {

		maxAge:
	}

	saveUninitialized: true,
	resave: false

}));

app.use("/js", express.static("/public/js"));
app.use("/css", express.static("/public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/portfolio-page.html");
});

app.get("/rps-game", function(req, res) {
  res.sendFile(process.cwd() + "/views/rps-game.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});