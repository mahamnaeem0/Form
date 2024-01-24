import React, { useState } from 'react';
const MyForm = () => {
  const [formData, setFormData] = useState({
    text1: '',
    text2: '',
    email: '',
    password: '',
    checkbox: false,
    radio: '',
    dropdown: '',
    date: '',
    number: 0,
    color: '#000000',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    
    <div className="bg-white min-h-screen w-full flex justify-center items-center">
      <form className="flex flex-col space-y-1 w-[50%] border p-5 bg-blue-100 rounded-[15px]">
        <label>
          First Name :
          <input type="text" name="text1" value={formData.text1} onChange={handleChange}
          className="p-2 rounded-[6px]"
          placeholder="Enter your first name" />
        </label>
      <div>
        <label>
          Last Name :
          <input type="text" name="text2" value={formData.text2} onChange={handleChange}
           className="p-2 rounded-[6px]"
           placeholder="Enter your last name" />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange}
          className="p-2 rounded-[6px]"
          placeholder="Enter your email" />
        </label>
      </div>
      <div>
        <label>
          Password :
          <input type="password" name="password" value={formData.password} onChange={handleChange}
          className="p-2 rounded-[6px]"
          placeholder="Enter your password" />
        </label>
      </div>
      <div>
        <label>
          Checkbox :
          <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} 
          className="p-2 rounded-[6px]"/>
        </label>
      </div>
      <div>
        <label>
          Radio Buttons :
          <label>
            Option 1
            <input type="radio" name="radio" value="option1" checked={formData.radio === 'option1'} onChange={handleChange} 
            className="p-2 rounded-[6px]"/>
          </label>
          <label>
            Option 2
            <input type="radio" name="radio" value="option2" checked={formData.radio === 'option2'} onChange={handleChange}
            className="p-2 rounded-[6px]" />
          </label>
        </label>
      </div>
      <div>
        <label>
        Select Your Country :
          <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="option1">pakistan</option>
            <option value="option2">USA</option>
            <option value="option3">dubai</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Date Picker :
          <input type="date" name="date" value={formData.date} onChange={handleChange}
          className="p-2 rounded-[6px]" />
        </label>
      </div>
      <div>
        <label>
          Number Input :
          <input type="number" name="number" value={formData.number} onChange={handleChange} 
          className="p-2 rounded-[6px]"
          placeholder="Enter your number"/>
        </label>
      </div>
      <div>
        <label>
          Color Picker :
          <input type="color" name="color" value={formData.color} onChange={handleChange}
          className="border p-2 rounded-[10px] bg-yellow-500 text-white"  />
        </label>
      </div>
      <div>
        
        <button type="button" onclick="alert('Button Clicked!')">SUBMIT</button>
      </div>
      </form>
    </div>
  );
};

export default MyForm;
