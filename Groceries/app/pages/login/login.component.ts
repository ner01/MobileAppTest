import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";
import * as dialogs from "ui/dialogs";


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit{
  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;

  constructor(private userService: UserService, private router: Router, private page: Page) {
    this.user = new User();
  }

  setTextFieldColors() {
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;

    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;

    let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor});
    setHintColor({ view: passwordTextField, color: hintColor});


  }

  submit() {
    if(!this.user.isValidEmail()) {
      alert("Enter a valid email adress.");
      return;
    }
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    this.userService.login(this.user)
        .subscribe(
            () => this.router.navigate(["/list"]),
            (error) => alert("Unfortunately we could not find your account.")
        );
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");

          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }

  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 200
    });
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage ="res://bg_login";
    dialogs.prompt({
      title: "Your title",
      message: "Your message",
      okButtonText: "Your button text",
      cancelButtonText: "Cancel text",
      neutralButtonText: "Neutral text",
      defaultText: "Default text",
      inputType: dialogs.inputType.password
  }).then(function (r) {
      console.log("Dialog result: " + r.result + ", text: " + r.text);
  });
  
  }
 }