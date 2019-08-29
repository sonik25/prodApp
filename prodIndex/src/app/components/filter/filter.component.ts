import { Component, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as opt from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
    let search = this.el.nativeElement.querySelector('#search');
    let observe = fromEvent(search,'keyup')
                      .pipe(opt.map((key:any) => key.target.value)
                      
                      );

    observe.subscribe(searchData=>{
      console.log(searchData);
    })
  }

}
