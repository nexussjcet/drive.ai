import Image from "next/image";

const Dash = async () => {
  return (
    <div className="flex h-full items-center justify-center text-center">
      <Image
        className="grayscale-[50%]"
        src="/illu.jpg"
        alt="Empty"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Dash;
