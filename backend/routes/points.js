const router = require('express').Router();
const {
  getPoints, createPoint,
} = require('../controllers/points');

router.get('/', getPoints);
router.post('/', createPoint);

module.exports = router;
