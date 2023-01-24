import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type Portal = TemplatePortal | ComponentPortal<any> | null;

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {

  private activePortal = new Subject<Portal>();
  readonly portal$ = this.activePortal.asObservable();

  constructor() { }

  setPortal(portal: Portal) {
    this.activePortal.next(portal);
  }

  clearPortal() {
    this.activePortal.next(null);
  }
}
