import MainPage from "@/pageComponents/mainPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SSS',
}


export default function Home() {
  return (
    <>
      <MainPage></MainPage>
    </>
  );
}
