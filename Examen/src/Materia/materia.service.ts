import { Injectable} from "@nestjs/common";
@Injectable()
export class MateriaService {

    constructor(materiaService: MateriaService) {

    }

    arregloMateria: MateriaClass[] = [];

    crearMateria(materia: MateriaClass): MateriaClass[] {
        this.arregloMateria.push(materia);
        return this.arregloMateria;
    }

    buscarEstudiante(id) {
        const usuarios = this.arregloMateria.map(materia => {
            const idBuscada = materia.pacienteId;
            return idBuscada;
        });
    }

    listarTodos() {
        return this.arregloMateria;
    }

    obtenerUno(id){

        return this.arregloMateria[id];
    }


    editarUno(id, codigo, nombreMateria, descripcion, activo, fechaCreacion, numeroHorasPorSemana, estudianteID){
        let arregloU=this.obtenerUno(id);
        arregloU.codigo=codigo;
        arregloU.nombre=nombreMateria;
        arregloU.descripcion=descripcion;
        arregloU.activo=activo;
        arregloU.fechaCreacion=fechaCreacion;
        arregloU.numeroHorasSemana=numeroHorasPorSemana;
        arregloU.pacienteId=estudianteID;
        return arregloU;
    };



}


export class MateriaClass{
    constructor(
        public codigo: number,
        public nombre: string,
        public descripcion: string,
        public activo: string,
        public fechaCreacion: string,
        public numeroHorasSemana: number,
        public pacienteId: number,
    ){};
}