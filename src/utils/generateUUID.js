/**
 * Generates a UUID v4 (random) compliant string
 * @returns {string} A UUID v4 string
 */
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a shorter unique ID (12 characters)
 * Suitable for most application needs with lower collision probability
 * @returns {string} A unique ID string
 */
function generateShortId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

// Usage examples:
// const id = generateUUID(); // e.g. "f47ac10b-58cc-4372-a567-0e02b2c3d479"
// const shortId = generateShortId(); // e.g. "f47ac10b58cc"

export { generateUUID, generateShortId };
