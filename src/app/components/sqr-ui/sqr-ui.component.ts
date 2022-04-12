import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidator } from './FormValidator';

@Component({
  selector: 'app-sqr-ui',
  templateUrl: './sqr-ui.component.html',
  styleUrls: ['./sqr-ui.component.css']
})
export class SqrUiComponent implements OnInit {

  public formulario: FormGroup;
  public preguntas: any;
  public preguntas2: any;
  public preguntas3 : any;
  public si_no: any;
  public resultadoSaludMental: number | null;
  public resultadoPsicosis: number | null;
  public transtornoConvulsivo: number | null;
  public problemasAlcohol: number | null;
  public panelOpenState = false;
  public step = 0;
  public formSMCorrecto: boolean;
  public formValidator: FormValidator;

  constructor() {
    this.formSMCorrecto = false;

    this.preguntas = require('src/app/utils/auxDB/preguntas1_20.json');
    this.preguntas2 = require('src/app/utils/auxDB/preguntas21_24.json');
    this.preguntas3 = require('src/app/utils/auxDB/preguntas26_30.json');
    this.si_no = require('src/app/utils/auxDB/si_no.json');
    this.formulario = new FormGroup({
      prg1: new FormControl(null, Validators.required),
      prg2: new FormControl(null, null),
      prg3: new FormControl(null, null),
      prg4: new FormControl(null, null),
      prg5: new FormControl(null, null),
      prg6: new FormControl(null, null),
      prg7: new FormControl(null, null),
      prg8: new FormControl(null, null),
      prg9: new FormControl(null, null),
      prg10: new FormControl(null, null),
      prg11: new FormControl(null, null),
      prg12: new FormControl(null, null),
      prg13: new FormControl(null, null),
      prg14: new FormControl(null, null),
      prg15: new FormControl(null, null),
      prg16: new FormControl(null, null),
      prg17: new FormControl(null, null),
      prg18: new FormControl(null, null),
      prg19: new FormControl(null, null),
      prg20: new FormControl(null, null),
      prg21: new FormControl(null, null),
      prg22: new FormControl(null, null),
      prg23: new FormControl(null, null),
      prg24: new FormControl(null, null),
      prg25: new FormControl(null, null),
      prg26: new FormControl(null, null),
      prg27: new FormControl(null, null),
      prg28: new FormControl(null, null),
      prg29: new FormControl(null, null),
      prg30: new FormControl(null, null),
    });
    this.formValidator = new FormValidator(this.formulario);
  }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  get f() { return this.formulario.controls; }


  gestionarResultadoSaludMental() {
    if(this.f['prg1'].value !== null && this.f['prg2'].value !== null && this.f['prg3'].value !== null && this.f['prg4'].value !== null && this.f['prg5'].value !== null && this.f['prg6'].value !== null && this.f['prg7'].value !== null && this.f['prg8'].value !== null && this.f['prg9'].value !== null && this.f['prg10'].value !== null && this.f['prg11'].value !== null && this.f['prg12'].value !== null && this.f['prg13'].value !== null && this.f['prg14'].value !== null && this.f['prg15'].value !== null && this.f['prg16'].value !== null && this.f['prg17'].value !== null && this.f['prg18'].value !== null && this.f['prg19'].value !== null && this.f['prg20'].value !== null) {
      this.resultadoSaludMental = +this.f['prg1'].value + +this.f['prg2'].value + +this.f['prg3'].value + +this.f['prg4'].value + +this.f['prg5'].value + +this.f['prg6'].value + +this.f['prg7'].value + +this.f['prg8'].value + +this.f['prg9'].value + +this.f['prg10'].value + +this.f['prg11'].value + +this.f['prg12'].value + +this.f['prg13'].value + +this.f['prg14'].value + +this.f['prg15'].value + +this.f['prg16'].value + +this.f['prg17'].value + +this.f['prg18'].value + +this.f['prg19'].value + +this.f['prg20'].value;
    }
  }

  gestionarResultadoPsicosis() {
    if (this.f['prg21'].value !== null && this.f['prg22'].value !== null && this.f['prg23'].value !== null && this.f['prg24'].value !== null) {
      this.resultadoPsicosis = +this.f['prg21'].value + +this.f['prg22'].value + +this.f['prg23'].value + +this.f['prg24'].value;
    }
  }

  gestionarResultadoTC() {
    if (this.f['prg25'].value !== null) {
      this.transtornoConvulsivo = +this.f['prg25'].value;
    }
  }

  gestionarProblemasAlcohol() {
    if (this.f['prg26'].value !== null && this.f['prg27'].value !== null && this.f['prg28'].value !== null && this.f['prg29'].value !== null && this.f['prg30'].value !== null) {
      this.problemasAlcohol = +this.f['prg26'].value + +this.f['prg27'].value + +this.f['prg28'].value + +this.f['prg29'].value + +this.f['prg30'].value;
    }
  }
 
  validarPrgSaludMental() {
    for (let i = 1; i <= 20; i++) {
      if (this.f['prg' + i].value === null) {
        this.formSMCorrecto = false;
        break;
      }
    }
    this.formSMCorrecto = true;
  }
}
