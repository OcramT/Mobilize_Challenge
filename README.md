# <p align="center">Mobilize Challenge</p>

This is a completed Frontend Challenge for Mobilize. This project was built by [Marco Torre][1] with the following languages and frameworks:
 
* Node.js
* Next.js
* Javascript
* React
* CSS

## Setup

To setup in your local environment, please follow the instructions below.

1. Clone this repo.
2. Navigate to root folder and install packages with NPM:
```
npm install
```
3. Add the corresponding API key (which should have been sent to you) to `MAP_API_KEY` in the `.env` file.  
4. Run the following command to bundle and start up the server:
```
npm run dev
```
5. Navigate to `localhost:3000` in your browser to see the project.


## Design Decisions

I utilized NextJS for its light weight, quick setup, and easy configuration. NextJS's server-side rendering is also a convenient performance boost. 

I broke out various components into separate files so that I could keep each bit of functionality as compartmentalized as possible. I did the same with their corresponding CSS files.

I utilized React Hooks to create simpler, more contained components without the pitfalls of classes.

I also added the React Google Maps package. This allowed easily synchronization with the Google Maps API as it very quickly renders a map with minimal setup.

Using Mobilize's Public JSON API was intuitive and easy to use. The documentation was super clear! I used the `zipcode` parameter to easily filter all events by proximity to the user. I also utilized the `Next` and `Previous` fields to create paginated results by binding corresponding HTML and fetch calls to `onClick` functions. 

Unfortunately, I didn't get to achieve everything I would have liked as I was unable to get to any of the Bonus items given time constraints. I had a lot of fun working on this though!


[1]: https://www.marcotorre.io/#


