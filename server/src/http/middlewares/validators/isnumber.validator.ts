type NumberValidationOptions = {
  min?: number;
  max?: number;
};

/**
 * Validates if a value is a number, and optionally, if it is in a given range.
 */
export default function isNumber(value: unknown, options?: NumberValidationOptions) {
  if (typeof value != 'number' || Number.isNaN(value)) {
    throw new Error('Value is not a number');
  }

  if (options?.min != undefined && value < options.min) {
    throw new Error(`Value is less than the minumun accepted (${options.min}).`);
  }

  if (options?.max != undefined && value > options.max) {
    throw new Error(`Value is greater than the maximun accepted (${options.max}).`);
  }

  return true;
}
