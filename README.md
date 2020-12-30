# The Shoppies 

[The Shoppies](https://www.kyleburda.com/TheShoppies) is hosted on GitHub Pages.

## Movie awards for entrepreneurs

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.


## Local Installation Instructions

- Clone down the repository to your computer and `cd` into the root directory.
- Obtain your [free API key](https://www.omdbapi.com/apikey.aspx ) from OMDB.
- Replace `123456` in `.env_example` with your newly obtained API key. 
- Rename `.env_example` to `.env`
- Run `npm install`
- Finally, run `npm start` to spin up the application on your `localhost:3000/`.

## The Challenge

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
