// coordinateRouter.js

const { Router } = require('express');
const locationRouter = Router();

// GET /location/:id
locationRouter.get('/:id', (req, res, next) => {
  res.status(200).json({ x: 200, y: 200 });
});

module.exports = locationRouter;
