import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appContentEditable]'
})
export class ContentEditableDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }
}
