import RightPanel from "@/component/layout/rightpanel";
import LeftPanel from "@/component/layout/leftpanel";

export default function Home() {
  return (
    <div className="flex direction-row mt-16 p-4">
      <LeftPanel/>
      <RightPanel />
    </div>
  );
}
