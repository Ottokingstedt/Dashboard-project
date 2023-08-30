import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { CurrencyService } from "../services/currency.service";
import { CurrencyPipe } from "@angular/common";
export interface SelectedCurrency {
    currencyCode: string;
  }  

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'] 
})

  export class CurrencyComponent{
    @Input() selectedCurrency: string = this.currencyService.currencyCode
    @Output() currencyChanged = new EventEmitter<string>();
    @Output() selectedCurrencyChanged = new EventEmitter<string>();
    @Output() selectedCurrencyResult = new EventEmitter<number>();

    @Input() currapi?: any = [];
    @Input()base = 'EUR'
    @Input() cont2 = 'EUR'
    @Input() amount: number = 1;


ngOnInit(): void{
    // this.currencyService.getcurrencydata('EUR').subscribe((amount : any) => {
    //     this.amount = JSON.parse(amount)

    //     const euroToSekRate = amount.SEK;

    //     const euroToNokRate = amount.NOR

    //     const eurAmount = 1;

    //     const sekAmount =eurAmount * euroToSekRate;

    //     const nokAmount = eurAmount * euroToNokRate

    //     this.selectedCurrencyResult.emit(sekAmount);

    //     console.log(this.selectedCurrencyResult)
    //     console.log(amount)
   //    })
}

    toChangeBase(b: string){
        this.cont2 = b;
    }

    onCurrencyChange(a : string){
        this.base = a;
        this.selectedCurrencyChanged.emit(a);
    }

    // convert(){
    //     this.currencyService.getcurrencydata(this.base).subscribe(data => {
    //         this.currapi = JSON.stringify(data)
          
    //         this.currapi = JSON.parse(this.currapi)
    //         console.log(this.currapi);

    //         if(this.base === 'EUR'){
    //             this.amount = this.currapi.amount.EUR;
    //         }
            
    //         else if(this.base === 'SEK'){
    //             this.amount = this.currapi.amount.SEK;
    //         }

    //         else if(this.base === 'NOK'){
    //             this.amount = this.currapi.amount.NOK;
    //         }
    //     })
    // }

    constructor(private currencyService: CurrencyService,
    ){
        this.selectedCurrency = currencyService.currencyCode;
    }

updateCurrencyValue(a: string) {
        this.base = a
        // Perform necessary operations with the event object
        this.currencyChanged.emit(a);
    }
  }