<script>
     import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Checkbox, Label, Input, A,  ButtonGroup, InputAddon, ToolbarButton } from "flowbite-svelte";
    export let form;
    export let data;
    let pattern = "0[0-9]{9}";

</script>

<Register>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Profile Info</h3>
        <form  method="POST" action="?/update">
            <div class="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <Label for="first_name" class="mb-2">First name</Label>
                <Input name="name"type="text" id="first_name" bind:value={data.student.name} placeholder="John" required />
              </div>
              <div>
                <Label for="last_name" class="mb-2">Last name</Label>
                <Input name="surname"type="text" id="last_name" bind:value={data.student.surname} placeholder="Doe" required />
              </div>
              <div>
                <Label for="email" class="mb-2">Email address</Label>
                <Input name="email"type="email" id="email" bind:value={data.student.email} placeholder="john.doe@company.com" required />
              </div>
              <div>
                <Label for="phone" class="mb-2">Phone number</Label>
                <Input name="phone"type="tel" id="phone" bind:value={data.student.phone} placeholder="0716367633" {pattern} required />
              </div>
            </div>
            <Button type="submit" class="w-full1 mb-6">update</Button>
            {#if form?.error}
                <div class="mb-4 text-sm font-medium text-red-500 dark:text-gray-300">
                  <span>Error: {form.error}</span>
                </div>
            {/if}
            {#if form?.success}
                <div class="mb-4 text-sm font-medium text-green-500 dark:text-gray-300">
                  <span>{form?.success}</span>
                </div>
            {/if}

        </form>
    </div>
</Register>
