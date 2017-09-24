angular.module('app')
    .controller('AppController', ['$http', '$scope', function ($http, $scope) {
        let self = this;
        self.data = undefined;
        $scope.sliderImgs = null;

        self.capitalizeFirstLetter = function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        self.showSlider = function (imgs) {
            $scope.sliderImgs = imgs;
        };

        $scope.hideSlider = function () {
            $scope.sliderImgs = null;
        };

        self.keydownListener = function (e) {
            if( e.keyCode === 27 ) {
                $scope.hideSlider();
            }
        };


        $http({method: 'GET', url: 'https://rest.vsemayki.ru/catalog/items?access-token=f6ed359e9eab534b09d846ed56e6e196e7295076'})
            .then(function success(response) {
                self.data = response.data;
            }, function error(response) {
                    console.log(response.status);
            });
    }]);
