import Layout from "./components/Layout";

export default function Profile() {
  return (
    <Layout>
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-lg-8 col-md-12 col-sm-12 p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Hi there 👋</strong>
          <p className="text-justify">
              I'm a Software Engineer 👨‍💻 and Psychology student 🧠 living in <a target="blank" href="https://www.youtube.com/watch?v=3SzOUvB1WSg">the happiest place on earth</a> 🌎.
          </p>
          <p className="text-justify">
            I have 10+ years of experience in the software industry working in different roles. Currently, I work at <a target="blank" href="https://www.britecore.com/">BriteCore</a> as a Senior Software Engineer in a highly distributed team, and I have worked with remote teams for 6+ years. Also, I have set up branch offices for tech companies from scratch, from selecting an office space, to hire and train the staff.
          </p>
          <p className="text-justify">
            If you want to know more about my work experience, check out my <a target="blank" href="resume.pdf">resume</a> 😀.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-lg-block">
          <img style={{width:"100%", height:"100%"}} className="bd-placeholder-img" src="us.jpeg"/>
        </div>
      </div>
    </Layout>
  )
}
