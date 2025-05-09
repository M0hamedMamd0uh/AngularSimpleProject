import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(public myRef: ElementRef) {}
  @HostListener('mouseover') mouseOver() {
    this.myRef.nativeElement.style.boxShadow = `0px 0px 2px 2px #efefef`;
  }
  @HostListener('mouseout') mouseOut() {
    this.myRef.nativeElement.style.boxShadow = `none`;
  }
}
