import './Card.css'
import { UilTimes} from '@iconscout/react-unicons'

const Card = (props) => {
  return (
    <div className="snip1214">
      <div className="plan">
        <h3 className="plan-title">
          {props.title}
        </h3>
        <div className="plan-cost">
          <span className="plan-price">{props.price}</span>
          <span className="plan-type">{props.duration}</span>
          <p className='Level'>{props.level}{props.icon}</p>
        </div>
        <ul className="plan-features">
          <li><i className="ion-checkmark"></i>{props.empty1}</li>
          <li><i className="ion-checkmark"></i>{props.empty2}</li>
          <li><i className="ion-checkmark"></i>{props.empty3}</li>
          <li><i className="ion-checkmark"> </i>{props.empty4}</li>
          <li><i className="ion-checkmark"></i>{props.empty5}</li>
        </ul>
        <div class="plan-select"><button onClick={()=>props.handleprice()}>Select Plan</button></div>
      </div>
    </div>
  )
}

export default Card

Card.defaultProps = {
  duration: " DT / Month", 
  empty1: <UilTimes />,
  empty2: <UilTimes />,
  empty3: <UilTimes />,
  empty4: <UilTimes />,
  empty5: <UilTimes />,
} 