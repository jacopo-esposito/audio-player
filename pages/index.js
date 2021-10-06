import Head from 'next/head'
import AudioPlayer from '../components/AudioPlayer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Audio Player</title>
      </Head>
      <AudioPlayer />
    </div>
  )
}

export default Home;
