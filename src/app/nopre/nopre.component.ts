import {Component, OnInit} from '@angular/core';
import { RPCSubprovider, Web3ProviderEngine } from '@0x/subproviders';
import { SignerSubprovider, MetamaskSubprovider } from '@0x/subproviders';

@Component({
  selector: 'app-nopre',
  template: `<h3>{{ message }}</h3>`
})
export class NoPreComponent implements OnInit {
  public message: string;
  public providerEngine: Web3ProviderEngine;
  public isMainnet: boolean = true;
  public url: string = "https://mainnet.infura.io/IwkqytPMrLoXQ84KWTqA";

  constructor() {

    this.providerEngine = new Web3ProviderEngine();
    this.providerEngine.addProvider(new RPCSubprovider(this.url));

    this.providerEngine.start();

  }

  ngOnInit() {
    this.message = 'no pre';
  }
}
