import { ref } from 'vue'
import UsaDateRangePicker from './UsaDateRangePicker.vue'
import UsaDatePicker from '@/components/UsaDatePicker'

const defaultProps = {}

export default {
  component: UsaDateRangePicker,
  title: 'Components/UsaDateRangePicker',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: `<UsaDatePicker
      label="Start Date"
      v-model="startDate"
      range-type="start">
    </UsaDatePicker>
    <UsaDatePicker
      label="End Date"
      v-model="endDate"
      range-type="end">
    </UsaDatePicker>`,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDateRangePicker, UsaDatePicker },
  props: Object.keys(argTypes),
  setup() {
    const startDate = ref('')
    const endDate = ref('')
    return { ...args, startDate, endDate }
  },
  template: `<UsaDateRangePicker>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
  </UsaDateRangePicker>`,
})

export const DefaultDateRangePicker = DefaultTemplate.bind({})
DefaultDateRangePicker.args = {
  ...defaultProps,
}
DefaultDateRangePicker.storyName = 'Default'
