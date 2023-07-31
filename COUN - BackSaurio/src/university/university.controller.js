'use strict'

const University = require("../university/university.model")
const Faculty = require("../faculty/faculty.model")


exports.defaultUniversityItsmo = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_del_Itsmo',
            description: 'Formar profesionistas en los campos de arquitectura, urbanismo, arquitectura de paisaje y diseño industrial, comprometidos con la sociedad, capaces, informados, críticos, reflexivos y responsables.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_del_Itsmo' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Arquitectura', 'Facultad de Artes y Diseño'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Itsmo created');
    } catch (err) {
        return console.error(err);
    }
};


exports.defaultUniversityOccidente = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_de_Occidente_de_Guatemala',
            description: 'La Universidad de Occidente sería la continuadora de la orientación doctrinal de la extensión de la Universidad Francisco Marroquín cuando se retirara de Quetzaltenango. Fue fundada por un grupo de empresarios y profesionales quetzaltecos, quienes formaron el patronato para la creación de ésta e iniciaron los trámites correspondientes para su autorización.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_de_Occidente_de_Guatemala' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Occidente created');
    } catch (err) {
        return console.error(err);
    }
};
 
exports.defaultUniversitySanPablo = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_de_San_Pablo',
            description: 'La visión de la Universidad San Pablo de Guatemala, nació de la necesidad de contar con una institución que pudiera contribuir a la formación de la sociedad a través de una educación adecuada, por medio de la cual se puede impactar a los estudiantes no solo en el ámbito académico, sino también en los principios, valores éticos y morales para que, al ser profesionales, puedan ser agentes de transformación en la sociedad en donde actúen.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_de_San_Pablo' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university SanPablo created');
    } catch (err) {
        return console.error(err);
    }
};


exports.defaultUniversityDa_Vinci = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Da_Vinci',
            description: 'Con la visión de impactar el desarrollo de la sociedad guatemalteca, Universidad Da Vinci de Guatemala ofrece educación superior integral y de calidad para todos.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Da_Vinci' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Da_Vinci created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversityPanamericana = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Panamericana',
            description: 'En Universidad Panamericana contamos con un sistema de educación superior completo. Contribuimos al desarrollo del país, a través de opciones innovadoras de formación y profesionalización universitaria con altos estándares de calidad académica.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Panamericana' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Panamericana created');
    } catch (err) {
        return console.error(err);
    }
};
 

exports.defaultUniversityMesoAmericana = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_MesoAmericana',
            description: 'Impulsar con estilo y espíritu salesiano y de modo riguroso y crítico, el desarrollo de la persona humana y del patrimonio cultural de la sociedad guatemalteca, mediante la docencia, investigación y servicios ofrecidos a la comunidad nacional e internacional.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_MesoAmericana' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university MesoAmericana created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversityRafael_Landivar = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Rafael_Landivar',
            description: 'La Universidad Rafael Landívar es una institución de educación superior guatemalteca, independiente y no lucrativa, de inspiración cristiana, visión católica y de tradición jesuítica.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Rafael_Landivar' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Rafael_Landivar created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversityFrancisco_Marroquin = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Francisco_Marroquin',
            description: 'Nuestra misión es la enseñanza y difusión de los principios éticos, jurídicos y económicos de una sociedad de personas libres y responsables.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Francisco_Marroquin' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Francisco_Marroquin created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversityMariano_Galvez = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Mariano_Galvez',
            description: 'Formar, en niveles de excelencia académica y de acuerdo con las necesidades y demandas de la sociedad, profesionales, investigadores, técnicos y docentescientíficamente competentes, éticamente responsables y socialmente abiertos al cambio progresista, mediante el desarrollo integrado de la docencia, la investigación y el servicio a la comunidad, a fin que ésta tenga la oportunidad de participar de los beneficios de la ciencia, la tecnología y la cultura.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Mariano_Galvez' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Mariano_Galvez created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversityGalileo = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_Galileo',
            description: 'La Universidad Galileo fundamenta sus actividades en el individuo como ser humano; reconoce la necesidad de apoyar el desarrollo de los guatemaltecos en general y está plenamente consciente que la principal herramienta para el crecimiento de las personas es la educación.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_Galileo' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university Galileo created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversity_del_Valle = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_del_Valle_de_Guatemala',
            description: 'La Universidad del Valle de Guatemala es una institución privada, de carácter no lucrativo y es ajena a toda actividad política o religiosa. Labora con la autorización que le confieren la Constitución Política de la República de Guatemala y la Ley de Universidades Privadas.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_del_Valle_de_Guatemala' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university del Valle created');
    } catch (err) {
        return console.error(err);
    }
};

exports.defaultUniversity_de_San_Carlos = async () => {
    try {
        let defUniversity = {
            name: 'Universidad_de_San_Carlos',
            description: 'En su carácter de única universidad estatal le corresponde con exclusividad dirigir, organizar y desarrollar la educación superior del estado y la educación estatal, así como la difusión de la cultura en todas sus manifestaciones.',
            faculty: null
        };
        let existUniversity = await University.findOne({ name: 'Universidad_de_San_Carlos' });
        if (existUniversity) return console.log('Default university already created');

        let faculty = await Faculty.find({ name: { $in: ['Facultad de Contaduría y Administración'] } });
        if (faculty.length !== 1) {
            return console.log('Faculties not found');
        }
        defUniversity.faculty = faculty.map(fac => fac._id);
        let createdUniversity = new University(defUniversity);
        await createdUniversity.save();
        return console.log('Default university of San Carlos created');
    } catch (err) {
        return console.error(err);
    }
};




exports.saveUniversity = async (req, res) => {
    try {
        let data = req.body;
        let newUniversity = new University(data);
        await newUniversity.save();
        return res.status(201).send({ message: 'University saved sucessfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error creating this University' });
    }
}

const addVote = async (universityId, userId, rating) => {
    try {
      // Llamada a la función addOrUpdateRating
      const response = await axios.post("http://localhost:3200/university/addRating", {
        universityId,
        userId,
        stars: rating,
      });

      // manejar la respuesta si es necesario
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

exports.updateUniversity = async(req, res)=> {
    try{
        let universityId = req.params.id;
        let data = req.body;
        let updateUniversity = await University.findOneAndUpdate(
            {_id: universityId},
            data,
            {new: true}
        )
        if(!updateUniversity) return res.status(404).send({message: 'University not found and cannot be updated'});
        return res.send({message: 'University updated', updateUniversity});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error updating university'});
    }
}

exports.addOrUpdateRating = async (req, res) => {
    try {
        const { universityId, userId, stars } = req.body;

        // Validar si la universidad existe
        const university = await University.findById(universityId);
        if (!university) {
            return res.status(404).json({ error: 'Universidad no encontrada' });
        }

        // Buscar si el usuario ya ha votado en esta universidad
        const existingRating = university.ratings.find((rating) => rating.user.toString() === userId);

        if (existingRating) {
            // Si el usuario ya ha votado, actualizar la calificación existente
            existingRating.stars = stars;
        } else {
            // Si el usuario no ha votado, agregar el voto a la universidad
            university.ratings.push({ user: userId, stars });
        }

        // Guardar los cambios en la universidad
        await university.save();

        // Calcular el nuevo promedio de calificaciones
        const averageRating = university.calculateAverageRating();

        return res.status(200).json({
            university,
            averageRating
        });
    } catch (err) {
        return res.status(500).json({ error: 'Error al agregar o actualizar el voto' });
    }
};


const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) {
        return 0; // No hay votaciones, el promedio es 0
    }

    const sum = ratings.reduce((total, rating) => total + rating.stars, 0);
    const average = sum / ratings.length;
    return Math.round(average); // Redondear el promedio al número entero más cercano
};


exports.getUniversity = async (req, res) => {
    try {
        const universities = await University.find();

        universities.sort((a, b) => {
            const averageRatingA = calculateAverageRating(a.ratings);
            const averageRatingB = calculateAverageRating(b.ratings);
            return averageRatingB - averageRatingA;
        });

        const universitiesWithVotesAndAverage = universities.map((university) => {
            const averageRating = calculateAverageRating(university.ratings);
            const totalVotes = university.ratings.length;

            return {
                ...university.toObject(),
                averageRating: averageRating,
                totalVotes: totalVotes,
            };
        });

        return res.send(universitiesWithVotesAndAverage);
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error getting universities' });
    }
};

exports.getUniversity1 = async(req, res)=> {
    try{
        let university = await University.findOne({_id: req.params.id});
        const averageRating = calculateAverageRating(university.ratings);
        return res.send({university, averageRating})
       
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting universities'});
    }
}

exports.getUniversityByName = async (req, res) => {
    try {
        const universityName = req.params.name;
        const university = await University.findOne({name: universityName});

        if (!university) {
            return res.status(404).json({ error: 'Universidad no encontrada' });
        }

        const averageRating = calculateAverageRating(university.ratings);

        return res.status(200).json({
            university,
            averageRating
        });
    } catch (err) {
        return res.status(500).json({ error: 'Error al obtener la información de la universidad' });
    }
};

exports.deleteUniversity = async(req, res)=> {
    try{
        let idUniversity = req.params.id;
        let deleteUniversity = await University.findOneAndDelete({_id: idUniversity});
        if(!deleteUniversity) return res.status(404).send({message: 'University not found and cannot be deleted'});
        return res.send({message: 'University deleted successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error deleting university'});
    }
}
