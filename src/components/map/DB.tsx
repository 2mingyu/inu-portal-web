// 장소 객체의 타입 정의
export interface Place {
    latitude: string, // 위도
    longitude: string, // 경도
    location: string, // 호관
    place_name: string, // 건물명(정보기술대학 등)
    category:
        | "여자휴게실"
        | "남자휴게실"
        | "남녀공용 휴게실"
        | "송도캠퍼스"
        | "미추홀캠퍼스"
        | "카페"
        | "식당"
        | "편의점",
    restareaInfo: RestArea | null,
    schoolPlaceInfo: Department[] | null, // 수정된 부분
    cafePlaceInfo: Cafe | null,
    restaurantInfo: Restaurant | null,
    note: string,
    // 필요시 추가적인 프로퍼티를 여기에 정의할 수 있습니다.
}

export interface RestArea {
    roomNumber: string, // 호실
    hasFemaleProducts: boolean | "미확인", // 여성용품
    bedCount: number | string | "미확인", // 침대, 빈백(개)
    hasChangingRoom: boolean | "미확인", // 탈의실
    hasShowerRoom: boolean | "미확인", // 샤워실
}

export interface Department {
    name: string, // 학과 이름
    link: string, // 홈페이지 주소
}

export interface Cafe {
    name: string,   //카페 상호명
}

export interface Restaurant {
    name: string, //식당명
}

//학교 건물 정보
export const places: Place[] = [
    {
        latitude: "37.3768607456",
        longitude: "126.63475467835487",
        location: "1호관",
        place_name: "대학본부",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 대학본부는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.377506974488625",
        longitude: "126.6339442750",
        location: "2호관",
        place_name: "교수회관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 교수회관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37717214431695",
        longitude: "126.6342027596888",
        location: "3호관",
        place_name: "홍보관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 홍보관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.376509721256305",
        longitude: "126.63560597817306",
        location: "4호관",
        place_name: "정보전산원/정보기술교육원",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 정보전산원은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.375637411134655",
        longitude: "126.63469004660143",
        location: "5호관",
        place_name: "자연과학대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "수학과", link: "https://www.example.com/수학과"},
            {name: "물리학과", link: "https://www.example.com/물리학과"},
            {name: "화학과", link: "https://www.example.com/화학과"},
            {name: "패션산업학과", link: "https://www.example.com/패션산업학과"},
            {name: "해양학과", link: "https://www.example.com/해양학과"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.375069061736276",
        longitude: "126.63446135555023",
        location: "6호관",
        place_name: "학산도서관/이룸관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 도서관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.374512269992046",
        longitude: "126.63360036987291",
        location: "7호관",
        place_name: "정보기술대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "컴퓨터공학부", link: "https://www.example.com/컴퓨터공학부"},
            {name: "정보통신공학과", link: "https://www.example.com/정보통신공학과"},
            {name: "임베디드시스템공학과", link: "https://www.example.com/임베디드시스템공학과"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37368960485804",
        longitude: "126.63271811333277",
        location: "8호관",
        place_name: "공과대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "기계공학과", link: "https://www.example.com/기계공학과"},
            {name: "전기공학과", link: "https://www.example.com/전기공학과"},
            {name: "전자공학과", link: "https://www.example.com/전자공학과"},
            {name: "산업경영공학과", link: "https://www.example.com/산업경영공학과"},
            {name: "신소재공학과", link: "https://www.example.com/신소재공학과"},
            {name: "안전공학과", link: "https://www.example.com/안전공학과"},
            {name: "에너지화학공학과", link: "https://www.example.com/에너지화학공학과"},
            {name: "바이오-로봇 시스템 공학과", link: "https://www.example.com/바이오-로봇 시스템 공학과"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37278189936658",
        longitude: "126.6334676640455",
        location: "9호관",
        place_name: "공동실험실습관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 실습관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3728982223437",
        longitude: "126.63175669458256",
        location: "10호관",
        place_name: "게스트하우스",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 게스트하우스는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.374416242980054",
        longitude: "126.63169282366194",
        location: "11호관",
        place_name: "복지회관/소극장",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 복지회관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37559782839164",
        longitude: "126.6328188884216",
        location: "12호관",
        place_name: "컨벤션센터",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 컨벤션센터는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37622583170076",
        longitude: "126.63339727703993",
        location: "13호관",
        place_name: "사회과학대학/글로벌정경대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "사회복지학과", link: "https://www.example.com/사회복지학과"},
            {name: "미디어커뮤니케이션학과", link: "https://www.example.com/미디어커뮤니케이션학과"},
            {name: "문헌정보학과", link: "https://www.example.com/문헌정보학과"},
            {name: "창의인재개발학과", link: "https://www.example.com/창의인재개발학과"},
            {name: "행정학과", link: "https://www.example.com/행정학과"},
            {name: "정치외교학과", link: "https://www.example.com/정치외교학과"},
            {name: "경제학과", link: "https://www.example.com/경제학과"},
            {name: "무역학부", link: "https://www.example.com/무역학부"},
            {name: "소비자학과", link: "https://www.example.com/소비자학과"},
            {name: "법학부", link: "https://www.example.com/법학부"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.376591310745894",
        longitude: "126.632853561603",
        location: "14호관",
        place_name: "동북아경제통상대학/경영대학/물류대학원",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "경영학부", link: "https://www.example.com/경영학부"},
            {name: "데이터과학과", link: "https://www.example.com/데이터과학과"},
            {name: "세무회계학과", link: "https://www.example.com/세무회계학과"},
            {name: "테크노경영학과", link: "https://www.example.com/테크노경영학과"},
            {name: "동북아국제통상전공", link: "https://www.example.com/동북아국제통상전공"},
            {name: "스마트물류공학전공", link: "https://www.example.com/스마트물류공학전공"},
            {name: "IBE전공", link: "https://www.example.com/IBE전공"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37554118001915",
        longitude: "126.63198651319614",
        location: "15호관",
        place_name: "인문대학/어학원",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "국어국문학과", link: "https://www.example.com/국어국문학과"},
            {name: "영어영문학과", link: "https://www.example.com/영어영문학과"},
            {name: "독어독문학과", link: "https://www.example.com/독어독문학과"},
            {name: "불어불문학과", link: "https://www.example.com/불어불문학과"},
            {name: "일본지역문화학과", link: "https://www.example.com/일본지역문화학과"},
            {name: "중어중국학과", link: "https://www.example.com/중어중국학과"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37485623220554",
        longitude: "126.63120802121018",
        location: "16호관",
        place_name: "예체능대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "한국화전공(조형예술학부)", link: "https://www.example.com/한국화전공"},
            {name: "서양화전공(조형예술학부)", link: "https://www.example.com/서양화전공"},
            {name: "디자인학부", link: "https://www.example.com/디자인학부"},
            {name: "공연예술학과", link: "https://www.example.com/공연예술학과"},
            {name: "스포츠과학부", link: "https://www.example.com/스포츠과학부"},
            {name: "운동건강학부", link: "https://www.example.com/운동건강학부"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37432536725907",
        longitude: "126.63072232752626",
        location: "17호관",
        place_name: "학생회관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 학생회관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37381802427906",
        longitude: "126.62983573272447",
        location: "18-1호관",
        place_name: "제1기숙사",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 기숙사는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.374520860124846",
        longitude: "126.62912947432747",
        location: "18-2호관",
        place_name: "제2기숙사",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 기숙사는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37335298073755",
        longitude: "126.62951061199232",
        location: "18-3호관",
        place_name: "제3기숙사",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 기숙사는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37474984957207",
        longitude: "126.63032227164467",
        location: "19호관",
        place_name: "융합자유전공대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "자유전공학부", link: "https://www.example.com/자유전공학부"},
            {name: "국제자유전공학부", link: "https://www.example.com/국제자유전공학부"},
            {name: "융합학부", link: "https://www.example.com/융합학부"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37513078171881",
        longitude: "126.62968251003296",
        location: "20호관",
        place_name: "스포츠센터",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 스포츠센터는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.375650891254224",
        longitude: "126.63032913972977",
        location: "21호관",
        place_name: "체육관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 체육관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3759858681",
        longitude: "126.63084120229585",
        location: "22호관",
        place_name: "학군단",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 학군단은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.378099391695",
        longitude: "126.63249055733908",
        location: "23호관",
        place_name: "강당/공연장",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 강당은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37601492386756",
        longitude: "126.63585393505195",
        location: "24호관",
        place_name: "전망타워",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 전망타워는 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.37519558100987",
        longitude: "126.63604418331869",
        location: "25호관",
        place_name: "어린이집",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 어린이집은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3752617311",
        longitude: "126.6355809677",
        location: "26호관",
        place_name: "온실",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 온실은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3718872841",
        longitude: "126.6326281161",
        location: "27호관",
        place_name: "도시과학대학",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "도시행정학과", link: "https://www.example.com/도시행정학과"},
            {name: "건성환경공학", link: "https://www.example.com/건성환경공학"},
            {name: "환경공학", link: "https://www.example.com/환경공학"},
            {name: "도시공학과", link: "https://www.example.com/도시공학과"},
            {name: "건축공학", link: "https://www.example.com/건축공학"},
            {name: "도시건축학", link: "https://www.example.com/도시건축학"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3722445837",
        longitude: "126.6330779615",
        location: "28호관",
        place_name: "제2공동실습관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // 실습관은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3724283886",
        longitude: "126.6313384491",
        location: "29호관",
        place_name: "29호관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "생명과학부(생명과학전공)", link: "https://www.example.com/생명과학부(생명과학전공)"},
            {name: "생명과학부(분자의생명전공)", link: "https://www.example.com/생명과학부(분자의생명전공)"},
            {name: "생명공학부(생명공학전공)", link: "https://www.example.com/생명공학부(생명공학전공)"},
            {name: "생명공학부(나이오바이오공학전공)", link: "https://www.example.com/생명공학부(나이오바이오공학전공)"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3820196384",
        longitude: "126.65442709297741",
        location: "미추홀별관A동",
        place_name: "사범대학",
        category: "미추홀캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: [
            {name: "국어교육과", link: "https://www.example.com/국어교육과"},
            {name: "영어교육과", link: "https://www.example.com/영어교육과"},
            {name: "일어교육과", link: "https://www.example.com/일어교육과"},
            {name: "수학교육과", link: "https://www.example.com/수학교육과"},
            {name: "체육교육과", link: "https://www.example.com/체육교육과"},
            {name: "유아교육과", link: "https://www.example.com/유아교육과"},
            {name: "역사교육과", link: "https://www.example.com/역사교육과"},
            {name: "윤리교육과", link: "https://www.example.com/윤리교육과"},
        ],
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
    {
        latitude: "37.3814145022",
        longitude: "126.65470085564704",
        location: "미추홀별관B동",
        place_name: "B동",
        category: "미추홀캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null, // B동은 학과 정보가 없음
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null, // 추가된 필드
        note: "",
    },
];

//휴게 장소 정보
export const restPlaces: Place[] = [
    {
        latitude: "37.3759483",
        longitude: "126.6354309",
        place_name: "자연과학대학",
        category: "여자휴게실",
        location: "5호관 C동",
        restareaInfo: {
            roomNumber: "126호",
            hasFemaleProducts: false,
            bedCount: 4,
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,


    },
    {
        latitude: "37.37465466",
        longitude: "126.6337549",
        place_name: "정보기술대학",
        category: "여자휴게실",
        location: "7호관 B동",
        restareaInfo: {
            roomNumber: "112호",
            hasFemaleProducts: false,
            bedCount: 4,
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37402624",
        longitude: "126.6330411",
        place_name: "공과대학",
        category: "여자휴게실",
        location: "8호관 C동",
        restareaInfo: {
            roomNumber: "536호",
            hasFemaleProducts: false,
            bedCount: 7,
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37621223",
        longitude: "126.6333691",
        place_name: "사회과학대학",
        category: "여자휴게실",
        location: "13호관",
        restareaInfo: {
            roomNumber: "216호",
            hasFemaleProducts: false,
            bedCount: 4,
            hasChangingRoom: "미확인",
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37660704",
        longitude: "126.6328422",
        place_name: "글로벌정경대학",
        category: "여자휴게실",
        location: "14호관 B동",
        restareaInfo: {
            roomNumber: "206호",
            hasFemaleProducts: false,
            bedCount: 4,
            hasChangingRoom: "미확인",
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37535138",
        longitude: "126.6317983",
        place_name: "인문대학",
        category: "여자휴게실",
        location: "15호관",
        restareaInfo: {
            roomNumber: "105호",
            hasFemaleProducts: true,
            bedCount: 4,
            hasChangingRoom: "미확인",
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37189377",
        longitude: "126.6325406",
        place_name: "도시과학대학",
        category: "여자휴게실",
        location: "28호관",
        restareaInfo: {
            roomNumber: "106호",
            hasFemaleProducts: true,
            bedCount: 7,
            hasChangingRoom: "미확인",
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.3820173",
        longitude: "126.6543989",
        place_name: "사범대학",
        category: "여자휴게실",
        location: "미추홀캠퍼스",
        restareaInfo: {
            roomNumber: "116호",
            hasFemaleProducts: "미확인",
            bedCount: 5,
            hasChangingRoom: "미확인",
            hasShowerRoom: "미확인",
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37459259",
        longitude: "126.6319008",
        place_name: "복지회관",
        category: "여자휴게실",
        location: "11호관",
        restareaInfo: {
            roomNumber: "4충",
            hasFemaleProducts: true,
            bedCount: "6개 이상",
            hasChangingRoom: "미확인",
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37472788",
        longitude: "126.6319453",
        place_name: "복지회관",
        category: "남자휴게실",
        location: "11호관",
        restareaInfo: {
            roomNumber: "4층",
            hasFemaleProducts: false,
            bedCount: 12,
            hasChangingRoom: false,
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37172123",
        longitude: "126.6328321",
        place_name: "도시과학대학",
        category: "남자휴게실",
        location: "28호관",
        restareaInfo: {
            roomNumber: "110호",
            hasFemaleProducts: false,
            bedCount: 12,
            hasChangingRoom: false,
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37597128",
        longitude: "126.6355804",
        place_name: "자연과학대학",
        category: "남자휴게실",
        location: "5호관 C동",
        restareaInfo: {
            roomNumber: "124, 125호",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37462353",
        longitude: "126.6338877",
        place_name: "정보기술대학",
        category: "남자휴게실",
        location: "7호관 B동",
        restareaInfo: {
            roomNumber: "115호, 116호",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37382437",
        longitude: "126.6333186",
        place_name: "공과대학",
        category: "남자휴게실",
        location: "8호관 C동",
        restareaInfo: {
            roomNumber: "537호, 538호",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.3745533",
        longitude: "126.630137",
        place_name: "융합자유전공대학",
        category: "남자휴게실",
        location: "19호관",
        restareaInfo: {
            roomNumber: "201B, 201C",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37595555",
        longitude: "126.6355917",
        place_name: "자연과학대학",
        category: "남녀공용 휴게실",
        location: "5호관 C동",
        restareaInfo: {
            roomNumber: "122, 123호",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37476251",
        longitude: "126.6336669",
        place_name: "정보기술대학",
        category: "남녀공용 휴게실",
        location: "7호관 B동",
        restareaInfo: {
            roomNumber: "113호, 114호",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37432629",
        longitude: "126.6310187",
        place_name: "학생회관",
        category: "남녀공용 휴게실",
        location: "17호관",
        restareaInfo: {
            roomNumber: "305A",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: false,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
    {
        latitude: "37.37469541",
        longitude: "126.6302012",
        place_name: "융합자유전공대학",
        category: "남녀공용 휴게실",
        location: "19호관",
        restareaInfo: {
            roomNumber: "201A, 201D",
            hasFemaleProducts: false,
            bedCount: "미확인",
            hasChangingRoom: true,
            hasShowerRoom: true,
        },
        note: "",
        schoolPlaceInfo: null,
        cafePlaceInfo: null, // 추가된 필드
        restaurantInfo: null,

    },
];

//식당 정보
export const restaurantPlaces: Place[] = [
    {
        latitude: "37.3743292734437",
        longitude: "126.63197549904656",
        location: "11호관",
        place_name: "복지회관/소극장",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "학생식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37381802427906",
        longitude: "126.62983573272447",
        location: "18-1호관",
        place_name: "제1기숙사",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "제1기숙사식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.374520860124846",
        longitude: "126.62912947432747",
        location: "18-2호관",
        place_name: "제2기숙사",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "제2기숙사식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.377506974488625",
        longitude: "126.6339442750",
        location: "2호관",
        place_name: "교수회관",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "교직원식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.3718872841",
        longitude: "126.6326281161",
        location: "27호관",
        place_name: "도시과학대학",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "27호관식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.3820196384",
        longitude: "126.65442709297741",
        location: "미추홀별관A동",
        place_name: "사범대학",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "사범대식당",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37432536725907",
        longitude: "126.63072232752626",
        location: "17호관",
        place_name: "학생회관",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "공씨네주먹밥",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37432536725907",
        longitude: "126.63072232752626",
        location: "17호관",
        place_name: "학생회관",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "토마토도시락",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37432536725907",
        longitude: "126.63072232752626",
        location: "17호관",
        place_name: "학생회관",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "고기굽는 집(고집)",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.3728982223437",
        longitude: "126.63175669458256",
        location: "10호관",
        place_name: "게스트하우스",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "Salady",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37368960485804",
        longitude: "126.63271811333277",
        location: "8호관",
        place_name: "공과대학",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "쉐푸드",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.3738500311",
        longitude: "126.6343317918",
        location: "팝업스토어",
        place_name: "",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "봉구스밥버거",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37369148897757",
        longitude: "126.63478133542652",
        location: "팝업스토어",
        place_name: "",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "법대생김밥/꽈배기",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37578072246939",
        longitude: "126.63514378310879",
        location: "5호관",
        place_name: "자연과학대학",
        category: "식당",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "바비와따!",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: "",

    },
    {
        latitude: "37.37598686771142",
        longitude: "126.6355210081379",
        location: "5호관",
        place_name: "자연과학대학",
        category: "편의점",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "coopsket자연대",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: "",

    },

    {
        latitude: "37.37457192149467",
        longitude: "126.63177391528959",
        location: "11호관",
        place_name: "복지회관/소극장",
        category: "편의점",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "coopsket복지회관",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.3724283886",
        longitude: "126.6313384491",
        location: "29호관",
        place_name: "생명과학대학",
        category: "편의점",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "coopsket생명대",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.37368960485804",
        longitude: "126.63271811333277",
        location: "8호관",
        place_name: "공과대학",
        category: "편의점",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "coopsket공대",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
    {
        latitude: "37.375069061736276",
        longitude: "126.63446135555023",
        location: "6호관",
        place_name: "학산도서관",
        category: "편의점",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: null,
        restaurantInfo: {
            name: "emart24도서관",
            // 추가적인 식당 정보가 있다면 여기에 추가
        },
        note: ""
    },
]


//카페 정보
export const cafePlaces: Place[] = [
    {
        latitude: "37.37505128",
        longitude: "126.6338094",
        location: "6호관",
        place_name: "학산도서관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "Café Dream 도서관"},
        note: "",
        restaurantInfo: null,

    },
    {
        latitude: "37.37435262",
        longitude: "126.6315153",
        location: "11호관",
        place_name: "복지회관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "Café Dream 복지회관"},
        note: "",
        restaurantInfo: null,

    },
    {
        latitude: "37.37430555",
        longitude: "126.6308692",
        location: "17호관",
        place_name: "학생회관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "Grazie Bakery"},
        note: "",
        restaurantInfo: null,

    },
    {
        latitude: "37.37434517",
        longitude: "126.6305726",
        location: "17호관",
        place_name: "학생회관",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "CAFÉ-ING"},
        note: "",
        restaurantInfo: null,

    },
    {
        latitude: "37.37386382",
        longitude: "126.6344192",
        location: "7호관 앞",
        place_name: "팝업스토어",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "박종석커피"},
        note: "",
        restaurantInfo: null,

    },
    {
        latitude: "37.37368816",
        longitude: "126.6344314",
        location: "7호관 앞",
        place_name: "팝업스토어",
        category: "송도캠퍼스",
        restareaInfo: null,
        schoolPlaceInfo: null,
        cafePlaceInfo: {name: "PALGONG TEA"},
        note: "",
        restaurantInfo: null,

    },
];