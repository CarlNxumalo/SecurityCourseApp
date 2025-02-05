<script lang="ts">
  import { PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import { Section,Cta, Quotes, Testimonial, TestimonialCard, TestimonialCardItem } from "flowbite-svelte-blocks";
  import { ContentWithImage } from "flowbite-svelte-blocks";
  import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon } from 'flowbite-svelte';
  import {
DarkMode,
Dropdown,
DropdownItem,
NavBrand,
NavHamburger,
NavLi,
NavUl,
Navbar,
Search
  } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import './app.pcss';

</script>

<Navbar>
  <NavBrand href="/">
    <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mayone Security</span>
  </NavBrand>
  <DarkMode />
</Navbar>
<Section name="ctawithimg">
  <Cta ctatype="image">
  <svelte:fragment slot="img">
      <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
      <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
  </svelte:fragment>
  <svelte:fragment slot="h2">Empowering Your Path to a Successful Security Career.</svelte:fragment>
  <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">We offer top-tier security training courses to equip you with essential skills for a rewarding career in security services. Join us and start building your future today.</p>
  <a href="auth/register" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
      Sign Up
      <ArrowRightOutline size="md" class="ml-2 -mr-1" />
  </a>
  </Cta>
</Section>

<Section name="pricing">
  <PricingHead>
    <svelte:fragment slot="h2">Choose the Right Course for You</svelte:fragment>
    <svelte:fragment slot="paragraph">Our courses are designed to meet various security industry demands, equipping you with the skills for success.</svelte:fragment>
  </PricingHead>
  <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    <PricingCard>
        <PricingBodyHead>
        <svelte:fragment slot="h3">Basic Security Training</svelte:fragment>
        <svelte:fragment slot="paragraph">Ideal for beginners who want to step into the world of security services.</svelte:fragment>
        <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">R1,500</span>
            <span class="text-gray-500 dark:text-gray-400">/course</span>
        </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Comprehensive Training Materials</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Flexible Study Options</span>
        </PricingItem>
        <svelte:fragment slot="btn">
            <Button color="red">Enroll Now</Button>
        </svelte:fragment>
        </PricingItemWrapper>
    </PricingCard>
    <PricingCard>
      <PricingBodyHead>
          <svelte:fragment slot="h3">Basic Fire Fighting</svelte:fragment>
          <svelte:fragment slot="paragraph">
              Learn essential fire safety skills, including extinguisher use and emergency response.
          </svelte:fragment>
          <svelte:fragment slot="price">
              <span class="mr-2 text-5xl font-extrabold">R1,200</span>
              <span class="text-gray-500 dark:text-gray-400">/course</span>
          </svelte:fragment>
      </PricingBodyHead>
      <PricingItemWrapper>
          <PricingItem class="text-green-500 dark:text-green-400">
              <span>Understanding Fire Classification</span>
          </PricingItem>
          <PricingItem class="text-green-500 dark:text-green-400">
              <span>Proper Use of Fire Extinguishers</span>
          </PricingItem>
          <PricingItem class="text-green-500 dark:text-green-400">
              <span>Emergency Fire Procedures</span>
          </PricingItem>
          <PricingItem class="text-green-500 dark:text-green-400">
              <span>Fire Safety and Prevention Techniques</span>
          </PricingItem>
          <svelte:fragment slot="btn">
              <Button color="red">Enroll Now</Button>
          </svelte:fragment>
      </PricingItemWrapper>
    </PricingCard>
    <PricingCard>
        <PricingBodyHead>
        <svelte:fragment slot="h3">Advanced Security Operations</svelte:fragment>
        <svelte:fragment slot="paragraph">Take your security skills to the next level with specialized training modules.</svelte:fragment>
        <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">R3,000</span>
            <span class="text-gray-500 dark:text-gray-400">/course</span>
        </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Expert Guidance</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Real-world Scenarios</span>
        </PricingItem>
        <svelte:fragment slot="btn">
            <Button color="red">Enroll Now</Button>
        </svelte:fragment>
        </PricingItemWrapper>
    </PricingCard>
  </div>
</Section>

<Section name="testimonial">
<TestimonialCard>
  <svelte:fragment slot="header">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
    <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Hear what our successful students have to say about their experience.</p>
  </svelte:fragment>
</TestimonialCard>
<div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
  <TestimonialCardItem>
    <svelte:fragment slot="h3">"This training changed my life!"</svelte:fragment>
    <p class="my-4">"Thanks to MayOne, I gained the skills needed to land a secure and well-paying job in the security field. The instructors were knowledgeable, and the content was practical and engaging."</p>
    <svelte:fragment slot="caption">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="karen profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Joseph M., MayOne Graduate</div>
      </div>
    </svelte:fragment>
  </TestimonialCardItem>
  <TestimonialCardItem>
    <svelte:fragment slot="h3">"I feel confident in my new role."</svelte:fragment>
    <p class="my-4">"The practical hands-on training gave me the confidence I needed to excel at my new job. I highly recommend MayOne for anyone pursuing a career in security services."</p>
    <svelte:fragment slot="caption">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="robert profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Roberta Casas</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Security Specialist</div>
      </div>
    </svelte:fragment>
  </TestimonialCardItem>
</div>
</Section>

<Section name="contentwithimg">
<ContentWithImage>
  <svelte:fragment slot="h2">Your Journey to Security Excellence</svelte:fragment>
  <p class="mb-4">At MayOne, we are committed to providing comprehensive security training to ensure our students are fully prepared for the challenges of the job. Our courses blend theoretical knowledge with practical application for maximum impact.</p>
  <p>We believe in empowering you with the tools and techniques necessary to thrive in the security industry.</p>
  <svelte:fragment slot="image">
    <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
  </svelte:fragment>
</ContentWithImage>
</Section>

