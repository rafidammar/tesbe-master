"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Schools", [
      {
        npsn: "20100216",
        name: "SMA Negeri 1",
        address: "Jl. Budi Utomo No. 7, Pasar Baru,Sawah Besar",
        telp: "021-3865001",
      },
      {
        npsn: "20100217",
        name: "SMA Negeri 10",
        address: "Jl. Mangga Besar XIII, Mangga Dua Selatan,Sawah Besar",
        telp: "021-6590192",
      },
      {
        npsn: "20103294",
        name: "SMA Negeri 100",
        address: "Jl. Persatuan 2, Cipinang Besar Selatan,Jatinegara",
        telp: "8500881",
      },
      {
        npsn: "20101627",
        name: "SMA Negeri 101",
        address: "Jl. Kompleks Joglo Baru, Joglo,Kembangan",
        telp: "5847332",
      },
      {
        npsn: "20103293",
        name: "SMA Negeri 102",
        address: "Jl. Kayutinggi, Cakung Timur,Cakung",
        telp: "4604674, 46827360",
      },
      {
        npsn: "20103292",
        name: "SMA Negeri 103",
        address: "Jl. Mawar Merah Perumnas Klender, Duren Sawit,Duren Sawit",
        telp: "8622372",
      },
      {
        npsn: "20103291",
        name: "SMA Negeri 104",
        address: "Jl. H. Taiman Barat, Gedong,Pasar Rebo",
        telp: "8408247",
      },
      {
        npsn: "20103290",
        name: "SMA Negeri 105",
        address: "Jl. Usman, Kelapa Dua Wetan,Ciracas",
        telp: "8719206",
      },
      {
        npsn: "20103289",
        name: "SMA Negeri 106",
        address: "Jl. Gandaria I, Pekayon,Pasar Rebo",
        telp: "021-8701692",
      },
      {
        npsn: "20103288",
        name: "SMA Negeri 107",
        address: "Jl. Kamp. Rawa Badung Timur, Jatinegara,Cakung",
        telp: "021 - 4615738",
      },
      {
        npsn: "20102230",
        name: "SMA Negeri 108",
        address: "Jl. Kesadaran Ulujami Raya, Pesanggrahan,Pesanggrahan",
        telp: "7376876",
      },
      {
        npsn: "20102219",
        name: "SMA Negeri 109",
        address: "Jl. Gardu No. 31, Srengseng Sawah,Jagakarsa",
        telp: "217271116",
      },
      {
        npsn: "20103287",
        name: "SMA Negeri 11",
        address: "Jl. P. Komarudin, Komp. Pendidikan, Pulo Gebang,Cakung",
        telp: "4802080",
      },
      {
        npsn: "20100802",
        name: "SMA Negeri 110",
        address: "Jl. Bendungan Melayu, Tugu Selatan,K o j a",
        telp: "021-4350059",
      },
      {
        npsn: "20100803",
        name: "SMA Negeri 111",
        address: "Jl. Bandengan Utara No. 80, Penjaringan,Penjaringan",
        telp: "6611703",
      },
      {
        npsn: "20101626",
        name: "SMA Negeri 112",
        address: "Jl. Sanggrahan, Meruya Utara,Kembangan",
        telp: "5850695",
      },
      {
        npsn: "20103286",
        name: "SMA Negeri 113",
        address: "Jl. Albaidho I, Monumen Pancasila Sakti, Lubang Buaya,Cipayung",
        telp: "021-8408034",
      },
      {
        npsn: "20100804",
        name: "SMA Negeri 114",
        address: "Jl. Pedongkelan No.25 Cilincing, Cilincing,Cilincing",
        telp: "4404611",
      },
      {
        npsn: "20100805",
        name: "SMA Negeri 115",
        address: "Jl. Rorotan X, Rorotan,Cilincing",
        telp: "44850555",
      },
      {
        npsn: "20103285",
        name: "SMA Negeri 12",
        address: "Jl. Pertanian, Klender,Duren Sawit",
        telp: "021-8615180",
      },
      {
        npsn: "20100806",
        name: "SMA Negeri 13",
        address: "Jl. Seroja No. 1, Rawa Badak Utara,K o j a",
        telp: "021-4303676",
      },
      {
        npsn: "20103284",
        name: "SMA Negeri 14",
        address: "Jl. SMA Barat, Cililitan,Kramat Jati",
        telp: "8090296",
      },
      {
        npsn: "20100807",
        name: "SMA Negeri 15",
        address: "Jl. Agung Utara STS Blok A, Sunter Agung,Tanjung Priok",
        telp: "021 - 6452717",
      },
      {
        npsn: "20101625",
        name: "SMA Negeri 16",
        address: "Jl. Belibis Terusan No. 16, Palmerah,Palmerah",
        telp: "5320137",
      },
      {
        npsn: "20101624",
        name: "SMA Negeri 17",
        address: "Jl. Mangga Besar IV / I No.27, Taman Sari,Taman Sari",
        telp: "6392046",
      },
      {
        npsn: "20100809",
        name: "SMA Negeri 18",
        address: "Jl. Warakas I, Warakas,Tanjung Priok",
        telp: "021-4353561",
      },
      {
        npsn: "20101623",
        name: "SMA Negeri 19",
        address: "Jl. Perniagaan 31, Tambora,Tambora",
        telp: "6904454",
      },
      {
        npsn: "20101622",
        name: "SMA Negeri 2",
        address: "Jl. Gajah Mada 175, Keagungan,Taman Sari",
        telp: "021-6294318",
      },
      {
        npsn: "20100218",
        name: "SMA Negeri 20",
        address: "Jl. Krekot Bunder III/1 Kel. Pasar Baru, Pasar Baru,Sawah Besar",
        telp: "021-3440021",
      },
      {
        npsn: "20103283",
        name: "SMA Negeri 21",
        address: "Jl. Tanah Mas Raya No. 1, Kayu Putih,Pulo Gadung",
        telp: "4895164",
      },
      {
        npsn: "20103282",
        name: "SMA Negeri 22",
        address: "Jl. Kramat Asem, Utan Kayu Selatan,Matraman",
        telp: "8563352",
      },
      {
        npsn: "20101621",
        name: "SMA Negeri 23",
        address: "Jl. Mandala Utara, Tomang,Grogol Petamburan",
        telp: "215672730",
      },
      {
        npsn: "20100219",
        name: "SMA Negeri 24",
        address: "Jl. Lapangan Tembak Senayan, Gelora,Tanah Abang",
        telp: "5736984",
      },
      {
        npsn: "20100221",
        name: "SMA Negeri 25",
        address: "Jl. AM. Sangaji No. 22-24, Gambir,Gambir",
        telp: "6331921",
      },
      {
        npsn: "20102218",
        name: "SMA Negeri 26",
        address: "Jl. Tebet Barat IV, Tebet Barat,T e b e t",
        telp: "8294645",
      },
      {
        npsn: "20100223",
        name: "SMA Negeri 27",
        address: "Jl. Mardani Raya, Johar Baru,Johar Baru",
        telp: "021-4245969",
      },
      {
        npsn: "20107319",
        name: "SMA Negeri 28",
        address: "Jl. Raya Ragunan, Pasar Minggu, Jati Padang,Pasar Minggu",
        telp: "7806293 ext. 0",
      },
      {
        npsn: "20102217",
        name: "SMA Negeri 29",
        address: "Jl. Kramat No.6, Kebayoran Lama Utara,Kebayoran Lama",
        telp: "7395831",
      },
      {
        npsn: "20102216",
        name: "SMA Negeri 3",
        address: "Jl. Setiabudi II, Setia Budi,Setia Budi",
        telp: "5254663",
      },
      {
        npsn: "20100224",
        name: "SMA Negeri 30",
        address: "Jl. Jend. A. Yani, Cempaka Putih Timur,Cempaka Putih",
        telp: "021-4244015",
      },
      {
        npsn: "20103281",
        name: "SMA Negeri 31",
        address: "Jl. Kayu Manis Timur, Utan Kayu Selatan,Matraman",
        telp: "021-8508665",
      },
      {
        npsn: "20102215",
        name: "SMA Negeri 32",
        address: "Jl. Panjang Komp. Sekneg Baru Cidodol, Grogol Selatan,Kebayoran Lama",
        telp: "021-7395532",
      },
      {
        npsn: "20101620",
        name: "SMA Negeri 33",
        address: "Jl. Kamal Raya No. 54, Cengkareng Barat,Cengkareng",
        telp: "6191043",
      },
      {
        npsn: "20102214",
        name: "SMA Negeri 34",
        address: "Jl. Margasatwa Raya No. 1, Pondok Labu,Cilandak",
        telp: "7690064",
      },
      {
        npsn: "20100212",
        name: "SMA Negeri 35",
        address: "Jl. Mutiara, Karet Tengsin,Tanah Abang",
        telp: "215709328",
      },
      {
        npsn: "20103280",
        name: "SMA Negeri 36",
        address: "Jl. Perhubungan Raya, Jati,Pulo Gadung",
        telp: "4893358",
      },
      {
        npsn: "20102213",
        name: "SMA Negeri 37",
        address: "Jl. H No.40 Kebon Baru, Kebon Baru,T e b e t",
        telp: "8296058",
      },
      {
        npsn: "20102212",
        name: "SMA Negeri 38",
        address: "Jl. Raya Lenteng Agung, Lenteng Agung,Jagakarsa",
        telp: "7270865",
      },
      {
        npsn: "20103296",
        name: "SMA Negeri 39",
        address: "Jl. RA. Fadillah, Cijantung,Pasar Rebo",
        telp: "8400278",
      },
      {
        npsn: "20100211",
        name: "SMA Negeri 4",
        address: "Jl. Batu No. 3, Gambir,Gambir",
        telp: "3843937",
      },
      {
        npsn: "20100810",
        name: "SMA Negeri 40",
        address: "Jl. Budi Mulia Raya, Pademangan Barat,Pademangan",
        telp: "021- 6402464",
      },
      {
        npsn: "20100811",
        name: "SMA Negeri 41",
        address: "Jl. Laks. R. E. Martadinata, Sunter Agung,Tanjung Priok",
        telp: "(021) - 6518840",
      },
      {
        npsn: "20103297",
        name: "SMA Negeri 42",
        address: "Jl. Rajawali, Halim Perdana Kusumah,Makasar",
        telp: "8093926",
      },
      {
        npsn: "20102211",
        name: "SMA Negeri 43",
        address: "Jl. Minangkabau Dalam, Menteng Atas,Setia Budi",
        telp: "8297076",
      },
      {
        npsn: "20103298",
        name: "SMA Negeri 44",
        address: "Jl. Delima IV Perum Klender, Malaka Sari,Duren Sawit",
        telp: "218615286",
      },
      {
        npsn: "20100812",
        name: "SMA Negeri 45",
        address: "Jl. Perintis Kemerdekaan, Kelapa Gading Timur,Kelapa Gading",
        telp: "4527345",
      },
      {
        npsn: "20102210",
        name: "SMA Negeri 46",
        address: "Jl. Mesjid Darussalam, Gandaria Utara,Kebayoran Baru",
        telp: "7246695",
      },
      {
        npsn: "20102193",
        name: "SMA Negeri 47",
        address: "Jl. Delman Utama I, Kebayoran Lama Utara,Kebayoran Lama",
        telp: "7260904",
      },
      {
        npsn: "20103314",
        name: "SMA Negeri 48",
        address: "Jl. Pinang Ranti II No.1, Pinang Ranti,Makasar",
        telp: "8006204",
      },
      {
        npsn: "20102592",
        name: "SMA Negeri 49",
        address: "Jl. Pepaya No. 9, Jagakarsa,Jagakarsa",
        telp: "7270167",
      },
      {
        npsn: "20100210",
        name: "SMA Negeri 5",
        address: "Jl. Raya Sumur Batu, Sumur Batu,Kemayoran",
        telp: "4243869",
      },
      {
        npsn: "20103313",
        name: "SMA Negeri 50",
        address: "Jl. PLN CIPINANG MUARA 3, Cipinang Muara,Jatinegara",
        telp: "8195639",
      },
      {
        npsn: "20103312",
        name: "SMA Negeri 51",
        address: "Jl. Batu Ampar III, Batu Ampar,Kramat Jati",
        telp: "8093125",
      },
      {
        npsn: "20100797",
        name: "SMA Negeri 52",
        address: "Jl. Raya Tugu Semper, Semper Barat,Cilincing",
        telp: "4405378",
      },
      {
        npsn: "20103311",
        name: "SMA Negeri 53",
        address: "Jl. Cipinang Jaya 2b, Cipinang Besar Selatan,Jatinegara",
        telp: "8194415",
      },
      {
        npsn: "20103310",
        name: "SMA Negeri 54",
        address: "Jl. Jatinegara Timur IV, Rawa Bunga,Jatinegara",
        telp: "021-8194271",
      },
      {
        npsn: "20102575",
        name: "SMA Negeri 55",
        address: "Jl. Minyak Raya, Duren Tiga,Pancoran",
        telp: "7996120",
      },
      {
        npsn: "20101605",
        name: "SMA Negeri 56",
        address: "Jl. Kamal Raya Tegal Alur, Tegal Alur,Kalideres",
        telp: "5550938",
      },
      {
        npsn: "20101604",
        name: "SMA Negeri 57",
        address: "Jl. Raya Kedoya, Kedoya Utara,Kebon Jeruk",
        telp: "5801665",
      },
      {
        npsn: "20103309",
        name: "SMA Negeri 58",
        address: "Jl. Raya Ciracas No. 2, Ciracas,Ciracas",
        telp: "218710377",
      },
      {
        npsn: "20103308",
        name: "SMA Negeri 59",
        address: "Jl. Bulak Timur I No.10-11, Klender,Duren Sawit",
        telp: "218614101",
      },
      {
        npsn: "20102574",
        name: "SMA Negeri 6",
        address: "Jl. Mahakam I/2 Blok C, Kramat Pela,Kebayoran Baru",
        telp: "7208762/7211067",
      },
      {
        npsn: "20102573",
        name: "SMA Negeri 60",
        address: "Jl. Kemang Timur I No.6, Bangka,Mampang Prapatan",
        telp: "021-7992054",
      },
      {
        npsn: "20103307",
        name: "SMA Negeri 61",
        address: "Jl. Taruna Pahlawan Revolusi, Pondok Bambu,Duren Sawit",
        telp: "8617255",
      },
      {
        npsn: "20103306",
        name: "SMA Negeri 62",
        address: "Jl. Raya Bogor Km. 20, Kramat Jati,Kramat Jati",
        telp: "021-8091745",
      },
      {
        npsn: "20102572",
        name: "SMA Negeri 63",
        address: "Jl. AMD Manunggal V/57, Petukangan Utara,Pesanggrahan",
        telp: "021 7354473",
      },
      {
        npsn: "20103305",
        name: "SMA Negeri 64",
        address: "Jl. Raya Cipayung, Cipayung,Cipayung",
        telp: "8444750",
      },
      {
        npsn: "20101589",
        name: "SMA Negeri 65",
        address: "Jl. Raya Panjang, Kelapa Dua,Kebon Jeruk",
        telp: "5492759",
      },
      {
        npsn: "20102571",
        name: "SMA Negeri 66",
        address: "Jl. Bango III, Pondok Labu,Cilandak",
        telp: "7691403",
      },
      {
        npsn: "20103304",
        name: "SMA Negeri 67",
        address: "Jl. Skadron Halim Perdanakusuma, Halim Perdana Kusumah,Makasar",
        telp: "8090386",
      },
      {
        npsn: "20100199",
        name: "SMA Negeri 68",
        address: "Jl. Salemba Raya 18, Kenari,S e n e n",
        telp: "3142929",
      },
      {
        npsn: "20107185",
        name: "SMA Negeri 69 Pulau Pramuka",
        address: "Pulau Pramuka, Pulau Panggang,Kepulauan Seribu Utara",
        telp: "021-70611769",
      },
      {
        npsn: "20100200",
        name: "SMA Negeri 7",
        address: "Jl. Karet Pasar Baru Barat V, Karet Tengsin,Tanah Abang",
        telp: "5720934",
      },
      {
        npsn: "20102570",
        name: "SMA Negeri 70",
        address: "Jl. Bulungan Blok C, Kramat Pela,Kebayoran Baru",
        telp: "7222667",
      },
      {
        npsn: "20103303",
        name: "SMA Negeri 71",
        address: "Jl. H. Dogol Kav. TNI-AL Duren Sawit, Duren Sawit,Duren Sawit",
        telp: "8614112, 86612614",
      },
      {
        npsn: "20100796",
        name: "SMA Negeri 72",
        address: "Jl. Prihatin Komp. TNI AL, Kelapa Gading Barat,Kelapa Gading",
        telp: "4502584",
      },
      {
        npsn: "20100795",
        name: "SMA Negeri 73",
        address: "Jl. Raya Cakung Cilincing, Semper Timur,Cilincing",
        telp: "4401622",
      },
      {
        npsn: "20102569",
        name: "SMA Negeri 74",
        address: "Jl. Darma Putra XI, Kebayoran Lama Selatan,Kebayoran Lama",
        telp: "7260377",
      },
      {
        npsn: "20100779",
        name: "SMA Negeri 75",
        address: "Jl. Tipar Cakung, Semper Barat,Cilincing",
        telp: "021 4402862",
      },
      {
        npsn: "20103302",
        name: "SMA Negeri 76",
        address: "Jl. Tipar Cakung, Cakung Barat,Cakung",
        telp: "4602500",
      },
      {
        npsn: "20100201",
        name: "SMA Negeri 77",
        address: "Jl. Cempaka Putih Tengah 17, Cempaka Putih Timur,Cempaka Putih",
        telp: "(021) 4243119",
      },
      {
        npsn: "20101588",
        name: "SMA Negeri 78",
        address: "Jl. Bhakti VI/1 Kemanggisan, Kemanggisan,Palmerah",
        telp: "5482914",
      },
      {
        npsn: "20107320",
        name: "SMA Negeri 79",
        address: "Jl. Menteng Pulo Ujung, Menteng Atas,Setia Budi",
        telp: "8357087",
      },
      {
        npsn: "20102568",
        name: "SMA Negeri 8",
        address: "Jl. Taman Bukitduri, Bukit Duri,T e b e t",
        telp: "021-8295455",
      },
      {
        npsn: "20100780",
        name: "SMA Negeri 80",
        address: "Jl. Sunter Karya Selatan V, Sunter Agung,Tanjung Priok",
        telp: "021-64716130",
      },
      {
        npsn: "20103301",
        name: "SMA Negeri 81",
        address: "Jl. Kartika Eka Paksi KPAD Jatiwaringin, Cipinang Melayu,Makasar",
        telp: "8629940",
      },
      {
        npsn: "20102566",
        name: "SMA Negeri 82",
        address: "Jl. Daha II/15a, Selong,Kebayoran Baru",
        telp: "7246413",
      },
      {
        npsn: "20100781",
        name: "SMA Negeri 83",
        address: "Jl. Tipar Cakung, Suka Pura,Cilincing",
        telp: "4403010",
      },
      {
        npsn: "20101587",
        name: "SMA Negeri 84",
        address: "Jl. Peta Barat No.42, Kalideres,Kalideres",
        telp: "5402584",
      },
      {
        npsn: "20101586",
        name: "SMA Negeri 85",
        address: "Jl. Srengseng Raya, Meruya Srengseng,Kembangan",
        telp: "021-5840921",
      },
      {
        npsn: "20102565",
        name: "SMA Negeri 86",
        address: "Jl. Bintaro Permai IV No. 36, Bintaro,Pesanggrahan",
        telp: "7341362",
      },
      {
        npsn: "20102564",
        name: "SMA Negeri 87",
        address: "Jl. Mawar II Bintaro, Pesanggrahan,Pesanggrahan",
        telp: "73881969",
      },
      {
        npsn: "20103300",
        name: "SMA Negeri 88",
        address: "Jl. Sawo Indah, Baru,Pasar Rebo",
        telp: "8701460",
      },
      {
        npsn: "20103299",
        name: "SMA Negeri 89",
        address: "Jl. Kayu Tinggi, Cakung Timur,Cakung",
        telp: "4604602",
      },
      {
        npsn: "20103279",
        name: "SMA Negeri 9",
        address: "Jl. SMU Negeri 9, Kebon Pala,Makasar",
        telp: "021 - 8005964",
      },
      {
        npsn: "20102563",
        name: "SMA Negeri 90",
        address: "Jl. Sabar Petukangan, Petukangan Selatan,Pesanggrahan",
        telp: "7341866",
      },
      {
        npsn: "20103278",
        name: "SMA Negeri 91",
        address: "Jl. Lembah Lontar, Pondok Kelapa,Duren Sawit",
        telp: "8640063",
      },
      {
        npsn: "20100782",
        name: "SMA Negeri 92",
        address: "Jalan Asrama Pemadam Kebakaran, Semper Barat,Cilincing",
        telp: "44832842",
      },
      {
        npsn: "20103258",
        name: "SMA Negeri 93",
        address: "Jl. Raya Bogor Komplek Paspampres, Kampung Tengah,Kramat Jati",
        telp: "8402939",
      },
      {
        npsn: "20101585",
        name: "SMA Negeri 94",
        address: "Jl. Semanan Raya, Semanan,Kalideres",
        telp: "5417052",
      },
      {
        npsn: "20101584",
        name: "SMA Negeri 95",
        address: "Jl. Satu Maret No.49, Pegadungan,Kalideres",
        telp: "54371930",
      },
      {
        npsn: "20101583",
        name: "SMA Negeri 96",
        address: "Jl. Jati Raya 40, Cengkareng Timur,Cengkareng",
        telp: "021-5403058",
      },
      {
        npsn: "20102562",
        name: "SMA Negeri 97",
        address: "Jl. Brigif 2, Ciganjur,Jagakarsa",
        telp: "(021) 7270960",
      },
      {
        npsn: "20103257",
        name: "SMA Negeri 98",
        address: "Jl. Jaha No.1, Kalisari,Pasar Rebo",
        telp: "8714579 / 8708519",
      },
      {
        npsn: "20103256",
        name: "SMA Negeri 99",
        address: "Jl. Cibubur II, Cibubur,Ciracas",
        telp: "021-8700979",
      },
      {
        npsn: "20102576",
        name: "SMA Negeri Ragunan Jakarta",
        address: "Komplek Gelora Ragunan, Ragunan,Pasar Minggu",
        telp: "021-7801662",
      },
      {
        npsn: "20109933",
        name: "SMA Negeri Unggulan M. H. Thamrin",
        address: "Jl. Bambu Wulung, Bambu Apus,Cipayung",
        telp: "8459669, 84597845",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
