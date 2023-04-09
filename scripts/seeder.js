const seedData = require("../db/seeders/seedDB");
const videos = require("../db/data/videos");
const Video =require('../models/Video');

seedData(Video, videos);
