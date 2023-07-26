'use strict'

require('dotenv').config();
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const userController = require('./src/user/user.controller');
const facultyController = require('./src/faculty/faculty.controller');

mongoConfig.connect();
app.initServer();
userController.defaultAdmin();
userController.defaultUser();
facultyController.defaultFaculty();
facultyController.defaultFaculty2();
facultyController.defaultFaculty3();
facultyController.defaultFaculty4();