var expect=require('chai').expect;


function myAsyncFunction(callback) {
    setTimeout(function () {
        callback("manoj");
    },100)
}
function myPromiseFunction(){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("manoj")
        },100)

    })
}
it("test_async",function (done) {
    myAsyncFunction(function (str) {
        expect(str).to.equal("manoj");
        done()
    })
});
it("test_promise",function () {
    return myPromiseFunction().then(function(res){
        expect(res).to.equal("manoj")
        
    })
})
it("test_async_await",async function () {
    var result=await myPromiseFunction();
    expect(result).to.equal("manoj")
})