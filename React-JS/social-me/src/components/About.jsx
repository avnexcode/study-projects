import Typed from "react-typed";
const About = () => {
  return (
    <div className="w-full mt-1 flex flex-col justify-center items-center font-fontText dark:text-white text-slate-800">
      <Typed
        className="text-xl text-center font-fontHead"
        strings={["Muhammad Fauzi Nur Aziz"]}
        loop
        typeSpeed={100}
        backSpeed={70}
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
      />
      <h3
        className="text-slate-900 dark:text-white text-md font-semibold"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        Mahasiswa |{" "}
        <span className="text-red-600 dark:text-red-500">Pengangguran</span>
      </h3>
      <p
        className="text-center mt-5 py-5 border-t-8 border-b-8 border-double border-[#a71580] dark:border-[#c22e9a] rounded-2xl text-black dark:text-white text-base"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-delay="1000"
      >
        Seseorang yang tidak ada kegiatan tetapi tidak nganggur - nganggur
        banget. Kadang develop website, kadang juga mencintaimu. Tapi yang
        sering, develop website sambil mencintaimu. Ada yang lebih sering yaitu
        sholat lima waktu.
      </p>
    </div>
  );
};
export default About;
