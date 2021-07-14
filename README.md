# Contact-app

Live Demo :

http://unknownscript.online/

Code Coverage :

http://unknownscript.online/coverage

## Functional Use / Help
1. Initially contact list is empty. when you click on top-right cornered plus button one pop up box opens where we need to add contact details
2. Once you add contact ypu can deactivate it and update and delete it by exploring options icon.

## Installation Guide

1. Install Node.js
2. Install Angluar CLI
   Run npm install -g @angular/cli

## Development server

Run npm install (it will install all the required packages for app)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Code Architecture

  |--Coverage ( Code Coverage of app)

  |--Src +

    |-- app +
    
    |-- app.module (bootstraping module)  
    
    |-- contact + (module) 
    
        |-- add-contact (component to add contact)
        
        |-- contact-list ( component to show list of contacts)
        
        |-- Services + ( shared services )
        
            |-- data.ts ( service to share the data)
            
            |-- utilityService.ts ( service for utility functions eg. here to set and get localstorage data )
            
        |-- contact-model.ts (model for contact details)
        
    |-- shared + (module to use angular material components)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Generate Unit Test Coverage

Run `ng test --covergae ` to generate code covergae percentage. A covergae named folder will get generated after running this command which consists index.html that shows the covergae details.



