<script lang="ts">
    import { Section, Register } from "flowbite-svelte-blocks";
    import { Button, Alert, Label, Input } from "flowbite-svelte";
    

    export let form
    
</script>

    
<Section name="login">
    <Register href="/">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="flex flex-col space-y-6" method="POST" action="?/login">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Login into account</h3>
            <Label class="space-y-2">
                <span>Your email</span>
                <Input type="email" name="email"  placeholder="name@company.com" required />
            </Label>
            <Label class="space-y-2">
                <span>Your password</span>
                <Input type="password" name="password" placeholder="•••••••" required />
            </Label>
            <div>
                <a href="/auth/forgot-password" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
            </div>
            <Button type="submit" class="w-full1">Sign in</Button>
            {#if form?.error}
                  <div class="mb-4 text-sm font-medium text-red-500 dark:text-gray-300">
                      <span>{form.error}</span>
                  </div>
            {/if}
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="/auth/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
            </form>
        </div>
    </Register>
</Section>