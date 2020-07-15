import { Component, OnInit } from '@angular/core';
import { IShipProblem } from '../../models/ship.model';
import { ShipProblems } from '../../data/problem.data';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

    public problems: IShipProblem[] = ShipProblems;

    constructor() { }

    public ngOnInit(): void {
    }

    public selectProblem(problem: IShipProblem) {
        console.log(problem)
    }
}
