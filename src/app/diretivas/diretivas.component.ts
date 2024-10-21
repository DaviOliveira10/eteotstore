import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {

ligado: boolean = false;
turma =[
  {nome: "Davi", id: 8 },
  {nome: "Cristiano Ronaldo", id: 7}]

opcao = ""
} 


        


