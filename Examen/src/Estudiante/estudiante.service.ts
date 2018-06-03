import { Injectable} from "@nestjs/common";
@Injectable()
export class EstudianteService {

    arregloEstudiante: Estudiante[] = [];

    crearEstudiante(estudiante: Estudiante): Estudiante[] {
        this.arregloEstudiante.push(estudiante);
        return this.arregloEstudiante;
    }

    listarTodos() {
        return this.arregloEstudiante;
    }

    obtenerUno(id){

        return this.arregloEstudiante[id];
    }


    editarUno(id, nombre, apellido, fechaNacimiento, semestre, graduado){
        let arregloU=this.obtenerUno(id);
        arregloU.nombre=nombre,
            arregloU.apellido=apellido,
            arregloU.fechaNacimeinto=fechaNacimiento,
            arregloU.semestre=semestre,
            arregloU.graduado=graduado;
        return arregloU;
    };


}

export class Estudiante {


    constructor(
        public idEstudiante: number,
        public nombre:string,
        public apellido:string,
        public fechaNacimeinto: string,
        public semestre: number,
        public graduado: boolean

    ){



    }

}