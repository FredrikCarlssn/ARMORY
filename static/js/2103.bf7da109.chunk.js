"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[2103],{91609:(e,t,i)=>{function n(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}i.d(t,{n:()=>n})},32103:(e,t,i)=>{i.d(t,{PaperWalletConnector:()=>u});var n=i(63700),r=i(46170),o=i(95171),a=i(97419),s=i(91609),l=i(82611),d=i(20684),c=(i(13631),new WeakMap);class u extends d.C{constructor(e){super(),(0,r._)(this,"id",l.w.paper),(0,r._)(this,"name","Paper Wallet"),(0,r._)(this,"ready",!0),(0,r._)(this,"user",null),(0,n._)(this,c,{writable:!0,value:void 0}),(0,r._)(this,"onAccountsChanged",(async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:a.getAddress(e[0])})})),(0,r._)(this,"onChainChanged",(e=>{const t=(0,s.n)(e),i=-1===this.options.chains.findIndex((e=>e.chainId===t));this.emit("change",{chain:{id:t,unsupported:i}})})),(0,r._)(this,"onDisconnect",(async()=>{this.emit("disconnect")})),this.options=e}getPaperSDK(){return this.paper||(this.paper=new Promise((async(e,t)=>{var n;const r=null===(n=this.options.advancedOptions)||void 0===n?void 0:n.recoveryShareManagement;try{const{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,95171)),n={AWS_MANAGED:o.pw.AWS_MANAGED,USER_MANAGED:o.pw.USER_MANAGED};e(new t({advancedOptions:{recoveryShareManagement:r?n[r]:void 0},clientId:this.options.clientId,chain:"Ethereum",styles:this.options.styles,onAuthSuccess:this.options.onAuthSuccess}))}catch(a){t(a)}}))),this.paper}async connect(e){const t=await this.getPaperSDK();if(!t)throw new Error("Paper SDK not initialized");const i=await t.getUser();switch(i.status){case o.J0.LOGGED_OUT:{let i;if(null!==e&&void 0!==e&&e.googleLogin){const n=e.googleLogin;i=await t.auth.loginWithGoogle("object"===typeof n?n:void 0)}else i=null!==e&&void 0!==e&&e.email&&null!==e&&void 0!==e&&e.otp?await t.auth.verifyPaperEmailLoginOtp({email:e.email,otp:e.otp,recoveryCode:e.recoveryCode}):null!==e&&void 0!==e&&e.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal();this.user=i.user;break}case o.J0.LOGGED_IN_WALLET_INITIALIZED:"object"===typeof(null===e||void 0===e?void 0:e.googleLogin)&&e.googleLogin.closeOpenedWindow&&e.googleLogin.openedWindow&&e.googleLogin.closeOpenedWindow(e.googleLogin.openedWindow),this.user=i}if(!this.user)throw new Error("Error connecting User");return null!==e&&void 0!==e&&e.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){const e=await this.paper;await(null===e||void 0===e?void 0:e.auth.logout()),(0,n.a)(this,c,void 0),this.user=null}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(e){return!1}}async getProvider(){const e=await this.getSigner();if(!e.provider)throw new Error("Provider not found");return e.provider}async getSigner(){var e;if((0,n.b)(this,c))return(0,n.b)(this,c);if(!this.user){const e=await this.getPaperSDK(),t=await e.getUser();if(t.status===o.J0.LOGGED_IN_WALLET_INITIALIZED)this.user=t}const t=await(null===(e=this.user)||void 0===e?void 0:e.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""}));if(!t)throw new Error("Signer not found");return(0,n.a)(this,c,t),t}async isAuthorized(){return!1}async switchChain(e){var t,i;const r=this.options.chains.find((t=>t.chainId===e));if(!r)throw new Error("Chain not configured");await(null===(t=this.user)||void 0===t?void 0:t.wallet.setChain({chain:"Ethereum"})),(0,n.a)(this,c,await(null===(i=this.user)||void 0===i?void 0:i.wallet.getEthersJsSigner({rpcEndpoint:r.rpc[0]||""}))),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw new Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},95171:(e,t,i)=>{i.d(t,{J0:()=>O,PaperEmbeddedWalletSdk:()=>B,pw:()=>S});var n,r,o,a=i(19707),s=i(5829),l=i(68408),d=i(30520),c=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,m=(e,t,i)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,I=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&m(e,i,t[i]);if(g)for(var i of g(t))v.call(t,i)&&m(e,i,t[i]);return e},w=(e,t)=>u(e,h(t)),y=(e,t,i)=>new Promise(((n,r)=>{var o=e=>{try{s(i.next(e))}catch(t){r(t)}},a=e=>{try{s(i.throw(e))}catch(t){r(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,a);s((i=i.apply(e,t)).next())})),f="/sdk/2022-08-12/embedded-wallet",L=("".concat(f,"/auth/headless-google-login-managed"),e=>"paperEwsWalletUserId-".concat(e)),E=e=>"".concat("walletToken","-").concat(e),A=(e,t)=>"".concat("a","-").concat(e,"-").concat(t),S=((r=S||{}).USER_MANAGED="USER_MANAGED",r.AWS_MANAGED="AWS_MANAGED",r),W=((n=W||{}).PAPER_EMAIL_OTP="PaperEmailOTP",n.GOOGLE="Google",n.TWITTER="Twitter",n.COGNITO="Cognito",n.AUTH0="Auth0",n.CUSTOM_JWT="CustomJWT",n),O=(e=>(e.LOGGED_OUT="Logged Out",e.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",e))(O||{}),D=((o=D||{}).LOGGED_OUT="Logged Out",o.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",o.LOGGED_IN_NEW_DEVICE="Logged In, New Device",o.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",o),M=new Map,_=class{constructor(e){let{clientId:t}=e;this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=t}getItem(e){return y(this,null,(function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=M.get(e))?t:null}))}setItem(e,t){return y(this,null,(function*(){if(this.isSupported)return window.localStorage.setItem(e,t);M.set(e,t)}))}removeItem(e){return y(this,null,(function*(){let t=yield this.getItem(e);return!(!this.isSupported||!t)&&(window.localStorage.removeItem(e),!0)}))}saveAuthCookie(e){return y(this,null,(function*(){yield this.setItem(E(this.clientId),e)}))}getAuthCookie(){return y(this,null,(function*(){return this.getItem(E(this.clientId))}))}removeAuthCookie(){return y(this,null,(function*(){return this.removeItem(E(this.clientId))}))}saveDeviceShare(e,t){return y(this,null,(function*(){yield this.saveWalletUserId(t),yield this.setItem(A(this.clientId,t),e)}))}getDeviceShare(){return y(this,null,(function*(){let e=yield this.getWalletUserId();return e?this.getItem(A(this.clientId,e)):null}))}removeDeviceShare(){return y(this,null,(function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(A(this.clientId,e))}))}getWalletUserId(){return y(this,null,(function*(){return this.getItem(L(this.clientId))}))}saveWalletUserId(e){return y(this,null,(function*(){yield this.setItem(L(this.clientId),e)}))}removeWalletUserId(){return y(this,null,(function*(){return this.removeItem(L(this.clientId))}))}};function C(e){return new Promise((t=>{setTimeout(t,1e3*e)}))}var N={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},P=new Map,T=class{constructor(e){let{link:t,iframeId:i,container:n=document.body,iframeStyles:r,onIframeInitialize:o}=e;this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let a=document.getElementById(i),s=new URL(t),l="1.2.5";if(s.searchParams.set("sdkVersion",l),!a||a.src!=s.href){if(!a){a=document.createElement("iframe");let e=I(I({},N),r);Object.assign(a.style,e),a.setAttribute("id",i),a.setAttribute("fetchpriority","high"),n.appendChild(a)}a.src=s.href,a.setAttribute("data-version",l),a.onload=this.onIframeLoadHandler(a,this.POST_LOAD_BUFFER_SECONDS,o)}this.iframe=a}onIframeLoadedInitVariables(){return y(this,null,(function*(){return{}}))}onIframeLoadHandler(e,t,i){return()=>y(this,null,(function*(){yield new Promise(((n,r)=>y(this,null,(function*(){var o;let s=new MessageChannel;s.port1.onmessage=t=>{let{data:o}=t;return s.port1.close(),o.success?(P.set(e.src,!0),i&&i(),n(!0)):r(new Error(o.error))},yield C(t);null==(o=null==e?void 0:e.contentWindow)||o.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},"".concat((0,a.OB)()).concat(f),[s.port2])}))))}))}call(e){return y(this,arguments,(function(e){var t=this;let{procedureName:i,params:n,showIframe:r=!1,injectRecoveryCode:o={isInjectRecoveryCode:!1}}=e;return function*(){for(;!P.get(t.iframe.src);)yield C(t.POLLING_INTERVAL_SECONDS);return r&&(t.iframe.style.display="block",yield C(.005)),new Promise(((e,s)=>{var l;if(o.isInjectRecoveryCode){let e=i=>y(t,null,(function*(){var t,n;if(i.origin!==(0,a.OB)()||"paper_getRecoveryCode"!==i.data.type||"string"!=typeof i.data.userWalletId)return;let r=yield null==(t=o.getRecoveryCode)?void 0:t.call(o,i.data.userWalletId);null==(n=this.iframe.contentWindow)||n.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:r},(0,a.OB)()),window.removeEventListener("message",e)}));window.addEventListener("message",e)}let d=new MessageChannel;d.port1.onmessage=i=>y(t,null,(function*(){let{data:t}=i;d.port1.close(),r&&(yield C(.1),this.iframe.style.display="none"),t.success?e(t.data):s(new Error(t.error))})),null==(l=t.iframe.contentWindow)||l.postMessage({eventType:i,data:n},"".concat((0,a.OB)()).concat(f),[d.port2])}))}()}))}destroy(){P.delete(this.iframe.src)}},G=class extends T{constructor(e){let{clientId:t,customizationOptions:i}=e;super({iframeId:b,link:U({clientId:t,path:f,queryParams:i}).href,container:document.body}),this.clientId=t}onIframeLoadedInitVariables(){return y(this,null,(function*(){let e=new _({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}}))}};function U(e){let{clientId:t,path:i,queryParams:n}=e;var r;let o=new URL(i,(0,a.OB)());if(n)for(let a of Object.keys(n))o.searchParams.set(a,(null==(r=n[a])?void 0:r.toString())||"");return o.searchParams.set("clientId",t),o}var b="paper-embedded-wallet-iframe",k=class{constructor(e){let{querier:t,preLogin:i,postLogin:n,clientId:r}=e;this.LoginQuerier=t,this.preLogin=i,this.postLogin=n,this.clientId=r}sendPaperEmailLoginOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i,recoveryShareManagement:n}=e;return function*(){yield t.preLogin();let{isNewUser:e,isNewDevice:r,recoveryShareManagement:o}=yield t.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:i,recoveryShareManagement:n}});return{isNewUser:e,isNewDevice:r,recoveryShareManagement:o}}()}))}},R=class extends k{constructor(){super(...arguments),this.closeWindow=e=>{let{isWindowOpenedByFn:t,win:i,closeOpenedWindow:n}=e;t?null==i||i.close():i&&n?n(i):i&&i.close()}}loginWithPaperModal(){return y(this,null,(function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)}))}getGoogleLoginUrl(){return y(this,null,(function*(){return yield this.LoginQuerier.call({procedureName:"getHeadlessGoogleLoginLink",params:void 0})}))}loginWithGoogle(e){return y(this,null,(function*(){yield this.preLogin();let t=null==e?void 0:e.openedWindow,i=!1;if(t||(t=window.open("","Login","width=350, height=500"),i=!0),!t)throw new Error("Something went wrong opening pop-up");yield this.preLogin();let{loginLink:n}=yield this.getGoogleLoginUrl();t.location.href=n;let r=yield new Promise(((n,r)=>{let o=window.setInterval((()=>y(this,null,(function*(){t&&t.closed&&(clearInterval(o),window.removeEventListener("message",s),r(new Error("User closed login window")))}))),1e3),s=l=>y(this,null,(function*(){if(l.origin===(0,a.OB)()){if("object"!=typeof l.data)return void r(new Error("Invalid event data"));switch(l.data.eventType){case"userLoginSuccess":window.removeEventListener("message",s),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),l.data.authResult&&n(l.data.authResult);break;case"userLoginFailed":window.removeEventListener("message",s),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),r(new Error(l.data.error));break;case"injectDeveloperClientId":null==t||t.postMessage({eventType:"injectDeveloperClientIdResult",developerClientId:this.clientId},(0,a.OB)())}}}));window.addEventListener("message",s)}));return this.postLogin({storedToken:w(I({},r.storedToken),{shouldStoreCookieString:!0}),walletDetails:w(I({},r.walletDetails),{isIframeStorageEnabled:!1})})}))}loginWithPaperEmailOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i}=e;return function*(){yield t.preLogin();let e=yield t.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:i,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}verifyPaperEmailLoginOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i,otp:n}=e;return function*(){let e=yield t.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:i,otp:n,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}},j=class extends k{loginWithPaperModal(e){return y(this,null,(function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)}))}loginWithGoogle(e){return y(this,null,(function*(){throw new Error("loginWithGoogle is not yet supported in the RecoveryShareManagement.USER_MANAGED flow. Please use RecoveryShareManagement.AWS_MANAGED instead.")}))}loginWithPaperEmailOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i,recoveryCode:n}=e;return function*(){yield t.preLogin();let e=yield t.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:i,recoveryCode:n},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}verifyPaperEmailLoginOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i,otp:n,recoveryCode:r}=e;return function*(){let e=yield t.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:i,otp:n,recoveryCode:r},injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}},q=class{constructor(e){let{clientId:t,advancedOptions:i,querier:n,onAuthSuccess:r}=e;var o;this.clientId=t,this.advancedOptions={recoveryShareManagement:null!=(o=null==i?void 0:i.recoveryShareManagement)?o:"AWS_MANAGED"},this.AuthQuerier=n,this.localStorage=new _({clientId:t}),this.onAuthSuccess=r,this.userManagedLogin=new j({postLogin:e=>y(this,null,(function*(){return this.postLogin(e)})),preLogin:()=>y(this,null,(function*(){yield this.preLogin()})),querier:n,clientId:t}),this.awsManagedLogin=new R({postLogin:e=>y(this,null,(function*(){return this.postLogin(e)})),preLogin:()=>y(this,null,(function*(){yield this.preLogin()})),querier:n,clientId:t})}preLogin(){return y(this,null,(function*(){yield this.logout()}))}postLogin(e){return y(this,arguments,(function(e){var t=this;let{storedToken:i,walletDetails:n}=e;return function*(){return i.shouldStoreCookieString&&(yield t.localStorage.saveAuthCookie(i.cookieString)),yield t.onAuthSuccess({storedToken:i,walletDetails:n})}()}))}loginWithJwtAuth(e){return y(this,arguments,(function(e){var t=this;let{token:i,authProvider:n,recoveryCode:r}=e;return function*(){yield t.preLogin();let e=yield t.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:i,authProvider:n,recoveryCode:r}});return t.postLogin(e)}()}))}loginWithPaperModal(e){return y(this,null,(function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)}))}loginWithPaperEmailOtp(e){return y(this,null,(function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)}))}loginWithGoogle(e){return y(this,null,(function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithGoogle(e):this.userManagedLogin.loginWithGoogle()}))}sendPaperEmailLoginOtp(e){return y(this,arguments,(function(e){var t=this;let{email:i}=e;return function*(){return"AWS_MANAGED"===t.advancedOptions.recoveryShareManagement?t.awsManagedLogin.sendPaperEmailLoginOtp({email:i,recoveryShareManagement:"AWS_MANAGED"}):t.userManagedLogin.sendPaperEmailLoginOtp({email:i})}()}))}verifyPaperEmailLoginOtp(e){return y(this,null,(function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)}))}logout(){return y(this,null,(function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}}))}},Q=class{constructor(e){let{chain:t,clientId:i,querier:n}=e;this.chain=t,this.clientId=i,this.gaslessTransactionQuerier=n}callContract(e){return y(this,arguments,(function(e){var t=this;let{contractAddress:i,methodArgs:n,methodInterface:r}=e;return function*(){return yield t.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:t.chain,contractAddress:i,method:{args:n,stub:r}}})}()}))}},z=class extends l.Signer{constructor(e){let{provider:t,clientId:i,querier:n}=e;var r;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=i,this.querier=n,this.endpoint=null==(r=t.connection)?void 0:r.url,(0,d.defineReadOnly)(this,"provider",t)}getAddress(){return y(this,null,(function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e}))}signMessage(e){return y(this,null,(function*(){var t,i,n,r;let o=yield null==(t=this.provider)?void 0:t.getNetwork();o&&o._defaultProvider;let{signedMessage:a}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(r=null==(n=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:n.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}signTransaction(e){return y(this,null,(function*(){var t,i,n;let{signedTransaction:r}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(n=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return r}))}_signTypedData(e,t,i){return y(this,null,(function*(){var n,r,o;let{signedTypedData:a}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(o=null==(r=yield null==(n=this.provider)?void 0:n.getNetwork())?void 0:r.chainId)?o:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}connect(e){return new z({clientId:this.clientId,provider:e,querier:this.querier})}},x=class{constructor(e){let{clientId:t,chain:i,querier:n}=e;this.clientId=t,this.chain=i,this.walletManagerQuerier=n,this.gasless=new Q({chain:i,clientId:t,querier:n}),this.localStorage=new _({clientId:t})}postWalletSetUp(e){return y(this,arguments,(function(e){var t=this;let{deviceShareStored:i,walletAddress:n,isIframeStorageEnabled:r,walletUserId:o}=e;return function*(){return r||(yield t.localStorage.saveDeviceShare(i,o)),{walletAddress:n}}()}))}getUserWalletStatus(){return y(this,null,(function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:w(I({},e.user),{wallet:this})}:e}))}setChain(e){return y(this,arguments,(function(e){var t=this;let{chain:i}=e;return function*(){t.chain=i,t.gasless=new Q({chain:i,clientId:t.clientId,querier:t.walletManagerQuerier})}()}))}getEthersJsSigner(e){return y(this,null,(function*(){var t;return new z({clientId:this.clientId,provider:(0,s.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:a.g1[this.chain]),querier:this.walletManagerQuerier})}))}},B=class{constructor(e){let{clientId:t,chain:i,styles:n,advancedOptions:r,onAuthSuccess:o}=e;this.clientId=t,this.querier=new G({clientId:t,customizationOptions:n}),this.wallet=new x({clientId:t,chain:i,querier:this.querier}),this.auth=new q({clientId:t,advancedOptions:I({recoveryShareManagement:"USER_MANAGED"},null!=r?r:{}),querier:this.querier,onAuthSuccess:e=>y(this,null,(function*(){return yield this.wallet.postWalletSetUp(w(I({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),yield this.querier.call({procedureName:"initIframe",params:{deviceShareStored:e.walletDetails.deviceShareStored,clientId:this.clientId,walletUserId:e.storedToken.authDetails.userWalletId,authCookie:e.storedToken.cookieString}}),null==o||o(e),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}}))})}getUser(){return y(this,null,(function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return I({status:"Logged In, Wallet Initialized"},e.user)}}))}}}}]);
//# sourceMappingURL=2103.bf7da109.chunk.js.map