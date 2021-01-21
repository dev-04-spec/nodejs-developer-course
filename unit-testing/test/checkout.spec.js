var expect =require('chai').expect;
var Checkout=require('./checkout')
beforeEach(function() {
    checkout=new Checkout();
    checkout.addItemPrice('a',1);
    checkout.addItemPrice('b',2);
})

it('can calculate the current total',function(){
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1)
})
it('can add multiple items and get correct total', function(){
   
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3)

});

it('can add discount rules', function() {
    checkout.addDiscount('a',3,2);
})

it('Can apply discount rules to the total', function() {
    checkout.addDiscount('a',3,2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2)
})