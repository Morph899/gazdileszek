module.exports = {
	view: function *index(next) {
		yield this.render('index.ect', {
			title: 'Gazdileszek.com'
		});
		yield next;
	},
	
	test: function *(next, id) {
		this.body = "Get param from controller : "+this.params.id;
	}
};