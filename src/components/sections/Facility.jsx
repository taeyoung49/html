import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import facilityBg from '../../assets/facility_bg.png';

// For demo, we use the generated facilityBg for all items, but in reality they would be different images
const facilities = [
  { id: 1, name: "고효율 산업용 워터 펌프 A형", desc: "최대 압력 150bar, 스테인리스 스틸 하우징 적용 모델", image: facilityBg },
  { id: 2, name: "대용량 오수 펌프 B형", desc: "하수 처리장 및 대규모 정수 시설용 특화 모델", image: facilityBg },
  { id: 3, name: "화학 플랜트용 특수 펌프", desc: "내화학성 특수 코팅 적용, 부식 방지", image: facilityBg },
  { id: 4, name: "스마트팩토리 제어 패널", desc: "IoT 기반 실시간 모니터링 및 원격 제어 시스템", image: facilityBg },
];

const Facility = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="facility" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Equipment & Facility</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            비에이텍의 첨단 설비와 장비 갤러리입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-video lg:aspect-square bg-slate-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImg(item)}
            >
              <div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <ZoomIn size={32} className="mb-2 text-primary" />
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={36} />
            </button>
            <motion.div 
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-64 md:h-96 bg-slate-200">
                <img src={selectedImg.image} alt={selectedImg.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">{selectedImg.name}</h3>
                <p className="text-slate-600 leading-relaxed">{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Facility;
