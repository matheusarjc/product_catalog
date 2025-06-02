export default function Banner() {
  return (
    <section
      // Removido overflow-hidden para permitir que a imagem saia dos limites
      className="mx-16 max-w-7xl rounded-2xl mt-16 flex flex-col md:flex-row items-center justify-between px-12 relative bg-cover bg-center overflow-visible h-80"
      style={{ backgroundImage: "url('/app/assets/image.png')" }} // Ajuste o caminho se necessário
      aria-label="Day Offer">
      {/* Container interno para garantir que o conteúdo fique sobre a imagem de fundo */}
      <div className="relative z-10 flex md:flex-row items-center justify-between w-full gap-8 md:gap-12">
        {/* Texto à esquerda */}
        <div className="flex flex-col items-start text-black">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-serif font-semibold leading-tight mb-3">
            20% OFF ONLY TODAY AND
            <br className="hidden md:block" /> GET 10% CASHBACK
          </h2>
          <p className="text-base md:text-lg max-w-md font-serif">
            Just for today, enjoy the offers and elevate your style!
          </p>
        </div>

        {/* Imagem à direita */}
        {/* Container da imagem ajustado para permitir posicionamento */}
        <div className="flex justify-center md:justify-end self-center md:self-end relative">
          <img
            src="/app/assets/banner-model.png" // Ajuste o caminho se necessário
            alt="Homem de moletom amarelo olhando para o lado"
            // Adicionado posicionamento relativo e margem superior negativa para mover a imagem para cima
            className="relative -mt-16 md:-mt-24 lg:-mt-[13rem] w-64 md:w-80 lg:w-[22rem] h-auto object-contain select-none"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
