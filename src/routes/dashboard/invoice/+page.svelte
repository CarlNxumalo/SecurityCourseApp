<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Modal, Button } from 'flowbite-svelte';
    import { InfoCircleOutline, InfoCircleSolid } from 'flowbite-svelte-icons';
  
    export let data;
    let selectedInvoice = null; // To hold the selected invoice
    let clickOutsideModal = false; // To control modal visibility
    
    // Open modal and set the selected invoice
    function openModal(invoice) {
      selectedInvoice = invoice;
      clickOutsideModal = true;
    }
  
    // Close modal
    function closeModal() {
      clickOutsideModal = false;
    }
  </script>
  
  <div class="m-4">
    <Table striped={true}>
      <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Your Invoices
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of your invoices. <br>
            <strong>Pending</strong> means that the office is currently verifying the payment deposited into your account. Once verified, your invoice status will be updated to <strong>Paid</strong>. <br>
            You have 7 days to make the payment. If you’ve already paid, we will process your payment and get back to you shortly.
        </p>
      </caption>
      <TableHead>
        <TableHeadCell>Invoice ID</TableHeadCell>
        <TableHeadCell>EFT Reference</TableHeadCell>
        <TableHeadCell>Status</TableHeadCell>
        <TableHeadCell>Timestamp</TableHeadCell>
        <TableHeadCell>
          details
        </TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        {#each data.invoices as invoice}
          <TableBodyRow>
            <TableBodyCell>{invoice.invoiceID}</TableBodyCell>
            <TableBodyCell>{invoice.referenceEFT}</TableBodyCell>
            <TableBodyCell>{invoice.status}</TableBodyCell>
            <TableBodyCell>{new Date(invoice.createdAt).toLocaleString()}</TableBodyCell>
            <TableBodyCell>
              <Button color="none" on:click={() => openModal(invoice)}>
                <InfoCircleSolid></InfoCircleSolid>
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  
    <!-- Modal to show invoice details -->
    {#if selectedInvoice} <!-- Only show modal if an invoice is selected -->
      <Modal title="Invoice Details" bind:open={clickOutsideModal} outsideclose>
        <div class="p-6 space-y-4">
          <div class="grid grid-cols-2 gap-x-4">
            <div class="font-medium text-gray-700">Invoice ID:</div>
            <div class="text-gray-900">{selectedInvoice.invoiceID}</div>
  
            <div class="font-medium text-gray-700">EFT Reference:</div>
            <div class="text-gray-900">{selectedInvoice.referenceEFT}</div>
  
            <div class="font-medium text-gray-700">Status:</div>
            <div class="text-gray-900">{selectedInvoice.status}</div>
  
            <div class="font-medium text-gray-700">Amount:</div>
            <div class="text-gray-900">${selectedInvoice.amount.toFixed(2)}</div>
  
            <div class="font-medium text-gray-700">Timestamp:</div>
            <div class="text-gray-900">{new Date(selectedInvoice.createdAt).toLocaleString()}</div>
          </div>
        
          <h3 class="mt-4 text-lg font-semibold">Invoice Items</h3>
          <ul class="divide-y divide-gray-200">
            {#each selectedInvoice.invoiceItems as item}
              <li class="py-3 flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            {/each}
          </ul>
      
          <div class="mt-4 text-lg font-bold flex justify-between">
            <span>Total:</span>
            <span>${selectedInvoice.amount.toFixed(2)}</span>
          </div>
        </div>
        
        <svelte:fragment slot="footer">
          <Button color="alternative" on:click={closeModal}>Close</Button>
        </svelte:fragment>
      </Modal>
    {/if}
  </div>
  