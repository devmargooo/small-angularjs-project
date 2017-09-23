angular.module('app')
    .controller('AppController', ['$http', function ($http) {
        let self = this;
        self.data = undefined;

        $http({method: 'GET', url: 'https://rest.vsemayki.ru/catalog/items?access-token=f6ed359e9eab534b09d846ed56e6e196e7295076'})
            .then(function success(response) {
                self.data = response.data;
            }, function error(response) {
                    console.log(response.status);
            });
    }]);
