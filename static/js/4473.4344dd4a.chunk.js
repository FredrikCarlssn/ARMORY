"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[4473],{72528:(t,r,e)=>{e.d(r,{S:()=>c});var a=e(64572),n=e(90824),o=e(67685),s=e(97471);class c{get chainId(){return this._chainId}constructor(t,r,e){(0,a.Z)(this,"transfer",(0,o.c)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,a.Z)(this,"setApprovalForAll",(0,o.c)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,a.Z)(this,"setApprovalForToken",(0,o.c)((async(t,r)=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,n.aP)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new s.h(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t,r){return t&&(t=await(0,n.aP)(t)),this.erc721.getOwned(t,r)}async getOwnedTokenIds(t){return t&&(t=await(0,n.aP)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},12335:(t,r,e)=>{e.d(r,{h:()=>n});var a=e(90824);async function n(t,r,n){const o=t.getProvider(),s=(await Promise.resolve().then(e.t.bind(e,49242,19))).default,c=new a.cu(o,r,s,{},t.storage),i=await t.getSignerAddress(),d=t.address;return(await c.read("allowance",[i,d])).gte(n)}},17928:(t,r,e)=>{e.d(r,{a:()=>h,g:()=>w,h:()=>p,i:()=>d,m:()=>l,v:()=>u});var a=e(34029),n=e(2257),o=e(44554),s=e(23425),c=e(90824),i=e(12083);async function d(t,r,n,o,c){try{const p=(await e.e(5025).then(e.t.bind(e,25025,19))).default,u=new a.CH(n,p,t),[l,h]=await Promise.all([u.supportsInterface(s.I),u.supportsInterface(s.a)]);if(l){var i;const s=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,p=new a.CH(n,s,t);if(await p.isApprovedForAll(c,r))return!0;let u;try{u=await p.getApproved(o)}catch(d){}return(null===(i=u)||void 0===i?void 0:i.toLowerCase())===r.toLowerCase()}if(h){const o=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,s=new a.CH(n,o,t);return await s.isApprovedForAll(c,r)}return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(p){return console.error("Failed to check if token is approved",p),!1}}async function p(t,r,a,n,o){const i=(await e.e(5025).then(e.t.bind(e,25025,19))).default,d=new c.cu(t.getSignerOrProvider(),a,i,t.options,t.storage),[p,u]=await Promise.all([d.read("supportsInterface",[s.I]),d.read("supportsInterface",[s.a])]);if(p){const s=(await Promise.resolve().then(e.t.bind(e,70332,19))).default,i=new c.cu(t.getSignerOrProvider(),a,s,t.options,t.storage);if(!await i.read("isApprovedForAll",[o,r])){(await i.read("getApproved",[n])).toLowerCase()===r.toLowerCase()||await i.sendTransaction("setApprovalForAll",[r,!0])}}else{if(!u)throw Error("Contract must implement ERC 1155 or ERC 721.");{const n=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,s=new c.cu(t.getSignerOrProvider(),a,n,t.options,t.storage);await s.read("isApprovedForAll",[o,r])||await s.sendTransaction("setApprovalForAll",[r,!0])}}}function u(t){if((0,o.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,o.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,o.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,o.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,o.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,o.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,o.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function l(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await(0,i.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function h(t,r,e){if(e=n.O$.from(e),t=n.O$.from(t),r=n.O$.from(r),t.eq(n.O$.from(0)))return!1;return r.sub(t).mul(c.dy).div(t).gte(e)}async function w(t,r,e){const a=[];for(;r-t>s.D;)a.push(e(t,t+s.D-1)),t+=s.D;return a.push(e(t,r-1)),await Promise.all(a)}},44473:(t,r,e)=>{e.r(r),e.d(r,{Multiwrap:()=>f});var a=e(64572),n=e(6222),o=e(12083),s=e(12335),c=e(14558),i=e(90824),d=e(17928),p=e(23425),u=e(67685),l=e(14026),h=e(10917),w=e(60788),g=e(72528);e(80518),e(66315),e(13631),e(78262);class f extends g.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cu(t,r,s,n,e),e,c),(0,a.Z)(this,"wrap",(0,u.c)((async(t,r,e)=>{const[a,n,o]=await Promise.all([(0,p.b)(r,this.storage),this.toTokenStructList(t),(0,i.aP)(e||await this.contractWrapper.getSignerAddress())]);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[n,a,o],parse:t=>{const r=this.contractWrapper.parseLogs("TokensWrapped",null===t||void 0===t?void 0:t.logs);if(0===r.length)throw new Error("TokensWrapped event not found");const e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:()=>this.get(e)}}})}))),(0,a.Z)(this,"unwrap",(0,u.c)((async(t,r)=>{const e=await(0,i.aP)(r||await this.contractWrapper.getSignerAddress());return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[t,e]})}))),this.abi=i.bn.parse(s||[]),this.metadata=new l.C(this.contractWrapper,i.dC,this.storage),this.app=new l.b(this.contractWrapper,this.metadata,this.storage),this.roles=new w.C(this.contractWrapper,f.contractRoles),this.encoder=new o.C(this.contractWrapper),this.estimator=new l.G(this.contractWrapper),this.events=new l.a(this.contractWrapper),this.royalties=new h.C(this.contractWrapper,this.metadata),this.owner=new h.a(this.contractWrapper)}async getWrappedContents(t){const r=await this.contractWrapper.read("getWrappedContents",[t]),e=[],a=[],s=[];for(const c of r)switch(c.tokenType){case 0:{const t=await(0,o.f)(this.contractWrapper.getProvider(),c.assetContract);e.push({contractAddress:c.assetContract,quantity:n.formatUnits(c.totalAmount,t.decimals)});break}case 1:a.push({contractAddress:c.assetContract,tokenId:c.tokenId});break;case 2:s.push({contractAddress:c.assetContract,tokenId:c.tokenId,quantity:c.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:a,erc1155Tokens:s}}async toTokenStructList(t){const r=[],e=this.contractWrapper.getProvider(),a=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(const n of t.erc20Tokens){const t=await(0,c.n)(e,n.quantity,n.contractAddress);if(!await(0,s.h)(this.contractWrapper,n.contractAddress,t))throw new Error('ERC20 token with contract address "'.concat(n.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(n.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(n.quantity,");\n\n"));r.push({assetContract:n.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(const n of t.erc721Tokens){if(!await(0,d.i)(this.contractWrapper.getProvider(),this.getAddress(),n.contractAddress,n.tokenId,a))throw new Error('ERC721 token "'.concat(n.tokenId,'" with contract address "').concat(n.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(n.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(n.tokenId,");\n\n"));r.push({assetContract:n.contractAddress,totalAmount:0,tokenId:n.tokenId,tokenType:1})}if(t.erc1155Tokens)for(const n of t.erc1155Tokens){if(!await(0,d.i)(this.contractWrapper.getProvider(),this.getAddress(),n.contractAddress,n.tokenId,a))throw new Error('ERC1155 token "'.concat(n.tokenId,'" with contract address "').concat(n.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(n.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));r.push({assetContract:n.contractAddress,totalAmount:n.quantity,tokenId:n.tokenId,tokenType:2})}return r}async prepare(t,r,e){return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.Z)(f,"contractRoles",i.dB)}}]);
//# sourceMappingURL=4473.4344dd4a.chunk.js.map