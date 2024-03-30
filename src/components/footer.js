import { myLinkedInProfile } from "./urlConstants";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto text-center">
        Created By 
        <a href={myLinkedInProfile} className="text-blue-600 hover:underline"> Kapil Yadav</a>
        <span className="px-2">2024 Zwigato</span>
      </div>
    </div>
  );
};

export default Footer;
