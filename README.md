# Joe's Portfolio Site

You can create a new portfolio project page by simply creating a new markdown (.md) file in the [src/content/projects](src/content/projects) directory. 
The link the the page is the same as the name of the file.

The *frontmatter* which is between the two --- is used to set specific details like the cover photo or title. See the existing examples for more details.  
Any text after this is the main body of the page.


Any images should be placed in the [public/assets/images](public/assets/images) folder.  
Everything else you *shouldn't* have to touch.  

## Development Instructions

*These can be ignored unless you want to run the website locally.

### Tech Stack

- Typescript
- React
- Vite

### Get Started

```bash
npm install
npm run dev
```