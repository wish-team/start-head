import React, { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      console.log('Copied to clipboard:', content);
    } catch (error) {
      setIsCopied(false);
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return { isCopied, copyToClipboard };
};

const CopyToClipboardButton = ({ content }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div>
      <button className="text-white dark:text-white" onClick={() => copyToClipboard(content)}>
        {isCopied ? <p className='text-sm'>Copied!</p> : <i className={'fa-regular fa-clipboard text-base my-auto'}></i>}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;