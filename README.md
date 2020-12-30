# The Shoppies 

[The Shoppies](https://www.kyleburda.com/TheShoppies) is hosted on GitHub Pages.

## Movie awards for entrepreneurs

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.


## About

Once the application loads, type any movie title into the search bar. After you enter three characters (or more), API calls will be made to OMDB as you type, which will cause search results to dynamically re-render. This decision was made to reduce the number of unnecessary fetch calls to the third-party API.

The application limits a user to five nominations. Once five movies have been nominated, all future queries render with css-disabled buttons with icons (i.e., "🔒") to indicate a selection cannot be made. In order to add a new movie, a user must remove a nominated movie first.

User's nominations persist in localStorage. This provides a richer experience in lieu of managing a backend. For example, if a user refreshes the page or closes the browser after making five movie nominations, additional API calls will continue to render MovieCards as expected - with css-disabled buttons and all.

## Development Process

This application was first built with complete functional components and hooks. In its first iteration, traditional state management and prop drilling was used with the useState hook. This application was then refactored to incorporate useContext. Finally, I was inspired to learn Redux in light of the fact that your team relies upon this library for state management. I was also very curious to see firsthand how it compares with useContext; incorporating various technologies into the same codebase provided a great opportunity to learn the ins and outs of the framwork. You can count on me bringing  enthuasism and attention to detail if I am brought onto the team.

## Local Installation Instructions

- Clone down the repository to your computer and `cd` into the root directory.
- Obtain your [free API key](https://www.omdbapi.com/apikey.aspx ) from OMDB.
- Replace `123456` in `.env_example` with your newly obtained API key. 
- Rename `.env_example` to `.env`
- Run `npm install`
- Finally, run `npm start` to spin up the application on your [localhost:3000/](http://localhost:3000/) in development mode.

## The Challenge

My code challenge submission for Shopify's 2021 Summer Internship in consideration for a Frontend Development position.

### Simple to use interface that makes it easy to:

- Search OMDB and display the results (movies only).
- Add a movie from the search results to our nomination list.
- View the list of films already nominated
Remove a nominee from the nomination list.

### Technical requirements:

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.
