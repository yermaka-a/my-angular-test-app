import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
  type OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  color: string = 'red';

  constructor(
    private readonly element: ElementRef,
    @Inject(Renderer2) private readonly renderer: Renderer2
  ) {
    console.log('directive appHover worked', this.element.nativeElement);
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }
}
