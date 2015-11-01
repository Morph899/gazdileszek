module.exports = {
	view: function *forget(next) {
		yield this.render('forgetpassword.ect', {
			title: 'Gazdileszek.com',
		    viewname:'forget'
		});
		yield next;
	}
};