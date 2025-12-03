/**
 * Masks the PBP number for privacy.
 * Preserves the first few and last few digits, masking the middle.
 * Example: 352706200500243 -> 3527062****0243
 */
export const maskPbpNumber = (pbp: string): string => {
  if (!pbp || pbp.length < 8) return pbp;
  
  const visibleStart = 7;
  const visibleEnd = 4;
  
  if (pbp.length <= visibleStart + visibleEnd) {
    return pbp; // Return original if too short to mask effectively
  }

  const start = pbp.substring(0, visibleStart);
  const end = pbp.substring(pbp.length - visibleEnd);
  
  return `${start}****${end}`;
};