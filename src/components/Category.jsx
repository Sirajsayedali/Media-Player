import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPersonWalkingDashedLineArrowRight, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import VideoCards from '../components/VideoCards';
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({videoDragAndRemoveStatus, setVideoDragAndRemoveStatus}) {
  //state to store the category name
  const [categoryName, setCategoryName] = useState("")

  const [allCategory, setAllCategory] = useState([])

  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)

  const [addCategoryStatus, setAddCategoryStatus] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(categoryName);

  //function to add category
  const handleCategoryAdd = async () => {
    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []
      }

      const response = await addCategoryApi(reqBody)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('category added successfully')
        setAddCategoryStatus(true)
        handleClose()
      }
      else { toast.error('something went wrong') }
    }
    else {
      toast.info('please enter category name')
    }
  }

  // function to get category
  const getAllCategory = async () => {
    const response = await getCategoryApi()
    /* console.log(response.data); */
    setAllCategory(response.data)
  }
  console.log(allCategory);
  //function to prevent dataloss on drag
  const dragOver = (e) => {
    e.preventDefault()
  }
  //function to drop
  const videoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);
    //function to get video id sent from the videocar component
    const videoId = e.dataTransfer.getData("VideoId")
    console.log(`video is ${videoId}`);
//api call to get details of a particular video that is dragged
    const { data } = await getAVideoApi(videoId)
    console.log(data);
//selected category
const selectedCategory = allCategory.find((item)=>item.id==categoryId)
console.log(selectedCategory);


if (selectedCategory.allVideos.find((item)=>item.id==videoId)){
  toast.error('video already exist')
}else{
  selectedCategory.allVideos.push(data)
}


//function to update category
await updateCategory(categoryId,selectedCategory)

getAllCategory()



  }

  //function to remove cards from category
  const dragStart = (e,categoryId, videoId)=>{
    console.log(`category id is${categoryId}`);
    console.log(`video id is ${videoId}`);

    let dataShared = {
      categoryId, videoId
    }
    e.dataTransfer.setData("dataShared", JSON.stringify(dataShared))
  }




  //function to delete category
  const handleDeleteCategory = async (id) => {
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }


  useEffect(() => {
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
  }, [addCategoryStatus, deleteCategoryStatus, videoDragAndRemoveStatus])




  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>

        <button onClick={handleShow} className='btn btn-warning w-100'>Add New Category </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='me-2 text-warning' />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary p-3 border-rounded'>
            <p>Category Name</p>
            <Form.Group className='mb-3'  >
              <Form.Control
                type="text" placeholder="Enter the Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length > 0 ?
        allCategory?.map((item) => (<div className='border border-secondary w-100 p-3 rounded mt-5' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
          <div className='d-flex justify-content-center align-items-center'>
            <p>{item.category}</p>
            <button onClick={() => handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'> <FontAwesomeIcon icon={faTrashCan} /></button>
          </div>
          <Row>
            {item.allVideos?.length>0?
              item.allVideos?.map((card)=>(
              <Col sm={12} draggable='true' onDragStart={(e)=>dragStart(e,item.id,card.id)}>
                <VideoCards displayVideo={card} isPresent={true} /> 
              </Col>))
              :null}
          </Row>
        </div >))
        : <p className='text-danger mt-5'>no category added</p>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Category