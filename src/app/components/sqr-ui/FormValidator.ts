import { FormGroup } from "@angular/forms";

export class FormValidator {

    private formulario: FormGroup;

    public prg1: boolean;
    public prg2: boolean;
    public prg3: boolean;
    public prg4: boolean;
    public prg5: boolean;
    public prg6: boolean;
    public prg7: boolean;
    public prg8: boolean;
    public prg9: boolean;
    public prg10: boolean;
    public prg11: boolean;
    public prg12: boolean;
    public prg13: boolean;
    public prg14: boolean;
    public prg15: boolean;
    public prg16: boolean;
    public prg17: boolean;
    public prg18: boolean;
    public prg19: boolean;
    public prg20: boolean;
    public prg21: boolean;
    public prg22: boolean;
    public prg23: boolean;
    public prg24: boolean;
    public prg25: boolean;
    public prg26: boolean;
    public prg27: boolean;
    public prg28: boolean;
    public prg29: boolean;
    public prg30: boolean;

    constructor(formulario: FormGroup) {
        this.formulario = formulario;

        this.prg1 = false;
        this.prg2 = false;
        this.prg3 = false;
        this.prg4 = false;
        this.prg5 = false;
        this.prg6 = false;
        this.prg7 = false;
        this.prg8 = false;
        this.prg9 = false;
        this.prg10 = false;
        this.prg11 = false;
        this.prg12 = false;
        this.prg13 = false;
        this.prg14 = false;
        this.prg15 = false;
        this.prg16 = false;
        this.prg17 = false;
        this.prg18 = false;
        this.prg19 = false;
        this.prg20 = false;
        this.prg21 = false;
        this.prg22 = false;
        this.prg23 = false;
        this.prg24 = false;
        this.prg25 = false;
        this.prg26 = false;
        this.prg27 = false;
        this.prg28 = false;
        this.prg29 = false;
        this.prg30 = false;
    }

    get f() { return this.formulario.controls; }

    public validarPreguntasPrg1_20(control: string) {        
        if (this.f[control].value !== null){
            eval('this.' + control + ' = true');
            return true;
        } else {
            eval('this.' + control + ' = false');
            return false;
       }
    }

/*     public validarPreguntasPrg21_24(control: string) {
        if (this.f[control].value !== null){
            eval('this.' + control + ' = true');
            return true;
        } else {
            eval('this.' + control + ' = false');
            return false;
       }
    } */
}