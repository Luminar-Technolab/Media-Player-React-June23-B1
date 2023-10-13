import React,{useState} from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setServerResponse}) {
  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedlink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const extractUrl = (e)=>{
    const {value} = e.target
    if(value){
      const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedlink:embedData})
    }else{
      setVideo({...video,embedlink:""})
    }
  }
  const handleUpload = async ()=>{
    //get details of video
    const {id,caption,url,embedlink} = video
    //if video is empty or not
    if(!id || !caption || !url || !embedlink){
      toast.warning("Please fill the form completely!!!")
    }else{
      //make api call
     const response = await uploadVideo(video)
    //  console.log(response);
     if(response.status>=200 && response.status<300){
      //alert success msg
      toast.success(`"${response.data.caption}" video uploaded successfully... `)
      //share response via state lifting
      setServerResponse(response.data)
      //reset video state
      setVideo({id:"",caption:"",url:"",embedlink:""})
      //hide modal
      handleClose()
     }else{
      toast.error("Uploading Error... Perform the operation after sometime!!!")
     }
    }
    
  }
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className="btn"> <i className="fa-solid fa-circle-plus fs-5"></i> </button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please Fill the following details !!! </p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={extractUrl}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">Upload</Button>
        </Modal.Footer>
    </Modal>
    <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={2000}
    />
    </>
  )
}

export default Add

