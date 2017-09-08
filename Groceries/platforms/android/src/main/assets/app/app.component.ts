import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <StackLayout>
    <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
    <TextField hint="Email Adress" [(ngModel)] ="email" keyboardType="email" autocrorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
    <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
    <Button [text]="isLoggingIn ? 'sign up' : 'Back to login'" (tap)="toogleDisplay()"></Button>
  </StackLayout>  
    `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  email = "youremail@example.com"
  isLoggingIn = true;

  submit() {
    alert("You're using: " + this.email);
  }

  toogleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }
 }