export const API_URL = import.meta.env.VITE_API_URL ?? '/api';

// Photos uploaded while the backend ran on Windows were stored as `uploads\<file>`.
export function photoUrl(photo) {
  return `${API_URL}/uploads/${photo.replace(/^uploads[\\/]/, '')}`;
}
