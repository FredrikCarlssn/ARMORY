"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[6561],{91609:(t,i,n)=>{function s(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}n.d(i,{n:()=>s})},6561:(t,i,n)=>{n.d(i,{LocalWalletConnector:()=>d});var s=n(63700),e=n(46170),a=n(91609),h=n(20684),o=n(90824),r=(n(13631),new WeakMap),c=new WeakMap;class d extends h.C{constructor(t){super(),(0,e._)(this,"id","local_wallet"),(0,e._)(this,"name","Local Wallet"),(0,s._)(this,r,{writable:!0,value:void 0}),(0,s._)(this,c,{writable:!0,value:void 0}),(0,e._)(this,"shimDisconnectKey","localWallet.shimDisconnect"),(0,e._)(this,"onChainChanged",(t=>{const i=(0,a.n)(t),n=!this.options.chains.find((t=>t.chainId===i));this.emit("change",{chain:{id:i,unsupported:n}})})),this.options=t}async connect(t){t.chainId&&this.switchChain(t.chainId);const i=await this.getSigner();return await i.getAddress()}async disconnect(){(0,s.a)(this,r,void 0),(0,s.a)(this,c,void 0)}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return(0,s.b)(this,r)||(0,s.a)(this,r,(0,o.b2)(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),(0,s.b)(this,r)}async getSigner(){if(!(0,s.b)(this,c)){const t=await this.getProvider();(0,s.a)(this,c,l(this.options.ethersWallet,t))}return(0,s.b)(this,c)}async switchChain(t){const i=this.options.chains.find((i=>i.chainId===t));if(!i)throw new Error("Chain not found for chainId ".concat(t,", please add it to the chains property when creating this wallet"));(0,s.a)(this,r,(0,o.b2)(i,{clientId:this.options.clientId,secretKey:this.options.secretKey})),(0,s.a)(this,c,l(this.options.ethersWallet,(0,s.b)(this,r))),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function l(t,i){return i?t.connect(i):t}}}]);
//# sourceMappingURL=6561.da7405e8.chunk.js.map