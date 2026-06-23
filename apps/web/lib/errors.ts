export function getErrorMessage(err: unknown, fallback = 'Something went wrong') {
  if (err instanceof Error) return err.message;
  return fallback;
}

export function confirmAction(message: string) {
  if (typeof window === 'undefined') return false;
  return window.confirm(message);
}

export function getSafeRedirectPath(path: string | null, fallback = '/dashboard') {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return fallback;
  return path;
}
