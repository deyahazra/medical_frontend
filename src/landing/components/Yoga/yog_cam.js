import React,{useState,useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./yoga.css"
import ws from 'ws';
import Webcam from 'react-webcam';
import cam from "../../../images/cam.png"
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
const Yog_cam = () => {
  let location = useLocation();
  let yogaName = location.state.yogaName;
  let yogaNames = "";
  if (yogaName === "Downward Dog") {
    yogaNames = "downward_dog";
  }
  if (yogaName === "Cobra") {
    yogaNames = "cobra";
  }
  if (yogaName === "Tree Pose") {
    yogaNames = "tree";
  }
  if (yogaName === "Chair Pose") {
    yogaNames = "chair";
  }
  if (yogaName === "Shoulder Stand") {
    yogaNames = "shoulder_stand";
  }
  if (yogaName === "Warrior Pose") {
    yogaNames = "warrior_pose";
  }
  if (yogaName === "Triangle Pose") {
    yogaNames = "triangle_pose";
  }
  if (yogaName === "Cat Pose") {
    yogaNames = "cat_pose";
  }
  if (yogaName === "Bridge Pose") {
    yogaNames = "bridge_pose";
  }
  if (yogaName === "Standing Forward Bend") {
    yogaNames = "standing_forward_bend";
  }
  if (yogaName === "Puppy Pose") {
    yogaNames = "puppy_pose";
  }
  if (yogaName === "Plough Pose") {
    yogaNames = "plough_pose";
  }
  const [connection, setConnection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef(null);
    const webcamRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current;
        const video = webcamRef.current.video;
        const ctx = canvas.getContext('2d');
        canvas.width = video.width;
        canvas.height = video.height;
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;

            // Create a WebSocket connection
            const ws = new WebSocket('wss://med-ai-api.onrender.com/ws');
            // When the connection is open
            ws.addEventListener('open', () => {
              setIsLoading(false);
                console.log('WebSocket connection established');
                ws.send('cobra')
                setConnection(true);
                video.addEventListener('play', () => {
                  const canvasx = document.createElement('canvas');
                  const contextx = canvasx.getContext('2d');
                  canvasx.width = video.width;
                  canvasx.height = video.height;
  
                  setInterval(() => {
                      contextx.drawImage(video, 0, 0, canvasx.width, canvasx.height);
                      const imageData = canvasx.toDataURL('image/jpeg', 0.6); // Convert frame to base64
                      
                      fetch(imageData)
                          .then(res => res.blob())
                          .then(blob => ws.send(blob)); // Send the blob to the server
                  }, 1000); // Adjust the interval as needed
              });
            });

            // When the connection is closed
            ws.addEventListener('close', () => {
                console.log('WebSocket connection closed');
          
            });
            // When a new frame is available from the webcam
            

            ws.onmessage = function(event) {
                var blob = event.data;
                if (!blob.type) {
                    blob = new Blob([blob], { type: 'image/jpeg' });
                }

                // Create an object URL from the Blob
                var url = URL.createObjectURL(blob);

                var img = new Image();
                img.onload = function() {
                    // Draw the image onto the canvas
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                };
                img.src = url;
            };
        })
        .catch((error) => {
            console.error('Error accessing webcam:', error);
        });
}, []);
    return (
        <>
        <section
        style={{
            backgroundImage: `url(${cam})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        
        }}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
       
        <div style={{
        fontSize: '2rem', 
        fontWeight: '800', 
        textAlign: 'center',
        padding: '20px',
        }} 
        className="fontStyle font h-full w-full rounded-lg bg-green-100 bg-opacity-20 lg:col-span-2 d-flex justify-content-center align-items-center p-3">
        START YOUR YOGA SESSION
        {isLoading && <LoadingSpinner asOverlay/>}
        <Webcam 
        className="visi absolute w-full h-full p-4  mb-4 rounded-lg pb-8 "
        width='100%'
        height='100%'
        id="webcam"
        visibility="false"
        ref={webcamRef}
        /> 
         <canvas
          className="w-full h-full p-4  mb-4 rounded-lg pb-8"
          ref={canvasRef}
          width='100%'
          height='100%'
          id="canvas"
        />
        
        </div>
        <div className=" h-full w-full rounded-lg bg-gray-200 bg-green-100 bg-opacity-20">
           
        </div>
        </div>
        </section>
        <section 
        style={{
            backgroundImage: `url(${cam})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        
        }}className="text-black">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2>
            <p className="mt-4 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
              iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
              quibusdam, quos fuga minima.
            </p>
          </div>
      
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>
      
              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
      
                <p className="mt-1 text-sm text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                  possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
              </div>
            </div>
      
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>
      
              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
      
                <p className="mt-1 text-sm text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                  possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
              </div>
            </div>
      
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>
      
              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
      
                <p className="mt-1 text-sm text-balck">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                  possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
             
    )
}
export default Yog_cam
