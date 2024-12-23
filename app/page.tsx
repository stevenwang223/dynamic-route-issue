import { TestClientComponent } from "@/lib/clientComponent";
import { noOpFunction } from "@/lib/noOpFunction";

export default async function Page() {
  console.log("Home Page Rendering");
  noOpFunction(); // Now this triggers the client
  return (
    <div>
      <TestClientComponent />
    </div>
  );
}
