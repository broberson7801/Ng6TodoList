import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  todo$: Object;

  constructor(private route: ActivatedRoute, private data: TodoServiceService) {
    this.route.params.subscribe( params => this.todo$ = params.id );
   }

  ngOnInit() {
    this.data.getTodo(this.todo$).subscribe(
      data => this.todo$ = data
    );
  }

}
