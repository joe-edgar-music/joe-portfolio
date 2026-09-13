import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
        <footer className="py-6 px-4 lg:px-0 text-center">
            <div className="flex justify-between items-center">
                <p>&copy; 2026 Joe Edgar</p>
                <SocialLinks />
            </div>
            <a 
                href="https://turnlings.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline"
            >
                Website made by Ryan Turner
            </a>
        </footer>
    )
}