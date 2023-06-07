const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { login } = require('../controllers/login');


const router = Router();

router.get('/onsearch/:id', getCharById)
router.get('/detail/:detailId', getCharDetail)
router.use('/login', login)




module.exports = router;