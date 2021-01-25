import Eev from 'eev';
import { eventBusFactory } from './lifecycles';


export const rootEventBusFactory = () => {
  const bus = new Eev();
  const microAppBus = eventBusFactory(bus);

  return {
    appEventBus: microAppBus,
    emitEncryptedClaims: encryptedClaims =>
      bus.emit(MessageTypes.encryptedClaims, encryptedClaims)
  };
};
