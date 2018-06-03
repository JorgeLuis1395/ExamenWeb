import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {PipeEstudiantes} from "../pipes/pipes";
import {ESTUDIANTE_SCHEMA} from "../Estudiante/estudiante.schema";
import {MateriaClass, MateriaService} from "./materia.service";

@Controller()
export  class MateriaController {
    constructor(private materiaService: MateriaService) {

    }

    @Get('Materia')
    mostrarTodos() {
        return this.materiaService.arregloMateria
    }

    @UsePipes(new PipeEstudiantes(ESTUDIANTE_SCHEMA))
    @Post('Medicamento')
    crearPacientes(@Body() bodyParams, @Res() res, @Req() req) {
        const materiaNombre = bodyParams.materianombre;
        const codigo = bodyParams.codigo;
        const descripcion = bodyParams.descripcion;
        const activo = bodyParams.activo;
        const fechaCreacion = bodyParams.fechaCreacion;
        const numeroHorasPorSemana = bodyParams.numeroHorasporSemana;
        const estudianteId = bodyParams.estudianteId;

        const enviaParametros = (estudianteId && materiaNombre && codigo && descripcion && activo && fechaCreacion && numeroHorasPorSemana);
        if (enviaParametros) {
            const materia = new MateriaClass(bodyParams.materianombre, bodyParams.codigo,
                bodyParams.descripcion, bodyParams.activo, bodyParams.fechaCreacion, bodyParams.numeroHorasporSemana, bodyParams.estudianteId);
            return res.send(this.materiaService.crearMateria(materia));
        } else {
            return res
                .status(400)
                .send({
                    mensaje: 'No envia parametros',
                    status: 400
                })
        }


    }


    @Get('Materia/:id')
    obtenerUno(@Res() res, @Req() req, @Param() parametros) {
        const medicamento = this.materiaService.obtenerUno(parametros.id);
        return res.send(medicamento);
    }

    @Put('Materia/:id')
    editarUno(@Body() bodyParams, @Res() res, @Param() parametro) {
        const respuesta = this.materiaService.editarUno(parametro.id, bodyParams.materianombre, bodyParams.codigo,
            bodyParams.descripcion, bodyParams.activo, bodyParams.fechaCreacion, bodyParams.numeroHorasporSemana, bodyParams.estudianteId);
        return res.send(respuesta);
    }
}
