import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

expenseForm = new FormGroup({
  label: new FormControl('', [Validators.required]),
  amount: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
})

addExpense() {
  alert('add new expense')
  console.log(this.expenseForm.get('label')?.value);
  console.log(this.expenseForm.get('amount')?.value);
  console.log(this.expenseForm.get('category')?.value);
}

}
