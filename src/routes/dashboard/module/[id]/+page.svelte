<script>
    import { Section, BlogTemplate, Comment, CommentItem } from 'flowbite-svelte-blocks';
    import { Button, Textarea, Label, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
    export let data
    $: blog = JSON.parse(data.course.overview);
    
</script>

<Section name='blogTemplate' classSection='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <BlogTemplate {blog} />
        <h2>Download the Full Module</h2> 
        <p>For the complete course material, download the full module here: <a href={data.course.path} target='_blank'>{data.course.name} PDF</a></p>
    </article>
</Section>
