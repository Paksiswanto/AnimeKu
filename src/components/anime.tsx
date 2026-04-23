import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface AnimeData {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
        }
    };
    score: number;
    synopsis: string;
}

const Anime: React.FC<{ data: AnimeData[] }> = ({ data }) => {
    return (
        <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
           
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={7}
                navigation
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 7 },
                }}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}>
                {data.map((item) => (
                    <SwiperSlide key={item.mal_id}>
                        <div key={item.mal_id} className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-yellow-500 transition-all">
                            <img
                                src={item.images.jpg.image_url}
                                alt={item.title}
                                className="w-full aspect-[2/3] object-cover"
                            />
                            <div className="p-3">
                                <h3 className="text-sm font-bold text-white line-clamp-1">{item.title}</h3>
                                <p className="text-xs text-yellow-500 font-bold mt-1">★ {item.score}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Anime;