# Angular-frontendi

This project is a web application developed for use by the Purply organization. It is built using Angular, TypeScript, Highcharts, Strapi (a headless CMS), and Keycloak for authorization. The code is designed to be modular and well-organized, with a focus on using Angular Material components wherever possible.

The application provides a range of features to help Purply manage their data and generate insights. These include data filtering, visualization of metrics using Highcharts, and support for multi-language content management via Strapi.

The codebase is designed to be easy to understand and extend, with clear separation of concerns and a modular architecture. This makes it easy for developers to add new features or modify existing functionality as needed.

To get started, follow the steps below.

## Installation

1. Clone the repository by running the following command:
```
git clone https://github.com/Bintess/angular-frontend.git
```

2. Install the required dependencies by running the following command:
```
npm install
```

## Setting up the CMS

1. Host the CMS using the following command in your terminal:
```
npx create-strapi-app@latest my-project --quickstart
```
Note: We are currently working on setting up a global hosting solution.

2. Once the CMS is up and running, locate the file name for the CMS data inte ``angular-frontend`` repository.
``
Angular-frontend -> src -> assets -> cms-data-exported
``
Choose the latest version and import it into your rootfile in your current CMS folder and running the following command:
```
npm run strapi import -- -f export_the-lates-version.tar.gz
```

3. If you make any changes to the CMS, be sure to export the data by running the following command in your CMS terminal:
```
npm run strapi export -- --no-encrypt
```
Then, rename the exported file to the given naming convention before committing the changes to the angular-frontend repository.

## Setting up Keycloak Authorization

1. To set up Keycloak authorization, follow the instructions in our documentation located here. 
```
cd backend/docker 
```
2. Once the keycloak file exist and create a .env file in docker folder. 
```
COMPOSE_PROJECT_NAME=keycloakindocker

POSTGRES_VERSION=14.1-alpine

KEYCLOAK_VERSION=16.1.0

KEYCLOAK_USER=keycloak
KEYCLOAK_PASSWORD=keycloak

KEYCLOAK_DATABASE_NAME=keycloakdb
KEYCLOAK_DATABASE_USER=keycloakdb
KEYCLOAK_DATABASE_PASSWORD=keycloakdb
KEYCLOAK_DATABASE_HOST=keycloakdb
KEYCLOAK_DATABASE_VENDOR=postgres
```
3.  Then, you set up the keycloak by running the command in your terminal.

```
docker-compose -f docker-compose-keycloak.yml up -d
```

4. <img src='readme-images/Screenshot 2023-05-02 at 10.52.17.png'>


We hope this helps! Let us know if you have any further questions.

