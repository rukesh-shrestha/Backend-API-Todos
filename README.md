## Backend-API-Todos

This is the simple backend api of todos. 

To run this project in your local device. 

Run the below command. 

- You can run only one of the below clone command of git. If you have configure the SSH in your device and github you can go with second option. If not you can go with first option.

  - Option 1
    ```
    git clone https://github.com/rukesh-shrestha/Backend-API-Todos.git
    ```
  - Option 2
    ```
    git clone git@github.com:rukesh-shrestha/Backend-API-Todos.git
    ```
After successfully cloning go to the folder.

```
cd Backend-API-Todos
```

Run the command

```
npm install
```

npm install command will install all the dependencies included in the package.json and package-lock.json file. 
<b>


After installing all the packages needed to run the project. we need to create the .env file in the root directory. 

Create the  .env file in the root directory. 

file name =  .env

Populate the .env file with :-

- PORT = 3000

- CONNECTION_STRING = <MONGO-DB-CLOUD-DATABASE-LINK>

- DOMAIN_NAME = <SERVER-DOMAIN>

</b>

Now you are ready to run the project

To run the project run:
```
npm run dev
```

### Do you want to contribute in this project?

If you like to contribute in this project, you can clone the project and add the functionality or you can create the frontend of this API.
API documentation can be found in **/api-docs** route.
