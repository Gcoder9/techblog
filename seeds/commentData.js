const { Comment } = require('../models')

const commentData = [
    {
        "content": "Woo! Im tired of coding",
        "date_created": "05/22/2022",
        "user_id": 3,
        "post_id": 1
    },
    {
        "content": "To the window to the wall.",
        "date_created": "05/21/2022",
        "user_id": 2,
        "post_id": 2
    },
    {
        "content": "I want to go fishing",
        "date_created": "04/23/2022",
        "user_id": 1,
        "post_id": 3
    },

]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;