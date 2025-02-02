import InvoiceService from '$lib/Services/InvoiceService.js';

export async function load({cookies}) {
    const invoiceService = new InvoiceService();
    const invoices = await invoiceService.studentInvoices(Number(cookies.get('id')));
    return {
        invoices: invoices.map(invoice => invoice.toJSON()) // Map each invoice to its JSON representation
    };
}