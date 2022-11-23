interface PlaceType {
  poiId: string;
  poiName: string;
  district: string;
  image: string;
}

export interface PlaceList {
  district: string;
  placeList: PlaceType[];
}

export const placeList: PlaceList[] = [
  {
    district: "영등포구",
    placeList: [
      {
        poiId: "1172091",
        poiName: "타임스퀘어",
        district: "영등포구",
        image:
          "https://cdn.ftoday.co.kr/news/photo/202106/218511_218598_3444.jpg",
      },
      {
        poiId: "10067845",
        poiName: "더현대서울",
        district: "영등포구",
        image: "https://img.hankyung.com/photo/202103/AD.25580767.1.jpg",
      },
      {
        poiId: "2905972",
        poiName: "IFC몰",
        district: "영등포구",
        image:
          "https://wimg.mk.co.kr/meet/neds/2022/04/image_readtop_2022_338788_16500242705010886.jpg",
      },
      {
        poiId: "189138",
        poiName: "롯데백화점영등포점",
        district: "영등포구",
        image:
          "http://image.mediapen.com/news/202008/news_550735_1598059709_m.jpg",
      },
    ],
  },
  {
    district: "송파구",
    placeList: [
      {
        poiId: "187961",
        poiName: "롯데월드잠실점",
        district: "송파구",
        image:
          "https://w.namu.la/s/f4eeb4d000580ed54510801ede6bf71d9726acbca886db89a0c6bb43bab73391af5ff23873c660752e3604c47f5eac3f0593f2d3e5e263cc3e005ce2ee398fb7fbffefba165bf276f0042e2f66b41ba67e985546fbdaf295b652460b69d3083a12ade68fafd100344b58c01160ea9878",
      },

      {
        poiId: "188485",
        poiName: "롯데백화점잠실점",
        district: "송파구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202112/0002/20211223233250648_5.jpg",
      },
      {
        poiId: "7917265",
        poiName: "파크하비오워터킹덤",
        district: "송파구",
        image: "http://waterkingdom.habio.co.kr/images/img/b2f_slide01_07.jpg",
      },
      {
        poiId: "5799875",
        poiName: "롯데월드몰",
        district: "송파구",
        image: "https://www.lwt.co.kr/datas/lotevt/img/file_50_01161265225",
      },
    ],
  },
  {
    district: "서초구",
    placeList: [
      {
        poiId: "214920",
        poiName: "신세계백화점강남점",
        district: "서초구",
        image:
          "http://fpost.co.kr/board/data/editor/2201/3a85f6c749d5071424a7520d73f71af2_1641520639_5136.jpg",
      },
    ],
  },
  {
    district: "중구",
    placeList: [
      {
        poiId: "219475",
        poiName: "롯데백화점본점",
        district: "중구",
        image:
          "https://thumb.mt.co.kr/06/2022/07/2022072008094776039_1.jpg/dims/optimize/",
      },
      {
        poiId: "1133504",
        poiName: "롯데백화점에비뉴엘본점",
        district: "중구",
        image:
          "https://img1.yna.co.kr/etc/inner/KR/2016/03/19/AKR20160319031000030_01_i_P4.jpg",
      },
      {
        poiId: "334736",
        poiName: "신세계백화점본점신관",
        district: "중구",
        image:
          "https://w.namu.la/s/e83b4930f1820f463e5c32138b17333e10a9208f0d9a694e8a1a6db0635cba52dda3c80e6d23788e372b9b5ffa1ae41c15379090c4aebc15b8db479d75c0006b2123c60ddd38835cca4aad1f67165ec5c883a9c695bbf7bde2dffdb19ad65c3b0fe1d88fc1964049a1068b8aa7c6bae0",
      },
    ],
  },
  {
    district: "강서구",
    placeList: [
      {
        poiId: "2758086",
        poiName: "NC백화점강서점",
        district: "강서구",
        image: "https://www.elandretail.com/upload/20160412142616_4.jpg",
      },
    ],
  },
  {
    district: "광진구",
    placeList: [
      {
        poiId: "182018",
        poiName: "어린이대공원",
        district: "광진구",
        image:
          "http://img2.tmon.kr/cdn3/deals/2019/09/06/2383717670/original_2383717670_front_d7842_1567759736production.jpg",
      },
      {
        poiId: "1516256",
        poiName: "롯데백화점건대스타시티점",
        district: "광진구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202202/0028/2022020817454787_2.jpg",
      },
    ],
  },
  {
    district: "강남구",
    placeList: [
      {
        poiId: "187760",
        poiName: "현대백화점무역센터점",
        district: "강남구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20191024105453629.jpg",
      },
      {
        poiId: "292664",
        poiName: "현대백화점압구정본점",
        district: "강남구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20191024034710087.jpg",
      },
      {
        poiId: "185965",
        poiName: "롯데백화점강남점",
        district: "강남구",
        image:
          "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMzFfNjYg/MDAxNDg1ODQ4NzI2NTIx.RjVsvuDXXuGhPLCoqU8SEQ5qt3K2KUTWhXuEmkEUOBQg.vyXml_moHErOrHNrCBJJoQHSOvPFkSpJm4kcL9VjG7Yg.JPEG.lhkny96/59825_8000_477.jpg?type=w800",
      },
      {
        poiId: "359817",
        poiName: "갤러리아백화점명품관WEST",
        district: "강남구",
        image:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTBfMjM3%2FMDAxNjAyMzMwMzk1MDc5.93PwR7dSO-C3V0LaKRJblIUNvffd8oJxuiriwejWHLcg.wKXHXr06A3NS4ZZjQKPZQufX03PUgUFkaKCFSVI8SIMg.JPEG.99wjdalsgk%2F20201010_201424.jpg&type=sc960_832",
      },
      {
        poiId: "359818",
        poiName: "갤러리아백화점명품관EAST",
        district: "강남구",
        image:
          "https://ldb-phinf.pstatic.net/20200609_67/1591669418031456Yj_JPEG/IucOvP02vg0jdnYqJKAS7_q1.jpg",
      },
    ],
  },
  {
    district: "강동구",
    placeList: [
      {
        poiId: "206277",
        poiName: "현대백화점천호점",
        district: "강동구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20190529101810748.jpg",
      },
    ],
  },
  {
    district: "금천구",
    placeList: [
      {
        poiId: "527513",
        poiName: "마리오아울렛1관",
        district: "금천구",
        image:
          "http://www.rayhouse.com/wp-content/uploads/projects/retail/pj_rm-03_01.jpg",
      },

      {
        poiId: "2972787",
        poiName: "현대시티아울렛가산점",
        district: "금천구",
        image:
          "https://live.staticflickr.com/65535/48227357241_73cd8b026b_o.jpg",
      },
    ],
  },

  {
    district: "동대문구",
    placeList: [
      {
        poiId: "216009",
        poiName: "롯데백화점청량리점",
        district: "동대문구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202111/0004/20211110143855921_1.jpg",
      },
    ],
  },
  {
    district: "구로구",
    placeList: [
      {
        poiId: "6144946",
        poiName: "현대백화점디큐브시티점",
        district: "구로구",
        image:
          "https://mblogthumb-phinf.pstatic.net/20160225_196/supplies2_1456372783916StSNG_JPEG/1.jpg?type=w2",
      },
    ],
  },
  {
    district: "노원구",
    placeList: [
      {
        poiId: "558963",
        poiName: "롯데백화점노원점",
        district: "노원구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202112/0022/20211223232349186_7.jpg",
      },
    ],
  },
  {
    district: "양천구",
    placeList: [
      {
        poiId: "551216",
        poiName: "현대백화점목동점",
        district: "양천구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20191024044227246.jpg",
      },
    ],
  },
  {
    district: "서대문구",
    placeList: [
      {
        poiId: "366844",
        poiName: "현대백화점신촌점",
        district: "서대문구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20191024104126317.jpg",
      },
    ],
  },
  {
    district: "성북구",
    placeList: [
      {
        poiId: "380919",
        poiName: "현대백화점미아점",
        district: "성북구",
        image:
          "http://www.ehyundai.com/attachfiles/branch/20161013113854041.jpg",
      },
      {
        poiId: "1198233",
        poiName: "롯데백화점미아점",
        district: "성북구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202112/0026/20211223232636277_8.jpg",
      },
    ],
  },
  {
    district: "관악구",
    placeList: [
      {
        poiId: "208936",
        poiName: "롯데백화점관악점",
        district: "관악구",
        image:
          "https://minfo.lotteshopping.com/content/cstr/202205/0006/20220512171852364_5.jpg",
      },
    ],
  },
];
