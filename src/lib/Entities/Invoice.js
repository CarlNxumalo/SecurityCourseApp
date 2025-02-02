class Invoice {
    /**
     * @param {any} invoiceID
     * @param {any} studentID
     * @param {number} amount
     * @param {any} referenceEFT
     * @param {string} status
     * @param {Date} createdAt
     */

    constructor(invoiceID, studentID, amount, referenceEFT, status, createdAt) {
        if (!studentID || typeof studentID !== 'number') throw new Error("Invalid student ID");
        if (typeof amount !== 'number' || amount <= 0) throw new Error("Invalid amount");
        if (referenceEFT && typeof referenceEFT !== 'string') throw new Error("Invalid reference EFT");
        if (!['pending', 'paid'].includes(status)) throw new Error("Invalid status");
        
        this.invoiceID = invoiceID;
        this.studentID = studentID;
        this.amount = amount;
        this.referenceEFT = referenceEFT;
        this.status = status;
        this.createdAt = createdAt || new Date();
        /**
         * @type {never[]}
         */
        this.invoiceItems = []
    }

    toJSON() {
        return {
            invoiceID: this.invoiceID,
            studentID: this.studentID,
            amount: this.amount,
            referenceEFT: this.referenceEFT,
            status: this.status,
            createdAt: this.createdAt.toISOString(), // Ensure it's in ISO format
            invoiceItems: this.invoiceItems.map(item => item.toJSON()) // Map each course to JSON
        };
    }
}

export default Invoice