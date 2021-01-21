const chai = require('chai');
const expect=chai.expect;
function myFunction(a,b){
    return a+b;
}
describe('outer',()=>{
    describe('inner', ()=>{
        afterEach(()=>{
            console.log('after Each');
        })
        beforeEach(()=>{
            console.log('before Each');
        })
        it('it returns true',()=>{
            expect(myFunction(5,6)).to.equal(11);
        })
      
    })
})