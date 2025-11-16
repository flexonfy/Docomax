/**
 * Patient Data Encryption Utility
 * Uses Web Crypto API for AES-GCM encryption
 * Provides secure storage and retrieval of sensitive patient information
 */

/**
 * Encrypt sensitive data using AES-GCM
 */
async function encryptData(data: string, password: string): Promise<string> {
  // Derive a key from the password
  const encoder = new TextEncoder();
  const data_encoded = encoder.encode(data);
  const password_encoded = encoder.encode(password);

  // Use PBKDF2 to derive a key from password
  const key = await crypto.subtle.importKey(
    'raw',
    password_encoded,
    'PBKDF2',
    false,
    ['deriveKey']
  );

  const derived_key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('docomax-salt-v1'),
      iterations: 100000,
      hash: 'SHA-256'
    },
    key,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );

  // Generate random IV
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Encrypt the data
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    derived_key,
    data_encoded
  );

  // Combine IV + encrypted data and encode to base64
  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(encrypted), iv.length);

  return btoa(String.fromCharCode.apply(null, Array.from(combined)));
}

/**
 * Decrypt data encrypted with encryptData
 */
async function decryptData(encrypted_b64: string, password: string): Promise<string> {
  const encoder = new TextEncoder();
  const password_encoded = encoder.encode(password);

  // Decode from base64
  const combined = Uint8Array.from(atob(encrypted_b64), c => c.charCodeAt(0));

  // Extract IV and encrypted data
  const iv = combined.slice(0, 12);
  const encrypted = combined.slice(12);

  // Derive the same key from password
  const key = await crypto.subtle.importKey(
    'raw',
    password_encoded,
    'PBKDF2',
    false,
    ['deriveKey']
  );

  const derived_key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('docomax-salt-v1'),
      iterations: 100000,
      hash: 'SHA-256'
    },
    key,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );

  // Decrypt
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    derived_key,
    encrypted
  );

  return new TextDecoder().decode(decrypted);
}

/**
 * Securely store encrypted patient data in localStorage
 */
export async function secureStorageSet(
  key: string,
  value: any,
  encryptionKey: string
): Promise<void> {
  try {
    const json = JSON.stringify(value);
    const encrypted = await encryptData(json, encryptionKey);
    localStorage.setItem(`enc_${key}`, encrypted);
    localStorage.setItem(`enc_${key}_ts`, new Date().toISOString());
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt and store data');
  }
}

/**
 * Retrieve and decrypt patient data from localStorage
 */
export async function secureStorageGet(
  key: string,
  encryptionKey: string
): Promise<any | null> {
  try {
    const encrypted = localStorage.getItem(`enc_${key}`);
    if (!encrypted) return null;

    const decrypted = await decryptData(encrypted, encryptionKey);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Decryption failed:', error);
    return null;
  }
}

/**
 * Remove encrypted data from localStorage
 */
export function secureStorageRemove(key: string): void {
  localStorage.removeItem(`enc_${key}`);
  localStorage.removeItem(`enc_${key}_ts`);
}

/**
 * Clear all encrypted patient data
 */
export function secureStorageClear(): void {
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('enc_') && !key.endsWith('_ts')) {
      localStorage.removeItem(key);
      localStorage.removeItem(`${key}_ts`);
    }
  });
}

/**
 * Generate a secure encryption key from patient ID
 * Uses device-specific salt for additional security
 */
export function generateEncryptionKey(patientId: string): string {
  // Create a unique key based on patient ID and device fingerprint
  const deviceId = localStorage.getItem('device_id') || 'default';
  return `${patientId}-${deviceId}-docomax`;
}

/**
 * Hash sensitive data (one-way, for comparison)
 */
export async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default {
  encryptData,
  decryptData,
  secureStorageSet,
  secureStorageGet,
  secureStorageRemove,
  secureStorageClear,
  generateEncryptionKey,
  hashData
};
