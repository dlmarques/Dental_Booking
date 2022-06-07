import React, {useState} from 'react'
import {BsInboxFill, BsStarFill, BsTrashFill} from "react-icons/bs"
import {MdDrafts} from "react-icons/md"
import {IoNavigate} from "react-icons/io5"
import {FiCircle} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import { Modal, Input, Text, Button, Radio, Spacer } from '@nextui-org/react';

const SideBox = () => {
    const [visible, setVisible] = useState(false);
    const [newLabel, setNewLabel] = useState(false);
    const handler = () => setVisible(true)
    const closeHandler = () => setVisible(false)
    const addLabel = () => setNewLabel(true)
    const closeAddLabel = () => setNewLabel(false)
    
  return (
    <>
        <div className="sidebar-inbox">
    <button
    className='compose-btn'
    onClick={handler}
    >New Message</button>
    <Modal
    closeButton
    blur
    width='800px'
    open={visible}
    onClose={closeHandler}
    css={{fontFamily : "Montserrat, sans-serif", fontWeight: "700"}}
    >
      <Modal.Header>
      <Text id='modal-title'  size={28} css={{color : "#689ee2"}}>Compose Message</Text>
      </Modal.Header>
     <Modal.Body>
     <Input
     clearable
      underlined
      bordered
      fullWidth
      color="primary"
      size="lg"
      placeholder="To"
      />
      <Input
      clearable
      underlined
      bordered
      fullWidth
      color="primary"
      size="lg"
      placeholder="Subject"
      />
      <Input
      clearable
      underlined
      bordered
      fullWidth
      color="primary"
      size="lg"
      placeholder="Message"
      />
     </Modal.Body>
     <Modal.Footer>
       <Button css={{backgroundColor: "#689ee2"}}>
         Submit
       </Button>
     </Modal.Footer>
    </Modal>
    <div className="list">
         <div className="item">
        <BsInboxFill/>
        <h3>Inbox</h3>
        </div>
        <div className="item">
        <BsStarFill/>
        <h3>Marked</h3>
        </div>
        <div className="item">
        <MdDrafts/>
        <h3>Draft</h3>
        </div>
        <div className="item">
        <IoNavigate/>
        <h3>Sent</h3>
        </div>
        <div className="item">
        <BsTrashFill/>
        <h3>Trash</h3>
        </div>
    </div>
    <h2>Tags</h2>
    <div className="list">
    <div className="item">
        <FiCircle id='red'/>
        <h3>Appointments</h3>
        </div>
        <div className="item">
        <FiCircle id='green'/>
        <h3>Payments</h3>
        </div>
        <div className="item">
        <FiCircle id='purple'/>
        <h3>Support</h3>
        </div>
        <div className="item" onClick={addLabel}>
        <AiOutlinePlus/>
        <h3>Add Label</h3>
        </div>
        <Modal
    closeButton
    blur
    width='800px'
    open={newLabel}
    onClose={closeAddLabel}
    css={{fontFamily : "Montserrat, sans-serif", fontWeight: "700"}}
    >
      <Modal.Header>
      <Text id='modal-title'  size={28} css={{color : "#689ee2"}}>Add New Label</Text>
      </Modal.Header>
     <Modal.Body>
     <Input
     clearable
      underlined
      bordered
      fullWidth
      color="primary"
      size="lg"
      placeholder="New Label"
      />
       <Radio.Group row value="primary">
      <Radio value="red" color="error">
        Red
      </Radio>
      <Spacer />
      <Radio value="blue" color="primary">
        Blue
      </Radio>
      <Spacer />
      <Radio value="green" color="success">
        Green
      </Radio>
      <Spacer />
      <Radio value="purple" color="secondary">
        Purple
      </Radio>
    </Radio.Group>
     </Modal.Body>
     <Modal.Footer>
       <Button css={{backgroundColor: "#689ee2"}}>
         Submit
       </Button>
     </Modal.Footer>
    </Modal>
    </div>
    </div>
    </>
  )
}

export default SideBox