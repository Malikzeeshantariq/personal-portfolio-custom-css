import "../style/education.css";

function Education (){
    return(
    <main className="edu-main">
        <div>
            <h1>Education</h1>
          </div>
          <div className="box-con-edu">
            <div>
                <h1 className="uni-name">University of Karachi</h1>
            </div>
            <div>
                <h1>Bachelor in Commerce</h1>
                <p>passed in the year 2013 from Karachi University</p>
            </div>
          </div>
          <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Intermediate from Karachi</h1>
            </div>
            <div>
                <h1>I.Com</h1>
                <p>passed in the year 2008 from Karachi University</p>
            </div>
          </div>
          <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Matric in Science from Karachi Board</h1>
            </div>
            <div>
                <h1>C.D.K Boys Secondry School</h1>
                <p>passed in the year 2006 from Karachi University</p>
            </div>
          </div>
    </main>
    )
}

export default Education;