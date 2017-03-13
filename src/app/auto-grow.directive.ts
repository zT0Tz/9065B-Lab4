import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {

  constructor(private elref: ElementRef,private renderer: Renderer) { }
  
  onFocus(){
    this.renderer.setElementStyle(this.elref.nativeElement,'width','200px');
  }
  
  onBlur(){
    this.renderer.setElementStyle(this.elref.nativeElement,'width','120px');
  }

}
