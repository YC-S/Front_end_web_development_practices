# class 17

## \$provide

`$provide.provider`

`$provide.factory`

`$provide.service`

## Custom Filter

1. module.filter(name, filterFactory)
2. \$filterProvider.register()

## Difference between ng-repeat and ng-for

1. ng-repeat has filter
2. ng-for just iterate the data

## Define a directive (Hard)

- priority
- terminal
- scope
- controller
- controllerAs
- require
- restrict
- template
- templateUrl
- replace
- transclude
- compile
- link

### custom directive -- priority

default is 0, only ng-repeat is 1000;

### custom directive

---

ECMA
: element names (E), attributes (A), class names (C), and comments (M).

controller
controllerAs
