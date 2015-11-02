module.exports = {
	view: function *search(next) {
		yield this.render('search.ect', {
			title: 'Gazdileszek.com'
		});
		yield next;
	}
};