module.exports = {
	view: function *signup(next) {
		yield this.render('signup.ect', {
			title: 'Gazdileszek.com',
		    viewname:'signup'
		});
		yield next;
	}
};