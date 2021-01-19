
const assert=require('assert');
describe('file to be tested',()=>{

    context('function to be tested',()=>{
        after(()=>{
            console.log('=====Execute after')
        });
        before(()=>{
            console.log('=====Execute before')
        });
        afterEach(()=>{
            console.log("=====Execute afterEach")
        })
        beforeEach(()=>{
            console.log("=====Execute beforeEach")
        });
       
        it('should do something',()=>{

            assert.equal(1,1)
        });
        it('should do something else',()=>{
            assert.deepStrictEqual({name:'Manoj'},{name:'Manoj'})
        });
        it('this is my test')
    });

    context('another function',()=>{
        it('should do something');
    });
});