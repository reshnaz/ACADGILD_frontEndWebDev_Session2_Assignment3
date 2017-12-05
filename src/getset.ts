// The below function is called on click form html.
// It contains the required class with and get and set methods.
// User validation is done with a hypothetical scenario wherein, 
// if length of user name is > 10 it is valid, otherwise it is invalid.

function validate(usr:string) {
    class getset {
        private _name: string = null;
        private _validOrNot:boolean=false;

        // Get method
        get userName() : string {
            this._validOrNot=this.isUserValid(this._name); // This line calls validation function.
            if(this._validOrNot){
                document.getElementById("result").innerHTML=`The username ${this._name} is a valid user.`;
                return this._name;
            }
            else{
                document.getElementById("result").innerHTML=`The user is not valid.`;
            }
        }

        // Set method - sets the value passed on as input from user.
        set userName(uname : string) {
            this._name = uname;
        }

        // Validation function calculates length of user name.
        // If user name length>10, it is valid, else it is invalid. 
        isUserValid(uname:string){
            console.log(String(uname.length));
            if(uname.length<10){
                return true;
            }
            console.log(String(this._validOrNot));
        }
    }

    let test = new getset(); //Creating an object of class getset.
    test.userName = usr; //Setting value passed as input from user.
    test.userName; //Getting value that validates user.
}