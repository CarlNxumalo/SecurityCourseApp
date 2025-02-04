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

	export let fluid = true;
	export let drawerHidden = false;
	export let list = true;
</script>

<Navbar {fluid} class="text-black" color="default" let:NavContainer>
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class={list ? 'w-40' : 'lg:w-60'}>
		<!--
		<img
			src="/images/flowbite-svelte-icon-logo.svg"
			class="me-2.5 h-6 sm:h-8"
			alt="Flowbite Logo"
		/>
		-->
		
		<span
			class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
		>
			MayOne
		</span>
	</NavBrand>
	<div class="hidden lg:flex flex-1 justify-end">
		{#if list}
			<NavUl class="ml-2" activeUrl="/" activeClass="text-primary-600 dark:text-primary-500">
				<NavLi href="/">Home</NavLi>
				<NavLi href="#top">Messages</NavLi>
				<NavLi href="#top">Profile</NavLi>
				<NavLi href="#top">Settings</NavLi>
				<NavLi class="cursor-pointer">
					Dropdown
					<ChevronDownOutline  class="ms-0 inline" />
				</NavLi>
				<Dropdown class="z-20 w-44">
					<DropdownItem href="#top">Item 1</DropdownItem>
					<DropdownItem href="#top">Item 2</DropdownItem>
					<DropdownItem href="#top">Item 3</DropdownItem>
				</Dropdown>
			</NavUl>
		{/if}
	</div>
	<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<DarkMode />
	</div>
</Navbar>


<Section name="ctawithimg">
    <Cta ctatype="image">
    <svelte:fragment slot="img">
        <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
        <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
    </svelte:fragment>
    <svelte:fragment slot="h2">Let's create more tools and ideas that brings us together.</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
    <a href="/" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
        Get started
        <ArrowRightOutline size="md" class="ml-2 -mr-1" />
    </a>
    </Cta>
</Section>



<Section name="testimonial">
  <TestimonialCard>
    <svelte:fragment slot="header">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
      <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
    </svelte:fragment>
  </TestimonialCard>
  <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Speechless with how easy this was to integrate</svelte:fragment>
      <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
      <p class="my-4">Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
      <p class="my-4">If you care for your time, I hands down would go with this."</p>
      <svelte:fragment slot="caption">
        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="karen profile" />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Bonnie Green</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Solid foundation for any project</svelte:fragment>
      <p class="my-4">"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
      <p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
      <svelte:fragment slot="caption">
        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="robert profile" />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Roberta Casas</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Mindblowing workflow and variants</svelte:fragment>
      <p class="my-4">"As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.</p>
      <p class="my-4">Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).</p>
      <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
      <svelte:fragment slot="caption">
        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese leos profile" />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Jese Leos</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
    <TestimonialCardItem>
      <svelte:fragment slot="h3">Efficient Collaborating</svelte:fragment>
      <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
      <p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
      <svelte:fragment slot="caption">
        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="joseph profile" />
        <div class="space-y-0.5 font-medium dark:text-white text-left">
          <div>Joseph McFall</div>
          <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
        </div>
      </svelte:fragment>
    </TestimonialCardItem>
  </div>
</Section>


<Section name="contentwithimg">
  <ContentWithImage>
    <svelte:fragment slot="h2">We didn't reinvent the wheel</svelte:fragment>
    <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

    <svelte:fragment slot="image">
      <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    </svelte:fragment>
  </ContentWithImage>
</Section>


    
<Section name="pricing">
    <PricingHead>
    <svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
    <svelte:fragment slot="paragraph">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</svelte:fragment>
    </PricingHead>
    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    <PricingCard>
        <PricingBodyHead>
        <svelte:fragment slot="h3">Starter</svelte:fragment>
        <svelte:fragment slot="paragraph">Best option for personal use & for your next project.</svelte:fragment>
        <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">$29</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
        </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Team size: <span class="font-semibold">1 developer</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Premium support: <span class="font-semibold">6 months</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Free updates: <span class="font-semibold">6 months</span></span>
        </PricingItem>

        <svelte:fragment slot="btn">
            <Button color="red">Get started</Button>
        </svelte:fragment>
        </PricingItemWrapper>
    </PricingCard>

    <PricingCard>
        <PricingBodyHead>
        <svelte:fragment slot="h3">Company</svelte:fragment>
        <svelte:fragment slot="paragraph">Relevant for multiple users, extended & premium support.</svelte:fragment>
        <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">$99</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
        </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Team size: <span class="font-semibold">10 developer</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Premium support: <span class="font-semibold">24 months</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Free updates: <span class="font-semibold">24 months</span></span>
        </PricingItem>

        <svelte:fragment slot="btn">
            <Button color="red">Get started</Button>
        </svelte:fragment>
        </PricingItemWrapper>
    </PricingCard>

    <PricingCard>
        <PricingBodyHead>
        <svelte:fragment slot="h3">Enterprise</svelte:fragment>
        <svelte:fragment slot="paragraph">Best for large scale uses and extended redistribution rights.</svelte:fragment>
        <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">$499</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
        </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Individual configuration</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>No setup, or hidden fees</span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Team size: <span class="font-semibold">100+ developer</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Premium support: <span class="font-semibold">36 months</span></span>
        </PricingItem>
        <PricingItem class="text-green-500 dark:text-green-400">
            <span>Free updates: <span class="font-semibold">36 months</span></span>
        </PricingItem>

        <svelte:fragment slot="btn">
            <Button color="red">Get started</Button>
        </svelte:fragment>
        </PricingItemWrapper>
    </PricingCard>
    </div>
</Section>


<Section name="cta">
  <Cta ctatype="heading">
    <svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Flowbite Platform for 30 days. No credit card required.</p>
    <a href="/" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Free trial for 30 days</a>
  </Cta>
</Section>


  
<Footer footerType="socialmedia">
<div class="mx-auto max-w-screen-xl text-center">
    <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Premium</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Campaigns</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Blog</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Affiliate Program</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">FAQs</FooterLink>
    <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Contact</FooterLink>
    </FooterLinkGroup>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
</div>
</Footer>