import Button from "../components/Button";
import InputField from "./InputField";

export default function NewsLatterSection() {
  return (
    <div className="flex justify-center items-center !px-5 md:!px-30 !py-7 md:!py-16">
      <section className="flex relative md:w-full rounded-lg bg-[url('src/assets/newsletter.jpg')] bg-cover bg-center !px-5 !py-16 md:!px-35 md:!pt-20.5 md:!pb-16">
        <div className="relative flex flex-col gap-4  justify-center items-center z-10">
          <p className=" text-white text-base md:text-[18px] text-center font-semibold">
            NEWSLATTER
          </p>
          <h1 className=" text-white text-2xl md:text-5xl text-center font-bold ">
            Mau Belajar Lebih Banyak?
          </h1>
          <p className=" text-sm md:text-base text-white text-center ">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>

          <div className="relative z-10 flex justify-center items-center !w-full gap-4">
            <div className="flex flex-col gap-4">
              <InputField
                type="email"
                name="email"
                placeholder="Masukkan Emailmu"
                className="flex relative lg:!w-[750px] md:h-12 bg-white border-none rounded-lg"
              />

              <Button
                variant="secondary"
                className="md:absolute top-0.5 right-0.5 w-full lg:w-48 md:!h-11 md:!px-6 md:!py-2 text-sm  md:text-base font-medium rounded-lg  hover:bg-orange-600"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-black opacity-80 flex flex-col items-center justify-center text-center !px-6 rounded-lg"></div>
      </section>
    </div>
  );
}
