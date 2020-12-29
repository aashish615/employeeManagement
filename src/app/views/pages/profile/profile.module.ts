import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile-section/profile-section.component';

const routes:Routes=[
	{
		path:'info', component:ProfileSectionComponent
	}
]

@NgModule({
  declarations: [ProfileSectionComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
