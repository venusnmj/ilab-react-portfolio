import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <body className={styles.body}>
      <p className={styles.header_text_1}>Hello I'm</p>
      <p className={styles.header_text_2}>MARS</p>
      <p className={styles.header_text_3}>Student at NTU</p>
      <div className={styles.button_container}>
        <a className={styles.cv} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Google ME</a>
        <a className={styles.contact} href="https://www.google.com" target="_blank">Google You</a>
      </div>
      
      <div className={styles.photo_container}>
        <img className={styles.line} src="/icons/line.svg"></img>
        <img className={styles.planet} src="https://cdn.mos.cms.futurecdn.net/kCbvedK262UGLXCLFeW5oS.jpg"></img>
      </div>
      <p className={styles.about_me}>We're no strangers to love
You know the rules and so do I (do I)
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching, but you're too shy to say it (say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it
And if you ask me how I'm feeling</p>
<div className={styles.photo_container}>
<img className={styles.line} src="/icons/line.svg" alt=""></img>
<p className={styles.footer}>Created with love in NTU</p>
</div>
    </body>
  )
}
