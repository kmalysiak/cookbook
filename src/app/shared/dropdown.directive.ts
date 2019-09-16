import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  private isDropDownListed: boolean;

  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    if (this.elementRef.nativeElement.contains(event.target)) {
      if (this.isDropDownListed) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      } else {
        this.renderer.addClass(this.elementRef.nativeElement, 'open');
      }
      this.isDropDownListed = !this.isDropDownListed;
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isDropDownListed = false;
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.isDropDownListed = false;
  }

  ngOnInit(): void {
  }
}
