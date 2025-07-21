import DarkVeil from "./components/DarkVeil"; 
import SplitText from "./components/SplitText";
import TextType from "./components/TextType";


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

      <section className="h-screen bg-gradient-to-b from-black from-20% to-[#060010] p-8">
        <h2 className="text-4xl font-bold text-white">Outra Seção</h2>
        <p className="mt-4 text-white">
          Aqui você pode adicionar o restante do seu portfólio, projetos, sobre mim, etc.
          O efeito do DarkVeil ficou contido apenas na primeira seção acima.
        </p>
      </section>
    </main>
  );
}