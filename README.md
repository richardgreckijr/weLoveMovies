# weLoveMovies
Backend API designed for movie fans
## Live Demo
[Front End Repo](https://github.com/richardgreckijr/starter-movie-front-end)
<br/>
[Full-Stack Deploy](https://wizardly-hodgkin-52d380.netlify.app/)
## Stack:
- Node.js
- Express.js
- PostgrSQL
- Knex.js
## Responsilbities
Tasked with the following:
- Build an API following the RESTful design principals
- Installation and usage of common middleware packages
- Writing of database queries to complete CRUD routes in an express server
- Usage of error handling for any non-existing routes
- Writing of database migations using Knex.js migration tool
- Deployment to Heroku
## Routing
| GET      | PUT         | DELETE  |
| ------------- |-------------| -----|
| /movies                  | /reviews/:reviewId | /reviews/:reviewId|
| /movies?is_showing=true  |      |       |
| /movies/:movieId         |      |       |
| /movies/:movieId/theaters|      |       |
| /movies/:movied/reviews  |      |       |
| /theaters                |      |       |

