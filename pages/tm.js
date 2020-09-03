import Layout from "./components/Layout";

export default function TalksAndMentorship() {
  return (
    <Layout>
      <div className="row mb-1">
        <div className="col-md-12">
          <p className="text-justify p-5">
          As a software engineer, I've not only worked with amazing companies creating software products, but also I've created different tech communities and support some others as a speaker, mentor, or co-organizer. As a self-taught engineer, the tech communities have been very helpful for my career and I try to support them as much as I can.
          </p>
        </div>
        <div className="col-md-12">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Django Girls San Diego 👩‍💻</strong>
              <p className="text-justify">
                In 2019 I was coach of the <a target="_blank" href="https://djangogirls.org/sandiego/">Django Girls San Diego</a> workshop, which is a 1-day workshop that helps women to build their first website using Django.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
              <img className="bd-placeholder-img" src="dgsd.jpg" style={{width:"100%", height:"100%"}}></img>
            </div>
          </div>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Data Science Tijuana 👩‍🔬</strong>
              <p className="text-justify">
                This was a small <a target="_blank" href="https://www.facebook.com/groups/2090111681275484/">Data Science meetup group</a> that I and a group of developers organized for a couple of months, but for lack of interest and speakers, we had to stop 😅.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
              <img className="bd-placeholder-img" src="dst.jpg" style={{width:"100%", height:"100%"}}></img>
            </div>
          </div>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Python Tijuana 🐍</strong>
              <p className="text-justify">
                The <a target="_blank" href="https://www.facebook.com/groups/650798518297820/">Python Meetup Group</a> is the biggest and most active local tech group. I co-founded this group in 2017 and I help to maintain it active until today. As a developer that works every day with Python, this group is very important to me because it helps me grow as a Python developer.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
              <img className="bd-placeholder-img" src="ptg.jpg" style={{width:"100%", height:"100%"}}></img>
            </div>
          </div>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">DefCon 664 🕵️‍♂️</strong>
              <p className="text-justify">
                In 2012 I was very interested in security and I started a local <a target="_blank" href="https://defcongroups.org/dcpages-int.html">DefCon Group</a>, but in 2017 I leave the group and since then is organized by a different group of security enthusiasts.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
              <div className="bg-dark" style={{width: "100%", height: "100%"}}></div>
            </div>
          </div>
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Startup Weekend 🧑‍💼</strong>
              <p className="text-justify">
                Boy, I was young, since 2012 I have been involved in the <a target="_blank" href="http://communities.techstars.com/mexico/baja/startup-weekend/8756">Startup Weekend</a> community as a  participant, co-organizer, and mentor. Startup Weekend is a 54-hour weekend event, during which groups of developers, business managers, startup enthusiasts, marketing gurus, graphic artists, and more pitch ideas for new startups.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
              <img className="bd-placeholder-img" src="sw.jpg" style={{width:"100%", height:"100%"}}></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
