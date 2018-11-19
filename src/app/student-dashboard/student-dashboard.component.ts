import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any

  constructor() { }

  ngOnInit() {
  }

}
