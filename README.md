# Employee Management System
### [React](https://reactjs.org/) - [MaterialUI](https://material-ui.com) - [Firebase](https://firebase.google.com/)

## Description

A sample employee management system built to simplify the organization of administrative data respective to the end user. Application features authenticated routing based on user roles and permissions. Built with React.js, MaterialUI for the user interface, Firebase for user authentication, Firestore to persist data in a noSql database, and Netlify for hosting.

![Screenshot](/public/screenshot.png)
## Deployment

Deployed using [Netlify](www.netlify.com)

[Live URL](https://fire-react-employee-management.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba146e5e-ac58-4079-958b-6b9eb03cec80/deploy-status)](https://app.netlify.com/sites/fire-react-employee-management/deploys)

## Credits

#### Inspiration

Inspiration came from this repo ( Found it just searching Github for relevant concept. ) --> [fenil29/employee-management-system-frontend-react](https://github.com/fenil29/employee-management-system-frontend-react)


## To Dos
1. ~~Update all forms to reflect dataa required in tables~~
2. ~~Deploy a live site~~
3. ~~Set up cd/ci~~
4. update styling
5. ~~lock auth so only the 3 profiles can access (Admin, HR, Employee)~~

- Allow for new users to be created. Build welcome screen with mock welcome wizard/flow.

6. ~~Update landing page to SignInSide landing page~~
7. ~~Hide navbar on landing page, and show on rest of site~~
---> *SOLVED* reference: https://docs.divjoy.com/Hide-Navbar-and-Footer-on-some-pages-4b6697d1b70a410884f5b42a7b1ecb20
8. Update all forms to include enchanced UI by featuring MUI custom pickers etc..









-----------------------------

## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```
Install the Netlify CLI
```
npm install netlify-cli -g
```
Run the development server
```
netlify dev
```
When the above command completes you'll be able to view your website at `http://localhost:8888`

_Note: You can run just the front-end with `npm run start`, but `netlify dev` also handles running your API endpoints (located in the `/api` directory)._

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Material UI](https://material-ui.com)
- Authentication - [Firebase Auth](https://firebase.google.com/products/auth)
- Database - [Cloud Firestore](https://firebase.google.com/products/firestore)
- Payments - [Stripe](https://stripe.com)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Netlify](https://netlify.com)


## 📚 Guide



<details>
<summary><b>Routing</b></summary>
<p>
  This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.

```js
import { Link, useRouter } from './../util/router.js';

function MyComponent(){
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname)

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={(e) => router.push('/about')}>About</button>
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Authentication</b></summary>
<p>
  This project uses <a href="https://firebase.google.com">Firebase Auth</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.js">src/util/auth.js</a></code>) that wraps Firebase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Firebase functionality.

```js
import { useAuth } from './../util/auth.js';

function MyComponent(){
  // Get the auth object in any component
  const auth = useAuth();

  // Depending on auth state show signin or signout button
  // auth.user will either be an object, null when loading, or false if signed out
  return (
    <div>
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Signout</button>
      ) : (
        <button onClick={(e) => auth.signin('hello@divjoy.com', 'yolo')}>Signin</button>
      )}
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Database</b></summary>
<p>
  This project uses <a href="https://firebase.google.com/products/firestore">Cloud Firestore</a> and includes some data fetching hooks to get you started (located in <code><a href="src/util/db.js">src/util/db.js</a></code>). You'll want to edit that file and add any additional query hooks you need for your project.

```js
import { useAuth } from './../util/auth.js';
import { useItemsByOwner } from './../util/db.js';
import ItemsList from './ItemsList.js';

function ItemsPage(){
  const auth = useAuth();

  // Fetch items by owner
  // Returned status value will be "idle" if we're waiting on 
  // the uid value or "loading" if the query is executing.
  const uid = auth.user ? auth.user.uid : undefined;
  const { data: items, status } = useItemsByOwner(uid);

  // Once we have items data render ItemsList component
  return (
    <div>
      {(status === "idle" || status === "loading") ? (
        <span>One moment please</span>
      ) : (
        <ItemsList data={items}>
      )}
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Deployment</b></summary>
<p>
Install the Netlify CLI

```
npm install netlify-cli -g
```

Link codebase to a Netlify project (choose the "create and deploy manually" option)

```
netlify init
```

Add each variable from your `.env` file to your Netlify project (skip ones prepended with "REACT_APP\_"). You can also use the Netlify UI for this by going to your Site settings → Build & Deploy → Environment.

```
netlify env:set VARIABLE_NAME value
```

Build for production

```
npm run build
```

Then run this command to deploy to Netlify
```
netlify deploy
```

See the <a target="_blank" href="https://docs.netlify.com/cli/get-started/#manual-deploys">Netlify docs</a> for more details.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
  