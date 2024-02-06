import React,{useState} from "react";
import "./yoga.css"
import { useRef} from 'react'
import yogaimg from "../../images/yoga.gif"
import catpose from "../../images/catyoga.jpg"
import Modal_patients from "./Modal_Patients.js";
import heading from "../../images/heading.png"
const yoga = [
    {
      id: 1,
      imageUrl1: catpose,
      title: 'Cat Pose (Marjaryasana)',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.'
      
    },
    {
        id: 2,
        imageUrl1: catpose,
        title: 'Cat Pose (Marjaryasana)',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.'
        
      },
      {
        id: 2,
        imageUrl1: catpose,
        title: 'Cat Pose (Marjaryasana)',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.'
        
      },
      {
        id: 2,
        imageUrl1: catpose,
        title: 'Cat Pose (Marjaryasana)',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.'
        
      },
]
const Yoga = () => {
  const [openModal, setOpenModal] = useState(false)
    const cancelButtonRef = useRef(null)
    const handleyoga = () => {
      setOpenModal(true)
    }
    return (
        <>
    <section className="overflow-hidden yogabox sm:grid sm:grid-cols-2 sm:items-center p-16">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#list"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Yoga"
    src={yogaimg}
    className="h-[200%] w-[200%] object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
<section className='sec2' id="list">
<img src={heading} className="heading mx-auto w-90 h-40"/>
    <Modal_patients openModal={openModal} setOpenModal={setOpenModal} cancelButtonRef={cancelButtonRef}/>
<div className="card list mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
>
{yoga.map((yoga) => (
    <div className="card group relative block bg-black p-1 m-1"
    onClick={handleyoga}>
    <img
      alt="Developer"
      src={yoga.imageUrl1}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />
  
    <div className="relative p-1 sm:p-2 lg:p-3">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{yoga.id}</p>
  
      <p className="text-xl font-bold text-white sm:text-2xl">{yoga.title}</p>
  
      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div
          className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p className="text-sm text-white">
              {yoga.description}
          </p>
        </div>
      </div>
    </div>
  </div>
            ))}
</div>
</section>
</>
    )
}
export default Yoga;