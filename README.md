# [campgrounds](https://cmpgrnds.herokuapp.com/)

"campgrounds" is a Node.js web application with RESTful routing built in an instructor led setting, but heavily modified by me.

## This App Is Live!

* [campgrounds](https://cmpgrnds.herokuapp.com/)

## Built With

Frontend
* [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Framework for building responsive sites.


Backend & Dependencies
* [Node](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - A web application framework for Node.js
* [Mongoose](https://expressjs.com/) - A MongoDB object modeling tool designed to work in an asynchronous environment.
* [EJS](https://ejs.co/) - Embedded JavaScript.
* [Passport](http://www.passportjs.org/) - Authentication middleware for Node.js
* [Passport-Local](https://www.npmjs.com/package/passport-local) - Local username and password authentication strategy for Passport.
* [Passport-Local-Mongoose](https://www.npmjs.com/package/passport-local-mongoose) - Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
* [Body Parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [Express-Session](https://www.npmjs.com/package/express-session) - Users are assigned a unique session, and this allows me to store the user state.
* [Method-Override](https://www.npmjs.com/package/method-override) - Lets us use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [Connect-Flash](https://www.npmjs.com/package/connect-flash) - Flash message middleware for Express.
* [Node-Geocoder](https://www.npmjs.com/package/node-geocoder) - Node library for geocoding and reverse geocoding.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Storing configuration in an environment separate from the committed code.
* [Cloudinary](https://www.npmjs.com/package/cloudinary) - A cloud service that offers a solution to a web application's entire image management pipeline (local image upload).
* [Multer](https://www.npmjs.com/package/multer) - A node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
* [Google Maps APIs](https://cloud.google.com/maps-platform/) - A web mapping service developed by Google, and successfully implemented in my deployed web app.


Database
* [MongoDB](https://www.mongodb.com/) - Cross-platform document-oriented database program (NoSQL).


Deployment
* [Heroku](https://www.heroku.com/) - A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - The global cloud database service for modern applications.

## Features Of The Web App

### Responsive Design
### Authentication:

User signup and login with username and password, as well as Admin login with admin username and password. Password is hashed securely on MongoDB database.

### Authorization:

A user cannot create new posts without being authenticated, and also a user cannot edit or delete existing posts and comments created by other users. There is an admin account that is the sole account to have unlimited CRUD permissions for every user post and comment on the app. This was a custom addition as well.

### Functionalities Of Posts & Comments:

Create, view, edit and delete posts and comments, upload campground photos from local storage, and display campground exact location on Google Maps. Also, flash messages responding to users’ interaction with the app.

### Custom Enhancements

Included Google APIs with developer account, used Google Fonts and Font Awesome resources instead of default font families, merged the comment show page into a single campground show page to be more user friendly, also included extensive UI customizations of the app. Furthermore, implemented creation and update timestamps for posts and comments. Dynamic pricing of campground posts was added. 


## Author Of The Original Concept

* [Github Link for Mr. Steele](https://github.com/Colt) - Bootcamp Instructor.


## Acknowledgments

* [Github Link for Mr. Schoonover](https://github.com/nax3t) - Additional Bootcamp Instructor.
