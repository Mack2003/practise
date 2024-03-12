import CourcesCard from "./CourcesCard";
import './Body.css'
import { useEffect } from "react";
import Footer from "../Footer";

export default function Body() {


  useEffect(() => {
    const courcesCard = Array.from(document.getElementsByClassName('text-div'))
    const observer = new IntersectionObserver(data => {
      data.forEach(item => {
        item.target.classList.toggle('card-annimation', item.isIntersecting)
      })
    }, {
      threshold: .5
    })

    courcesCard.forEach(element => {
      observer.observe(element)
    })

  }, [])


  const courseData = [
    {
      image: 'https://d2pas86kykpvmq.cloudfront.net/images/index/richie_freebie.png',
      title: 'Full stack developement',
      side: 'left'
    },
    {
      image: 'https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298b303b93d91_3d-tb-education.png',
      title: 'Data science',
      side: 'right'
    },
    {
      image: 'https://unitystr.com/wp-content/uploads/2022/01/1__1__preview_rev_1-1.png',
      title: 'Cloude development',
      side: 'left'
    },
    {
      image: 'https://cdn3d.iconscout.com/3d/premium/thumb/ai-brain-5796837-4863005.png',
      title: 'AI developement',
      side: 'right'
    }
  ]


  return (
    <>
      <div className="main-body">
        <section className="course-body">
          {
            courseData.map((item, index) => {
              return <CourcesCard key={index} title={item.title} image={item.image} side={item.side} />
            })
          }
        </section>
        <section className="teacher-banner">
          hay
        </section>
        <section style={{ backgroundColor: 'red', opacity: '.6' }} className="teacher-banner">
          hi
        </section>

      </div>
      <Footer />
    </>
  )
}
