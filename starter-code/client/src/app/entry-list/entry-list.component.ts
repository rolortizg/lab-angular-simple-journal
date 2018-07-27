import { Component, OnInit } from '@angular/core';
import { RetrieveJournalsService } from '../retrieve-journals.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [RetrieveJournalsService]
})
export class EntryListComponent implements OnInit {

  constructor(private entriesService: RetrieveJournalsService) { }

  entries: any;

  ngOnInit() {
    this.entriesService.getAllJournals()
      .then(entries=>{
        this.entries = entries;
      });
  }

}