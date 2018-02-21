
/**
 * Formatting function for the rendering event of the TableHeaderColumn.
 * Formats the amount string.
 * 
 * @export
 * @param {string} cell The string value of the amount to format.
 * @param {{}} row LoanType object of the row.
 * @returns {string} String representation of the amount to render.
 */
export function formatAmount (cell: string, row: {}): string {
    let intVal = parseInt(cell, 10);

    if (isNaN(intVal)) {
        return cell;
    }

    return '$' + (intVal / 100).toFixed(2);
}

/**
 * Formatting function for the rendering event of the TableHeaderColumn.
 * Formats the date.
 * 
 * @export
 * @param {string} cell The string value of the date to format.
 * @param {{}} row LoanType object of the row.
 * @returns {string} String representation of the amount to render.
 */
export function formatDate (cell: string, row: {}): string {
    if (cell) {
        let date = new Date(cell);

        const dateOptions: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        return date.toLocaleString('en-US', dateOptions);
    }
    return cell;
}