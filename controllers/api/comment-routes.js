const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('..//../utils/auth');

// Find All
router.get('/', (req, res) => {
    Comment.findAll({
        include: {
            model: User,
            attributes: ['id', 'username']
        }
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Find One
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['id', 'username']
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: "No comment found " });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create new Comment
router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Delete Comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ messgae: "No comment found " });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;