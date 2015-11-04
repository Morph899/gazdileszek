module.exports = {
	view: function *profile(next) {
		yield this.render('profile.ect', {
			title: 'Gazdileszek.com',
		    viewname:'forget'
		});
		yield next;
	}
};