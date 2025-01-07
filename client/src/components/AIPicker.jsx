import React from "react";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI...."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              customStyles="text-us"
              handleClick={() => handleSubmit("Logo")}
            />

            <CustomButton
              type="Filled"
              title="AI Full"
              customStyles="text-us"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
