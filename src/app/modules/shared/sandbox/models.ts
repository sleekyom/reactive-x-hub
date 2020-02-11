import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

export class JSONStateMatch implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    console.log('da fuck');
    let right = false;
    try {
      JSON.parse(control.value);
      right = true;
    } catch (err) {}
    return (
      !!right &&
      (control && control.invalid && (control.dirty || control.touched))
    );
  }
}
