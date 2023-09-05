import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html'
})
export class LazyimageComponent implements OnInit {
    @Input()
    public url: string | undefined;

    @Input()
    public alt: string = '';

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        if (!this.url) throw new Error('Url is required');
    }

    onLoad() {
        setTimeout(() => {
            this.hasLoaded = true;
        }, 1000);
    }
}
