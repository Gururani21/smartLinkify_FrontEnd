import React from "react";

const Navigation = () => {
  const renderBrandLogo = () => {
    return <div>
      
    </div>;
  };

  const renderNavLink = () => {
    return <div>Nav Link</div>;
  };
  const renderLeftNav = () => {
    return (
      <div>
        <div className="flex">
          <div className="">{renderBrandLogo()}</div>
          <div className="flex-grow-1">{renderNavLink()}</div>
        </div>
      </div>
    );
  };

  const renderRightNav = () => {
    return <div></div>;
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-layout m-auto ">
        <div className="grid grid-cols-12">
          <div className="col-span-8">{renderLeftNav()}</div>

          <div className="col-span-4"> {renderRightNav()}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
