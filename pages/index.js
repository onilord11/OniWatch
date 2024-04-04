import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="twitter:title"
          content="OniTV"
        />
        <meta
          name="twitter:description"
          content="Discover your new favorite anime or manga title! OniTV offers a library of high-quality content, accessible on any device and without any interruptions."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="description"
          content="Enjoy watching some ad free anime."
        />
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/en",
      permanent: false,
    },
  };
}
