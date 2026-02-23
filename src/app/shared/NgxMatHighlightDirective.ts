import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';
// var hljs = require('highlight.js/lib/common');

@Directive({
    selector: 'code[ngxMatHighlight]',
    standalone: false
})
export class NgxMatHighlightDirective implements AfterViewInit {
    constructor(private eltRef: ElementRef) {
    }
    ngAfterViewInit() {
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}
