import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatDividerModule,
  MatTabsModule,
  MatExpansionModule,
  MatStepperModule,
  MatChipsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatChipsModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatChipsModule,
  ]
})
export class MaterialModule {}
