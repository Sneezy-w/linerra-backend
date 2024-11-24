import { Lambda } from '@aws-sdk/client-lambda';
const lambda = new Lambda({
  apiVersion: '2015-03-31',
  // endpoint needs to be set only if it deviates from the default
  endpoint: process.env.IS_OFFLINE
    ? 'http://localhost:3002'
    : `https://lambda.${process.env.AWS_REGION}.amazonaws.com`,
});

export async function invokeAsynchronously(functionName, payload) {
  return lambda.invoke({
    FunctionName: functionName,
    InvocationType: 'Event',
    Payload: JSON.stringify(payload),
  });
}
