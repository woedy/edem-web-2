import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faIndustry, faLaptop, faHospital, faQuoteLeft, faBoxes, faLaptopCode, faGlobe, faHandshake, faCogs, faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* Nav Bar*/}
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              to="/"
            >
              Inowa Consult
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>

          <div
  className={
    "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
    (navbarOpen ? " block rounded shadow-lg" : " hidden")
  }
  id="example-navbar-warning"
>
  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    <li className="flex items-center">
      {/* <PagesDropdown /> */}
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Home
      </button>
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        About Us
      </button>
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Services
      </button>
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Case Studies
      </button>
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Testimonials
      </button>
    </li>

    <li className="flex items-center">
      <button
        className="text-black lg:text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Contact Us
      </button>
    </li>
  </ul>
</div>

        </div>
      </nav>

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl mb-10">
                    Your Gateway to Global Success
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200 mb-10">
                    Connecting Businesses Across Borders with Strategic Insights and Local Expertise
                  </p>


                  <div className="mt-5">

                    <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Explore Our Services</button>
                    <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Contact Us</button>


                  </div>



                  <p className="text-white text-base mt-5">Inowa Consult provides businesses with the tools and expertise necessary to achieve international success. We specialize in connecting foreign producers with local importers, offering tailored consulting solutions that address the complexities of cross-border operations. Our services are designed to help businesses navigate regulatory challenges, establish strategic partnerships, and optimize supply chains, ensuring seamless entry into new markets</p>


                </div>
              </div>
            </div>
          </div>

        </div>



        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto space-y-12">
            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-lg text-gray-600">
                  Inowa Consult was established with a commitment to facilitate smooth and successful international business ventures. With a strong presence in both emerging and established markets, we focus on providing comprehensive solutions that address the unique challenges of global trade. Our approach combines industry expertise, market knowledge, and a deep understanding of local contexts to deliver results-driven strategies.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Story"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Mission"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>



              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  Our mission is to empower businesses to achieve sustainable growth beyond borders through personalized, data-driven, and culturally informed consulting services.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="pb-20 bg-blueGray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 pt-20 mb-20">Our Values</h2>


        </section>



        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Integrity
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We prioritize transparency and ethical practices in every aspect of our work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Innovation
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We continuously adapt to industry trends to provide forward-thinking solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Client-Centricity
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Our clients’ success is at the core of everything we do, and we tailor our approach to meet their unique objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Leadership
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  The leadership team at Inowa Consult comprises seasoned professionals with extensive experience in international trade, business strategy, and supply chain management.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Each member brings a unique perspective and expertise, ensuring that our clients receive the highest standard of service.
                </p>

              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Your Gateway to Global Success
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Connecting Businesses Across Borders with Strategic Insights and Local Expertise.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              At Inowa Consult, we offer a range of strategic services designed to help businesses succeed in the global market.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1: Market Entry and Expansion */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Market Entry"
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Entry and Expansion</h3>
                </div>
                <p className="text-gray-600">
                  Inowa Consult assists businesses in developing strategic market entry plans, considering regulatory requirements, competitive landscapes, and local market dynamics. We ensure a seamless transition into new markets.
                </p>
              </div>

              {/* Service 2: Trade Compliance and Regulatory Consulting */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/businessman-with-planet-earth_1232-144.jpg?t=st=1732614593~exp=1732618193~hmac=93812ee0eef1dae21bb9005a9a842092b856abdf6c90bdf7326e8d41d5a189ea&w=1380"
                    alt="Trade Compliance"
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Trade Compliance and Regulatory Consulting</h3>
                </div>
                <p className="text-gray-600">
                  Compliance with international trade regulations is vital. Our team provides in-depth guidance on navigating complex regulatory frameworks, ensuring your business stays compliant while minimizing risks.
                </p>
              </div>

              {/* Service 3: Supply Chain Optimization */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1732614786~exp=1732618386~hmac=a36162a14026c31cbea615b997cc902564d521502f08a7f78858bf5372853ecb&w=1380"
                    alt="Supply Chain Optimization"
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Supply Chain Optimization</h3>
                </div>
                <p className="text-gray-600">
                  We help businesses design and implement optimized supply chain strategies to reduce costs and ensure timely delivery of products to target markets, increasing operational success.
                </p>
              </div>

              {/* Service 4: Cross-Border Partnerships */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/stylish-black-couple-have-business-conversation_1157-32141.jpg?t=st=1732615056~exp=1732618656~hmac=fcc90db5cc482b062f63290ea0d1f6337a85ff4f88ea92a4cda06c830cc9eb03&w=1380"
                    alt="Cross-Border Partnerships"
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Cross-Border Partnerships</h3>
                </div>
                <p className="text-gray-600">
                  We facilitate strategic partnerships between international producers and local businesses, identifying reliable importers and fostering long-term alliances.
                </p>
              </div>

              {/* Service 5: Customized Business Solutions */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src="https://img.freepik.com/free-photo/high-angle-people-working-office_23-2149636256.jpg?t=st=1732615162~exp=1732618762~hmac=1a13296cddc6a9bcc388b88f70757f8beecd9b7f9b5865154c6df4d6f6e8d628&w=1380"
                    alt="Customized Solutions"
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Customized Business Solutions</h3>
                </div>
                <p className="text-gray-600">
                  We offer bespoke consulting solutions that address specific challenges. Our tailored approach ensures effective strategies that align with your business goals.
                </p>
              </div>
            </div>
          </div>
        </section>




        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Inowa Consult provides specialized services to a diverse range of industries, addressing each sector’s unique challenges with tailored strategies. Our areas of expertise include:
            </p>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Industry 1: Consumer Goods */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faBox}
                    className="text-4xl text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Consumer Goods</h3>
                </div>
                <p className="text-gray-600">
                  Supporting businesses in expanding their reach and establishing a presence in new markets.
                </p>
              </div>

              {/* Industry 2: Manufacturing */}
              <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:bg-green-200 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faIndustry}
                    className="text-4xl text-green-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Manufacturing</h3>
                </div>
                <p className="text-gray-600">
                  Enhancing operational efficiency and identifying opportunities for cost savings.
                </p>
              </div>

              {/* Industry 3: Technology */}
              <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:bg-purple-200 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faLaptop}
                    className="text-4xl text-purple-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technology</h3>
                </div>
                <p className="text-gray-600">
                  Assisting technology companies in navigating complex compliance requirements and market dynamics.
                </p>
              </div>

              {/* Industry 4: Healthcare */}
              <div className="bg-red-100 p-6 rounded-lg shadow-lg hover:bg-red-200 transition duration-300 ease-in-out">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="text-4xl text-red-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthcare</h3>
                </div>
                <p className="text-gray-600">
                  Guiding healthcare providers through regulatory frameworks and market entry challenges.
                </p>
              </div>

            </div>
          </div>
        </section>



        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://img.freepik.com/free-photo/high-angle-man-travel-agency-office_23-2150801481.jpg?t=st=1732615258~exp=1732618858~hmac=c1ab898b50bac95c007d0db19395b91ff9703ac82e9371dd8b5b931b27fcaf74&w=1380"
                />
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 ">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 mt-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Global Reach</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Inowa Consult operates with a global perspective, leveraging on-the-ground expertise in key markets across Asia, Europe, and Africa.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our ability to blend international insights with local knowledge enables us to deliver solutions that are both comprehensive and highly relevant to our clients’ needs.

                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="py-16 px-4 bg-blueGray-200">
          <div className="container mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how Inowa Consult has helped businesses achieve success in new markets through strategic guidance and effective partnerships.
            </p>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

              {/* Case Study 1: Toy Manufacturer in Ghana */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faBoxes}
                    className="text-4xl text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Facilitating Market Entry for a Toy Manufacturer in Ghana</h3>
                </div>
                <p className="text-gray-600">
                  Inowa Consult successfully facilitated a partnership between Molto, a Spanish toy manufacturer, and Orca Deco, a leading retailer in Ghana. Through meticulous market analysis and regulatory guidance, we enabled Molto to establish a strong presence in the West African market.
                </p>
              </div>

              {/* Case Study 2: Technology Company in Southeast Asia */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="text-4xl text-purple-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Supporting a Technology Company’s Expansion into Southeast Asia</h3>
                </div>
                <p className="text-gray-600">
                  Our team collaborated with a U.S.-based technology firm to navigate the complexities of entering Southeast Asian markets. By addressing regulatory challenges, securing local partnerships, and streamlining logistics, we ensured a successful market entry for the client.
                </p>
              </div>

            </div>
          </div>
        </section>



        <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          See how Inowa Consult has made a positive impact on businesses by helping them expand internationally and navigate complex markets.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div> {/* Avatar */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Client Name</h3>
                <p className="text-gray-500">Title, Company Name</p>
              </div>
            </div>
            <div className="relative">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-gray-400 absolute top-4 left-4 transform text-6xl"
              />
              <p className="text-gray-600 italic pl-12">
                "Inowa Consult has been instrumental in helping us expand internationally. Their expertise and attention to detail ensured a smooth transition into new markets."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div> {/* Avatar */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Client Name</h3>
                <p className="text-gray-500">Title, Company Name</p>
              </div>
            </div>
            <div className="relative">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-gray-400 absolute top-4 left-4 transform text-6xl"
              />
              <p className="text-gray-600 italic pl-12">
                "Thanks to Inowa Consult, our business was able to overcome significant regulatory hurdles. Their tailored approach and strategic insights have been invaluable."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>









    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Insights and Resources</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Stay informed with the latest insights, strategies, and resources to navigate the global business landscape.
        </p>

        {/* Blog Titles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Blog 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faGlobe} 
                className="text-blue-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-xl text-gray-800">Navigating Trade Compliance in Emerging Markets</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understanding trade compliance is crucial when entering new and emerging markets. In this blog, we explore the key steps to ensure your business stays compliant and avoids regulatory pitfalls.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
          </div>

          {/* Blog 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faHandshake} 
                className="text-green-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-xl text-gray-800">Five Key Strategies for Successful Market Entry</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Entering new markets can be challenging. Learn five essential strategies to help your business establish a strong foothold and gain a competitive edge.
            </p>
            <a href="#" className="text-green-600 font-semibold hover:underline">Read More</a>
          </div>

          {/* Blog 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faCogs} 
                className="text-orange-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-xl text-gray-800">The Importance of Supply Chain Optimization in Global Trade</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Supply chain optimization is critical for efficiency and profitability in global trade. This blog post dives into best practices for streamlining your operations.
            </p>
            <a href="#" className="text-orange-600 font-semibold hover:underline">Read More</a>
          </div>

        </div>
      </div>
    </section>




    

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-16">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Get In Touch
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Let us help you achieve your global business goals. Contact Inowa Consult today to schedule a consultation.
                </p>
              </div>
            </div>
       
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-blueGray-800 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Phone"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Pone"
                      />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="company-name"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="py-16 px-4">
      <div className="container mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
          We’d love to hear from you! Get in touch with us through any of the following ways.
        </p>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="text-blue-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Email</h3>
            </div>
            <p className="text-gray-600">
              <a href="mailto:info@inowaconsult.com" className="text-blue-600 hover:underline">info@inowaconsult.com</a>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faPhone} 
                className="text-green-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
            </div>
            <p className="text-gray-600">
              <a href="tel:+1234567890" className="text-green-600 hover:underline">+ [international dialing code] xxx-xxx-xxxx</a>
            </p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className="text-red-500 text-3xl mr-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Address</h3>
            </div>
            <p className="text-gray-600">
              [Office Address, if applicable]
            </p>
          </div>

        </div>
      </div>
    </div>
        </section>
      </main>

      {/* Footer */}

      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Industries We Serve
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                   Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Inowa Consult. All Rights Reserved{" "}
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-blueGray-800"
                ></a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
