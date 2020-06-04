# gs-vue-test

The requirements of the test are outlined below, as well as a set of design mockups and steps to get started in the development environment. Please fork this repository and complete the test in a repository of your own.

This coding test will use the [Star Wars API](https://swapi.dev/).

## Requirements
- As a user, I can click between 
starships and people in the left sidebar 
and receive a full list of the names of all the items from that resource
- As a user, when I click on a specific item name, 
I see a list of information about that item in the main area
- the main area should have a title with the name of the item
- If the item is a starship, I see the following details:
    - model
    - manufacturer
    - starship class

- If the item is a person, I see:
    - eye color
    - birth year
- the app should include some minimal, functional styling 

## Mockups
Empty State
![Empty State](./public/empty-state.png)

Loading Sidebar State
![Loading Sidebar State](./public/loading-sidebar-state.png)

Loading Item State
![Loading Item State](./public/loading-detail-state.png)

Filled State
![Filled State](./public/filled-state.png)
### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```
