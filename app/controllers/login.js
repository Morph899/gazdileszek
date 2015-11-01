module.exports = {
	view: function *signup(next) {
		yield this.render('login.ect', {
			title: 'Gazdileszek.com',
		    viewname:'login'
		});
		yield next;
	}
};