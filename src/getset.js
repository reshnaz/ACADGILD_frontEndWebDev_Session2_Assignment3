// The below function is called on click form html.
// It contains the required class with and get and set methods.
// User validation is done with a hypothetical scenario wherein, 
// if length of user name is > 10 it is valid, otherwise it is invalid.
function validate(usr) {
    var getset = /** @class */ (function () {
        function getset() {
            this._name = null;
            this._validOrNot = false;
        }
        Object.defineProperty(getset.prototype, "userName", {
            // Get method
            get: function () {
                this._validOrNot = this.isUserValid(this._name); // This line calls validation function.
                if (this._validOrNot) {
                    document.getElementById("result").innerHTML = "The username " + this._name + " is a valid user.";
                    return this._name;
                }
                else {
                    document.getElementById("result").innerHTML = "The user is not valid.";
                }
            },
            // Set method - sets the value passed on as input from user.
            set: function (uname) {
                this._name = uname;
            },
            enumerable: true,
            configurable: true
        });
        // Validation function calculates length of user name.
        // If user name length>10, it is valid, else it is invalid. 
        getset.prototype.isUserValid = function (uname) {
            console.log(String(uname.length));
            if (uname.length < 10) {
                return true;
            }
            console.log(String(this._validOrNot));
        };
        return getset;
    }());
    var test = new getset(); //Creating an object of class getset.
    test.userName = usr; //Setting value passed as input from user.
    test.userName; //Getting value that validates user.
}
