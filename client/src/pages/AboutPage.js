// import React from 'react'
// import Layout from '../components/shared/Layout/Layout'
// import "../index.css"

// const AboutPage = () => {
//     return (
//         <Layout>
//             <div className="container">
//                 <div className='d-felx flex-column mt-4'>
//                     <h1 style={{ fontFamily: "fantasy" }}>
//                         About Page
//                     </h1 >
//                     <h3>Made with <i class="fa-solid fa-heart"></i> By Aryan Chouksey</h3>
//                     <hr />
//                     <p style={{ justifyContent: "flex-start" }}>
//                         The blood bank website project developed by Aryan Chouksey is built on the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This technology stack is widely used for building robust and scalable web applications.
//                         <hr />
//                         A blood bank website is an online platform that serves as a centralized resource for connecting blood donors with recipients in need. It is designed to facilitate the process of blood donation, streamline communication, and ensure efficient management of the blood supply. The website acts as a bridge between donors and healthcare institutions, providing valuable information, online registration, scheduling, and other essential features.
//                     </p>
//                     <h3>Contacts</h3>
//                     <p>
//                         <i class="fa-solid fa-brands fa-google text-success "></i>
//                         <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='anc' target="_blank">Gmail : choukseyaryan49@gmail.com</a>
//                     </p>
//                     <p>
//                         <i class="fa-solid fa-brands fa-github text-success"></i>
//                         <a href='https://github.com/aryan12022' className='anc' target="_blank">GitHub : /a>
//                     </p>
//                     <p>
//                         <i class="fa-solid fa-brands fa-linkedin text-success "></i>
//                         <a href='https://www.linkedin.com/in/aryan-chouksey-808483248/' className='anc' target="_blank">LinkedIn : Aryan Chouksey</a>
//                     </p>
//                 </div >
//             </div >
//         </Layout >
//     )
// }

// export default AboutPage
import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import "../index.css";

const AboutPage = () => {
    return (
        <Layout>
            <div className="container">
                <div className='d-flex flex-column mt-4'>
                    <h1 style={{ fontFamily: "fantasy" }}>
                        About Page
                    </h1>
                    <h3>Made with <i className="fa-solid fa-heart"></i> By Aryan Chouksey</h3>
                    <hr />
                    <p style={{ justifyContent: "flex-start" }}>
                        The blood bank website project developed by Aryan Chouksey is built on the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This technology stack is widely used for building robust and scalable web applications.
                    </p>
                    <p>
                        A blood bank website is an online platform that serves as a centralized resource for connecting blood donors with recipients in need. It is designed to facilitate the process of blood donation, streamline communication, and ensure efficient management of the blood supply. The website acts as a bridge between donors and healthcare institutions, providing valuable information, online registration, scheduling, and other essential features.
                    </p>
                    <h3>Contacts</h3>
                    <p>
                        <i className="fa-solid fa-brands fa-google text-success"></i>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='anc' target="_blank" rel="noopener noreferrer">
                            Gmail: choukseyaryan49@gmail.com
                        </a>
                    </p>
                    <p>
                        <i className="fa-solid fa-brands fa-github text-success"></i>
                        <a href='https://github.com/aryan12022' className='anc' target="_blank" rel="noopener noreferrer">
                            GitHub: /aryan12022
                        </a>
                    </p>
                    <p>
                        <i className="fa-solid fa-brands fa-linkedin text-success"></i>
                        <a href='https://www.linkedin.com/in/aryan-chouksey-808483248/' className='anc' target="_blank" rel="noopener noreferrer">
                            LinkedIn: Aryan Chouksey
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default AboutPage;
