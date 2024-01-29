import Noticeitems from "./NoticeItem/NoticeItems";


export interface notice {
    category: string;
    title:string;
    content:string;
    editor:string;
    date:Date;
  }
  
export const notices: notice[] = [
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"2024 1학기 기숙사 선발생 선발 안내",
    content:"입사 신청 전 공지 하단 첨부파일을 반드시 확인하시기 바랍니다 첨부파일 미확인으로 발생하는 불이익은 본인 책임으로 반드시 확인 후 신청하시기 바랍니다",
    editor:"생활원",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단3",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단4",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단5",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단5",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단5",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단5",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
{
    category:"일반/행사/모집",
    title:"학내 전산 서비스 중단5",
    content:"□ 사전신청 일정: 2023. 11. 22.(수) 오전 9시 ~ㅇ 국가장학금 1차 신청이 마감(2023. 12. 27.(수) 18시)되어도 학자금대출은 계속 사전신청 가능합니다.□ 사전신청 방법ㅇ 홈페이지 1) 한국장학재단 홈페이지 로그인 2) 학자금대출 > 학자금대출 신청 > [통합신청 바로가기] 버튼 클릭하여 신청 3) 학자금대출 > 학자금대출 신청 > 사전신청현황 에서 사전신청 완료 확인 ㅇ 모바일 1) 한국장학재단 모바일 어플 로그인 2) 학자금대출 > 대출신청(통합신청)에서 신청 3) 통합신청 마지막 화면에서 [신청현황 보러가기] 클릭하여 사전신청 완료 확 ※ 취업후 상환 학자금대출을 희망하는 경우, 학자금 지원구간 산정기간을 감안하여 대학(원) 등록마감일로부터 약 8주전 신청을 권장드립니다. ※ 대출심사는 본신청기간부터 진행됩니다. (추후 본 신청 및 실행일정 재공지 예정) 한국장학재단 관련 문의사항 : 고객상담센터 1599-2000",
    editor:"정보전산팀",
    date:new Date(2020,2,11)
},
];


function Notice() {
    return (
        <>
            <Noticeitems notices={notices}/>
        </>

    )
}

export default Notice