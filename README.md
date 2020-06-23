A dynamic full-stack web application created using ReactJS,Django REST Framework and React-Bootstrap.

# Features and Working
## Backend- Django REST Framework
The backend of this application was created using a simple Django Rest framework. 

First, I created a simple model containing the team name, team id and the team members and populated the database with dummy data.

I then installed Django REST framework using

`pip install djangorestframework` 

### Configuration
I created an app called webapp which will be our main app.
In the settings I added 'rest_framework' and 'webapp'
### Serializers
A Django model is a Python class. To render a Python Class to JSON in browser, Serialization is necessary. After transforming an object we can save it to a file or send it through the work.

### Creating a simple frontend

In the `webapp/views.py` folder, I defined an index function which renders an HTML page(created using Bootstrap) and displays the team name of teams. This also serves as a simple frontend.
### Creating class based API views
I also created two classes, a generic API view to display details of all teams and create new objects in the database(standard GET and POST requests).
This is routed to https://localhost:8000/webapp/

The second class was to display individual team's data using dynamic routing(standard GET request).
For example:  clicking on a team with team id 20045 will send a get request and direct us to https://localhost:8000/webapp/ITS20045 and display that team's data.

I then filled the `webapp/urls.py` and to create dynamic links used `<str:my_id>` (my_id is the team_id.)

So this completes the backend of our project, which in a sense also has a simple frontend in the form of a HTML Page.


***
## Frontend - ReactJS + Bootstrap

React was used to create the frontend of this webapp.

The following code was used to create a new react project.
```
npx create-react-app react-app

cd react-app

npm start
```
This will start a development server on http://localhost:3000 
### React Bootstrap

The next step is to install and integrate React Bootstrap in which each component is built as a true React component

`npm install react-bootstrap bootstrap`

### Navigation Bar

I added a simple navigation bar using the `<Nav />` and `<NavBar />` components  which contains links to the home page and about page

### Home Page

The home page contains a welcome message created using `<Jumbotron />` component of React-Bootstrap. It also contains the list of ITSP teams. This was created using `<ListGroup />` component


### Team Page

The team page contains the details of an individual team. It starts with an image of the team, followed by the team which was created using `<Badge />` component.

It is then followed by the list of team members. This was created using the `<Card />` component.

In the end, there is a small description about the project. This was again created using the `<Jumbotron />` component (I absolutely adore Jumbotrons).


### React Routers

The next part was to set up react routers

`npm install react-router-dom`

React Routers are a collection of navigational components that compose declaratively with your application. This will help us set up routes between the different components of our webpage.


We basically need 3 routes.

1) Route to the home page
2) Route to the about page
3) A dynamic route to each individual's team page.

The first two are quite straightforward. 
For dynamic routing, the path needs to be specificied dynamically and this is done by adding a colon as follows:

`<Route path = "/:id" exact component = {ItemDetail} />`

This will send the id as an argument to the ItemDetail function and we get access to something called **match**. This can be the used to access the particular team's details.

This completes the React frontend of our project, the next step is integrating React with our Django REST API to create a full fledged web application.

***
## Integrating ReactJS with Django.

Here comes the interesting part.

 A short recap - At this time we should be having two servers running:
 
 1)  Django on http://localhost:8000
 2)  React on http://localhost:3000

 To display the list of teams on the home-page, the display compnent needs to send a fetch request using the fetch function to 
 http://localhost:8000/webapp/all which contains the list of all the teams. But we need to tell Django to accept requests coming from http://localhost:3000 (The react frontend).
 This is done by django-cors-headers which handles the server headers for Cross-Origin Resource Sharing(CORS).
In the Django project

 `pip install django-cors-headers`

 Remember to turn off Django server before installing the above package.  

### Configuration

I then followed the documentation and added the required code in the settings.py file.
The important part was to white-list the server which is making requests (http://localhost:3000).


### Home Page - Displaying the list of teams.

This is rendered by the display component. It is a class based component which simply makes an API fetch request to the link http://localhost:8000/web/all and stores the dats in an array called **list**
This array is then mapped to a `<ListGroup>` item using the map function with each item having a link to the individual team's page using React Routers' `<Link>` component and thus our home page is created


### Team page - Displaying each team's information


This is rendered by the item component. It is created using hooks and follows a similar mechanism as above. The notable differences include specifying a dynamic path in the fetch function:

`http://127.0.0.1:8000/webapp/${match.params.id}`

The argument match is discussed above.
The dollar ($) sign is used to specify a JavaScript object.


This completes my brief overview of the project.

Thank you.

***
***
# Instructions to Run

Download the zip folder and open the two folders.
Start the Django project by:

`python manage.py runserver`

 This should start a server on http://localhost:8000 .

Start the react app by 
cd'ing into the folder and 
`npm install`

This will install all the necessary files

Then


`npm start` 

This will start a development server on 
http://localhost:3000 

Make sure bootstrap is installed and if not 

`npm install react-bootstrap bootstrap`


You may have to install the django-cors-headers in the Django terminal:

`pip install django-cors-headers`
