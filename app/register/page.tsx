"use client";

import RegisterNav from "@/components/common/RegisterNav";
import { useState } from "react";

function Register() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIframeLoad = () => {
        setIframeLoaded(true);
      };

  return (
    <div>
      <RegisterNav />
     <div className="bg-white mt-12">
     {!iframeLoaded && (
        <div
          className="w-8 h-8 bg-center bg-no-repeat bg-cover mx-auto mt-[100px]"
          style={{ backgroundImage: `url('/images/loader.gif')` }}
        />
      )}
        <iframe
            aria-label="Double-G Student Application Form"        
            loading="lazy"
            width="100%"
            height="800px"
            frameBorder="0"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowFullScreen
            onLoad={handleIframeLoad}
            src="https://forms.zohopublic.com/oree/form/FullStack/formperma/BBzNio8hVHV5DpSCa4av-x1YVvpk_gekrVKEqzqKYUI"
        ></iframe>
     </div>
    </div>
  )
}

export default Register