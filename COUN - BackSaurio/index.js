'use strict'

require('dotenv').config();
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const userController = require('./src/user/user.controller');
const facultyController = require('./src/faculty/faculty.controller');
const universityController = require('./src/university/university.controller')
/* const forgotPasswordController = require('./src/forgotPassword/forgotPassword.controller'); */

mongoConfig.connect();
app.initServer();
userController.defaultAdmin();
userController.defaultUser();

facultyController.defaultFaculty();
facultyController.defaultFaculty2();
facultyController.defaultFaculty3();
facultyController.defaultFaculty4();

universityController.defaultUniversityItsmo();
universityController.defaultUniversityGalileo();
universityController.defaultUniversitySanPablo();
universityController.defaultUniversityDa_Vinci();
universityController.defaultUniversityOccidente();
universityController.defaultUniversity_del_Valle();
universityController.defaultUniversityPanamericana();
universityController.defaultUniversityMesoAmericana();
universityController.defaultUniversityMariano_Galvez();
universityController.defaultUniversity_de_San_Carlos();
universityController.defaultUniversityRafael_Landivar();
universityController.defaultUniversityFrancisco_Marroquin();