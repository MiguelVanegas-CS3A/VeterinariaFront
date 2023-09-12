import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './Components/comida/comida.component';
import { MascotaComponent } from './Components/mascota/mascota.component';
import { PropietarioComponent } from './Components/propietario/propietario.component';

const routes: Routes = [
{path:"Comida", component:ComidaComponent},
{path:"Mascota", component:MascotaComponent},
{path:"Propietario", component:PropietarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
