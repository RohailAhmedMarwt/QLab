import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className=" container text-white">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                        <h2 className="Footer-hading">Development</h2>
                        <p>Mern stack</p>
                        <p>Node Js</p>
                        <p>React Js</p>
                        <p>Express Js</p>
                        <p>Apollo Client</p>
                        <p>Mongodb</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                        <h2 className="Footer-hading">Design</h2>
                        <p>Figma</p>
                        <p>Adobe XP</p>
                        <p>Wordpress</p>
                        <p>Canva</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                        <h2 className="Footer-hading">Stem Wizard Academia</h2>
                        <p>Stem Education</p>
                        <p>Air Academics</p>
                        <p>Stem Wizard</p>
                        <p>Online Education</p>
                    </div><div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                        <h2 className="Footer-hading">Subscribe to our newslatter</h2>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"/>;
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Sent</button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}
export default Footer