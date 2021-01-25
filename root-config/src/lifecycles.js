import Eev from 'eev';
export const encryptedClaims = 'encryptedClaims';
export const customEvent = 'customEvent';
 
export const setupMicroApp = (lifecycle) => {
  return {
    bootstrap: (props) => lifecycle.bootstrap(props),
    mount: (props) => lifecycle.mount(props),
    unmount: (props) => lifecycle.unmount(props)
  };
};

export const eventBusFactory  = (bus) => {
  return {
    onEncryptedClaims: (cb) => {
      bus.on(encryptedClaims, cb);
      return () => bus.off(encryptedClaims, cb);
    },
    onCustomMessage: (cb) => {
      bus.on(customEvent, cb);

      return () => bus.off(customEvent, cb);
    },
    emitCustomMessage: (data) => {
      bus.emit(customEvent, data);
    }
  };
};
