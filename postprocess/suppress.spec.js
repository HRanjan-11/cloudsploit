var expect = require('chai').expect;
var suppress = require('./suppress');

describe('suite 2', function () {
    it('should return undefined when no filter specified', function () {
        var filter = suppress.create([]);

        expect(filter('any')).to.be.undefined;
        console.log("suite_2 test 1");
    });

    it('should return the filter if matches', function () {
        var filter = suppress.create(['*n*']);

        expect(filter('any')).to.equal('*n*');
        console.log("suite_2 test 2");
    });

    it('should return the filter if matches whole word', function () {
        var filter = suppress.create(['*longer*']);

        expect(filter('longer')).to.equal('*longer*');
        console.log("suite_2 test 3");
    });

    it('should return the filter if multiple and second matches', function () {
        var filter = suppress.create(['*first*',
                                      'second']);

        expect(filter('second')).to.equal('second');
        console.log("suite_2 test 4");
    });

    describe('suite 2_1', function () {
        it('suite 2_1 test 1', function () {
            
            console.log("suite 2_1 test 1");
        });
        
    });
});
