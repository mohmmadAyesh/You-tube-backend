const router = require('express').Router();
const VideoRouter = require('./video.routes');

router.use('/', VideoRouter);

module.exports = router;

