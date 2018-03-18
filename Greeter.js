var Greeter = /** @class */ (function () {
    function Greeter(Message) {
        this.GreetMessage = Message;
    }
    Greeter.prototype.greet = function () {
        console.log("Greeting message returned " + this.GreetMessage);
    };
    return Greeter;
}());
var greet = new Greeter("ACADGILD");
greet.greet();
