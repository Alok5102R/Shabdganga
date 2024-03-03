import React from 'react'
import img from '../images/img-signup.png'

function SignUp() {
  return (
    <div className='flex flex-row  justify-between items-center bg-gray-200'>
        {/* left side --> Form */}

        <div className='relative w-[30%] p-6 m-20 mt-12'>
                <form action="#" method="POST">
                <h2 className="text-5xl  font-semibold font-serif mb-20">Sign Up</h2>


                <div class="mb-4 flex gap-6"> 

                    <div>
                    <input type="radio" id="author" name="userType" value="author"/>
                    <label for="author">Author</label>
                    </div>

                    <div>
                    <input type="radio" id="reader" name="userType" value="reader"/>
                    <label for="reader">Reader</label>
                    </div>

                </div>

                    <div className="mb-4">
                        <input type="text" id="username" name="username" className="border-gray-300 border-b-4 rounded-md w-full px-3 py-4 focus:border-b-4 focus:border-blue-500 outline-none"  placeholder="Username" />
                    </div>
                    <div className="mb-4">
                       
                        <input type="text" id="email" name="email" className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none"  placeholder="Email" />                    
                    </div>




                    <div className="mb-4">
                        
                    <input type="text" id="password" name="password" className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none"  placeholder="Password" />                    
                    </div>
                            
                    <div className="mb-4">
                    <input type="text" id="cpassword" name="cpassword" className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none"  placeholder="Confirm Password" />                    
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Sign Up</button>
                    </div>
                </form>
        </div>

                <div className='border w-0 h-80 border-gray-300'>
                        
                </div>


        {/* right side --> Image*/}
        <div className='relative  m-20'>
            <img src={img} alt=""
                className='h-[500px] w-[500px]'
            />
        </div>
    </div>
  )
}

export default SignUp;