(function () {
    let app = angular.module('app', ['ui.bootstrap']);
    app.directive('slider', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/slider/index.html',
            scope:{
                data: "=data"
            },
            controller: 'SliderController'
        }
    })
})();