import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../../models/categoryModel';
import { createCategories, getAllCategories } from '../../../redux/admin/actions/api';
import CustomInput from '../../common/CustomInput';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Firestore } from '@firebase/firestore';


function Categories() {
  const [inputCategory, handleInputCategory] = useState("");
  const [inputImage, handleinputImage] = useState("");
  const [inputDescription, handleInputDescription] = useState("");
  // let subtitle;


  function handleChange(event) {
    let image = handleinputImage(URL.createObjectURL(event.target.files[0]))

    const storage = getStorage();
    const storageRef = ref(storage, event.target.files[0].name);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, event.target.files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot, image);
    });
  }


  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector(state => state.fetchCategoriesReducer)
  console.log(categories.categories);


  // let obj = new Category({ name: 'ReactJS', description: 'about react', image: '' });
  let obj = new Category({ name: inputCategory, description: inputDescription, image: inputImage });


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

  console.log();
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
              handleInput={handleInputDescription}
              value={inputDescription}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Choose Cover Image
            </label>
            <input type='file' onChange={handleChange} />
          </div>




          <div className="flex items-center justify-between">
            <button onClick={() => dispatch(createCategories(obj))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Save
            </button>
            <button className='bg-red-400 rounded py-2 px-4 right-0' onClick={closeModal}>Cancel</button>

          </div>
        </form>
      </Modal>
      {/* <img src={inputImage ? inputImage : 'https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png'} /> */}

      <div className='px-8 py-8'>
        <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mx-auto mt-8">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">Category Management</h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={openModal}>Add Category</button>

                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Image
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Details
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {categories && categories.categories ? categories.categories.map((element, index) =>
                    <tr key={index}>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'><img class="object-contain h-10 w-10 ..." src={element.name} /></td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{element.name}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>{element.description}</td>
                      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'><button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button></td>
                    </tr>
                  ) : <tr className="bg-emerald-200">
                    <td className='px-8'>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td className='px-8'>Adam</td>
                    <td className='px-8'>112</td>
                  </tr>}

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
