import { NgModule } from '@angular/core';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatCardModule, MatButtonModule, MatTableModule } from '@angular/material';

@NgModule({

    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ],
    
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ]

})

export class MaterialModule {



}