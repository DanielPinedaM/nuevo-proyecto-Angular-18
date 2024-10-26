import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class CustomPaginatorIntl implements MatPaginatorIntl {
    changes: Subject<void> = new Subject<void>();

    // For internationalization, the `$localize` function from
    // the `@angular/localize` package can be used.
    firstPageLabel: string = `Primer página`;
    itemsPerPageLabel: string = `Elementos por página`;
    lastPageLabel: string = `Última página`;

    // You can set labels to an arbitrary string too, or dynamically compute
    // it through other third-party internationalization libraries.
    nextPageLabel: string = 'Siguiente';
    previousPageLabel: string = 'Anterior';

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0) return `Página 1 de 1`;

        const amountPages = Math.ceil(length / pageSize);

        const paginationText: string = `Total de Elementos: ${length} - Página ${page + 1} de ${amountPages}`
        return paginationText;
    }
}