import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { PortalBridgeService } from '../portal-bridge.service';

export interface User {
  name: string;
  lastName: string;
  profession: string;
}

const USER_DATA: User[] = [
  { name: 'Gordon', lastName: 'Ramsey', profession: 'Cheif' },
  { name: 'Anina', lastName: 'Ella', profession: 'UI Designer' },
];

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  @ViewChild('templatePortalContent', { static: true }) templatePortalContent!: TemplateRef<unknown>;

  displayedColumns: string[] = ['name', 'lastName', 'profession'];
  dataSource = USER_DATA;

  constructor(
    private portalBridge: PortalBridgeService,
    private viewContainerRef: ViewContainerRef
  ) { }


  ngOnInit(): void {
    const portal = new TemplatePortal(this.templatePortalContent, this.viewContainerRef);
    this.portalBridge.setPortal(portal);
  }

  clickHandler() {
    console.log('Click users page - ADD Button');
  }

  ngOnDestroy(): void {
    this.portalBridge.clearPortal();
  }

}

