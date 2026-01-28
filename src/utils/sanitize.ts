export function escapeHtml(text: string | null | undefined): string {
  if (!text) return '';

  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export const INPUT_LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  address: 500,
  specialInstructions: 500,
};

export function validateInput(
  input: string,
  fieldType: keyof typeof INPUT_LIMITS
): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!input || typeof input !== 'string') {
    return { isValid: true, sanitized: '' };
  }

  const trimmed = input.trim();
  const maxLength = INPUT_LIMITS[fieldType];

  if (trimmed.length > maxLength) {
    return {
      isValid: false,
      sanitized: '',
      error: `Input exceeds maximum length of ${maxLength} characters`,
    };
  }

  const dangerousPatterns = [
    /<script/i,
    /<iframe/i,
    /<svg/i,
    /<img/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /onerror/i,
    /onload/i,
    /onclick/i,
    /onmouseover/i,
    /onfocus/i,
    /onblur/i,
    /on[a-z]+\s*=/i,
    /eval\(/i,
    /expression\(/i,
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(trimmed)) {
      return {
        isValid: false,
        sanitized: '',
        error: 'Input contains disallowed characters or patterns',
      };
    }
  }

  const sanitized = escapeHtml(trimmed);
  return { isValid: true, sanitized };
}
