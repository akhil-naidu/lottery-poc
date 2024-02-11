import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import UserTokens from "./UserTokens";
import WinList from "./WinList";
import MyContest from "./MyContest";

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
        <ResizableHandle />
        <ResizablePanel>
          <MyContest />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Page;
