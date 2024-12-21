import testClient from "@/lib/singletonNoOpClient";

export function noOpFunction() {
  testClient.doNothing();
  console.log("Not server action is called");
  return;
}
