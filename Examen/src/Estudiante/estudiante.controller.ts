import {Controller, Get, Post, Body, UsePipes, Res, Req, Param, Put} from "@nestjs/common";
import {Estudiante, EstudianteService} from "./estudiante.service";
import {ESTUDIANTE_SCHEMA} from "./estudiante.schema";
import {PipeEstudiantes} from "../pipes/pipes";

@Controller('Usuario')
export class EstudianteController{
    constructor(private estudianteService : EstudianteService){

    }
    @Get('Estudiante')
    mostrarTodos(){
        return this.estudianteService.arregloEstudiante;
    }

    @UsePipes(new PipeEstudiantes(ESTUDIANTE_SCHEMA))
    @Post('Estudiante')
    crearEstudiante(@Body() bodyParams, @Res() res, @Req() req){
        const enviaId= bodyParams.idEstudiante;
        const enviaNombre= bodyParams.nombre;
        const enviaApellido= bodyParams.apellido;
        const enviaFechaNacimiento= bodyParams.fechaNacimiento;
        const semestreActual= bodyParams.semestreActual;
        const graduado= bodyParams.graduado;
        const enviaParametros =(enviaId && enviaNombre && enviaApellido &&
            enviaFechaNacimiento && semestreActual &&graduado);
        if(enviaParametros){
        const estudiante = new  Estudiante(bodyParams.idEstudiante, bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.semestreActual, bodyParams.graduado);
        return res.send(this.estudianteService.crearEstudiante(estudiante));
        }else{
            return res
                .status(400)
                .send({
                    mensaje: 'No envia parametros',
                    status: 400
                })
        }



    }


    @Get('mostrar/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const estudiante=this.estudianteService.obtenerUno(parametros.id);
        return res.send(estudiante);
    }

    @Put('modificar/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param () parametro){
        const respuesta=this.estudianteService.editarUno(parametro.id,bodyParams.nombre, bodyParams.apellido, bodyParams.fecha, bodyParams.hijos, bodyParams.seguro);
        return res.send(respuesta);
    }


}