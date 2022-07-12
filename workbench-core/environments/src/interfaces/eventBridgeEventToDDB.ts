export default interface EventBridgeEventToDDB {
  envId?: string;
  instanceId?: string;
  status: string;
  errorMsg?: string;
  operation?: string;
  recordOutputKeys?: { instanceName: string; instanceArn: string };
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  metadata?: any;
}