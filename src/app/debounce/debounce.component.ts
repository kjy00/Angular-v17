import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class DebounceComponent implements OnInit {
  value: string = '';
  searchSubject$ = new Subject<string>();
  ngOnInit() {
    this.searchSubject$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => console.log(value));
  }
  onInput(searchValue: string) {
    this.searchSubject$.next(searchValue);
  }
  getValue(event$: Event): string {
    return (event$.target as HTMLInputElement).value;
  }
}
