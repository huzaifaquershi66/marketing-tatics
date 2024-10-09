import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from "../../store/userdataslice";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const offers = [
    {
      title: 'Limited Time Offer',
      price: '$12 ONLY',
      enrollmentFee: '$3 + $9',
      totalPrice: '$500',
      savings: 'SAVE $488 TODAY!',
      rights: '100% RESELLING RIGHTS',
      access: 'LIFE TIME ACCESS FOR FREE',
      training: 'FREE TRAININGS HOW TO RESELL',
      formats: ['EBOOKS', 'VIDEO', 'TRAININGS'],
      categories: [
        'Digital Marketing',
        'Content Marketing',
        'Personal Development',
        'Motivation',
        'Business & Entrepreneurship',
        'Startups',
        'ETSY',
        'Shopify',
        'Efficiency',
      ],
    },
    {
      title: 'CHALLENGE ACCEPTANCE',
      price: '$28 ONLY',
      enrollmentFee: '$11 + $17',
      totalPrice: '$1000',
      savings: 'SAVE $972 TODAY!',
      rights: '100% RESELLING RIGHTS',
      access: 'LIFE TIME ACCESS FOR FREE',
      training: 'FREE TRAININGS HOW TO RESELL',
      formats: ['EBOOKS', 'VIDEO', 'AUDIO', 'PROMPTS', 'TRAININGS'],
      categories: [
        'Social Media Marketing',
        'Email Marketing',
        'CopyWriting',
        'SEO',
        'PPC',
        'Lead Generation',
        'Mindset',
        'Productivity',
        'Time Management',
        'Focus',
        'Online Business',
        'Product Launch',
        'Blockchain',
        'Cryptocurrency',
        'Forex Planning',
        'Financial Management',
      ],
    },
    {
      title: 'CHALLENGE BOOSTER',
      price: '$57 ONLY',
      enrollmentFee: '$11 + $46',
      totalPrice: '$1500',
      savings: 'SAVE $1443 TODAY!',
      rights: '100% RESELLING RIGHTS',
      access: 'LIFE TIME ACCESS FOR FREE',
      training: 'FREE TRAININGS HOW TO RESELL',
      additionalAccess: 'FREE ACCESS TO CHALLENGE ACCEPTANCE',
      formats: [
        'EBOOKS',
        'VIDEO',
        'AUDIO',
        'PROMPTS',
        'TEMPLATES',
        'TRAININGS',
      ],
      categories: [
        'Sales Funnels',
        'Influencer Marketing',
        'Affiliate Marketing',
        'Video Marketing',
        'Habits',
        'Leadership',
        'Passive Income',
        'Side Hustles',
        'Customer Support',
        'Youtube',
        'Google',
        'ChatGpt',
        'Freelancing',
        'Webinar',
        'Budgeting',
        'Instagram',
        'Technology',
        'Productivity Tools',
      ],
    },
    {
      title: 'CHALLENGE RUNNER',
      price: '$100 ONLY',
      enrollmentFee: '$11 + $89',
      totalPrice: '$2000',
      savings: 'SAVE $1900 TODAY!',
      rights: '100% RESELLING RIGHTS',
      access: 'LIFE TIME ACCESS FOR FREE',
      training: 'FREE TRAININGS HOW TO RESELL',
      additionalAccess: [
        'FREE ACCESS TO CHALLENGE ACCEPTANCE',
        'FREE ACCESS TO CHALLENGE BOOSTER',
      ],
      formats: [
        'EBOOKS',
        'VIDEO',
        'AUDIO',
        'PROMPTS',
        'TEMPLATES',
        'CHECKLIST',
        'TOOLS STACK',
        'WORKBOOK',
        'GUIDE',
        'NOTION TEMPLATES',
      ],
      categories: [
        'Artificial Intelligence',
        'Automation',
        'Tools',
        'Outsourcing',
        'Membership',
        'Blogging',
        'Online Courses',
        'Pricing Strategy',
        'Coaching',
        'Solopreneur',
        'Networking',
        'Public Speaking',
        'Communication',
        'Personal Branding',
        'Branding',
        'Marketing Automation',
        'E-Commerce',
        'Sales',
        'Dropshipping',
      ],
    },
  ];

const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [phonenumber, setPhoneNumber] = useState(''); // updated state for phone number
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const notify = () => toast("This is a toast notification!");
 const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!price || !transactionId || !phonenumber) {
        alert('All fields (price, transaction ID, phone number) are required!');
        return; // Prevent dispatching if any field is empty
    }

    // Create FormData and append values
   
    // Dispatch user data including phone numberdispatch(setUserData({ price: "500", transactionId: "abc123", phonenumber: "1234567890" }));
    dispatch(setUserData({ price, transactionId, phonenumber }));

 // dispatching phone number

  

    closeModal()
    alert("Your request has been submitted successfully")
 
  }

  return (
    <div className="h-full w-full relative overflow-x-hidden">
      <img
        className='w-full h-32 object-cover relative'
        src='https://cdn.pixabay.com/photo/2024/08/08/11/48/graphic-8954280_1280.jpg'
        alt="business"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-16">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md h-full flex border-2 border-black flex-col">
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="mt-2 text-lg">{offer.price}</p>
            <p className="text-sm">Enrollment + Product Fees: {offer.enrollmentFee}</p>
            <p className="text-sm">Total Price: {offer.totalPrice}</p>
            <p className="text-sm font-bold text-green-600">{offer.savings}</p>
            <p className="text-sm">{offer.rights}</p>
            <p className="text-sm">{offer.access}</p>
            <p className="text-sm">{offer.training}</p>
            <h3 className="mt-4 font-semibold">Formats:</h3>
            <ul className="list-disc list-inside">
              {offer.formats.map((format, idx) => (
                <li key={idx}>{format}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-semibold">Categories:</h3>
            <ul className="list-disc list-inside">
              {offer.categories.map((category, idx) => (
                <li key={idx}>{category}</li>
              ))}
            </ul>
            <button onClick={openModal} className="bg-blue-500 text-white mt-4 py-2 rounded w-full">
              Get Access Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">JazzCash Payment</h2>
            <p>JazzCash Number: <strong>03422731412</strong></p>
            <p>Name: <strong>Muhammad Hanif</strong></p>
            <form onSubmit={handleSubmit}>

            <label className="block mt-4">Amount:</label>
            <input type="text" className="border rounded p-2 w-full" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label className="block mt-4">Your Transaction ID:</label>
            <input type="text" className="border rounded p-2 w-full" placeholder="Enter Transaction ID" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
            <label className="block mt-4">Your Phone Number:</label>
            <input type="text" className="border rounded p-2 w-full" placeholder="Enter Phone Number" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} /> {/* Phone number input */}
            <div className="flex justify-between mt-4">
              <button onClick={closeModal} className="bg-gray-300 text-black w-12 py-2 rounded">
                Close
              </button>
              <button   className="bg-blue-500 w-16 text-white py-2 rounded">
                Submit
              </button>
                
            </div>
            </form>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Offers;
