# Setup

## Development env

Setup node js dependencies.

### Integrations setup
`$ npm install`

Setup application config. You can run the command below for development env:

`$ cp ./src/config.json.example ./src/config.json`

### Setup Database

nstall postgresql. You can install it with our system package manager. OSX example with brew

    $ brew install postgresql

Create database in postgresql.

    $ psql -U postgres -h localhost -c 'CREATE DATABASE tmb_bot_development'

Setup node js deps.

    $ npm install

Setup database connection config. You can run the command below for development env:

    $ cp ./config/config.json.example ./config/config.json

#### Run migrations.

    $ ./node_modules/.bin/sequelize db:migrate


#### api.ai setup
To setup integration with api.ai you need to add their token to the `src/config.json` file here:

    "ApiAi": {
        "Token": ""
    }

#### TextMyBiz integration
To setup integration with TextMyBiz you need to put their token to the `src/config.json` file:

    "Tmb": {
        "token": ""
    }

#### Salesforce integration
To setup integration with Salesforce you need to put your Salesforce clientId, clientSecret, login, password to the `src/config.json` file:

    "Salesforce": {
        "clientId": "",
        "clientSecret": "",
        "login": "",
        "password": ""
    }

#### Running app
Run app.

`$ npm start`

#### Testing app

To test the API, run the the test script, located in test/controllers/XXX or you can start a server and run `npm test` command.

To test the NLP module, run the the test script, located in test/scenarios/XXX.
The test script makes a POST request to the endpoint URL.


# Deployment

We are deploying app using *shipit*

`$ shipit staging deploy`
