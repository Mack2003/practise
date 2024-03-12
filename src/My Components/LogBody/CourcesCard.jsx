import image1 from '../Course1.png'
import './CourcesCard.css'

export default function CourcesCard({title, image, side}) {

  return (
    <article id='course' className='course'>
      
      <div align='center'>
        <img src={image} alt="Not found" />
      </div>
      <div className='text-div' style={{ backgroundColor:'rgb(7 81 92)', borderRadius:'.5rem', boxShadow:'rgb(97 97 97 / 41%) 0px 0px 10px 4px'}}>
      <div>
        <h5 className='course-title'>{title}</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate harum suscipit voluptate ducimus! Neque fuga tempora quibusdam explicabo deserunt odit repudiandae minima, quis perspiciatis. Nesciunt, accusamus. Vel id vitae aspernatur distinctio tempora cum voluptatum consequatur? Sit aliquid tempora quae amet non quo deserunt nemo, voluptatibus qui at corrupti reprehenderit sapiente.</p>
        </div> 
      </div>
    </article>
  )
}
