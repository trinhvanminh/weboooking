import { Input } from "@/components/ui/input";
import Button from "./Button";

const Main = () => {
  return (
    <div className="relative flex h-[calc(100vh-72px)] w-full justify-center bg-[url('https://sleap.io/assets/images/header-images/sleap-header-5.webp')] object-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950"></div>
      <div className="z-index-text container relative flex h-full flex-col items-center gap-6 md:gap-10 lg:w-3/4 ">
        <div className="mt-[16%] flex w-full flex-row items-center justify-between">
          <Input className="w-[30%]" />
          <Input className="w-[30%]" />
          <Input className="w-[30%]" />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
