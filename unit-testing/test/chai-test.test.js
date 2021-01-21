const chai=require('chai');
const expect=chai.expect

describe('chai test',()=>{
    it('should compare some values',()=>{
        expect(1).to.equal(1)
    });
    it('should test some other stuff fail',()=>{
        expect({name:'foo'}).to.equal({name:'foo'})
    })
    it('should test some other stuff success',()=>{
        expect({name:'foo'}).to.deep.equal({name:'foo'})
    })
})