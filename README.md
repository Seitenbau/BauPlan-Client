[![Build Status](https://travis-ci.org/Seitenbau/BauPlan-Client.svg?branch=master)](https://travis-ci.org/Seitenbau/BauPlan-Client)
[![Build Status](https://travis-ci.org/Seitenbau/BauPlan-Client.svg?branch=dev)](https://travis-ci.org/Seitenbau/BauPlan-Client)
# Bauplan Client 

Bauplan is an app to show the floor layout of an organization. It helps to easily find where people are located in a building. It also allows to plan and organize where people should be seated and easily move them around and adjust the floor plan accordingly.

This is the client part of the app, you can see a demo of it [here](https://seitenbau.github.io/BauPlan-Client/).

## Getting Started

### Precaution: Experimental Project

This is an experimental apprenticeship project. The goal of the project is to try out new technologies and paradigms and to study and learn. It is by no means intended to be used in the real world as an productive app.

### Prerequisites

While you can see how the app works just from the frontend, for the app to be useful you also need to get a backend part up running and configure it accordingly.


### Installing

Locally all you have to do is to clone the repository and execute the following commands

```
yarn install
yarn start
```

### Adding floor plans
You can put your floor plans as images or svg to
```
 src/floorplans
```
Adjust the ```src/floorplans/plans.json``` accordingly.
### Configuration
You have to setup your floor plans and the rest of the app by looking at the configuration files in
```
 src/settings
```

## Built With

* [Create-React-App](https://github.com/facebookincubator/create-react-app)
* [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

* Many thanks to SEITENBAU for supporting this project and lettings us open source it
