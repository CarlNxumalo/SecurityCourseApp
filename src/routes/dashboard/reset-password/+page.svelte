<script lang="ts">
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Checkbox, Label, Input } from "flowbite-svelte";
    export let form
</script>
    
<Register href="/">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <form class="flex flex-col space-y-6" method="POST" action="?/reset">
      <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Reset Password</h3>
      <Label class="space-y-2">
        <span>Current password</span>
        <Input type="password" name="passwordCurrent" placeholder="•••••" required />
      </Label>
      <Label class="space-y-2">
        <span>New password</span>
        <Input type="password" name="passwordNew" placeholder="•••••" required />
      </Label>
      <Label class="space-y-2">
        <span>Confirm new password</span>
        <Input type="password" name="passwordConfirm" placeholder="•••••" required />
      </Label>
      <Button type="submit" class="w-full1">Reset passwod</Button>
      {#if form?.error}
          <div class="mb-4 text-sm font-medium text-red-500 dark:text-gray-300">
              <span>Error: {form.error}</span>
          </div>
      {/if}
    </form>
  </div>
</Register>
