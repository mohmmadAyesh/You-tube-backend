const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'please enter a name for the video'],

    },
    description: {
        type: 'string',
        required: [true, 'please enter a desc for the video'],
    }
}
);

module.exports = mongoose.model('Video', VideoSchema);
