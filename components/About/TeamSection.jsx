import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaGithub, FaPinterestP } from 'react-icons/fa';

const teamMembers = [
  {
    imgSrc: "/images/team/team-memb1.jpg",
    name: "Mark Frances",
    title: "MD",
    description: "3+ Years of Experience in PHP with good innovative Ideas",
    socialLinks: [
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaGooglePlusG /> },
      { href: "#", icon: <FaGithub /> },
      { href: "#", icon: <FaPinterestP /> }
    ]
  },
  {
    imgSrc: "/images/team/team-memb2.jpg",
    name: "Mark Frances",
    title: "MD",
    description: "3+ Years of Experience in PHP with good innovative Ideas",
    socialLinks: [
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaGooglePlusG /> },
      { href: "#", icon: <FaGithub /> },
      { href: "#", icon: <FaPinterestP /> }
    ]
  },
  {
    imgSrc: "/images/team/team-memb3.jpg",
    name: "Mark Frances",
    title: "MD",
    description: "3+ Years of Experience in PHP with good innovative Ideas",
    socialLinks: [
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaGooglePlusG /> },
      { href: "#", icon: <FaGithub /> },
      { href: "#", icon: <FaPinterestP /> }
    ]
  },
  {
    imgSrc: "/images/team/team-memb4.jpg",
    name: "Mark Frances",
    title: "MD",
    description: "3+ Years of Experience in PHP with good innovative Ideas",
    socialLinks: [
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaGooglePlusG /> },
      { href: "#", icon: <FaGithub /> },
      { href: "#", icon: <FaPinterestP /> }
    ]
  }
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet our Team</h2>
          <p className="text-gray-600 text-lg md:text-xl">Take a look at our innovative and experienced team</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-48 md:h-56 lg:h-64">
                  <Image
                    src={member.imgSrc}
                    alt={`${member.name} picture`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xl font-semibold mb-2">
                    {member.name} <span className="text-gray-500">- {member.title}</span>
                  </p>
                  <ul className="flex space-x-3 mb-4">
                    {member.socialLinks.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="text-gray-600 hover:text-gray-800 text-lg">
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
