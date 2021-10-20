import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createCategories } from '../../../redux/admin/actions/api';
import CustomInput from '../../common/CustomInput';

function Categories() {
  const [inputCategory, handleInputCategory] = useState("");
  const [inputPass, handleInputPass] = useState("");
  // let subtitle;
  let obj = { 'name': 'ReactJS', 'description': 'This is about react description', 'image': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const category = useSelector(state => state.createCategoryReducer)
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className=''>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded' onClick={openModal}>Add Category</button>
      <Modal className=''
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >


        <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4 px-4">


          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Choose Parent category
            </label>
            <select class="form-select block w-full mt-1 bg-gray-200 py-4 rounded px-4 my-4">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>



          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Category Name
            </label>
            <CustomInput
              type="text"
              id="category"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full border bg-transparent border- 
                              gray-300"
              placeholder="Category Name"
              handleInput={handleInputCategory}
              value={inputCategory}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Description
            </label>


            <CustomInput
              type="text"
              id="Description"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none w-full border bg-transparent border- 
                              gray-300"
              placeholder="Password"
              handleInput={handleInputPass}
              value={inputPass}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Choose Cover Image
            </label>
            <input className='rounded-sm px-4 py-3 mt-3 focus:outline-none w-full border bg-transparent border-gray-300' type="file" id="myfile" name="myfile" />
          </div>




          <div className="flex items-center justify-between">
            <button onClick={() => dispatch(createCategories(obj)) } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Save
            </button>
            <button className='bg-red-400 rounded py-2 px-4 right-0' onClick={closeModal}>Cancel</button>

          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Categories
