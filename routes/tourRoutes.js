const express = require('express');
const router = express.Router();
const tourController = require('./../controller/tourController');
// console.log(tourController);
// router.param('id', tourController.checkID);
router
    .route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.getAllTours);

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;