import { ref } from 'vue'
import UsaDateRangePicker from './UsaDateRangePicker.vue'
import UsaDatePicker from '@/components/UsaDatePicker'

const defaultProps = {}

export default {
  component: UsaDateRangePicker,
  title: 'Components/UsaDateRangePicker',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: `<UsaDatePicker
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
  render: args => ({
    components: { UsaDateRangePicker, UsaDatePicker },
    props: [],
    setup() {
      const startDate = ref('')
      const endDate = ref('')
      return { args, startDate, endDate }
    },
    template: `<UsaDateRangePicker>
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaDateRangePicker>`,
  }),
}

export const DefaultDateRangePicker = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateRangePicker>
        <UsaDatePicker
          label="Start Date"
          v-model="startDate"
          range-type="start">
        </UsaDatePicker>
        <UsaDatePicker
          label="End Date"
          v-model="endDate"
          range-type="end">
        </UsaDatePicker>
      </UsaDateRangePicker>`,
      },
    },
  },
}
