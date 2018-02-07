const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI);

(async () => { 
	const activeEvents = await db.Event.find({ active: true});
	const pastEvents = await db.Event.find({ active: false });
	const activeEventIds = activeEvents.map(event => event._id);
	const pastEventIds = pastEvents.map(event => event._id);
	const companySeed = [
		{
			companyId: "google",
			name: "Google",
			industry: "Software",
			website: "https://www.google.com/about/our-company/",
			jobsOpen: [
					"Software Engineer"
			],
			primaryContact: "google@gmail.com",
			imgLogoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png",
			employees: [],
			activeEvents: activeEventIds,
			pastEvents: pastEventIds
		},
		{
			companyId: "github",
			name: "Github",
			industry: "Internet",
			website: "https://github.com/about",
			jobsOpen: [
					"Software Engineer"
			],
			primaryContact: "github@github.com",
			imgLogoURL: "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
			employees: [],
			activeEvents: activeEventIds,
			pastEvents: pastEventIds
		} 
	];

	try {
		await db.Company.remove({});
		await db.Company.collection.insertMany(companySeed);
		
		console.log("Company records inserted!");
    process.exit(0);
	} catch (err) {
		console.error(err);
    process.exit(1);
	}
})();

