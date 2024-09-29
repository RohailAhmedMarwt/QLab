import { developers } from "./data"
import { catagories } from "./data"
import { projects } from "./data"
import { Technologies } from "./data"
import { Advantages } from "./data"
import "./Home.css"
const Home = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 left-child text-white">
                        <h3>Not Just Another Digital Agency</h3>
                        <p>We specilaize in providing innovative digital solutions to help your business grow and succeed in the ever-changing online landscape.</p>
                        <button className="btn-home">Explore</button>
                        <button className="btn-home">Get a Quote</button>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-white text-center right-child">
                        <div className="row">
                            <h2>Top Categories</h2>
                            <hr />
                            {
                                catagories.map((abc) => (
                                    <>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center text-white">
                                            <img src={abc.img} alt="" />
                                            <h3>{abc.name}</h3>
                                        </div>
                                    </>
                                )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluide text-center text-white">
                <div className="row">
                    <h2 className=" mt-5 mb-5">Top Developers in our team</h2>
                    <hr />
                    {
                        developers.map((developerss) => (
                            <>
                                <div className="col-lg-2 col-md-4 col-sm-6 col-6 text-center text-white  developerr">
                                    <img src={developerss.img} alt="" />
                                    <h4>{developerss.name}</h4>
                                    <button className="btn btn-home">linkedin</button>
                                </div>
                            </>
                        )
                        )
                    }
                </div>
            </div>


            <div className="pics row text-center text-white">
                <h2 className="mt-5 mb-5">Projects we mostly work on</h2>
                <hr />

                {
                     projects.map((projectss) => (
                            <>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center  text-white">
                                    <img src={projectss.img} alt="" />
                                    <h4>{projectss.name}</h4>
                                    <button className="btnb btn-home">visit</button>
                                </div>
                            </>
                        )
                        )
                    }
                    </div>

            <div className="buttn text-center text-white">
                <h2 class=" mt-5 mb-5">Technologies we work in</h2>
                <hr />
                <div className="buttnn  container mt-5 mb-5 text-white">
                    <button className=" btn-home col-lg-2 col-md-5 col-sm-6 col-6">All</button>
                    <button className=" btn-home col-lg-2 col-md-5 col-sm-6 col-6">PM</button>
                    <button className=" btn-home col-lg-2 col-md-5 col-sm-6 col-6">Development</button>
                    <button className=" btn-home col-lg-2 col-md-5 col-sm-6 col-6">Design</button>
                </div>
            </div>
            <div className="row">
            {
                     Technologies.map((tech) => (
                            <>
                                <div className="col-lg-4 col-md-3 col-sm-12 col-12 tech text-center text-white">
                                    <img src={tech.img} alt="" />
                                </div>
                            </>
                        )
                        )
                    }
                    </div>
            <div className="picsss text-center text-white row">
                <h2 className="mb-5 mt-5">Competetive Advantages</h2>
                <hr />
                {
                     Advantages.map((advg) => (
                            <>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center  text-white">
                                    <img src={advg.img} alt="" />
                                    <h3>{advg.name}</h3>
                                <p>{advg.para}</p>
                                </div>
                            </>
                        )
                        )
                    }
            </div>


            <div className=" row mt-5 mb-5 lastimg text-white">
                <div className="picc text-center left-chile col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src="/images/about.svg" alt="" />
                </div>
                <div className="right-chile mb-5 mt-5 col-lg-6 col-md-6 col-sm-12 col-12 text-white,">
                    <h3>Create, Sell, Well and collect your best NFTs with us very fast</h3>
                    <p>Create your art or other unique digital assets. The first step in creating an NFT is to choose what content you want to turn into an NFT.</p>
                    <button className="btn-home">Connect Wallent</button>
                </div>
            </div>

        </>

    )
}

export default Home