// Helper function to get cookies
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};




// encription  and Decription start
async function caesarCipherAsync(value, shift) {
  return new Promise((resolve) => {
    const strValue = String(value);  // Ensure the value is a string
    const processChar = (char) => {
      const code = char.charCodeAt();
      // For uppercase letters
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((((code - 65 + shift) % 26) + 26) % 26) + 65);
      }
      // For lowercase letters
      else if (char >= "a" && char <= "z") {
        return String.fromCharCode(((((code - 97 + shift) % 26) + 26) % 26) + 97);
      }
      // For numbers
      else if (char >= "0" && char <= "9") {
        return String.fromCharCode(((((code - 48 + shift) % 10) + 10) % 10) + 48);
      }
      return char; // Non-alphabet and non-digit characters remain unchanged
    };
    // Encrypt the value
    const result = strValue
      .split("")
      .map((char) => processChar(char))
      .join("");

    resolve(result);
  });
}

// Async encrypt function
export const encryptAsync = async (value, secondValue) => {
  const shift = 15; // Shift for encryption
  const addChar= 'zcfsmx%sxs'
  // Ensure value is a string
  const strValue = String(value);
  // Encrypt the value using async caesarCipher function
  const encryptedValue = await caesarCipherAsync(strValue, shift);
  // Encode in Base64
  const base64Encoded = btoa(encryptedValue + secondValue); // Append second value before Base64 encoding
  // Encode special characters for URL safety
  return encodeURIComponent(base64Encoded+addChar);
};

// Async decrypt function
export const decryptAsync = async (value, secondValue = '') => {
  const shift = 15; // Shift for decryption
  const addChar = 'zcfsmx%sxs'; // Characters to remove after decryption

  try {
    // Check if value is properly defined
    if (!value) {
      throw new Error('Invalid value provided for decryption.');
    }
    
    // Check if secondValue is defined, if not set a default value
    if (!secondValue) {
      throw new Error('secondValue is required for decryption.');
    }

    // Decode from URL
    const decodedValue = decodeURIComponent(value.slice(0, -addChar.length));

    // Decode from Base64
    const base64Decoded = atob(decodedValue);

    // Separate the original encrypted value and second value
    const originalEncryptedValue = base64Decoded.slice(0, -secondValue.length);

    // Decrypt the original value using async caesarCipher function
    return await caesarCipherAsync(originalEncryptedValue, -shift);
  } catch (error) {
    console.error('Error decrypting code:', error.message);
    return null;
  }
};


// encription  and Decription start
