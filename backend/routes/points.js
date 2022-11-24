const router = require('express').Router();
const {
  getPoints, createPoint, deletePoint
} = require('../controllers/points');

router.get('/', getPoints);
router.post('/', createPoint);
router.delete('/:_id', deletePoint);

module.exports = router;
