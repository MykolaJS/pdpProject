const mongoose = require('mongoose');

const config = require('./config');

module.exports = () => {
	return new Promise((resolve, reject) => {
		mongoose.Promise = global.Promise
		mongoose.set("debug", true);

		mongoose.connection
			.on('error', error => resolve(error))
			.on('close', () => console.log('Data base connection closed'))
			.once('open', () => resolve(mongoose.connection[0]))
		mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true})	
	});
}
