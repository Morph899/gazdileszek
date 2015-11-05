"use strict"

var koa = require("koa"),
	path = require("path"),
	views = require("koa-views"),
	config = require("config"),
	serve = require("koa-static"),
	mongoose = require("mongoose"),
	db = null,
	app = null;


app = module.exports = koa();

// initialize render helper
app.use(views(config.template.path, config.template.options));
app.use(serve('.'));
require('./app/routes')(app);


if (!module.parent) app.listen(3000);

function initDB() {
	mongoose.connect("mongodb://localhost/gazdileszek");
	db = mongoose.connection;

	db.on('error', function(){
		console.log("Error on connection to db");
	});
	db.once('open', function() {
		console.log("Connected to db");
	});
}

initDB();