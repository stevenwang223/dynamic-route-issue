"use server";

export async function noOpAction() {
  await console.log("No op action called");
  return;
}
