import React, { useState, useEffect } from "react";
import Navs from "../compo/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profilehero from "./Profilehero";

function Profile() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navs scrolled={scrolled} />
      <Profilehero />
    </div>
  );
}
export default Profile;
