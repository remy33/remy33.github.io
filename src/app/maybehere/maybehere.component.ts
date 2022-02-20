import { Component, OnInit } from '@angular/core';
import { NothingService } from '../nothing.service';

@Component({
  selector: 'app-maybehere',
  templateUrl: './maybehere.component.html',
  styleUrls: ['./maybehere.component.scss'],
})
export class MaybehereComponent implements OnInit {
  public nothing: string;

  constructor(private nothingService: NothingService) {
    this.nothing = nothingService.getNothing();
  }
  ngOnInit(): void {}
}
