import React, { useState } from "react";
import { Footer } from "./Footer";
import { MenuButton } from "./MenuButton";
import { MenuButtonResponsive } from "./MenuButtonResponsive";
import { Navigation } from "./Navigation";
import { BundlePresentation } from "./BundlePresentation";
import CustomComboBox from "./CustomComboBox";

import data from "../countries.json";
import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

import { CodeBlock, androidstudio } from "react-code-blocks";

const BundleOrganism = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const Icon = () => (
    <IcoMoon iconSet={iconSet} color="#fff" size={24} icon="camera" />
  );

  const codeExample = `
    const options: Option[] = [
      { name: "Option 1", code: "1" },
      { name: "Option 2", code: "2" },
      { name: "Option 3", code: "3" },
    ];

    function App() {
      return (
        <div className="App">
          <CustomComboBox
            options={options}
            placeholder="Select an option..."
          />
        </div>
      );
    }
    
    `;

    const codeExample2 = `
    const options: Option[] = [
      { name: "Option 1", code: "1" },
      { name: "Option 2", code: "2" },
      { name: "Option 3", code: "3" },
    ];

    function App() {
      return (
        <div className="App">
          <CustomComboBox
            options={options}
            placeholder="Select an option..."
            countryIcon
            ligthMode
          />
        </div>
      );
    }`;

    const codeExample3 = `
    const options: Option[] = [
      { name: "Option 1", code: "1" },
      { name: "Option 2", code: "2" },
      { name: "Option 3", code: "3" },
    ];

    function App() {
      return (
        <div className="App">
          <CustomComboBox
            options={options}
            placeholder="Select an option..."
            beforeInput={<Icon />}
          />
        </div>
      );
    }`;

    const codeExample4 = `
    const options: Option[] = [
      { name: "Option 1", code: "1" },
      { name: "Option 2", code: "2" },
      { name: "Option 3", code: "3" },
    ];

    function App() {
      return (
        <div className="App">
          <CustomComboBox
            options={options}
            placeholder="Select an option..."
            multiple
          />
        </div>
      );
    }`;

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
              <div className="col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-center py-5 mt-10">
                    Custom ComboBox
                  </h2>
                  <div className="text-center">
                    <p className="text-gray-500">
                      Simple options.
                    </p>
                  </div>
                </div>
                <div className="flex w-full min-h-[380px] items-center justify-center">
                  <CustomComboBox
                    options={data}
                    placeholder="Select an option..."
                  />
                </div>
                <div className="pt-10 flex justify-center">
                  <CodeBlock
                    text={codeExample}
                    language="javascript"
                    showLineNumbers
                    customStyle={{
                      width: "100%",
                      fontFamily: "Fira Code",
                      fontWeigth: "300",
                    }}
                    theme={androidstudio}
                  />
                </div>
              </div>
              <div className="col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-center py-5 mt-10">
                    Custom ComboBox
                  </h2>
                  <div className="text-center">
                    <p className="text-gray-500">
                      Ligth Mode and Geocode options.
                    </p>
                  </div>
                </div>
                <div className="flex w-full min-h-[380px] items-center justify-center">
                  <CustomComboBox
                    options={data}
                    placeholder="Select an option..."
                    countryIcon
                    ligthMode
                  />
                </div>
                <div className="pt-10 flex justify-center">
                  <CodeBlock
                    text={codeExample2}
                    language="javascript"
                    showLineNumbers
                    customStyle={{
                      width: "100%",
                      fontFamily: "Fira Code",
                      fontWeigth: "300",
                    }}
                    theme={androidstudio}
                  />
                </div>
              </div>
              <div className="col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-center py-5 mt-10">
                    Custom ComboBox
                  </h2>
                  <div className="text-center">
                    <p className="text-gray-500">
                      Content before the input option.
                    </p>
                  </div>
                </div>
                <div className="flex w-full min-h-[380px] items-center justify-center">
                  <CustomComboBox
                    options={data}
                    placeholder="Select an option..."
                    beforeInput={<Icon />}
                  />
                </div>
                <div className="pt-10 flex justify-center">
                  <CodeBlock
                    text={codeExample3}
                    language="javascript"
                    showLineNumbers
                    customStyle={{
                      width: "100%",
                      fontFamily: "Fira Code",
                      fontWeigth: "300",
                    }}
                    theme={androidstudio}
                  />
                </div>
              </div>
              <div className="col-span-6 min-h-[420px] bg-gray-100 border border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-center py-5 mt-10">
                    Custom ComboBox
                  </h2>
                  <div className="text-center">
                    <p className="text-gray-500">
                      Multiple options.
                    </p>
                  </div>
                </div>
                <div className="flex w-full min-h-[380px] items-center justify-center">
                  <CustomComboBox
                    options={data}
                    placeholder="Select an option..."
                    multiple
                  />
                </div>
                <div className="pt-10 flex justify-center">
                  <CodeBlock
                    text={codeExample4}
                    language="javascript"
                    showLineNumbers
                    customStyle={{
                      width: "100%",
                      fontFamily: "Fira Code",
                      fontWeigth: "300",
                    }}
                    theme={androidstudio}
                  />
                </div>
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
