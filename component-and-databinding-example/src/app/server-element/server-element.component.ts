import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChange, 
  SimpleChanges, 
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraph') para: ElementRef;

  constructor() {
    //console.log('Constructed Called');
   }
  
   //called after a bound input property change
  ngOnChanges(changes: SimpleChanges){
    //console.log('ngOnChanges Called');
    //console.log(changes);
  }

  //called once the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit Called');
    //console.log('This is header in ngOnInit() :: '+this.header.nativeElement.textContent);
    //console.log('This is para in ngOnInit() :: '+this.para.nativeElement.textContent);
  }
  
  //called during every change detection run
  ngDoCheck(){
    //console.log('ngDoCheck Called');
  }
  
  //called after content (ng-content) has been projected into view
  ngAfterContentInit(){
    console.log('ngAfterContentInit Called');
    //console.log('This is header in ngAfterContentInit() :: '+this.header.nativeElement.textContent);
    console.log('This is para in ngAfterContentInit() :: '+this.para.nativeElement.textContent);
  }
  
  //called every time the projected content has been checked
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Called');
    //console.log('This is header in ngAfterContentInit() :: '+this.header.nativeElement.textContent);
    console.log('This is para in ngAfterContentChecked() :: '+this.para.nativeElement.textContent);
  }
  
  //called after the component’s view (and child views) has been initialized
  ngAfterViewInit(){
    console.log('ngAfterViewInit Called');
    console.log('This is header in ngAfterViewInit() :: '+this.header.nativeElement.textContent);
    console.log('This is para in ngAfterViewInit() :: '+this.para.nativeElement.textContent);
  }
  
  //called every time the view (and child views) has been checked
  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked Called');
  }
  
  //called one the component is about to be destroyed
  ngOnDestroy(){
    console.log('ngOnDestroy Called');
  }

}
