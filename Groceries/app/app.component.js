"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "youremail@example.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.email);
    };
    AppComponent.prototype.toogleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <StackLayout>\n    <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField hint=\"Email Adress\" [(ngModel)] =\"email\" keyboardType=\"email\" autocrorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button [text]=\"isLoggingIn ? 'sign up' : 'Back to login'\" (tap)=\"toogleDisplay()\"></Button>\n  </StackLayout>  \n    ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFlMUMsSUFBYSxZQUFZO0lBYnpCO1FBY0UsVUFBSyxHQUFHLHVCQUF1QixDQUFBO1FBQy9CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBU3BCLENBQUM7SUFQQSw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFYRixJQVdFO0FBWFcsWUFBWTtJQWJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLHlqQkFRUDtRQUNILFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7R0FDVyxZQUFZLENBV3ZCO0FBWFcsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTdGFja0xheW91dD5cbiAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRyZXNzXCIgWyhuZ01vZGVsKV0gPVwiZW1haWxcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jcm9ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cbiAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnc2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbidcIiAodGFwKT1cInRvb2dsZURpc3BsYXkoKVwiPjwvQnV0dG9uPlxuICA8L1N0YWNrTGF5b3V0PiAgXG4gICAgYCxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGVtYWlsID0gXCJ5b3VyZW1haWxAZXhhbXBsZS5jb21cIlxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgc3VibWl0KCkge1xuICAgIGFsZXJ0KFwiWW91J3JlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICB9XG5cbiAgdG9vZ2xlRGlzcGxheSgpe1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxuIH0iXX0=