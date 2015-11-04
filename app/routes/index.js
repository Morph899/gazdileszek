module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index'),
		signupCtrl 	= require('../controllers/signup'),
		loginCtrl 	= require('../controllers/login'),
		forgetCtrl 	= require('../controllers/forget'),
		searchCtrl 	= require('../controllers/search');
		profileCtrl = require('../controllers/profile');


	var router = new Router();

	router
		.get('/', indexCtrl.view)
		.get('/link/:id', function *(next) {
			console.log('/link/'+this.params.id);
			this.body = "Get value from params : "+ this.params.id;
		})
		.get('/render/view', indexCtrl.view)
		.get('/view/:id', indexCtrl.test)
		.get('/view/:id', indexCtrl.test)
		.get('/signup', signupCtrl.view)
		.get('/login', loginCtrl.view)
		.get('/forgetpassword', forgetCtrl.view)
		.get('/search', searchCtrl.view)
		.get('/profile', profileCtrl.view)

	app.use(router.middleware());
};