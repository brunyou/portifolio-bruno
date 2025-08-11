import DarkVeil from "./components/DarkVeil"; 
import SplitText from "./components/SplitText";
import TextType from "./components/TextType";
import CardSwap, { Card } from './components/CardSwap'
import { BrowserHeader } from "./components/BrowserHeader";

export default function Home() {
  return (
    <main>

      <section 
        className="relative h-screen overflow-hidden"
      >
       
        <div 
          className="absolute inset-0 z-0"
        >
          <DarkVeil 
            noiseIntensity={0.05}
            warpAmount={0.2}
          />
        </div>

          <div 
            className="relative z-10 flex flex-col h-full items-center justify-center gap-4"
          >
          
          <SplitText
            text="Bruno Pereira"
            className=" font-bold text-white md:text-8xl text-center drop-shadow-[0_0_16px_#ffffff70]"
            delay={10}
            duration={2}
            ease="elastic.out(1,0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
          <TextType
            text={"Desenvolvedor web e mobile fullstack."}
            className="text-3xl text-start drop-shadow-[0_0_16px_#ffffff70]"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </section>

          <section className="h-screen bg-gradient-to-b from-black to-[#060010] flex items-center justify-center p-8">
            <div className="relative flex items-center justify-between w-[85%] h-[75%] rounded-[25px] border-2 border-[#530ECF] p-12">

              <div className="w-2/5">
                <h2 className="text-4xl font-bold text-white">Websites no ar</h2>
                <p className="mt-4 text-zinc-300">
                  Aproveitando uma identidade visual ou criando uma nova do zero, deixando seu negócio mais visível e chamativo.
                </p>
              </div>

              <div className="w-3/5 h-full flex justify-center items-center rounded-2xl overflow-hidden shadow-inner bg-black/20">
                <CardSwap
                  width={600}
                  height={400}
                  cardDistance={100}
                  verticalDistance={100}
                  delay={3000}
                  pauseOnHover={false}
                >
                  <Card>
                    <BrowserHeader url="stuttgartmotorsespecializada.com" />
                    <div className="p-4">
                      <h3 className="font-bold text-white">Oficina Especializada</h3>
                      <p className="text-zinc-400 text-sm mt-1">Site institucional com sistema de agendamento.</p>
                    </div>
                  </Card>
                  <Card>
                    <BrowserHeader url="advocacia-exemplo.com" />
                    <div className="p-4">
                      <h3 className="font-bold text-white">Escritório de Advocacia</h3>
                      <p className="text-zinc-400 text-sm mt-1">Design sóbrio e profissional para transmitir confiança.</p>
                    </div>
                  </Card>
                  <Card>
                    <BrowserHeader url="meu-portfolio.com" />
                    <div className="p-4">
                      <h3 className="font-bold text-white">Portfólio Pessoal</h3>
                      <p className="text-zinc-400 text-sm mt-1">Um lugar para exibir projetos e habilidades.</p>
                    </div>
                  </Card>
                </CardSwap>
              </div>

            </div>
          </section>
    </main>
  );
}
