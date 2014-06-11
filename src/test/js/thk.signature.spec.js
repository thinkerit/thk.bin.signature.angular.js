describe('thk.signature', function () {

    describe('thkSignature directive', function() {
        var directive, scope, waitFor;

        beforeEach(inject(function($rootScope, $interval) {
            scope = $rootScope.$new();
            waitFor = function (ms) {
                $interval.flush(ms);
            };
            directive = ThkSignatureDirectiveFactory($interval);
        }));

        it('restrict to attribute or element', function () {
            expect(directive.restrict).toEqual('AE');
        });

        it('use template', function() {
            expect(directive.template).toEqual(
                '<div style="position: relative;">' +
                    '<strong ng-show="toggle" class="thk-signature" style="position: absolute;right:0;"> ' +
                        'Development by <a href="http://thinkerit.be">thinkerIT</a> ' +
                    '</strong>' +
                    '<strong ng-hide="toggle" class="thk-signature" style="position: absolute;right:0;"> ' +
                        'Powered by <a href="http://binarta.com">Binarta</a> ' +
                    '</strong>' +
                '</div>'
            );
        });

        describe('link', function () {

            beforeEach(function () {
                directive.link(scope);
            });

            it('toggle flag is on scope', function () {
                expect(scope.toggle).toEqual(true);
            });

            it('after delay flag is inverted', function () {
                waitFor(5000);
                expect(scope.toggle).toEqual(false);
            });

            it('after twice delay', function () {
                waitFor(5000);
                waitFor(5000);
                expect(scope.toggle).toEqual(true);
            });
        });
    });
});