import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 //private overlayRef: OverlayRef = null;

  public show(message = ''){

    // if(!this.overlayRef){
    //   this.overlayRef = this.overlay.create();
    // }
  }
  private loading: boolean = false; 
  public isLoading: boolean = true;

  constructor(private overlay: Overlay) { }

  setLoading(loading: boolean){
    this.loading = loading;
  }

  getLoading(): boolean{
    return this.loading;
  }
}
