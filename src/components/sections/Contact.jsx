import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Here you would integrate with EmailJS or Formspree
    // Example: await emailjs.send('service_id', 'template_id', data, 'public_key');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    trackEvent('contact_form_submit', {
      company: data.company
    });

    setIsSuccess(true);
    reset();
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-900/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Contact & Inquiry</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              프로젝트 도입 및 견적 문의를 남겨주시면,<br />
              담당 엔지니어가 신속하게 답변해 드립니다.
            </p>
            
            <div className="space-y-6 text-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-primary">T</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">대표전화</p>
                  <p className="font-semibold text-lg">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-primary">E</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">이메일</p>
                  <p className="font-semibold text-lg">info@batech.example.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl flex flex-col items-center justify-center h-full text-center">
                <CheckCircle size={64} className="text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">문의가 접수되었습니다</h3>
                <p className="text-slate-300">빠른 시일 내에 기재해주신 연락처로 회신드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">회사명 *</label>
                    <input 
                      {...register("company", { required: "회사명을 입력해주세요" })}
                      className={`w-full bg-white/10 border ${errors.company ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                      placeholder="주식회사 비에이텍"
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">담당자 성함 *</label>
                    <input 
                      {...register("name", { required: "성함을 입력해주세요" })}
                      className={`w-full bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                      placeholder="홍길동"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">연락처 *</label>
                    <input 
                      {...register("phone", { required: "연락처를 입력해주세요" })}
                      className={`w-full bg-white/10 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                      placeholder="010-0000-0000"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">이메일 *</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "이메일을 입력해주세요",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "유효한 이메일 주소를 입력해주세요"
                        }
                      })}
                      className={`w-full bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">문의 내용 *</label>
                  <textarea 
                    {...register("message", { required: "문의 내용을 입력해주세요" })}
                    rows={4}
                    className={`w-full bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none`}
                    placeholder="도입을 원하시는 설비나 궁금한 점을 상세히 남겨주세요."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex justify-center items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      문의 접수하기
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
