//rutas o url que tendra el servidor
const {Router} = require('express');
const router = Router();

const {getUsers, insertUsuariosAsin, getUsuarioPorIdAsin} = require('../controllers/index.controller')
//buscar usuario
router.get('/api/usuario/getall', getUsers);

//agregarusuario
router.post('/api/usuario/save', insertUsuariosAsin);

//buscar usuario por id
router.get('/api/usuario/:id', getUsuarioPorIdAsin);

module.exports = router;