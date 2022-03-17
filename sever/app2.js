const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const Blog = require('./models/blog');     // we no need this at that time
const { request, response } = require('express');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes = require('./routers/blogRoutes');

// express app 
const app = express();

// connect to mange database
const dbURI = 'mongodb+srv://sashen:sashen123@nodeapp.pwxl3.mongodb.net/nodeapp?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register for request
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


/*
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
*/

app.use(morgan('dev'));

// mangoose and mango sandbox router
/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});
*/

/*
app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/single-blog', (req,res) => {
    Blog.findById('62314110d0438446358abe42')
    .then((result) => {
         res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})
*/

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');

});

/*
app.use((req, res, next) => {
    console.log('In the next middleware');
    next();
});
*/

app.get('/about', (req,res) => {
    
    //res.send('<p>about page</p>');
    res.render('about', { title: 'About' });

});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});





// express-handlebars -------> npm install ejs
// more information ------> https://www.npmjs.com/package/express-handlebars

// Morgan install -------> npm install morgan
// more information -----> https://www.npmjs.com/package/morgan

// MongoDB install -------> npm install mongoose
// More information --------> https://www.npmjs.com/package/mongoose