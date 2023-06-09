/*arrange data independently */
import { IoBarChartSharp } from 'react-icons/io5'
import { FaWpforms } from 'react-icons/fa'
import { MdQueryStats } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'add job', path: 'add-job', icon: <FaWpforms /> },
  { id: 3, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
]
export default links
