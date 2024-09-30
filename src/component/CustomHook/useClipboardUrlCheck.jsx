import { useState, useEffect } from 'react';

function useClipboardUrlCheck() {
  const [isCopyURL, setIsCopyURL] = useState(false);

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Function to check the clipboard content
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText(); // Read the text from clipboard

        // Compare clipboard text with the current URL
        if (text === currentUrl) {
          setIsCopyURL(true); // Return true if clipboard matches URL
        } else {
          setIsCopyURL(false); // Return false if clipboard does not match URL
        }
      } catch (err) {
      //  console.error('Failed to read clipboard contents: ', err);
      }
    };

    // Check clipboard when the document is focused
    const handleFocus = () => {
      checkClipboard();
    };

    // Add focus event listener
    window.addEventListener('focus', handleFocus);

    // Call the function on mount
    checkClipboard();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []); // Empty dependency array ensures this runs on component mount

  return { isCopyURL }; // Return the boolean indicating if the clipboard matches the current URL
}

export default useClipboardUrlCheck;
