import { ClienteService } from './service/cliente.service';
import { Cliente } from './model/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  clienteForm!: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: ["",
        [
          Validators.required,
          Validators.min(5)
        ]
      ],
      telefone: ["",
      [
        Validators.required,
        Validators.pattern("^\\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$")
      ]
    ]
    })
  }
  cadastroCliente() {
    this.clienteService.cadastroCliente(this.cliente).subscribe((res: Cliente) => {
      this.cliente = res;
      alert("Cadastro feito com sucesso!")
    }, err => {
      alert("Erro no cadastro, tente novamente.")
    })
    this.clienteForm.reset();

  }


}

