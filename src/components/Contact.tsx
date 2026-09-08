import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section className="flex flex-col justify-content-center gap-4 py-4" id="contact">
      <h2 className="text-2xl tracking-wider">CONTACT</h2>
      <p className="text-lg">
        Feel free to reach out to me via email at <a href="mailto:joe@example.com" className="text-blue-500 hover:underline">
          joe@example.com
        </a>
      </p>
      <p className="text-lg">
        Alternatively, you can find me on social media:
      </p>
      <SocialLinks />
    </section>
  );
}   