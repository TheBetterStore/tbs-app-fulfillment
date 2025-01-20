import 'reflect-metadata';
import {EventBridgeEvent} from 'aws-lambda';
import {Logger} from '@thebetterstore/tbs-lib-infra-common/lib/logger';

console.log('INFO - lambda is cold-starting.');
exports.handler = async (event: EventBridgeEvent<any, any>) => {
  Logger.info('Entered order confirmed event handler', JSON.stringify(event));

  Logger.info('Pending implementation');

  Logger.info('Exiting handler');
};