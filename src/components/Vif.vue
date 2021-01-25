<template>
  <div>
    <h1>{{ title }} </h1>
     <ul id="task-list">
       <li v-for="task in tasks" v-bind:key="task"> 
          <span v-if="task.title == 'meeting with JP'" style="color:red;">
                {{ task.title }}
          </span>
          <span v-else>
                {{ task.title }}
         </span>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: "Vif",
  data() {
       return {
          title: 'Titre de mon application',
          tasks: [
            { title: 'Clean my room' },
            { title: 'Go to the grocery' },
            { title: 'meeting with JP' },
            { title: 'Go to the dentist' }
          ]
        };
    }
}

</script>