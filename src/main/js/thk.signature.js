angular.module('thk.signature', [])
    .directive('thkSignature', [ThkSignatureDirectiveFactory]);

function ThkSignatureDirectiveFactory() {
    return {
        restrict: 'A',
        template:   '<div style="position: relative;">' +
            '<script>' +
            '$(function(){' +
                'setInterval(function(){' +
                    '$("#thk-development-by").fadeToggle(1500);' +
                    '$("#thk-powered-by").fadeToggle(1500);' +
                '},5000);' +
            '});' +
            '</script>' +
            '<strong id="thk-development-by" style="position: absolute;right:0;"> Development by <a href="http://thinkerit.be">thinkerIT</a> </strong>' +
            '<strong id="thk-powered-by" style="position: absolute;right:0;display: none;"> Powered by <a href="http://binarta.com">Binarta</a> </strong>' +
            '</div>'
    };
}