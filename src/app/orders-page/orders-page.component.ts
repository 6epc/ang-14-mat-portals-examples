import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkPortal, ComponentPortal } from '@angular/cdk/portal';

import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { PortalBridgeService } from '../portal-bridge.service';

export interface Order {
  item: string;
  address: string;
  country: string;
}

const ORDERS_DATA: Order[] = [
  { item: 'iPhone 12', address: 'Rammstein Straße 4', country: 'Germany' },
  { item: 'MacBook Pro', address: 'Oida Gasse 5', country: 'Austria' },
];

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) portalContent!: CdkPortal;

  componentPortal!: ComponentPortal<ActionButtonsComponent>;

  displayedColumns: string[] = ['item', 'address', 'country'];
  dataSource = ORDERS_DATA;

  constructor(private portalBridge: PortalBridgeService) { }

  ngOnInit(): void {
    this.componentPortal = new ComponentPortal(ActionButtonsComponent);

    // use directive CdkPortal and var portalContent
    // this.portalBridge.setPortal(this.portalContent);

    // use component portal
    this.portalBridge.setPortal(this.componentPortal);

  }

  ngOnDestroy(): void {
    // this.portalContent.detach();

    this.componentPortal.detach();
  }

}
