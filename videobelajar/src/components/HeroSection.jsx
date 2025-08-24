import Button from "../components/Button";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center !px-5 md:!px-30 !py-7 md:!py-16">
      <section className="flex flex-col gap-4 relative md:w-full rounded-lg bg-[url('src/assets/hero-image.jpg')] bg-cover bg-center !px-5 !py-16 md:!px-35 md:!pt-20.5 md:!pb-16">
        <h1 className="relative text-white text-2xl md:text-5xl text-center font-bold z-10">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="relative text-[14px] md:text-base  text-white text-center z-10">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Anda juga dapat berpartisipasi dalam
          latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>
        <div className="flex justify-center items-center relative z-10">
          <Button
            variant="primary"
            className="text-[14px] md:text-base !p-0 md:!p-2 w-full md:w-92 "
          >
            Temukan Video Course untuk Dipelajari!
          </Button>
        </div>

        <div className="absolute inset-0 z-0 bg-black opacity-80 flex flex-col items-center justify-center text-center !px-6 rounded-lg"></div>
      </section>
    </div>
  );
}
