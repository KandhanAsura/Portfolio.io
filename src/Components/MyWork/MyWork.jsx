import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import right_arrow from '../../assets/right-arrow.png'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index) => {
                return <img key={index} src={work.w_img} alt="project-img" style={{ width: "450px", height: "300px" }} />  
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={right_arrow} alt="" style={{ width: "25px", height: "25px", borderRadius: "8px"}} />
        </div>
    </div>
  )
}

export default MyWork