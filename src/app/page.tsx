'use client';

import { useState } from 'react';
import {
  Rocket,
  Phone,
  FileText,
  CheckCircle,
  Shield,
  Clock,
  Target,
  Users,
  TrendingUp,
  Building2,
  Banknote,
  HandCoins,
  Star,
  ChevronRight,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Rocket className="w-8 h-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">로켓콜-정책자금</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-primary-600 transition-colors">
                제안서 보기
              </a>
              <button
                onClick={scrollToContact}
                className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                무료 상담
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block text-gray-600 hover:text-primary-600">
                제안서 보기
              </a>
              <button
                onClick={scrollToContact}
                className="w-full bg-primary-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                무료 상담
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 lg:py-24">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Banknote className="w-4 h-4" />
              정부 정책자금 전문 상담
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              정책자금이 필요한<br />
              <span className="text-primary-600">확정 고객만</span> 연결해드립니다
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              담보력이 부족한 중소기업, 소상공인을 위한<br />
              정부 지원자금 상담 약속을 잡아드립니다
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2"
              >
                지금 바로 상담 신청하기
                <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="https://drive.google.com/file/d/1FGpJjks9asLnWIAS6wd7be0ARZDssLNM/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                서비스 제안서 보기
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">98%</div>
                <div className="text-sm md:text-base text-gray-600">약속 성사율</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">3,000+</div>
                <div className="text-sm md:text-base text-gray-600">누적 매칭 건수</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600">200+</div>
                <div className="text-sm md:text-base text-gray-600">파트너 컨설턴트</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이런 DB, 한 번쯤 써보셨죠?
            </h2>
            <p className="text-gray-600 text-lg">기존 DB의 문제점들을 로켓콜이 해결합니다</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '📵', title: '연락 불가', desc: '전화를 받지 않는 고객' },
              { icon: '📞', title: '즉시 종료', desc: '전화 받자마자 끊는 고객' },
              { icon: '👥', title: '중복 고객', desc: '이미 상담받은 고객' },
              { icon: '❌', title: '결번/오류', desc: '번호가 없거나 틀린 고객' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm text-center card-hover">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              국내 최초 100% AS 보장제도 도입
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              로켓콜은 <span className="text-primary-600">다릅니다</span>
            </h2>
            <p className="text-gray-600 text-lg">2단계 검증 시스템으로 확정 고객만 전달합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1차 컨택</h3>
              <p className="text-gray-600">정책자금 지원 대상 여부 확인 및 관심 고객 사전 검증</p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2차 컨택</h3>
              <p className="text-gray-600">상담 일정 확정 및 컨설턴트 방문 약속 최종 확인</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              로켓콜 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* Why Rocket Call */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-primary-600">Rocket Call</span>?
            </h2>
            <p className="text-gray-600 text-lg">정책자금 컨설팅 영업에 최적화된 서비스</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: '확정 고객만 연결', desc: '정책자금이 필요한 실제 대상자만 연결해드립니다' },
              { icon: Clock, title: '시간 절약', desc: '콜드콜 없이 바로 상담, 업무 효율 극대화' },
              { icon: TrendingUp, title: '매출 증대', desc: '평균 40% 이상 계약률 상승 경험' },
              { icon: Users, title: '전문 TM 팀', desc: '정책자금 전문 5년+ 경력 텔레마케터' },
              { icon: Shield, title: '독점 고객', desc: '다른 컨설턴트에게 중복 제공하지 않습니다' },
              { icon: Building2, title: '투명한 소통', desc: '고객 정보 및 상담 내용 실시간 공유' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-primary-600">Works</span>
            </h2>
            <p className="text-gray-600 text-lg">간단한 4단계로 시작하세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '상담 신청', desc: '간단한 정보 입력' },
              { step: '02', title: '맞춤 상담', desc: '서비스 안내 및 계약' },
              { step: '03', title: '약속콜 시작', desc: 'TM팀 영업 개시' },
              { step: '04', title: '고객 연결', desc: '확정 약속 전달' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {idx < 3 && (
                  <ChevronRight className="w-6 h-6 text-gray-300 mx-auto mt-4 hidden md:block rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              고객 <span className="text-primary-600">후기</span>
            </h2>
            <p className="text-gray-600 text-lg">로켓콜과 함께 성장한 파트너들의 이야기</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '김*호',
                role: 'S금융 컨설턴트',
                content: '콜드콜로 하루 종일 고생하던 때가 엊그제 같은데, 로켓콜 덕분에 확정된 약속만 받아서 상담하니 계약률이 확 올랐습니다.',
                rating: 5
              },
              {
                name: '박*영',
                role: 'K 정책자금지원센터',
                content: '정책자금 대상 고객을 직접 찾기 어려웠는데, 로켓콜에서 검증된 고객만 보내주니 영업 효율이 2배 이상 좋아졌어요.',
                rating: 5
              },
              {
                name: '이*수',
                role: 'H정책자금진흥원',
                content: '노쇼 걱정 없이 약속 잡힌 고객만 만나니까 시간 낭비가 없어요. 무엇보다 AS 보장제도가 있어서 믿고 맡깁니다.',
                rating: 5
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{item.content}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            100% 보장 약속
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            약속이 확정된 고객만 전달됩니다.<br />
            노쇼 발생 시 비용이 발생하지 않습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              '확정 고객만 전달',
              '노쇼 시 무료 재배정',
              '리스크 제로',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToContact}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            지금 바로 시작하기
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              상품 <span className="text-primary-600">라인업</span>
            </h2>
            <p className="text-gray-600 text-lg">비즈니스에 맞는 상품을 선택하세요</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-primary-200 rounded-2xl p-8 relative card-hover">
              <div className="absolute -top-3 left-6 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                추천
              </div>
              <HandCoins className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">정책자금 약속콜</h3>
              <p className="text-gray-600 mb-6">정책자금 지원 대상 확정 고객에게 상담 약속을 잡아드립니다</p>
              <ul className="space-y-3 mb-6">
                {['2단계 검증 완료 고객', '실시간 약속 일정 공유', '지역별 맞춤 배정'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full btn-primary"
              >
                상담 신청
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-8 card-hover">
              <Banknote className="w-12 h-12 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">정책자금 DB</h3>
              <p className="text-gray-600 mb-6">정책자금 관심 고객 데이터베이스를 제공합니다</p>
              <ul className="space-y-3 mb-6">
                {['검증된 관심 고객', '상세 사업자 정보', '즉시 연락 가능'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full btn-secondary"
              >
                상담 신청
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                무료 상담 <span className="text-primary-600">신청</span>
              </h2>
              <p className="text-gray-600 text-lg">
                아래 정보를 입력하시면 빠르게 연락드리겠습니다
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    전화번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    상담 문의
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="문의 내용을 입력해주세요 (선택)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-center text-green-600 font-medium">
                    상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center text-red-600 font-medium">
                    오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                  </div>
                )}

                <p className="text-center text-sm text-gray-500">
                  입력하신 정보는 상담 목적으로만 사용됩니다.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary-500" />
              <span className="font-bold text-white">로켓콜-정책자금</span>
            </div>
            <div className="text-center md:text-right text-sm">
              <p>상호: 제이코리아 | 대표: 이주영</p>
              <p>사업자등록번호: 278-30-01540</p>
              <p className="mt-2">© 2024 로켓콜-정책자금. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating KakaoTalk Button */}
      <a
        href="http://pf.kakao.com/_zxfugn/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 overflow-hidden"
        aria-label="카카오톡 상담"
      >
        <img
          src="/images/카톡_원형_로고.png"
          alt="카카오톡 상담"
          className="w-full h-full object-cover"
        />
      </a>
    </main>
  );
}
