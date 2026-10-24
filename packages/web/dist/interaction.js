/** Internal shared guard: ARIA describes unavailability but does not block events. */
export const isUnavailable = control => control.disabled || control.getAttribute('aria-disabled') === 'true';
