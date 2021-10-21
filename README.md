# Fetch Todos List from external API with Next.js.


### Packages Used :
  - Axios for fetching data from API ( API used = (https://jsonplaceholder.typicode.com/users/{ID}/todos) where the ID is dynamic based on user input.)
  - Redux Toolkit for getting the data using an asyncThunk from the backend Api and  setting global state 
  - Styled Components for styling
## Getting Started
You can download this project and run it on your local computer using VsCode or the code editor of your choice.
Firs, you must run npm install to get all the npm packages, used to  build the project,  installed.

After, run the development server:

```bash
npm run dev
# or
yarn dev
```
On the http://localhost:3000/  apend a userid to the Url to get the Todos List for that certain user. 
You can add, remove todos form the list and also mark as done.
