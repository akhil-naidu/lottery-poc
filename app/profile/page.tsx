import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import UserTokens from "./UserTokens";
import WinList from "./WinList";

const Page = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <UserTokens />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <WinList />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Page;
