//gather packages
var app = require('express')();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const passport = require('passport');
const expressHandlebars = require('express-handlebars');
const port = process.env.PORT || 9000;

app.set('view engine', 'ejs');


//routes for different collections
const userRoute = require('./routes/users');
const login = require('./routes/admin');



//initialize middleware
app.use(bodyParser.json())
//passport middleware used for authentication
app.use(passport.initialize())
app.use(passport.session())

//Route to handle request
app.use("/users", userRoute);
app.use("/uploadfile",uploader);
app.use('/admin',login);

//create a connection to database
mongoose.connect(
    'mongodb://vietanh123:Haimuoithang1@rmit-shard-00-00-pe6pt.mongodb.net:27017,rmit-shard-00-01-pe6pt.mongodb.net:27017,rmit-shard-00-02-pe6pt.mongodb.net:27017/rmitdb?ssl=true&replicaSet=Rmit-shard-0&authSource=admin&retryWrites=true&w=majority'
    );



app.listen(port, ()=> console.log('Server started on port: ' + port));
