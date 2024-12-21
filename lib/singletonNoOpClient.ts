// noOp Client
function createNoOpClient() {
  console.log(`Creating new Test Client at ${new Date().toLocaleString()}`);
  const client = {
    doNothing: function (): void {
      return;
    },
  };
  return client;
}

declare const globalThis: {
  testClientGlobal: ReturnType<typeof createNoOpClient> | undefined;
} & typeof global;

const testClient = globalThis.testClientGlobal ?? createNoOpClient();
export default testClient;

globalThis.testClientGlobal = testClient;
