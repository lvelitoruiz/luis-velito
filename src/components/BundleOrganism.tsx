import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { MenuButton } from "./MenuButton";
import { MenuButtonResponsive } from "./MenuButtonResponsive";
import { Navigation } from "./Navigation";
import { BundlePresentation } from "./BundlePresentation";
import CustomComboBox, { Option } from "./CustomComboBox";

const BundleOrganism = () => {
  const [expanded, setExpanded] = useState(false);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    // Añadir más opciones según sea necesario
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  return (
    <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
      <div className="min-h-4 overflow-hidden w-full">
        <MenuButton onExpand={toggleExpanded} />
        <Navigation expanded={expanded} onExpand={toggleExpanded} />
        <MenuButtonResponsive onExpand={toggleExpanded} expanded={expanded} />
        <div className="h-screen bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
          <BundlePresentation />
          <div className="px-10 py-40 w-full min-h-[420px]">
            <div className="grid grid-cols-12 w-10/12 mx-auto gap-3">
              <div className="flex items-center justify-center col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <CustomComboBox
                  options={options}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  placeholder="Select an option..."
                />
              </div>
              <div className="flex items-center justify-center col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <CustomComboBox
                  options={options}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  placeholder="Select an option..."
                />
              </div>
              <div className="flex items-center justify-center col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <CustomComboBox
                  options={options}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  placeholder="Select an option..."
                />
              </div>
              <div className="flex items-center justify-center col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <CustomComboBox
                  options={options}
                  selectedOption={selectedOption}
                  onSelect={handleSelect}
                  placeholder="Select an option..."
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BundleOrganism;
