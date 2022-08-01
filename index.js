const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();


// Init logger Middleware
app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members: members
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));


// // Sending files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// fetch(url,options{
//     method:'DELETE',
//     headers: {
//       'Content-Type':'application/json',
//     },
//     body: JSON.stringify(Your_additional_data_info)
// })