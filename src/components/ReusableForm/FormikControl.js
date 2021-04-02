import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input': return <Input {...rest} />
    case 'textarea':
    case 'select': return <Select {...rest} />
    case 'radio': return <Radio {...rest} />
    case 'checkbox': return <Checkbox {...rest} />
    case 'date': return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl