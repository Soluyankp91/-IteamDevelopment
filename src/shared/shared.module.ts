import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'

const MaterialModules = [MatProgressSpinnerModule, MatListModule, MatButtonModule, MatCardModule, MatChipsModule]
@NgModule({
    imports: [...MaterialModules],
    exports: [...MaterialModules]
})
export class SharedModule {}