<script lang="ts">
  import { Section, Faq, FaqItem, Register } from "flowbite-svelte-blocks";
</script>
  
<div class="m-8">
  <h2 class="mb-8 mt-0 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
  <Faq>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">What modules are available on Mayone Security?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">We provide a comprehensive range of modules that cover essential security topics to help you successfully pass your security certification tests.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">What does "lifetime access" mean for the learning material?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Once you enroll in a module, you'll have lifetime access to all its resources, including any updates to the course materials at no additional cost.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How can I get support if I face issues?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Our support team is dedicated to helping you succeed. If you encounter any issues with the platform or study materials, please reach out, and we'll assist you promptly.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Feel free to <a href="/" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> anytime for support.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Can I study multiple modules at the same time?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Yes, you can enroll in and study multiple modules simultaneously at your own pace. Our platform is designed to give you flexibility in your learning journey.</p>
      </FaqItem>
    </div>
    <div>
      <FaqItem>
        <svelte:fragment slot="h3">Are there any updates to the course materials?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          We regularly update our learning materials to align with the latest industry regulations and best practices. These updates will be available to all enrolled students at no extra cost.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Are the PDF resources downloadable?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">
          Yes, all PDF resources are downloadable, allowing you to study offline and access the materials anytime without an internet connection.
        </p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">Is there a difference between the modules for beginners and advanced students?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Yes, we provide modules suitable for both beginners and advanced learners to ensure that everyone, regardless of their level, gets the most out of the platform.</p>
        <p class="text-gray-500 dark:text-gray-400">Our platform guides you on where to start based on your current knowledge level.</p>
      </FaqItem>
      <FaqItem>
        <svelte:fragment slot="h3">How can I track my progress?</svelte:fragment>
        <p class="text-gray-500 dark:text-gray-400">Our platform includes a progress tracker that allows you to monitor which modules you've completed and your performance in practice tests.</p>
        <p class="text-gray-500 dark:text-gray-400">
          Keep an eye on your progress dashboard for detailed insights.
        </p>
      </FaqItem>
    </div>
  </Faq>
</div>
