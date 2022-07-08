const User = require('./user');
const Comments = require('./comment');
const Post = require('./post');

User.hasMany(Post, {as:"posts"});
Post.belongsTo(User, {as:"user"});




module.exports = { User, Comments, Post };