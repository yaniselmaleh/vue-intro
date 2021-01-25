<template>
  <div>
    <h1>{{ title }} </h1>
     <ul id="task-list">
       <li v-for="task in tasks" v-bind:key="task">
         <span v-if="task.title == 'meeting with JP'" style="color:red;" v-show="task.display==true">
            {{ task.title }}
        </span>

        <span v-else v-show="task.display==true">
            {{ task.title }}
        </span>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: "Vshow",
  data() {
       return {
          title: 'Titre de mon application',
          tasks: [
            { title: 'Clean my room', display:false },
            { title: 'Go to the grocery', display:false },
            { title: 'meeting with JP', display:true },
            { title: 'Go to the dentist', display:true }
          ]
        };
    }
}

</script>