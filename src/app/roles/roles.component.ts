import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  @Input() role!: any;
  @Input() index!: number;
  @Input() validationsMessages!: any;
  @Output() editRole = new EventEmitter<any>();
  @Output() removeRole = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  handlerEdit(index: number, role: any): void {
    this.editRole.emit({ index, role });
  }

  handlerRemove(index: number): void {
    this.removeRole.emit(index);
  }
}
