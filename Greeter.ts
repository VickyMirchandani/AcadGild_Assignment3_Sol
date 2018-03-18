class Greeter
{
     GreetMessage:string
    constructor(Message:string)
    {

       this.GreetMessage = Message

    }

    greet()
    {
         console.log(`Greeting message returned ${this.GreetMessage}`);
    }


}

var greet = new Greeter("ACADGILD");   
greet.greet() 

