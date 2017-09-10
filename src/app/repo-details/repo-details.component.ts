import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GitApiService } from '../shared/git-api.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo: any;

  constructor(private router: Router, private route: ActivatedRoute, private gas: GitApiService ) { }

  ngOnInit() {
    const repo = this.gas.getRepoDetail(this.route.snapshot.params['id']);
    if (repo === undefined) {
       this.router.navigate(['/home']);
    } else {
      this.repo = repo;
    }
  }

}
