import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataFake, Departments} from "../interfaces/Form";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  myForm: FormGroup = this.fb.group({
    model: [1, [Validators.required, Validators.min(1)]],
    fullName: ['', [Validators.required, Validators.minLength(6)]], // todo: regex de letras
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]], // todo: evalua :v
    department: [1, [Validators.required, Validators.min(1)]],
    city: [null, [Validators.required, Validators.min(1)]]
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
    //console.log(field)
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

    //console.log('entro')
  }
}
