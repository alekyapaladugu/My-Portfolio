import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const uiModules = [MatSidenavModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, uiModules],
  exports: uiModules,
})
export class AppUiModule {}
