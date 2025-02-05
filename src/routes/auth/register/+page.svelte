<script lang="ts">
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Label, Input } from "flowbite-svelte";
  import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';

  let show = false;
  let show1 = false;
  export let form;
</script>

<Section name="register">
  <Register href="/">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create an account:</h3>
          <form method="POST" action="?/register">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                      <Label for="first_name" class="mb-2">First name</Label>
                      <Input name="name" type="text" id="first_name" placeholder="John" required />
                  </div>
                  <div>
                      <Label for="last_name" class="mb-2">Last name</Label>
                      <Input name="surname" type="text" id="last_name" placeholder="Doe" required />
                  </div>
                  <div>
                      <Label for="email" class="mb-2">Email address</Label>
                      <Input name="email" type="email" id="email" placeholder="john.doe@company.com" required />
                  </div>
                  <div>
                      <Label for="phone" class="mb-2">Phone number</Label>
                      <Input name="phone" type="tel" id="phone" placeholder="0795733344" pattern={"[0-9]{2}[1-9][0-9]{7}"} required />
                  </div>
              </div>

              <div class="mb-6">
                  <Label for="show-password" class="mb-2">Your password</Label>
                  <Input name="password" id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" required>
                      <button slot="left" type="button" on:click={() => (show = !show)} class="pointer-events-auto">
                          {#if show}
                              <EyeOutline class="w-6 h-6" />
                          {:else}
                              <EyeSlashOutline class="w-6 h-6" />
                          {/if}
                      </button>
                  </Input>
              </div>

              <div class="mb-6">
                  <Label for="show-password2" class="mb-2">Confirm password</Label>
                  <Input name="password2" id="show-password2" type={show1 ? 'text' : 'password'} placeholder="Your password here" required>
                      <button slot="left" type="button" on:click={() => (show1 = !show1)} class="pointer-events-auto">
                          {#if show1}
                              <EyeOutline class="w-6 h-6" />
                          {:else}
                              <EyeSlashOutline class="w-6 h-6" />
                          {/if}
                      </button>
                  </Input>
              </div>

              <Button type="submit" class="w-full1 mb-6">Create an account</Button>

              {#if form?.error}
                  <div class="mb-4 text-sm font-medium text-red-500 dark:text-gray-300">
                      <span>{form.error}</span>
                  </div>
              {/if}

              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already have an account? 
                  <a href="/auth/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </div>
          </form>
      </div>
  </Register>
</Section>
