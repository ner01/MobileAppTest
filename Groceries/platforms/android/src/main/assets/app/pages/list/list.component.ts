import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import { Label } from "ui/label";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery> = [];
  grocery = ""
  isLoading = false;
  listLoaded = false;

  @ViewChild("groceryTextField") groceryTextField: ElementRef;
  @ViewChild("swipeLabel") swipeLabel: ElementRef;

  constructor(
    private groceryListService: GroceryListService,
    private zone: NgZone) {}
 // let textField = <TextField>this.groceryTextField.nativeElement;
  

  ngOnInit() {

   console.log("Starting initalizisation...")
    this.isLoading = true;
    this.groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }
  share() {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(", ")
      .trim();
    SocialShare.shareText(listString);
  }

  delete(grocery: Grocery) {
    this.groceryListService.delete(grocery.id)
    .subscribe(() => {
      this.zone.run(() => {
        let index = this.groceryList.indexOf(grocery);
        this.groceryList.splice(index, 1);
      });
    });
  }

  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput;

    this.groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.grocery = "";
        }
      )
  }
}