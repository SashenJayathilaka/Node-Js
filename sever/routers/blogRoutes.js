const express = require('express');
// const Blog = require('../models/blog');    we no need this at that time
const blogcontraller = require('../controllers/blogContraller');

const router = express.Router();

router.get('/', blogcontraller.blog_index);
router.post('/', blogcontraller.blog_creat_post);
router.get('/create',blogcontraller.blog_creat_get);
router.get('/:id', blogcontraller.blog_details);
router.delete('/:id', blogcontraller.blog_delete);

module.exports = router;