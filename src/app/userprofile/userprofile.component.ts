import { Component, OnInit } from '@angular/core';
import { UserprofileService } from './../userprofile.service';

@Component({
  selector: 'll-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  userprofiles;
  constructor(private UserprofileService: UserprofileService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true
    }, 8000)
    this.postProfile();
  }
  postProfile() {
      this.UserprofileService.postProfile().subscribe(data => {
    this.userprofiles = data;
    this.userprofiles = this.userprofiles.results
    console.log(this.userprofiles);
      })
    }
  }

