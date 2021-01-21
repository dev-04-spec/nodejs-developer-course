const assert = require('chai').assert;
const employee={
    name:'Manoj'
}
describe('assert types', async function () {

    it('is true', function () {
        assert.isTrue(true, "true");

    })
    it('is equal', function () {
        assert.equal(isNaN(1), false)
    })
    it('is not empty', function () {
        assert.isNotEmpty({
            "foo": "bar"
        });
    })
    it('is array', function () {
        assert.isArray(['manoj']);
    })
    it('is this equal', function () {
        assert.equal(true,true);
    })
    it('is String', function () {
        assert.isString("manoj");
    })
    it('is properties of Object', function () {
        assert.property(employee,'name');
    })
    it('verifying exception', function () {
        assert.throw(describe);
    })
    it('deep equal', function () {
        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    })
})