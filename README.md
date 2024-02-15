# Login

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Backend Setup

The backend is developed using Flask, a lightweight Python web framework. It serves as an API for the Angular frontend and connects to the database to manage user authentication.

## Running the Flask Server

To start the Flask server, navigate to the `backend` directory and run:

```bash
flask run
```
The server will start on `http://localhost:5000` by default.

## Database Connection
This project integrates with a database to store user details securely. Currently, it's configured to use sqlite3, but you can replace it with any supported database.

## Configuration
Set up your database server (sqlite3).
Update the database connection details in `app.py`.

## Authentication
The Angular frontend communicates with the Flask backend to authenticate users. Upon successful authentication, users are redirected to a success page.

### Angular Component Integration
We've created login and success components using Angular CLI's component generation command. These components handle user authentication and success message display, respectively.

## Running the Website
To run the web application, you'll need to start both the Angular development server and the Flask server.

#### 1. Start the Angular Development Server
Navigate to the root directory of the project and run the following command:

```bash
ng serve
```
This will start the Angular development server. By default, it runs on http://localhost:4200/.

#### 2. Start the Flask Server
Open a new terminal window, navigate to the backend directory, and run the following command:

```bash
flask run
```
This will start the Flask server. By default, it runs on http://localhost:5000/.

#### 3. Access the Website
Once both servers are running, open your web browser and navigate to http://localhost:4200/. You should now see the login page of your web application.

Note
Ensure both servers are running simultaneously for the website to function correctly. Any changes made to the frontend or backend code will automatically reload the respective servers, providing a seamless development experience.

### Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or additional features you'd like to see.
