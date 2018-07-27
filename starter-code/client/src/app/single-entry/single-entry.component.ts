import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieveJournalsService } from '../retrieve-journals.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [RetrieveJournalsService]
})
export class SingleEntryComponent implements OnInit {

  constructor(
    private entriesService: RetrieveJournalsService,
    private activatedRoute: ActivatedRoute
  ) { }

  id: any;
  entries: any;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params=>{
        this.id = params.id;
        this.entriesService.getOneJournal(this.id)
          .subscribe(entry=>{
            this.entries = entry;
          });
      });
  }

}