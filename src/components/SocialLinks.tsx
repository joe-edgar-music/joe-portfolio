import { IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';

export default function SocialLinks() {
  const links = [
    { name: "LinkedIn", icon: <IconBrandLinkedin size={32} />, url: "https://www.linkedin.com/in/joe-edgar/" },
    { name: "Instagram", icon: <IconBrandInstagram size={36} />, url: "https://www.instagram.com/joeedgar04" },
    { name: "YouTube", icon: <IconBrandYoutube size={36} />, url: "https://www.youtube.com/@joeedgar04" },
  ]

  return (
    <div className="flex space-x-2 items-center justify-center">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}