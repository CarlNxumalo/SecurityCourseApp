<script>
  import { Register } from "flowbite-svelte-blocks";
  import { Button, Card, Modal } from 'flowbite-svelte';
  let clickOutsideModal = false;

  // Receive props
  export let data;
  export let form;
  var courses = data.courses

  //load
  for (let i = 0; i < courses.length; i++) {
    if(i!=0){
      courses[i].disabled = true
    }
    else{
      courses[i].disabled = false
    }
    courses[i].selected = false
  }


  /**
     * @param {number} courseID
     */
  function selection(courseID){
    const pos =  courses.findIndex(course => course.courseID === courseID);
    
    if(!courses[pos].selected){
      courses[pos].selected = true;

      for (let index = 0; index < courses.length; index++) {
        if(courseID <courses[index].courseID){
          courses[index].disabled = false
          break
        }
      }
    }

    //when already selected
    else{
      courses[pos].selected = false;
      for (let index = 0; index < courses.length; index++) {
        const element = courses[index];
        if(courseID < courses[index].courseID){
          courses[index].disabled = true;
          courses[index].selected = false;
        }
      }
    }
  }


  // Filter selected courses and calculate total price
  $: selectedCourses = courses.filter(course => course.selected);
  $: totalPrice = selectedCourses.reduce((sum, course) => sum + course.price, 0);
  $: selectedCourseIDs = selectedCourses.map(course => course.courseID);
  
</script>

<Register>
 <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
     <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Select Modules</h3>
      {#each courses as course}
          <Card class=" mb-4 p-4 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
              <p class="mb-3 text-gray-600 dark:text-gray-400">{course.about}</p>
            
              <div class="flex justify-between items-center mt-4">
                  <p class="text-lg font-semibold text-gray-800 dark:text-gray-300">Price: R{course.price.toFixed(2)}</p>
                  {#if !course.disabled && course.selected}
                    <Button color="green" type="button" on:click={() => selection(course.courseID)}>Enrolled</Button>
                  {:else if !course.disabled}
                    <Button color="dark" type="button" on:click={() => selection(course.courseID)}>Enroll</Button>
                  {:else}
                    <Button color="light" type="button" on:click={() => selection(course.courseID)} disabled>Locked</Button>
                  {/if}
                  
              </div>
          </Card>
      {/each}    
      <Button type="button"  class="w-full mt-6" on:click={() => (clickOutsideModal = true)}>continue</Button>
      {#if form?.error}
          <div class="mb-4 text-sm font-medium text-red-500 dark:text-gray-300">
              <span>{form.error}</span>
          </div>
      {/if}
 </div>
</Register>

<Modal title="Invoice" bind:open={clickOutsideModal} outsideclose>
  {#if selectedCourses.length > 0}
    <ul class="divide-y divide-gray-200">
      {#each selectedCourses as course}
        <li class="py-3 flex justify-between">
          <span>{course.name}</span>
          <span>${course.price.toFixed(2)}</span>
        </li>
      {/each}
    </ul>
    <div class="mt-4 text-lg font-bold flex justify-between">
      <span>Total:</span>
      <span>${totalPrice.toFixed(2)}</span>
    </div>
  {:else}
    <p class="text-gray-500">No courses selected.</p>
  {/if}
  <svelte:fragment slot="footer">
    <form action="?/register" method="POST">
      <input hidden name="slectedCourses" bind:value={selectedCourseIDs}>
      <input hidden name="total" bind:value={totalPrice}>
      <Button type="submit">Confirm</Button>
    </form>
    <Button color="alternative" on:click={() => (clickOutsideModal = false)}>Close</Button>
  </svelte:fragment>
</Modal>
