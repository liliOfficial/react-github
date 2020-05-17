## `Approach step by step:`
### `1. Analyse requirement`
1) Main product to deliver: A green field react application with required function
2) Function requirements: display content, sort by function and search function
3) Time limitation: about 2 hours.

### `2. General Solution`
As the main conflict is the time limitation and the quality of the products, I decided to build the main functions in 2 hours, add more detail after that and submit the product in one day.

Solutions to save time:
1) Use 'create-react-app' to create project
2) User 3rd party libraries including: bootstrap for responsive and style and font-awesome for icons
3) Reuse some common components I have written before for example: input and pagination

### `3. Specific Solution`
In two hours:
1) Draft the design of UI: Page header + Search + List of repositories (repository’s Id, name, watchers_count, programming_language and start).
2) Create Application, install 3rd party libraries, struction the project (components, services and mock data),copy in reusable common components and add mock data to be used.
3) Start from main.jsx, import input component, pagination component, use mock data to show the list and use bootstrap style to display information responsively.
4) Add functions: sort mock data by star, integrate pagination functions and search input functions.
5) The application meets the requirements in two hours' time.

After two hours:
1) Add a little bit more style to make the page more readable.
2) Move listItem to individual component.
3) Install axios, add http service. Move data import from components to services, identify api endpoint and prepare for http call.
4) Replace sortByStar with sortBy function to let the user sort posiitory by Id, Star or Watch.
5) Add Header component with page title and move sort by group buttons to this component
6) Edit README file
7) Create GitHub repository and upload the project

### `4. Further improvement can be done`
1. Improve UI
2. Integrate "Typescript" to identify interface for API data and props
3. Use "Router" to navigate between different pages
4. User tools such as "Toaster" for globe error control and display the error message
5. Move "sort by" and "pagination" from front end to the backend and request with query parameters such as "?sortby=id&&page=1"  if the list is very long.
6. Add "test" in app.test.js and make the functions 100% covered

## `How to run:`
#### `git clone the project to local`
#### `run: npm install`
#### `run: npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
