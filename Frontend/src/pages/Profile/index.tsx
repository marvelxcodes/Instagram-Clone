import { FC } from 'react'
import './style.sass'
import { component } from './components'
import { useParams } from 'react-router-dom'

type ProfileProps = {

}

const Profile: FC<ProfileProps> = (props) => {
  const { userId } = useParams()
  return (
<div>
    
</div>
)}
export default Profile