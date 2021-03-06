- Sinatra: a Domain Specific Language - Follows certain, agreed upon conventions that make building applications speedy!

- REST: REpresentational State Transfer

Taking the state of our application and demonstrating it to users, and also allowing them to change it.
In other words, showing them data from our database as it stands, allowing them to manipulate it by *FOLLOWING CERTAIN CONVENTIONS*

HTTP verbs as they correspond to CRUD actions
GET - READ
PUT/PATCH - UPDATE
POST - CREATE
DELETE - DELETE

THE SEVEN RESTFUL ROUTES

For our *DIRECTORS* website

HTTP Verb      |   Route       |     Action*
    GET       '/movies'             index
    GET       '/movies/:id'         show
    GET       '/movies/new          new
    POST      '/movies'             create
    GET       '/movies/:id/edit'    edit
    PUT/PATCH '/movies/:id'         update
    DELETE    '/movies/:id'         delete

* Action is what we'll call our ERB pages for now... in Rails, their meanings will be more explicit

- MVC: Model - View - Controller

A pattern for building dynamic applications that reach into databases and form HTML pages in response to HTTP requests
