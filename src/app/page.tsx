import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <section id="about" className="py-20 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto text-lg text-foreground/80">
            <p>I believe there are no problems, only opportunities to discover something new. &ldquo;Creativity isn&rsquo;t just a skill, it&rsquo;s how I see the world.&rdquo;</p>
          </div>
        </div>

      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-foreground/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              {/* Contenedor para la vista previa del proyecto */}
              <div className="aspect-video bg-foreground/10 relative">
                {/* Asegúrate de agregar una imagen o un video de vista previa del proyecto */}
                <a href="https://pay.coins-colombia.com/auth/login" target="_blank" rel="noopener noreferrer">
                  <img
                    src="path_to_image_or_screenshot.png" // Cambia por la imagen de vista previa de tu proyecto
                    alt="CoinsPay Project Screenshot"
                    className="object-cover w-full h-full"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="https://pay.coins-colombia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {"CoinsPay (WIP)"}
                  </a>
                </h3>
                <p className="text-foreground/70 mb-4">
                  CoinsPay is a cutting-edge payment solution that allows users to easily send and receive digital payments using cryptocurrencies.
                  I worked on developing the front-end application and part of the back-end app, integrating technologies like React, Node.js, and Next.js to build a seamless user experience.
                </p>
                <div className="flex gap-2">
                  {/* Lista de tecnologías */}
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm dark:bg-green-900 dark:text-green-200">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm dark:bg-purple-900 dark:text-purple-200">Next.js</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm dark:bg-red-900 dark:text-red-200">Nest.js</span>
                </div>
              </div>
            </div>


            {/* Project Card 2
            <div className="bg-foreground/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-foreground/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-foreground/70 mb-4">Brief description of the project and your role in it.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm dark:bg-purple-900 dark:text-purple-200">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm dark:bg-yellow-900 dark:text-yellow-200">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            {/* <div className="bg-foreground/5 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-foreground/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-foreground/70 mb-4">Brief description of the project and your role in it.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm dark:bg-red-900 dark:text-red-200">Vue.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm dark:bg-indigo-900 dark:text-indigo-200">Firebase</span>
                </div>
              </div>
            </div>  */}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <p className="text-center text-foreground/70">React, Vite, Next.js</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold mb-2">Backend</h3>
              <p className="text-center text-foreground/70">Node.js, Nest.js, SQL</p>
            </div>
            {/* <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-center text-foreground/70">Figma, Tailwind CSS</p>
            </div> */}
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Tools</h3>
              <p className="text-center text-foreground/70">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <a href="mailto:your.email@example.com" className="flex items-center space-x-3 text-lg hover:text-blue-600 transition-colors">
                <span>📧</span>
                <span>jepierre.dev@hotmail.com</span>
              </a>
              <div className="flex space-x-6">
                <a href="https://github.com/Jepierre88" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-foreground/70 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/jean-ortiz-60460427a" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-foreground/70 transition-colors">LinkedIn</a>
                {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-foreground/70 transition-colors">Twitter</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
