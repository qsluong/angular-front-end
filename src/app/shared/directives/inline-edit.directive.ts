import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInlineEdit]',
})
export class InlineEditDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', 'false');
  }

  @HostListener('click')
  onClick() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', 'true');
  }
}
