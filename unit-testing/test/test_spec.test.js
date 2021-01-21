const chai = require('chai');
const expect=chai.expect;

describe('test_spec',async ()=>{
    before('setup before code', await function(){
        console.log('setup before code');
    });

    after('setup after code',await function(){
        console.log('setup after code');

    });
    it('test',await function(){
        console.log('test');
        expect(true).to.equal(true);
    })
})