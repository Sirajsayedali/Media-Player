import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCards from './VideoCards'
import { getCategoryApi, getUploadedVideoApi, updateCategory } from '../services/allAPI'


function View({ uploadVideoStatus, setVideoDragAndRemoveStatus }) {
  const [video, setVideo] = useState([])


  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false) //for deleting the card function created
  const [videoStatus,setVideoStatus]= useState(false)

  const getVideos = async () => {
    const response = await getUploadedVideoApi()
    /*  console.log(response); */
    const { data } = response     /// this is object destructuring
    /* console.log(data); */
    setVideo(data)
  }
  console.log(video);

  const dragOver = (e) => {
    e.preventDefault()
  }
  const videoDrop = async (e) => {
    const {categoryId, videoId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(categoryId, videoId);

    //get all category
    const { data } = await getCategoryApi()
    //access the object with the category id from all ccategory array
    let selectedCategory = data.find((item)=>item.id==categoryId)
    //filtering the category object by removing the video object from the allVideos
    let result = selectedCategory.allVideos.filter((item) => item.id!= videoId)
    console.log(result);
    let newCategory = {  //reqBody
      category: selectedCategory.category, allVideos: result, id: categoryId
    }
    // updating the category
   await updateCategory(categoryId, newCategory)
   setVideoDragAndRemoveStatus(true)
  }

  useEffect(() => {   // to handle side effects
    getVideos()
    setDeleteVideoStatus(false)  /* given for deleting and making false */
    setVideoStatus(false)

  }, [uploadVideoStatus, deleteVideoStatus,videoStatus])  //dependency - []- content will be fetched when page loads

  return (
    <>
      <Row className='w-100' droppable='true' onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>
        {video?.length > 0 ?
          video?.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCards displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />   {/* deletin video function passed here */}
            </Col>

          )) : <p className='text-warning fs-3'> no video uploaded yet</p>


        }

      </Row>
    </>
  )
}

export default View