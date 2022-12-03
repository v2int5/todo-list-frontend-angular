import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../../service/event.service";
import {Subscription} from "rxjs";
import {TaskService} from "../../../service/task.service";
import {Task} from "../../../model/task";


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit, OnDestroy {


  eventId!: number;

  subscriptions: Subscription[] = [];
  tasks: Task[] = [];

  constructor(private eventService: EventService, private taskService: TaskService,
              private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get("eventId");
    if (routeId) {
      this.eventId = +routeId;
    }
  }


  ngOnDestroy(): void {
  }


  createTask() {
    this.router.navigateByUrl("/task/new/" + this.eventId)
  }


}
