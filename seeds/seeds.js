const mongoose = require('mongoose');
const Chef = require('../models/chef');

mongoose
	.connect('mongodb+srv://chefapp:1234@module2project-ko7or.gcp.mongodb.net/HomeDeliveryChef?retryWrites=true&w=majority', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
		return Chef.insertMany(chefs);
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
	});

const chefs = [
	{
		email: 'josehernandez@gmail.com',
		hashedPassword: '1',
		image: '/public/images/chefs/JoseHernandez',
		name: 'Jose',
		surname: 'Hernandez',
		yearsOfExperience: 5
	},
	{
		email: 'jasonlopez@gmail.com',
		hashedPassword: '2',
		image: '/public/images/chefs/JasonLopez',
		name: 'Jason',
		surname: 'Lopes',
		yearsOfExperience: 20
	},
	{
		email: 'marcgarcia@gmail.com',
		hashedPassword: '3',
		image: '/public/images/chefs/MarcGarcia',
		name: 'Marc',
		surname: 'Garcia',
		yearsOfExperience: 15
	},
	{
		email: 'karolsuarez@gmail.com',
		hashedPassword: '4',
		image: '/public/images/chefs/KarolSuarez',
		name: 'Karol',
		surname: 'Suarez',
		yearsOfExperience: 17
	},
	{
		email: 'carlossanchez@gmail.com',
		hashedPassword: '5',
		image: '/public/images/chefs/CarlosSanchez',
		name: 'Carlos',
		surname: 'Sanchez',
		yearsOfExperience: 7
	},
	{
		email: 'sofielevesque@gmail.com',
		hashedPassword: '6',
		image: '/public/images/chefs/SofieLevesque',
		name: 'Sofie',
		surname: 'Levesque',
		yearsOfExperience: 20
	},
	{
		email: 'sandragamez@gmail.com',
		hashedPassword: '7',
		image: '/public/images/chefs/SandraGamez',
		name: 'Sandra',
		surname: 'Gamez',
		yearsOfExperience: 4,
	},
	{
		email: 'martagrau@gmail.com',
		hashedPassword: '8',
		image: '/public/images/chefs/MartaGrau',
		name: 'Marta',
		surname: 'Grau',
		yearsOfExperience: 8,
	}
];

Chef.create(chefs, err => {
	if (err) {
		throw err;
	}
	console.log(`Created ${chefs.length} chefs`);
	mongoose.connection.close();
});