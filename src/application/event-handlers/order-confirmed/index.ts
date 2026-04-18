import 'reflect-metadata';
import {EventBridgeEvent} from 'aws-lambda';

console.log('INFO - lambda is cold-starting.');
exports.handler = async (event: EventBridgeEvent<any, any>) => {
  console.info('Entered order confirmed event handler', JSON.stringify(event));

  console.info('Pending implementation');

  console.info('Exiting handler');
};