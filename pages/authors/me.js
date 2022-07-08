import Image from "next/image";

export default function Me() {
  return (
    <>
      <h1>Hi, im pedro</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Pedro Leoni"
      />
    </>
  );
}
