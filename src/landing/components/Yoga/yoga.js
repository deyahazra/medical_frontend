import React,{useState} from "react";
import "./yoga.css"
import yogaimg from "../../../images/yoga.gif"
import heading from "../../../images/heading.png"
import { useNavigate } from 'react-router-dom';
import downdog from "../../../images/downdog.jpg"
import cobra from "../../../images/Cobra.avif"
import tree from "../../../images/tree.webp"
import chair from "../../../images/chair.webp"
import shoulder from "../../../images/shoulder.jpg"
import warrior from "../../../images/warrior.webp"
import triangle from "../../../images/triangle.webp"
import catPose from "../../../images/catyoga.jpg"
import bridgePose from "../../../images/bridge.webp"
import standingForwardBend from "../../../images/sfb.webp"
import puppyPose from "../../../images/puppy.jpg"
import ploughPose from "../../../images/plough.jpg"
const yoga = [
  {
    id: 1,
    imageUrl1: downdog,
    title: 'Downward Dog',
    description: 'A powerful inversion to lengthen your spine and strengthen your entire body.',
  },
  {
    id: 2,
    imageUrl1: cobra,
    title: 'Cobra',
    description: ' Rise from your hands and heart to open your chest and shoulders.',
  },
  {
    id: 3,
    imageUrl1: tree,
    title: 'Tree Pose',
    description: 'Find balance and focus while rooting into the earth like a grounded tree.',
  },
  {
    id: 4,
    imageUrl1: chair,
    title: 'Chair Pose',
    description: 'Build strength and stability in your legs and core with this active standing pose.',
  },
  {
    id: 5,
    imageUrl1: shoulder,
    title: 'Shoulder Stand',
    description: 'Inverted bliss, supported by your arms to boost circulation and calm the mind.',
  },
  {
    id: 6,
    imageUrl1: warrior,
    title: 'Warrior Pose',
    description: 'Channel your inner warrior, finding power and grace in a grounded lunge.',
  },
  {
    id: 7,
    imageUrl1: triangle,
    title: 'Triangle Pose',
    description: 'Open your sides and reach deep, creating space and stability in your body.',
  },
  {
    id: 8,
    imageUrl1: catPose,
    title: 'Cat Pose',
    description: 'Flow with your breath, moving through gentle spinal curves and stretches.',
  },
  {
    id: 9,
    imageUrl1: bridgePose,
    title: 'Bridge Pose',
    description: 'Rejuvenate your back and open your heart with this gentle supported arch.',
  },
  {
    id: 10,
    imageUrl1: standingForwardBend,
    title: 'Standing Forward Bend',
    description: 'Release tension and connect with your inner stillness in a graceful fold.',
  },
  {
    id: 11,
    imageUrl1: puppyPose,
    title: 'Puppy Pose',
    description: 'Find comfort and calm in this child-like pose, resting your forehead on the ground.',
  },
  {
    id: 12,
    imageUrl1: ploughPose,
    title: 'Plough Pose',
    description: 'A deeper inversion to calm the mind, improve digestion, and stretch the neck and spine.',
  },
];
const Yoga = () => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState(false)
    // const cancelButtonRef = useRef(null)
    const handleYoga = (yogaName) => {
      navigate('/yoga_cam', { state: { yogaName } });
    }
    return (
        <>
    <section className="overflow-hidden yogabox sm:grid sm:grid-cols-2 sm:items-center p-16">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Unleash Your Inner Yogi with MedVita's Posture-Perfect Yoga Guide
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Achieve alignment, deepen your practice, and unlock the full potential of yoga with MedVita's innovative posture validation feature. Whether you're a seasoned yogi or just starting your journey, MedVita seamlessly guides you towards safer, more effective poses
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
<section className='sect2' id="list">
<img src={heading} className="heading mx-auto w-90 h-40"/>
    {/* <Modal_patients openModal={openModal} setOpenModal={setOpenModal} cancelButtonRef={cancelButtonRef}/> */}
<div className="card list mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
>
{yoga.map((yoga) => (
    <div className="card group relative block bg-black p-1 m-1"
    onClick={() => handleYoga(yoga.title)}>
    <img
      alt="Developer"
      src={yoga.imageUrl1}
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />
  
    <div className="relative p-1 sm:p-2 lg:p-3">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{yoga.id}</p>
  
      <p className="text-xl font-bold text-gray-800 sm:text-2xl">{yoga.title}</p>
  
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