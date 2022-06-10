import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataFake, Departments} from "../interfaces/Form";
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private fs: FormService
  ) {
  }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    model: [1, [Validators.required, Validators.min(1)]],
    fullName: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    department: [1, [Validators.required, Validators.min(2)]],
    city: [1, [Validators.required, Validators.min(2)]],
    agree: [false, [Validators.required, Validators.requiredTrue]]
  })


  modelos: DataFake[] = [
    {
      id: '1',
      name: 'Korando'
    },
    {
      id: '2',
      name: 'Rexton G4'
    },
    {
      id: '3',
      name: 'Tivoli-Xlv'
    },
  ]

  departments: Departments[] = [
    {
      id: '1',
      name: 'Departamentos',
      cities:[
        {
          id: '1',
          name: 'Ciudades'
        }
      ]
    },
    {
      id: '2',
      name: 'Antioquia',
      cities: [
        {
          id: '2',
          name: 'Medellin'

        }
      ]
    },
    {
      id: '3',
      name: 'Bogotá DC',
      cities: [
        {
          id: '3',
          name: 'Bogotá'
        }
      ]
    },
    {
      id: '4',
      name: 'Valle del cauca',
      cities: [
        {
          id: '4',
          name: 'Cali'
        },
        {
          id: '5',
          name: 'Palmira'
        },
        {
          id: '6',
          name: 'Yumbo'
        },
      ]
    },
  ]

  cities: DataFake[] = []

  chargeCities() {

    const department = this.myForm.get('department')?.value
    const aux = this.departments.filter((current) => current.id == department)

    this.cities = aux[0]?.cities || []

  }

  fieldIsInvalid(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  enviarDatos() { 

    if (!this.myForm.valid) {
      const keys = Object.keys(this.myForm.controls)
      for (const key of keys) {
        this.myForm.controls[key].markAllAsTouched()
        this.fieldIsInvalid(key)
      }
      return
    }
    
    this.fs.cotizacion(this.myForm.value).subscribe(resp => {
      console.log(resp);       
    })

  }
}
