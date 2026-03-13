/**
 * Formats a number to Naira currency string
 * @param {number} amount
 * @returns {string} Formatted currency
 */
export const formatCurrency = (amount) => {
    if (typeof amount !== 'number') return amount;
    return `₦${amount.toLocaleString()}`;
};
