angular.module('thk.signature', [])
    .directive('thkSignature', ['$interval', ThkSignatureDirectiveFactory]);

function ThkSignatureDirectiveFactory($interval) {
    return {
        restrict: 'AE',
        template:
            '<div style="position: relative;">' +
                '<strong ng-show="toggle" class="thk-signature" style="position: absolute;right:0;"> ' +
                    'Development by <a href="http://thinkerit.be">thinkerIT</a> ' +
                '</strong>' +
                '<strong ng-hide="toggle" class="thk-signature" style="position: absolute;right:0;"> ' +
                    'Powered by <a href="http://binarta.com">Binarta</a> ' +
                '</strong>' +
            '</div>',
        link: function (scope) {
            scope.toggle = true;
            $interval(function () {
                scope.toggle = !scope.toggle;
            }, 5000)
        }
    };
}