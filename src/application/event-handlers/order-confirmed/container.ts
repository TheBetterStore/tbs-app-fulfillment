import {Container} from 'inversify';

const container = new Container();

/*
container.bind<IRestApiClient>(TYPES.IRestApiClient).to(RestApiClient).inSingletonScope();
container.bind<IEventBridgeClient>(TYPES.IEventBridgeClient).to(EventBridgeClient).inSingletonScope();
container.bind<IParameterStoreClient>(TYPES.IParameterStoreClient).to(ParameterStoreClient).inSingletonScope();
*/

export default container;
