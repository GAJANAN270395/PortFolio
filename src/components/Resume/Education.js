import React from 'react'

const Education = () => {
    return (
        <div className='educationDiv'>
            <div className='education-list-item'>
                <h3 className='education-heading'>🟠 JSPM's Imperial college of engineering and research Wagholi,Pune
                    <hr />
                </h3>
                <div className='education-details'>
                    <p className='education-type'>
                        Bachelor of Engineering (B.E.) <br />
                       Mechanical Engineering
                    </p>
                    <p><span>2013-2017</span></p>
                </div>
            </div>
            <div className='education-list-item'>
                <h3 className='education-heading'>🟠 Shivaji MahaVidyalay <hr /></h3>
                <div className='education-details'>
                    <p className='education-type'>
                        Intermediate (12th) <br />
                        Physics, Chemistry &#38; Maths
                    </p>
                    <p><span>2012-2013</span></p>
                </div>
            </div>
            <div className='education-list-item'>
          <h3 className='education-heading'>🟠 Narsamata High School <hr /></h3>
                <div className='education-details'>
                    <p className='education-type'>
                        Matriculation (10th) <br />
                        Mathematics
                    </p>
                    <p><span>2010-2011</span></p>
                </div>
            </div>
        </div>
    )
}
export default Education