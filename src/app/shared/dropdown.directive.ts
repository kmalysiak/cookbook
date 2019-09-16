import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  private isDropDownListed: boolean;

  @HostListener('click') toggleDropdown() {
    if (this.isDropDownListed) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }

    this.isDropDownListed = !this.isDropDownListed;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.isDropDownListed = false;
  }

  ngOnInit(): void {
  }

}
