import { TestClientComponent } from "@/lib/clientComponent";
import { noOpFunction } from "@/lib/noOpFunction";

export default async function Page() {
  console.log("Dynamic Route Page Rendering");
  await noOpFunction(); // Now this triggers the client
  return (
    <div>
      <TestClientComponent />
    </div>
  );
}
