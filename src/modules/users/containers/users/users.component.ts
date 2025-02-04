import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './users.component.html',
    styleUrls: ['users.component.scss'],
})
export class UsersComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
