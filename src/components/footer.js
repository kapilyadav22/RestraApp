// Footer component for footer section

import { myLinkedInProfile } from "./urlConstants";
import '../styling/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center"> Created By 
      <a href= {myLinkedInProfile}> Kapil Yadav</a>
      <span className="pr-2"> 2023 Zwigato</span>
      </div>
    </div>
  );
};

export default Footer;
