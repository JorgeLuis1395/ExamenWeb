import {Injectable, PipeTransform,ArgumentMetadata,} from "@nestjs/common";
import * as Joi from 'joi';
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import {NoEncontradoExpection} from "../exceptions/no-encontrado.exception";
@Injectable()
export class PipeEstudiantes implements PipeTransform {
    constructor(private readonly schema) {
    }

    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest, // objeto a validar
            this.schema// un esquema
        );

        const {
            errorNotFound
        } = Joi.validate(
            valorEnBrutoDelRequest, // objeto a validar
            this.schema // un esquema
        );
        if (error) {
            throw new PeticionInvalidaException(
                'Peticion invalida',
                error,
                2
            );
        }
        if(errorNotFound){
            throw  new NoEncontradoExpection(
                'No encontrado',
                errorNotFound,
                3
            )
        }

        //return valorEnBrutoDelRequest;
    }
}