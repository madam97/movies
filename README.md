# MoviesDB

Working website: https://madam-moviedb.herokuapp.com/

## For users

### Pages

| Path | Description | How to load the page? |
| ----- | ----- | ----- |
| /, /?list=popular | Home page that list popular movies | Click on the MovieDB website name in the header OR click on sliders icon in the header than click on the Hot stuff menu item |
| /?list=topRated | Home page that list highest-rated movies | Click on sliders icon in the header than click on the Only the best menu item |
| /favourite | Favourite movies list page | Click on the star icon in the header OR click on sliders icon in the header than click on the My faves menu item |
| /movies/:id | Movie detailed view page | Click on the image or the arrow in the movie's block on any page of movie list |
| * | 404 error page | Load any invalid url |

### Changing favourite movies

Adding a new favourite movie

1. Load a movie's detailed view
2. If only the outline of the heart icon is visible in the header, click on the icon to add the movie to your favourites

Removing a favourite movie

1. Move to the favourite movies page
2. Load a movie's detailed view
3. If the heart icon is filled in the header, click on the icon to remove the movie from your favourites

## For developers

### .env example

```shell
# Configs for MovieDB
VITE_MOVIEDB_API_BASE_URL     # API base url
VITE_MOVIEDB_API_KEY          # API key
VITE_MOVIEDB_IMG_BASE_PATH    # Base url of images path, SIZE will be replaced in the code; example: https://image.tmdb.org/t/p/SIZE

# Breakpoints used in Picture component
VITE_BREAKPOINT_TABLET        # Table breakpoint (640px)
VITE_BREAKPOINT_LAPTOP        # Laptop breakpoint (1024px)
VITE_BREAKPOINT_DESKTOP       # Desktop breakpoint (1280px)
```

### Used technologies

- Vite - project build tool (faster then webpack)
- Tailwind CSS - style
- TypeScript - javascript but with strict type binding
- ReactJS - script
- Redux - store managment
- Redux SAGA - async data fetching
- Axios - fetching API endpoints (faster then fetch)

### Ideas for future development

- Build backend API to save the favourite movies
- Add paging on popular and top rated movies list
- On movie detailed view remove top white shadow and develop a code that sets the header's font color to black/white depending on the color of the movie's backdrop image
- Finish profile page, also add user authentication
- Show more data of movie on both list and detailed view