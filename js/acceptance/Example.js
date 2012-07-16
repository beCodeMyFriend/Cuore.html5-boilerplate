var Browser = require("zombie");
var assert = require("assert");
var should = require("should");

describe("In the Example application", function() {

    var firstColor, secondColor, thirdColor, fourthColor;
    var browser = new Browser({
        maxWait: 7500
    });

    before(function(done) {
        browser.visit("http://127.0.0.1:8125/index.html").then(done);
    });


    describe('when I click a button', function() {
        it("then the button changes class", function(done) {

            var element = browser.document.getElementById("button");
            buttonClass = element.className;
            browser.fire('click', element).then(function() {

                browser.document.getElementById("button").className.should.not.be.equal(buttonClass);
            }).then(done, done);

        });
    });

 

    

});