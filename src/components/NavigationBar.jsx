import Button from "./Button";

const NavigationBar = () => {
  return (
    <div className="flex h-[72px] bg-black px-[1rem]">
      <div className="container mx-auto flex  w-full items-center justify-between">
        <img
          src="https://usagif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif"
          // src="https://sleap.io/assets/logo/sleap-logo-white.svg"
          alt=""
          className="h-10"
        />
        <Button>Connect</Button>
      </div>
    </div>
  );
};

export default NavigationBar;
