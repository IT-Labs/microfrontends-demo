import { registerApplication, start } from "single-spa";
 
import { rootEventBusFactory } from './sdk';

const eventBus = rootEventBusFactory();

registerApplication({
  name: "@it-labs/navbar",
  app: () => System.import("@it-labs/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@it-labs/settings",
  app: () => loadWithoutAmd("@it-labs/settings"),
  activeWhen: "/settings",
  customProps: {
    encryptedClaims: 'userData-fromEncryptedClaims',
    eventBus: eventBus.appEventBus
  }
});
registerApplication({
  name: "@it-labs/admin",
  app: () => loadWithoutAmd("@it-labs/admin"),
  activeWhen: "/admin",
  customProps: {
    encryptedClaims: 'userData-fromEncryptedClaims',
    eventBus: eventBus.appEventBus
  }
});

registerApplication({
  name: "@it-labs/users",
  app: () => loadWithoutAmd("@it-labs/users"),  
  activeWhen: "/users",
  customProps: {
    encryptedClaims: 'userData-fromEncryptedClaims',
    eventBus: eventBus.appEventBus
  }
});

start();

// A lot of angularjs libs are compiled to UMD, and if you don't process them with webpack
// the UMD calls to window.define() can be problematic.
function loadWithoutAmd(name) {
  return Promise.resolve().then(() => {
    let globalDefine = window.define;
    delete window.define;
    return System.import(name).then((module) => {
      window.define = globalDefine;
      return module;
    });
  });
}
