import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

// import { Country } from './../components/Model/country';
import { COMPANY } from '../Model/company'

// import { COUNTRIES } from '../components/Mock/countries';
import { CompanyList } from '../Mock/companylist';


import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../directives/sortable.directive';

interface SearchResult {
    // countries: COMPANY[];
    companyList: COMPANY[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
}

const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(companyList: COMPANY[], column: SortColumn, direction: string): COMPANY[] {
    if (direction === '' || column === '') {
        return companyList;
    } else {
        return [...companyList].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}

// function matches(country: COMPANY, term: string, pipe: PipeTransform) {
function matches(company: COMPANY, term: string, pipe: PipeTransform) {
    return company.company_name.toLowerCase().includes(term.toLowerCase())
        || company.ceo.toUpperCase().includes(term.toUpperCase())
        || company.board_of_director.toUpperCase().includes(term.toUpperCase())
        || company.sector_name.toUpperCase().includes(term.toUpperCase())
        || company.brife_write_up.toUpperCase().includes(term.toUpperCase())
        || company.company_status.toUpperCase().includes(term.toUpperCase())
        || company.listed_in_se.toLowerCase().includes(term.toLowerCase())
        || company.id.toString().includes(term.toString())
        || company.company_code.toString().includes(term.toString())
        || company.turnover.toString().includes(term.toString())
        || company.stock_code.toString().includes(term.toString())

}

@Injectable({ providedIn: 'root' })
// export class CountryService {
export class CompanyService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _companyList$ = new BehaviorSubject<COMPANY[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 4,
        searchTerm: '',
        sortColumn: '',
        sortDirection: ''
    };

    constructor(private pipe: DecimalPipe) {
        this._search$.pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap(() => this._search()),
            delay(200),
            tap(() => this._loading$.next(false))
        ).subscribe(result => {
            this._companyList$.next(result.companyList);
            this._total$.next(result.total);
        });

        this._search$.next();
    }
    get companyList$() { return this._companyList$.asObservable(); }
    // get countries$() { return this._companyList$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }

    set page(page: number) { this._set({ page }); }
    set pageSize(pageSize: number) { this._set({ pageSize }); }
    set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
    set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

        // 1. sort
        // let countries = sort(CompanyList, sortColumn, sortDirection);
        let companyList = sort(CompanyList, sortColumn, sortDirection);


        // 2. filter
        companyList = companyList.filter(company => matches(company, searchTerm, this.pipe));
        const total = companyList.length;

        // 3. paginate
        companyList = companyList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ companyList, total });
    }
}