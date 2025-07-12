import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookBookmark, faCalendarDay, faChartPie, faClock, faMoneyBill1Wave, faRightFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Card({ plan, monthlyPrice, yearlyPrice, flipped }) {
  return (
    <div className="w-64 h-60 [perspective:1000px] sm:h-96 sm:w-72 md:h-80">
      <div
        className={`relative w-full h-full transition-transform duration-[2500ms] ease-in-out transform ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        } [transform-style:preserve-3d]`}
      >
        {/* Front Face — Monthly Price */}
        <div className="absolute w-full h-full text-white p-4 rounded-xl shadow-lg flex flex-col justify-center [backface-visibility:hidden] border-2 border-color-gray hover:bg-color-primary-dark ease-in duration-200">
            <p className="text-5xl font-semibold mb-5">
            ${monthlyPrice}
            <span className="text-sm">/mo</span>
          </p>
          <h2 className="text-xl font-bold mb-2">{plan}</h2>
          <p className="text-sm leading-relaxed mb-4">For Beginners Who Want to Scale bussiness globally</p>
          <div>
            <ul className = 'space-y-4 pb-2'>
              <li><FontAwesomeIcon className='text-color-secondary' icon={faBookBookmark} />
              <span className='pl-4'>Expense Management</span>
              </li>
            </ul>
             <ul className = 'space-y-4 pb-2'>
              <li><FontAwesomeIcon className='text-color-gray' icon={faBookBookmark} />
              <span className='pl-4'>Card Management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Back Face — Yearly Price */}
        <div className="absolute w-full h-full text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-color-gray hover:bg-color-primary-dark ease-in duration-200">
          <h2 className="text-xl font-bold mb-2">{plan} Plan</h2>
          <p className="text-xl font-semibold mb-1">${yearlyPrice}/yr</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleToggle(e) {
    const checked = e.target.checked;
    setFlipped(checked);
  }

  return (
    <div className="bg-color-primary-dark tracking-wider min-h-screen overflow-hidden">
      <header className="relative">
        <nav className="container  flex justify-between items-center px-4 py-5 relative z-20 bg-color-primary-dark">
          {/* Logo */}
          <div className="font-bold text-3xl">
            <a href="#HOME">
              <span className="text-color-secondary">Discrete</span>Code
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            <li><a href="#HOME" className="hover:text-color-secondary ease-in duration-200">Home</a></li>
            <li><a href="#FEATURE" className="hover:text-color-secondary ease-in duration-200">Features</a></li>
            <li><a href="#TESTIMONY" className="hover:text-color-secondary ease-in duration-200">Testimony</a></li>
            <li><a href="#PRICING" className="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
            <li><a href="#BLOG" className="hover:text-color-secondary ease-in duration-200">Blog</a></li>
            <li>
              <button className="btn">
                Free Trial
              </button>
            </li>
          </ul>

          {/* Mobile Icon */}
          <div
            className="lg:hidden text-color-secondary font-bold text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-color-primary-dark h-[100vh] absolute top-full left-0 w-full z-10">
            <ul className="h-full grid place-items-center space-y-6 py-20 text-xl font-semibold">
              <li><a href="#HOME" onClick={toggleMenu} className="hover:text-color-secondary">Home</a></li>
              <li><a href="#FEATURE" onClick={toggleMenu} className="hover:text-color-secondary">Features</a></li>
              <li><a href="#TESTIMONY" onClick={toggleMenu} className="hover:text-color-secondary">Testimony</a></li>
              <li><a href="#PRICING" onClick={toggleMenu} className="hover:text-color-secondary">Pricing</a></li>
              <li><a href="#BLOG" onClick={toggleMenu} className="hover:text-color-secondary">Blog</a></li>
              <li>
                <button className="btn">
                  Free Trial
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      
       <section id= "HOME" className=' relative'>
      
        <div className = "container py-20">
          <div className='bob1'></div>
        <div className='bob2'></div>
        <div className='flex flex-col items-center md:flex-row z-20'>
        <div className='text-center mb-12 md:text-left md:w-1/2 md:pr-10'>
          <h1 className='tittle'>AweSome App for Your Finiancial</h1>
          <p className='text-white leading-relaxed mb-10'>This should be used to tell a story and let your user know a little more about the App and its uses. how it can benefit them.</p>
          <button className="btn">Download App</button>

        </div>
        <div className='md:w-1/2'>
          <img src="images/hero4.png" alt="" />
        </div>
        </div>
      </div>
    </section>
    {/* Feature */}
    <section id='FEATURE' className="bg-color-primary-light">
      <div className="container py-20">
       <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='text-color-secondary mb-2 font-bold text-2xl'>Our Feature</h4>
        <h1 className='tittle capitalize'>Easy to manage your all payment by Our app</h1>
       </div>

       {/* Cards */}

       <div className='grid lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8 sm:gap-12'>
        
        {/* Card 1 */}
       <div className="text-white border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
        <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
            <FontAwesomeIcon className='text-4xl' icon={faMoneyBill1Wave} />
        </div>
            <h3 className='text-xl font-bold py-4'>Expense Trackering</h3>
            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
       </div>

        {/* Card 2 */}
       <div className="text-white border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
        <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
            <FontAwesomeIcon className='text-4xl' icon={faChartPie} />
        </div>
            <h3 className='text-xl font-bold py-4'>Finance Snapshot</h3>
            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
       </div>

        {/* Card 3 */}
       <div className="text-white border-2 border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200">
        <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
            <FontAwesomeIcon className='text-4xl' icon={faClock} />
        </div>
            <h3 className='text-xl font-bold py-4'>24/24</h3>
            <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
       </div>
       
       </div>
      </div>
    </section>
    <section id='SAVING MONEY' className=''>
      <div className="container relative">
      <div className='bob1'></div>
        <div className='bob2'></div>
        <div className='flex flex-col items-center justify-between md:flex-row'>
        <div className='mb-12 md:w-1/2'>
          <img src="images/hero3.png" alt="" />
        </div>
        <div className='text-center md:text-left md:w-1/2 md:ml-20'>
          <h4 className='text-color-secondary mb-2 font-bold text-2xl'>Saving Money</h4>
        <h1 className='tittle capitalize'>Best financing app to save your money</h1>
        <p className='text-white mb-10 leading-relaxed'>Best financing app ever in the world. Easy to use and very user friendly for mobile banking.
           You can control your card easyly and send money to someone on jsut one click.</p>
           <button className='btn'>Read more</button>
        </div>
      </div>
      </div>
    </section>
     {/* How it works */}
    <section id='HOW IT WORKS' className='relatve'>
      <div className="container py-20">
        <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='text-color-secondary mb-2 font-bold text-2xl'>How it works</h4>
        <h1 className='tittle capitalize'>Give up your money Saving</h1>
       </div>

       <div className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
        {/* Card 1 */}
        <div className='text-center cursor-pointer text-white'>
          <div className='bg-color-primary-light relative inline-block px-6 py-2 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200'>
            <p className='text-6xl'>1</p>
          </div>
          <h3 className='text-xl font-bold py-4'>Install App</h3>
          <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
        </div>

         {/* Card 2 */}
        <div className='text-center cursor-pointer text-white'>
          <div className='relative inline-block px-6 py-2 rounded-lg cursor-pointer'>
            <p className='text-6xl'>2</p>
          </div>
          <h3 className='text-xl font-bold py-4'>Set up your profile</h3>
          <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
        </div>

         {/* Card 3 */}
        <div className='text-center cursor-pointer text-white'>
          <div className='bg-color-primary-light relative inline-block px-6 py-2 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200'>
            <p className='text-6xl'>3</p>
          </div>
          <h3 className='text-xl font-bold py-4'>Enjoy the Features</h3>
          <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
        </div>
       </div>
      </div>
    </section>
    {/* Testimonial */}
    <section id = "TESTIMONY" classsName = "relative">
      <div className = "py-20">
        <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='text-color-secondary mb-2 font-bold text-2xl'>How it works</h4>
        <h1 className='tittle capitalize'>What client said about our app afeter used</h1>
       </div>
       <div className='mb-4'>
        <div className='flex text-center flex-wrap justify-center'>
          <img src="images/user1.jpg" alt="" className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${users === 1 ? 'border-2 border-color-secondary': 'border-none' }`} onClick={()=> setUsers(1)} />
          <img src="images/user2.jpg" alt="" className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${users === 2 ? 'border-2 border-color-secondary': 'border-none' }`} onClick={()=> setUsers(2)}/>
          <img src="images/user3.jpg" alt="" className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${users === 3 ? 'border-2 border-color-secondary': 'border-none' }`} onClick={()=> setUsers(3)}/>
          <img src="images/user4.jpg" alt="" className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${users === 4 ? 'border-2 border-color-secondary': 'border-none' }`} onClick={()=> setUsers(4)}/>
          <img src="images/user5.jpg" alt="" className={`h-20 w-20 rounded-full p-1 m-3 cursor-pointer ${users === 5 ? 'border-2 border-color-secondary': 'border-none' }`} onClick={()=> setUsers(5)}/>
        </div>
        
        {
          users === 1 && (
            <div className='grid text-center place-item-center m-auto md:w-1/2 '>
        <div>
        <p className='text-2xl mb-6 text-white'>This should be used to tell a story and include any testimonial you might have about your project or service for your client</p>
        <h1 className='font-bold mb-1 text-color-secondary'>Merkin Nesus</h1>
        <p className='text-white'>ISO Developer</p>
        </div>
        </div>
          )
        }
        {/* User 2 */}
         {
          users === 2 && (
            <div className='grid text-center place-item-center m-auto md:w-1/2 '>
        <div>
        <p className='text-2xl mb-6 text-white'>This should be used to tell a story and include any testimonial you might have about your project or service for your client</p>
        <h1 className='font-bold mb-1 text-color-secondary'>Merkin Nesus</h1>
        <p className='text-white'>Full-stack Developer</p>
        </div>
        </div>
          )
        }
        {/* User 3 */}
         {
          users === 3 && (
            <div className='grid text-center place-item-center m-auto md:w-1/2 '>
        <div>
        <p className='text-2xl mb-6 text-white'>This should be used to tell a story and include any testimonial you might have about your project or service for your client</p>
        <h1 className='font-bold mb-1 text-color-secondary'>Merkin Nesus</h1>
        <p className='text-white'>Web Developer</p>
        </div>
        </div>
          )
        }
        {/* User 4 */}
         {
          users === 4 && (
            <div className='grid text-center place-item-center m-auto md:w-1/2 '>
        <div>
        <p className='text-2xl mb-6 text-white'>This should be used to tell a story and include any testimonial you might have about your project or service for your client</p>
        <h1 className='font-bold mb-1 text-color-secondary'>Merkin Nesus</h1>
        <p className='text-white'>App Developer</p>
        </div>
        </div>
          )
        }
        {/* User 5 */}
         {
          users === 5 && (
            <div className='grid text-center place-item-center m-auto md:w-1/2 '>
        <div>
        <p className='text-2xl mb-6 text-white'>This should be used to tell a story and include any testimonial you might have about your project or service for your client</p>
        <h1 className='font-bold mb-1 text-color-secondary'>Merkin Nesus</h1>
        <p className='text-white'>Front-end Developer</p>
        </div>
        </div>
          )
        }

       </div>
      </div>
    </section>
    {/* Pricing */}
    <section className = 'bg-color-primary-light' id = 'PRICING'>
      <div className="container py-20">
         <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='text-color-secondary mb-2 font-bold text-2xl'>Pricing</h4>
        <h1 className='tittle capitalize'>Get in reasonable price</h1>
        {/* Rounded button */}

       </div>
             {/* Toggle Switch */}
      <div className="px-4 py-0 text-white">
      <div className="flex items-center justify-center gap-4 mb-8">
        <p className="text-white">Bill monthly</p>

        <label className="relative inline-block w-20 h-8 rounded-full">
          <input
            type="checkbox"
            id="ToggleBtn"
            className="w-0 h-0 peer"
            onChange={handleToggle}
          />
          <span className="absolute top-0 left-0 right-0 bottom-0 border border-gray-300 rounded-full duration-300 
            before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full 
            before:bg-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary cursor-pointer">
          </span>
        </label>

        <p className="text-white">Bill yearly</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-auto place-items-center">
        <Card plan="Basic" monthlyPrice={20} yearlyPrice={200} flipped={flipped} />
        <Card plan="Standard" monthlyPrice={50} yearlyPrice={500} flipped={flipped} />
        <Card plan="Premium" monthlyPrice={100} yearlyPrice={1000} flipped={flipped} />
      </div>
      </div>
      </div>
    </section>
    <section className='relative' id='BLOG'>
      <div className="container py-20">
        <div className='text-center text-white m-auto md:w-1/2 mb-20'>
          <h4 className='font-bold mb-4 text-color-secondary'>Innovation And Auto Quality Improvement</h4>
          <h1 className='tittle capitalize'>Latest Update and solutions and company news</h1>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Card no 1 */}
          <div>
            <div className='lg:h-[300px] rounded-xl scale-100 overflow-hidden text-white'>
              <img src="images/blog1.jpg" alt="" className='lg:h-full w-full hover:scale-125 transition ease-in-out duration-300' />
            </div>
             <div className='flex items-center gap-5 py-5 text-white'>
              <p>20 August 2022</p>
              <p>1 min read</p>
            </div>
            <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary mb-2'>Four ways to cher yourself up on blue monday!</a>
            <p className='laeding-relaxed text-white my-5'>On the second edition of serious business, inc edition Jim Ledbettter and function senior edition  salmon debate</p>
            <a href="#blog" className='text-xl underline'>Read More</a>
          </div>
          {/* Card no 2 */}
           <div>
            <div className='lg:h-[300px] rounded-xl scale-100 overflow-hidden text-white'>
              <img src="images/blog2.jpg" alt="" className='lg:h-full w-full hover:scale-125 transition ease-in-out duration-300' />
            </div>
             <div className='flex items-center gap-5 py-5 text-white'>
              <p>20 August 2022</p>
              <p>1 min read</p>
            </div>
            <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary mb-2'>How to Organice Your budget for maxmum productivity?</a>
            <p className='laeding-relaxed text-white my-5'>Global provider connected products for consumers and enterprises worldwide. supply chain control is everything...</p>
            <a href="#blog" className='text-xl underline'>Read More</a>
          </div>
          {/* Card no 3 */}
           <div>
            <div className='lg:h-[300px] rounded-xl scale-100 overflow-hidden text-white'>
              <img src="images/blog3.jpg" alt="" className='lg:h-full w-full hover:scale-125 transition ease-in-out duration-300' />
            </div>
             <div className='flex items-center gap-5 py-5 text-white'>
              <p>20 August 2022</p>
              <p>1 min read</p>
            </div>
            <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary mb-2 capitalize'>Should small business be entitled to system?</a>
            <p className='laeding-relaxed text-white my-5'>Our team provides skilled & experienced Managers who know the intriacies of this vertical and focus</p>
            <a href="#blog" className='text-xl underline'>Read More</a>
          </div>
          </div>
          <div>
        </div>
      </div>
    </section>
    <section id='download-app' className='bg-color-primary-light'>
      <div className="container h-[80vh] grid place-items-center">
        <div className='text-center text-white md:w-2/3 m-auto'>
        <h1 className='tittle'>Download App Now And Sav Your Money</h1>
        <p className='leading-relaxed'>Serving an impressive list of long-term money with experience and expertise in multiple industies</p>

        <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-10'>
          <a href="#" className='bg-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70'>
            <img src="images/ios-store-dark.png" alt="" />
          </a>
          <a href="#" className='bg-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70'>
            <img src="images/g-play-dark.png" alt="" />
          </a>
        </div>
        </div>
      </div>
    </section>
    <section id='CONTACT' className='bg-color-primary-light'>
      <div className="container py-20">
        <div className='text-center text-white m-auto md:w-1/2 mb-20'>
          <h4 className='font-bold mb-4 text-color-secondary'>Have A Question</h4>
          <h1 className='tittle capitalize'>Get In Touch</h1>
        </div>

         <form action="#">
          <div className='w-full m-auto text-center md:w-2/3'>
          <div className='text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2'>
            <input type="text" name="" id="" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-color-secondary' placeholder='Name' />
            <input type="email" name="" id="" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-color-secondary' placeholder='Email' />
            <input type="number" name="" id="" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-color-secondary' placeholder='Phone' />
            <input type="text" name="" id="" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-color-secondary' placeholder='Company' />
          </div>
          <textarea name="" id="" rows="4" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 focus:outline-none focus:border-color-secondary text-color-primary-dark'></textarea>
          <button className='btn mt-10'>Send Message</button>
          </div>
          
         </form>

      </div>
    </section>
    <section id='footer'>
      <div className='bg-color-primary-dark relative'>
        <div className="container text-white py-10">
          <div className='grid gap-10 md:grid-cols-3 pb-10'>
            <div className='space-y-6'>
              <h4 className='font-bold text-lg'>About App</h4>
              <p className='leading-relaxed'>This should be used to tell a story and include any testimonial you might have about your product or service for your clients</p>
              <div className='flex gap-5 items-center'>
                <p>Follow Us</p>
                <FontAwesomeIcon icon={faFacebook} className='cursor-pointer hover:text-color-secondary'/>
                <FontAwesomeIcon icon={faTwitter} className='cursor-pointer hover:text-color-secondary'/>
                <FontAwesomeIcon icon={faYoutube} className='cursor-pointer hover:text-color-secondary'/>
                <FontAwesomeIcon icon={faInstagram} className='cursor-pointer hover:text-color-secondary'/>
              </div>
            </div>
            <div className='flex justify-between md:justify-around'>
              <div className='space-y-6'>
                <h4 className='font-bold text-lg'>Quik Links</h4>
                <ul className='space-y-3'>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#HOME" className='hover:text-color-secondary'>Home</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#FEATURES" className='hover:text-color-secondary'>Features</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#PRICING" className='hover:text-color-secondary'>Pricing</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#BLOG" className='hover:text-color-secondary'>Blog</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#CONTACT" className='hover:text-color-secondary'>Contact</a></li>
                </ul>
              </div>

              <div className='space-y-6'>
                <h4 className='font-bold text-lg'>Help</h4>
                <ul className='space-y-3'>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#HOME" className='hover:text-color-secondary'>About Us</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#PRICING" className='hover:text-color-secondary'>Partners</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#BLOG" className='hover:text-color-secondary'>Career</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#CONTACT" className='hover:text-color-secondary'>Terms & conditions</a></li>
                  <li  className='underline hover:no-underline hover:text-color-secondary'><a href="#HOME" className='hover:text-color-secondary'>Help</a></li>
                </ul>
              </div>

            </div>
            <div className='space-y-6'>
                <h4 className='font-bold text-lg'>News;etter</h4>
              <p className='leading-relaxed'>Subscribe With Email And Loads of News Will Be Sent To You</p>
              <div className='flex items-center'>
                <input type="Email" name="Email" id="" className='w-3/4 text-color-gray bg-color-white rounded-lg py-2 focus:outline-none px-2' placeholder='Enter You Email'/>
                <button type='sunmit' className='bg-color-secondary px-4 lg:px-5 py-3 lg:py-2 hover:opacity-90 rounded-r-md'>
                  <FontAwesomeIcon icon={faRightFromBracket}/>
                </button>
              </div>
              </div>
          </div>
          <div className='flex justify-center pt-10 border-t border-color-gray'>
            <p>2025  DIscreteCode. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default App;