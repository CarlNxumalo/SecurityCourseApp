import Invoice from "$lib/Entities/Invoice";
import InvoiceDAO from "$lib/DAOs/InvoiceDAO";

class InvoiceService{
    constructor(){
        this.invoiceDAO = new InvoiceDAO()
    }

    //Create Invoice [1,2,3,4,5,6]
    /**
     * @param {any} courseIDs
     * @param {{ studentID: number; }} invoice
     */
    async createInvoice(courseIDs, invoice){

        //check the order of ids is valid sort first
        console.log(courseIDs)
        for (let i = 0; i < courseIDs.length-1; i++) {
            if(courseIDs[i]==1 && courseIDs[i]+2 == courseIDs[i+1]){
                continue
            }
            else if(courseIDs[i]+1!==courseIDs[i+1]){
                throw new Error("Modules selected are not in order");
            }
        }

        //No other invoices that are pending if null the conttinue
        const invoicePending = await this.invoiceDAO.getStudentPendingInvoices(invoice.studentID)
        if(invoicePending?.length>0){
            throw new Error("Student still has a pending invoice");
        }
        console.log(invoicePending)

        //create the Invoice
        await this.invoiceDAO.addInvoiceWithItems(invoice, courseIDs)
    }

    async studentInvoices(studentID){
        return this.invoiceDAO.getAllInvoicesByStudent(studentID)
    }
    
}

export default InvoiceService;
