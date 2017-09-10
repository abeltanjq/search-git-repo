import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GitApiService } from '../shared/git-api.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo: any;

  constructor(private route: ActivatedRoute, private gas: GitApiService ) { }

  ngOnInit() {
    this.repo = this.gas.getRepoDetail(this.route.snapshot.params['id']);
  }

}
