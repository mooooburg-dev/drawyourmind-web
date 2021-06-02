<template>
  <div>
    <div class="work-text oxtail mt-5 mb-5">All Project List</div>
    <div>
      2021
      <ul>
        <li>
          HSMOA Commerce System 구축중
        </li>
        <ul>
          <li>React / Hooks</li>
          <li>Typescript</li>
          <li>Ant design</li>
          <li>yup</li>
        </ul>
      </ul>
    </div>
    <div>
      2020
      <ul>
        <li>
          <a href="#" @click.prevent="$router.push('/works/mpp')"
            >Medit Partner Portal System</a
          >
        </li>
        <ul>
          <li>Vue.js</li>
          <li>Spring Boot & Gradle</li>
          <li>AWS Elastic Beanstalk & S3</li>
          <li>Jira / Confluence</li>
        </ul>
      </ul>
    </div>
    <div>
      2019
      <ul>
        <li>
          <a href="#" @click.prevent="$router.push('/works/hr')"
            >Medit e-HR System</a
          >
        </li>
        <ul>
          <li>Vue.js</li>
          <li>Element</li>
          <li>Jira / Confluence</li>
        </ul>
      </ul>
    </div>
    <div>
      2018
      <ul>
        <li>
          <a href="#" @click.prevent="$router.push('/works/adidas-golf')"
            >[아디다스 골프] 통합 마케팅 운영 대행</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="$router.push('/works/dior-gallery')"
            >[Dior] VVIP 컨슈머 모바일 갤러리 서비스 운영</a
          >
        </li>
      </ul>
    </div>
    <div>
      2017
      <ul>
        <li>[YBM] 2018 YBM 중학교 영어 디지털 교과서 제작</li>
        <li>
          <a href="#" @click.prevent="$router.push('/works/sns-marketing')"
            >온라인 마케팅 운영(아디다스, 노스페이스, 만다리나덕, 하그로프스
            등)</a
          >
        </li>
      </ul>
    </div>
    <div>
      2016
      <ul>
        <li>온라인 마케팅 운영(LF, 리복, 아디다스, 스케쳐스 등)</li>
        <li>이트라이브 웹사이트 리뉴얼</li>
        <li>서울 옥션 하이브리드 앱 스크립트 개발</li>
        <li>DHC 모바일/PC 스크립트 개발</li>
        <li>에이스화재 모바일웹 스크립트 개발</li>
      </ul>
    </div>
    <div>
      2015
      <ul>
        <li>메리츠화재 통합플랫폼 모바일웹 스크립트 개발</li>
        <li>넥슨 고객센터 리뉴얼 스크립트 개발</li>
        <li>LG CNS 인터넷 등기소 스크립트 개발</li>
        <li>제2롯데월드타워 롯데콘서트홀 PC/모바일 스크립트 개발</li>
        <li>호텔패스 모바일웹 스크립트 개발</li>
      </ul>
    </div>
    <div>
      2014
      <ul>
        <li>요괴워치 모바일웹 스크립트</li>
        <li>두산 인프라코어 스크립트</li>
        <li>VUAL 쇼룸 프로젝션맵핑 컨텐츠 제작</li>
        <li>제2롯데월드 웹 메인 비쥬얼 스크립트 제작</li>
        <li>VUAL DMC홍보관 키오스크 컨텐츠 제작</li>
      </ul>
    </div>
    <div>
      2013
      <ul>
        <li>VUAL K뷰티 박람회 전시 @킨텍스</li>
        <li>VUAL 반다이 코리아 인터랙티브 스크린 도어 구축 참여</li>
        <li>롯데 삼강 사이버팩토리 컨텐츠 제작</li>
      </ul>
    </div>
    <div>
      2012
      <ul>
        <li>
          <a href="#" @click.prevent="$router.push('/works/vual')"
            >멀티 뉴미디어 브랜드 VUAL 런칭</a
          >
        </li>
        <li>한화손해보험 플래시 컨텐츠 제작</li>
        <li>삼성화재 설계체험 플래시 컨텐츠 제작</li>
        <li>롯데 인재개발원 웹사이트 구축</li>
        <li>이트라이브 주소록 폴라베어 제작</li>
        <li>싱가폴항공 프로모션 플래시 제작</li>
      </ul>
    </div>
    <div>
      2011
      <ul>
        <li>롯데손해보험 자동차보험 RIA 서비스 구축</li>
        <li>웅진 씽크빅 문법통 티져 웹사이트 구축</li>
        <li>이트라이브 웹사이트 리뉴얼 구축</li>
        <li>It's skin 웹사이트 리뉴얼 구축 참여</li>
      </ul>
    </div>
    <div>
      2010
      <ul>
        <li>호주 한국타이어 맞춤형 타이어 셀렉터 iDrive 구축</li>
        <li>호주 현대자동차 i20 브랜드 프로모션 구축</li>
        <li>호주 LG 3D TV INFINIA 브랜드 프로모션 구축</li>
        <li>호주 LG PVR HR500 사용자 가이드 플래시 제작</li>
        <li>호주 LG PVR HR500 프로모션 웹사이트 구축</li>
      </ul>
    </div>
    <div>
      2009
      <ul>
        <li>한국 밀러 웹사이트 리뉴얼 참여</li>
        <li>한국 코카콜라 <다이나믹-킨> 프로모션 웹사이트 구축</li>
        <li>LG TV/홈씨어터 통합 웹사이트 구축</li>
        <li>SK텔레콤 브랜드 캠페인 <비비디바비디부> 웹사이트 구축</li>
      </ul>
    </div>
    <div>
      2008
      <ul>
        <li>한국 코카콜라 <네스티> 프로모션 웹사이트 구축</li>
        <li>PCA생명 이벤트 제작</li>
        <li>삼성 애니콜 옴니아(i900) GUI 개발 참여</li>
        <li>뉴욕생명 웹사이트 리뉴얼 구축</li>
        <li>한국 코카콜라 통합웹사이트 운영</li>
        <li>한국 코카콜라 코크-플레이 웹사이트 운영</li>
      </ul>
    </div>
    <div>
      2007
      <ul>
        <li>우리은행 인터넷뱅킹 리뉴얼 참여(위젯 서비스)</li>
        <li>농협중앙회 인터넷뱅킹 리뉴얼 참여</li>
      </ul>
    </div>
    <div>
      2006
      <ul>
        <li>GCS SIP Server 디자인 참여</li>
        <li>보안설비업체 두레에스텍 웹사이트 구축</li>
        <li>수맥차단 업체 실비아 웹사이트 구축</li>
        <li>해외무역업체 디스럭스 웹사이트 구축</li>
      </ul>
    </div>
    <div>
      2005
      <ul>
        <li>KBS 농촌사랑 한가위 대축제 웹사이트 구축</li>
      </ul>
    </div>
    <div>
      2004
      <ul>
        <li>대한민국 육군 제60보병사단 웹사이트 구축</li>
        <li>대한민국 육군 제60보병사단 보급수송대대 웹사이트 구축</li>
      </ul>
    </div>
    <div>
      2000
      <ul>
        <li>drawyourmind.com 오픈(2000-09-12)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
