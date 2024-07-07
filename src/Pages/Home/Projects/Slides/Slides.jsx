import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slides = () => {

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="card card-compact bg-blue-50 lg:w-[1000px] mx-auto shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/Kztz8Xj/unity-serve.png' />
                    </figure>
                    <div className="card-body px-3 mb-5">
                        <h2 className="card-title">Unity Serve</h2>
                        <p>"Unity Serve" is a Volunteer Management Platform, where an user can post for events as an organizer or can request to join an event as a volunteer. </p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projeccts/UnityServe' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-compact bg-blue-50 lg:w-[1000px] mx-auto shadow-xl">
                    <figure>
                        <img
                            src='https://i.ibb.co/NrRnBnd/learn-together.png'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Learn Together</h2>
                        <p>"Learn Together" is a Collaborative Study Platform. This platform connects students and tutors. Students can book study sessions and join classes, while tutors can create and manage sessions.</p>
                        <div className="card-actions justify-end my-4">
                            <Link to='/projeccts/LearnTogether' className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Slides;