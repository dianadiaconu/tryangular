'use strict'

angular.module('tryangular', [
    //external
    'angularUtils.directives.dirPagination',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',

    //internal
    'blogDetail',
    'blogList',
    'confirmClick',
    'tryNav'
]);