import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
    ChangeDetectorRef,
    Input,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';


@Component({
    selector: 'sb-claims-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './claims-tables.component.html',
    styleUrls: ['claims-tables.component.scss'],
})
export class ClaimsTablesComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public claimsService: CountryService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.claimsService.pageSize = this.pageSize;
        this.countries$ = this.claimsService.countries$;
        this.total$ = this.claimsService.total$;
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.claimsService.sortColumn = column;
        this.claimsService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
}
