import { Component, NgModule, OnInit } from '@angular/core';
import { TodoItem } from './todoitem';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() { 
    this.model.items = this.getItemsFromLS();
  }

    displayAll: boolean = true;
    inputText: string ="";

    message = ""
    addItem(){
      //alert("tıklandı " + value);
      //this.message = value;
      if(this.inputText != ""){
        let data = {description: this.inputText ,action: false};
        this.model.items.push(data);

        let items = this.getItemsFromLS();
        items.push(data);
        localStorage.setItem("items", JSON.stringify(items))
      }

    }
    getItemsFromLS(){
      let items: TodoItem[] = [];
      let value = localStorage.getItem("items");

      if (value != null){
        items = JSON.parse(value);
      }
      return items;
    }
    onActionChanged(item: TodoItem){
      console.log(item);
      let items = this.getItemsFromLS();
      localStorage.clear();

      items.forEach(i => {
        if(i.description == item.description){
          i.action = item.action;
        }
      })
      localStorage.setItem("items", JSON.stringify(items))

    }
    model = new Model();
    
    getItems(){
     
      if(this.displayAll){
        return this.model.items;
      } 
        return this.model.items.filter(item => !item.action);
      
  
    }
    getName(){
      return this.model.name;
    }
    
    


}