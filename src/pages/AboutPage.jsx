import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
       <div className="about">
        <h1>About this Project</h1>
        <p>React app to leave feedback from a product or service</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
       </div>
    </Card>
   
  )
}

export default AboutPage