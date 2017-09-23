angular.module('app')
    .controller('AppController', ['$http', function ($http) {
        let self = this;
        self.data = undefined;
        self.sliderImgs = null;
        let popup = document.querySelector('.popup');

        self.capitalizeFirstLetter = function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        self.showSlider = function (imgs) {
            self.sliderImgs = imgs;
        };

        self.hideSlider = function () {
            self.sliderImgs = null;
        };

        self.keydownListener = function (e) {
            if( e.keyCode === 27 ) {
                self.hideSlider();
            }
        };


        $http({method: 'GET', url: 'https://rest.vsemayki.ru/catalog/items?access-token=f6ed359e9eab534b09d846ed56e6e196e7295076'})
            .then(function success(response) {
                self.data = response.data;
            }, function error(response) {
                    console.log(response.status);
            });
    }]);
