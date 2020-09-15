import { Component } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { getLocaleId } from '@angular/common';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
 button = false;

  menuOpen(){
    if(this.button){
      this.button=false;
      
    }
    else{
      this.button=true;
      
    }
}

}



