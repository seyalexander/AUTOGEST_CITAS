import { marcaAutosModel } from "../marcas-autos/marca-autos.model";

export class modeloAutosModel {
  id_Modelo:  number = 0;
  modelo: string = '';
  estado: number = 0;
  idMarcaFK: marcaAutosModel = {} as marcaAutosModel;
}
