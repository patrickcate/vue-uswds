---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.vue
---
<% if (api === 'options') { %>
<script>
export default {
  name: '<%= h.changeCase.pascal(component_name) %>'
}
<% } else { %>
<script setup>
  const props = defineProps({

  })
</script>
<% } %>
<template>
<div></div>
</template>
