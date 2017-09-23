angular.module('app')
    .controller('SliderController', ['$scope', function ($scope) {

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        let slides = $scope.slides = [];
        let currIndex = 0;

        $scope.closePopup = function (e) {
            let target = e.target;
            if (target.classList.contains("popup") || target.classList.contains("popup__close")){
                $scope.$parent.hideSlider();
            }
        };

        $scope.addSlide = function(src) {
            slides.push({
                image: src,
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            let indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (let i = 0; i < $scope.data.length; i ++){
            $scope.addSlide($scope.data[i].big);
        }

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }
    }]);