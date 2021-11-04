---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.vue
---
<% if (api === 'options') { -%>
<script>
export default {
  name: '<%= h.changeCase.pascal(component_name) %>',
  testProp: {
    type: String,
    default: '',
    validator: () => {
      return true
    },
  }
}
</script>
<% } else { -%>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  testProp: {
    type: String,
    default: '',
    validator: () => {
      return true
    },
  },
})
</script>
<% } %>
<template>
  <div><slot></slot></div>
</template>
