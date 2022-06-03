import { Component, OnInit } from '@angular/core';

import { isDefined } from '@my/components/shared';

@Component({
  selector: 'lib-component',
  template: `
    <p>
      isDefined defined: {{isDefined}}
    </p>
  `,
  styles: [
  ]
})
export class LibComponent implements OnInit {

  isDefined: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isDefined = typeof isDefined == 'function';
  }

}
