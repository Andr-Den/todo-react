const Point = require('../models/points');

module.exports.getPoints = (req, res, next) => {
  Point.find({})
    .then((point) => res.send({ data: point }))
    .catch(next);
};

module.exports.createPoint = (req, res, next) => {
  const {
    title,
    description,
    date,
  } = req.body;

  Point.create({
    title,
    description,
    date,
  })
    .then((point) => res.send({ data: point }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new Error(error.message));
      } else {
        next(error);
      }
    });
};

module.exports.deletePoint = (req, res, next) => {
  Point.findById(req.params._id)
    .orFail(new Error('Запрашиваемая запись не найдена'))
    .then((point) => point.remove())
    .then(() => res.send({ message: 'Запись успешно удалена' }))
    .catch((error) => {
      next(error);
    });
};