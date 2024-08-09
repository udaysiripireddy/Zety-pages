import card from './Images/muse.png'
import step1 from './Images/Step 1.png'
import step4 from './Images/Step 1.png'
import card1 from './Images/teacher_resume_template_crisp.png'
import card2 from './Images/student-resume-example@3x.png'
import card3 from './Images/two-page-resume-example@3x.png'
import card4 from './Images/teacher_resume_template_crisp.png'
import card5 from './Images/manager-resume-example@3x.png'
import card6 from './Images/nurse-resume-example@3x.png'
import image from './Images/zety-resume-example@3x.webp'
function ResumeExamples() {
  return (<>
    <section className="HeadArticle">

      <div className="HeadCard col-lg-6">
        <h2>Resume Examples & Samples
          for Any Job (2024)</h2>
        <p>Below you'll see resumes for 500+ professions grouped by industry. Scroll down and you'll get a breakdown of a perfect sample and suggestions for resume designs.</p>
      </div>
      <img className="HeadImage col-lg-6" src={card} alt={step1}></img>
    </section>
    <p style={{ marginLeft: "200px", marginRight: "200px" }}><strong>Want to save time and have your resume ready in 5 minutes?</strong> Try our resume builder. It’s fast and easy to use. Plus, you’ll get ready-made content to add with one click. See 18 resume templates and create your resume here.</p>
    <button className="Button">Create your Resume now</button>
  
     
    <div className='ContentContainer'>
      <p>Sample resume made with our builder—See more templates and create your resume here.</p>
    </div>
    <h3 style={{ margin: " 50px 100px" }}>One of our users, Nikos, had this to say:</h3>
    <div className='Content'>
      <p>[I used] a nice template I found on Zety. My resume is now one page long, not three. With the same stuff.</p>
    </div>

    <section className="ResumeArticle">
      <div className="ResumeCard col-lg-6">
        <h2>General Resume</h2>
        <p>A great resume is a tailored resume. Proving your experience and skills match the position is crucial Save time while you’re at it with help from this resume template.</p>
        <button className='ResumeButtons'>See This Examples</button>
      </div>
      <img className="ResumeImage col-lg-6" src={card1} alt={step4}></img>
    </section><hr style={{ margin: " 20px 70px" }}></hr>


    <section className="ResumeArticle">
      <img  className="ResumeImage col-lg-6"src={card2} alt={step1}></img>
        <div className="ResumeCard col-lg-6">
        <h2>Career Change Resume</h2>
        <p>People change their jobs every five years. Not always for the better. See our resume sample and learn how to make the jump a success.</p>
        <button className='ResumeButtons'>See This Examples</button>
        </div>
      </section>
      <hr style={{margin:" 20px 70px"}}></hr>


      <section className="ResumeArticle">
        <div className="ResumeCard col-lg-6">
        <h2>Student Resume</h2>
        <p>Life as a student is challenging but finding a job as a student is downright frustrating. With stiff competition, you need to show your best self to get your foot in the door. Use our student sample resume to get you there.</p>
        <button className='ResumeButtons'>See This Examples</button></div>
        <img  className="ResumeImage col-lg-6"src={card3} alt={step1}></img>
      </section><hr style={{margin:" 20px 70px"}}></hr>


      <section className="ResumeArticle">
      <img  className="ResumeImage col-lg-6"src={card4} alt={step1}></img>
        <div className="ResumeCard col-lg-6">
        <h2>Two Page Resume</h2>
        <p>About 77% of recruiters expect to see two pages from more experienced candidates. Do you meet that threshold? Can a resume be two pages long and still look good? See this resume sample to find out.</p>
        <button className='ResumeButtons'>See This Examples</button>
        </div>
      </section><hr style={{margin:" 20px 70px"}}></hr>


      <section className="ResumeArticle">
        <div className="ResumeCard col-lg-6">
        <h2>Teacher Resume</h2>
        <p>What makes this resume example stand out?
        </p>
        <p>Highlights why you’re more than just an educator:</p>
        <ul>
          <li>Details various methods of teaching for different scenarios.</li>
          <li>Shows outside involvement in other areas of school activities.</li>
        </ul>
        <button className='ResumeButtons'>See This Examples</button>
        </div>
        <img  className="ResumeImage col-lg-6"src={card5} alt={step1}></img>
      </section><hr style={{margin:" 20px 70px"}}></hr>


      <section className="ResumeArticle">
      <img  className="ResumeImage col-lg-6"src={card6} alt={step1}></img>
        <div className="ResumeCard col-lg-6">
        <h2>Manager Resume</h2>
        <p>What makes this example of a resume great?</p>
        <p>Emphasizes deliverables and shows a good fit:</p>
        <ul>
          <li>Uses numbers to prove her credentials.</li>
          <li>Focuses on experience that matches the job description.
          </li>
        </ul>
        <button className='ResumeButtons'>See This Examples</button>
        </div>
      </section><hr style={{margin:" 20px 70px"}}></hr>


      <section className="ResumeArticle">
        <div className="ResumeCard col-lg-6">
        <h2> Nurse Resume</h2>
        <p>What makes this sample resume shine?</p>
        <p>
        This sample resume shows all job requirements are met.</p>
        <li>Highlights licenses and certification.</li>
        <li>Double-downs on soft and critical skills.</li>
        <button className='ResumeButtons'>See This Examples</button>
        </div>
        <img  className="ResumeImage col-lg-6"src={card1} alt={step1}></img>
      </section>
  </>)
}
export default ResumeExamples