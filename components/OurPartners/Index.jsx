import Link from "next/link";
import Image from "next/image";
import IBM from "../../images/logos/IBM.png";
import Qiskit from "../../images/logos/Qiskit.png";
import CQTech from "../../images/logos/CQTech.png";
import atom from "../../images/shapes/atom.png";
import globe from "../../images/shapes/globe.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import SectionTitle from "../shared/SectionTitle";

const OurPartners = () => {
  const partners = [
    {
      text: "Coming Soon",
      src: '',
      redirect: "",
    }
  ];
  return (
    <section id="our-partners" className="px-4 lg:px-11 2xl:px-16 bg-qiskit-black/95 pt-12 lg:pt-24">
      <SectionTitle title={"Our Partners"} />
      <div className="flex flex-row">
        <div className=" w-1/12 ml-6">
          <div className=" hidden lg:flex">
            <div className="mt-5">
              <Image src={globe} alt="globe" height={50} width={50} />
            </div>
            <div className="mt-72">
              {" "}
              <Image src={atom} alt="atom" height={50} width={50} />
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <div className="flex flex-wrap items-center justify-center text-qiskit-white">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  partner.space ? " lg:mx-80 md:mx-auto " : "mx-auto"
                } mx-auto my-10  `}
              >
                <div className={`w-72 rounded-lg md:w-96`}>
                  <p className=" text-center 2xl:text-lg">{partner.text}</p>
                </div>
                <Link href={partner.redirect}>
                  <a target="__blank">
                    <Image src={partner.src} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className=" hidden lg:flex  md:ml-32  md:-mt-40  opacity-50">
            <Image src={computer} height={50} width={50} />
          </div>
        </div>
        <div className="w-1/12">
          <div className="hidden lg:flex lg:flex-col">
            <div className="justify-end -mt-12 ">
              <Image src={GDGAlgiers} alt="GDGAlgiers" />{" "}
            </div>
            <div className="mt-96">
              <Image src={globe} alt="globe" height={50} width={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
