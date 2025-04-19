/* Farhan Akhtar */
import '../CSS/home.css'
import pile from '../images/pile.png'
import nvidia from '../images/nvidia.png'
import radeon from '../images/radeon.png'

function Home(){
    return(
        <>
        <div id="greeting">
            <div>
                <h1>Welcome</h1>
                <p>Trying to make a decision on which graphics card to buy?</p>
                <p>We got you covered.</p>
            </div>
            <div>
                <img src={pile} alt='A pile of cards' />
            </div>
        </div>
        <div id='nvidiaDesc'>
            <div>
                <h1>Nvidia</h1>
                <p>NVIDIA GeForce RTX™ powers the world’s fastest GPUs and the ultimate platform for gamers and creators. Enjoy beautiful ray tracing, AI-powered DLSS, and much more in games and applications, on your desktop, laptop, in the cloud, or in your living room.</p>
                <p>+ Ray Tracing</p>
                <p>+ More Power Efficient</p>
                <p>+ DLSS</p>
                <p>+ AI Acceleration</p>
                <p>+ Professional Software Compatibility</p>
            </div>
            <div>
                <img src={nvidia} alt='nvidia card' />
            </div>
        </div>
        <div id='AMDDesc'>
            <div>
                <img src={radeon} alt='AMD card' />
            </div>
            <div>
                <h1>AMD</h1>
                <p>AMD graphics cards like the Radeon RX 9070 XT provide excellent 4K performance, but without a price tag that regularly sneaks into the $1500+ range. And if you’re in the market for a mid-range graphics card for 1440p, Team Red particularly shines, delivering excellent performance for the money you’re spending.</p>
                <p>Higher performance per dollar +</p>
                <p>Next Generation Features +</p>
                <p>More VRAM +</p>
                <p>Good Linux Support +</p>
                <p>Lower Power Consumption +</p>
            </div>
        </div>
        </>
    );
}

export default Home;
