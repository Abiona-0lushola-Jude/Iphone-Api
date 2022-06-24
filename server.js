const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const PORT = 5000

app.use(cors())

const NigeriaStates = {
    "abia state":{
        'Capital':'Umauahia',
        'Population':3727347,
        'Nickname': "God's Own State",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':17,
        'Coordinates':"5°25′N 7°30′E",
        'LandArea': `6,320 km2`,
        'MajorLanguage':'Igbo',
        'OfficialWebsite': "http://www.abiastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/a/a8/Abia_State_Coat_of_Arms.gif"
    },
    "adamawa":{
        'Capital':'Yola',
        'Population':4248436,
        'Nickname': ['Land of Promise', 'Akwa Abasi Ibom state'],
        'DateCreated':'27 August 1991',
        'NumbersofLGA':21,
        'Coordinates':"9°20′N 12°30′E",
        'LandArea': `36,917 km2`,
        'MajorLanguage': ['Fulfulde','Igbo'],
        'OfficialWebsite':"www.adamawastate.gov.ng",
        'LogoImage':"https://th.bing.com/th/id/OIP.uK-KqxWn1GOnxpHcmGuRhAHaEp?pid=ImgDet&rs=1"
    },
    "akwa Ibom":{
        'Capital':'Uyo',
        'Population':5482177,
        'DateCreated':'23 September 1987',
        'NumbersofLGA':31,
        'Coordinates':"05°00′N 07°50′E",
        'LandArea': `7,081 km2`,
        'MajorLanguage': ['Ika','Mbo','Esit Ekit','Igbo'],
        'OfficialWebsite':"http://akwaibomstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/4/44/The_Emblem_of_Akwa_Ibom_State.jpg"
    },
    "anambra":{
        'Capital':'Awka',
        'Population':5527809,
        'Nickname': 'Light of the Nation',
        'DateCreated':'23 September 1987',
        'NumbersofLGA':21,
        'Coordinates':"6°20′N 7°00′E",
        'LandArea': `4,844 km2`,
        'MajorLanguage': ['English', 'Igbo'],
        'OfficialWebsite':"http://www.anambrastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Anambra_State.png/800px-Flag_of_Anambra_State.png"
    },
    "bauchi":{
        'Capital':'Bauchi',
        'Population':6537314,
        'Nickname': 'Pearl of Tourism',
        'DateCreated':'3 February 1976',
        'NumbersofLGA':20,
        'Coordinates':"10°30′N 10°00′E",
        'LandArea': `45,893 km2`,
        'MajorLanguage': ['Dass','Saya','Bole','Hausa'],
        'OfficialWebsite':"http://www.bauchistate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/5/57/Bauchi_State_Coat_of_arms.png"
    },
    "bayelsa":{
        'Capital':'Yenagoa',
        'Population':2277961,
        'Nickname': "Glory of all lands",
        'DateCreated':'1 October 1996',
        'NumbersofLGA':8,
        'LandArea': `10,773 km2 `,
        'MajorLanguage': ['Izon', 'Isoko','Abureni'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Bayelsa_State.svg/800px-Flag_of_Bayelsa_State.svg.png"
    },
    "benue":{
        'Capital':'Makurdi',
        'Population':5741815,
        'Nickname': 'Food Basket of the Nation',
        'DateCreated':'3 February 1976',
        'NumbersofLGA':23,
        'Coordinates':"7°20′N 8°45′E",
        'LandArea': `34,059 km2`,
        'MajorLanguage': ['Tiv','Idoma','Igede','Etulo'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/1/13/Benue_State_Emblem.png"
    },
    "borno":{
        'Capital':'Maiduguri',
        'Population':8860183,
        'Nickname': 'Home of Peace',
        'DateCreated':'3 February 1976',
        'NumbersofLGA':27,
        'Coordinates':"11°30′N 13°00′E",
        'LandArea': `70,898 km2`,
        'MajorLanguage': ['Shuwa Arabic','Putai','Yerwa Kanuri', 'Hausa'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/1/1d/Borno_State_Flag.gif"
    },
    "cross River":{
        'Capital':'Calabar',
        'Population':3866269,
        'Nickname': "The People's Paradise",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':18,
        'Coordinates':"5°45′N 8°30′E",
        'LandArea': `20,156 km2`,
        'MajorLanguage': ['Efik','Agoi','Tiv'],
        'OfficialWebsite':"https://crossriverstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/7/76/Coat_of_arms_state_Cross_River.jpg"
    },
    "delta":{
        'Capital':'Asaba',
        'Population':5663362,
        'Nickname': "The Big Heart",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':25,
        'Coordinates':"5°30′N 6°00′E",
        'LandArea': `17,698 km2`,
        'MajorLanguage': ['Ika','Urhobo', 'Igbo'],
        'OfficialWebsite':"http://www.deltastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/a/a7/Delta_State_Flag.gif"
    },
    "ebonyi":{
        'Capital':'Abakaliki',
        'Population':2880383,
        'Nickname': "Salt of the Nation",
        'DateCreated':'1 October 1996',
        'NumbersofLGA':13,
        'Coordinates':"6°15′N 8°05′E",
        'LandArea': `5,533 km2`,
        'MajorLanguage': ['Izzi', 'Afikpo','Ohaozara'],
        'OfficialWebsite':"http://www.ebonyistate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Ebonyi_State_Seal.png/100px-Ebonyi_State_Seal.png"
    },
    "edo":{
        'Capital':'Benin City',
        'Population':4235595,
        'Nickname': "Heart Beat of Nigeria",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':18,
        'Coordinates':"6°30′N 6°00′E",
        'LandArea': `17,802 km2`,
        'MajorLanguage': ['Esan', 'Etsako','Edo'],
        'OfficialWebsite':"http://www.edostate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/e/ec/Edo_State_Flag.png"
    },
    "ekiti":{
        'Capital':'Ado-Ekiti',
        'Population':3270798,
        'Nickname': "Land of Honour & Integrity",
        'DateCreated':'1 October 1996',
        'NumbersofLGA':16,
        'Coordinates':"7°40′N 5°15′E",
        'LandArea': `6,353 km2`,
        'MajorLanguage': ['English', 'Yoruba'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/0/02/Ekiti_State_Flag.gif"
    },
    "enugu":{
        'Capital':'Enugu',
        'Population':4411119,
        'Nickname': "Coal City State",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':17,
        'Coordinates':"6°30′N 7°30′E",
        'LandArea': `7,161 km2`,
        'MajorLanguage': ['English', 'Igbo'],
        'OfficialWebsite':"http://www.enugustate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/9/9b/Enugu_state_Coat_of_Arms.jpg"
    },
    'fct':{
        'Capital':'Abuja',
        'Population':3564126,
        'Nickname': "Centre of Unity",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':6,
        'Coordinates':"8°50′N 7°10′E",
        'LandArea': `7,315 km2`,
        'MajorLanguage': ['Ebira', 'Nupe','Dibo','Hausa'],
        'OfficialWebsite':"http://www.fcta.gov.ng/",
    },
    "gombe":{
        'Capital':'Gombe',
        'Population':32569629,
        'DateCreated':'1 October 1996',
        'NumbersofLGA':11,
        'Coordinates':"10°15′N 11°10′E",
        'LandArea': `18,768 km2`,
        'MajorLanguage': ['Fulani','Tera','Bolewa','Tera', 'Hausa'],
        'OfficialWebsite':"http://gombestate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Gombe_State_Seal.png/97px-Gombe_State_Seal.png"
    },
    "imo":{
        'Capital':'Owerri',
        'Population':5408756,
        'Nickname': "Eastern Heartland",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':27,
        'Coordinates':"5°29′N 7°2′E",
        'LandArea': `5,530 km2`,
        'MajorLanguage': ['English', 'Igbo'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/0/0b/Imo_State_Government.jpg"
    },
    "jigawa":{
        'Capital':'Dutse',
        'Population':5828163,
        'Nickname': "The New World",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':27,
        'Coordinates':"12°00′N 9°45′E",
        'LandArea': `23,154 km2`,
        'MajorLanguage': ['Bade','Wariji','Birin'],
        'OfficialWebsite':"http://www.jigawastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jigawa_State_Flag.png/100px-Jigawa_State_Flag.png"
    },
    "kaduna":{
        'Capital':'Kaduna',
        'Population':8252366,
        'Nickname': "Centre of Learning",
        'DateCreated':'27 May 1967',
        'NumbersofLGA':23,
        'Coordinates':"10°20′N 7°45′E",
        'LandArea': `46,053 km2`,
        'MajorLanguage': ['Gabyi', 'Hausa'],
        'OfficialWebsite':"http://kdsg.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/5/5e/Kaduna_State_Flag.png"
    },
    "kano":{
        'Capital':'Kano',
        'Population':12550598,
        'Nickname': "Centre of Commerce",
        'DateCreated':'May 27, 1967',
        'NumbersofLGA':44,
        'Coordinates':"11°30′N 8°30′E",
        'LandArea': `20,131 km2 `,
        'MajorLanguage': ['Fulfulde', 'Hausa'],
        'OfficialWebsite':"https://www.kanostate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/f/ff/Seal_of_Kano.png"
    },
    "katsina":{
        'Capital':"Katsina",
        'Population':7831319,
        'Nickname': "Home of Hospitality",
        'DateCreated':'23 September 1987',
        'NumbersofLGA':34,
        'Coordinates':"12°15′N 7°30′E",
        'LandArea': `24,192 km2`,
        'MajorLanguage': 'Hausa',
        'OfficialWebsite':"http://www.katsinastate.gov.ng/"
    },
    "kebbi":{
        'Capital':'Birnin Kebbi',
        'Population':4440050,
        'Nickname': "Land of Equity",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':21,
        'Coordinates':"11°30′N 4°00′E",
        'LandArea': `36,800 km2`,
        'MajorLanguage': ['Zarma', 'Hausa'],
        'OfficialWebsite':"http://www.kebbistate.gov.ng/",
    },
    "kogi":{
        'Capital':'Kano',
        'Population':4473490,
        'Nickname': "The Confluence State",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':21,
        'Coordinates':"7°30′N 6°42′E",
        'LandArea': `29,833 km2`,
        'MajorLanguage': ['English', 'Hausa','Yoruba'],
        'OfficialWebsite':"http://www.kogistate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/d/d1/Kogi_State_Seal.png"
    },
    "kwara":{
        'Capital':'Ilorin',
        'Population':3192893,
        'Nickname': "State of Harmony",
        'DateCreated':'27 May 1967',
        'NumbersofLGA':16,
        'Coordinates':"8°30′N 5°00′E",
        'LandArea': `36,825 km2`,
        'MajorLanguage': ['English', 'Hausa','Yoruba'],
        'OfficialWebsite':"http://www.kwarastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kwara_State_Flag.jpg/800px-Kwara_State_Flag.jpg"
    },
    "lagos":{
        'Capital':'IKeja',
        'Population':21000000,
        'Nickname': "Centre of Excellence",
        'DateCreated':'27 May 1967',
        'NumbersofLGA':20,
        'Coordinates':"6°35′N 3°45′E",
        'LandArea': `3,577 km2`,
        'MajorLanguage': ['English','Yoruba'],
        'OfficialWebsite':"http://www.lagosstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lagos_Seal.png/100px-Lagos_Seal.png"
    },
    "nasarawa":{
        'Capital':'Lafia',
        'Population':2523395,
        'Nickname': "Home of Solid Minerals",
        'DateCreated':'1 October 1996',
        'NumbersofLGA':13,
        'Coordinates':"8°32′N 8°18′E",
        'LandArea': `27,117 km2`,
        'MajorLanguage': ['Fulani','Hausa','Tiv'],
        'OfficialWebsite':"http://www.nasarawastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Seal_of_Nasarawa_State.svg/100px-Seal_of_Nasarawa_State.svg.png"
    },
    "niger":{
        'Capital':'Minna',
        'Population':5556247,
        'Nickname': "The Power State",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':25,
        'Coordinates':"10°00′N 6°00′E",
        'LandArea': `76,363 km2`,
        'MajorLanguage': ['English','Hausa','Gbagyi','Nupe'],
        'OfficialWebsite':"http://www.nigerstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/7/70/Niger_State_Emblem.png"
    },
    "ogun":{
        'Capital':'Abeokuta',
        'Population':5217716,
        'Nickname': "Gateway State",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':20,
        'Coordinates':"7°00′N 3°35′E",
        'LandArea': `16,980.55 km2`,
        'MajorLanguage': ['English','Yoruba'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/c/c9/Ogun_State_Flag.jpg"
    },
    "ondo":{
        'Capital':'Akure',
        'Population':4671695,
        'Nickname': "Sunshine State",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':18,
        'Coordinates':"7°10′N 5°05′E",
        'LandArea': `15,500 km2`,
        'MajorLanguage': ['English','Yoruba'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ondo_State_Flag.jpg/120px-Ondo_State_Flag.jpg"
    },
    "osun":{
        'Capital':'Osogbo',
        'Population':4705589,
        'Nickname': "Land of Virtue",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':30,
        'Coordinates':"7°30′N 4°30′E",
        'LandArea': `9,251 km2`,
        'MajorLanguage': ['English','Yoruba'],
        'OfficialWebsite':"https://osunstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Osun_State%2C_Nigeria.svg/800px-Flag_of_Osun_State%2C_Nigeria.svg.png"
    },
    "oyo":{
        'Capital':'Ibadan',
        'Population':7840864,
        'Nickname': "Pace Setter State",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':53,
        'Coordinates':"8°00′N 4°00′E",
        'LandArea': `28,454 km2`,
        'MajorLanguage': ['English','Yoruba'],
        'OfficialWebsite':"http://www.oyostate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Oyo_State_Coat_of_Arms.png/100px-Oyo_State_Coat_of_Arms.png"
    },
    "plateau":{
        'Capital':'Jos',
        'Population':4200442,
        'Nickname': "Home of Peace and Tourism",
        'Date created':'3 February 1976',
        'NumbersofLGA':17,
        'Coordinates':"9°10′N 9°45′E",
        'LandArea': `30,913 km2`,
        'MajorLanguage': ['English','Hausa','Berom'],
        'OfficialWebsite':"http://www.plateaustate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Plateau_State_Coat_of_arms.jpg/100px-Plateau_State_Coat_of_arms.jpg"
    },
    "rivers":{
        'Capital':'Port Harcourt',
        'Population':7303924,
        'Nickname': "Treasure Base of the Nation",
        'DateCreated':'27 May 1967',
        'NumbersofLGA':23,
        'Coordinates':"4°45′N 6°50′E",
        'LandArea': `11,077 km2`,
        'MajorLanguage': ['Ijaw','Tee','Khana','Kalabari'],
        'OfficialWebsite':"http://www.riversstate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Government_of_Rivers_State_logo.png/100px-Government_of_Rivers_State_logo.png"
    },
    "sokoto":{
        'Capital':'Sokoto',
        'Population':4998090,
        'Nickname': "Seat of the Caliphate",
        'DateCreated':'3 February 1976',
        'NumbersofLGA':23,
        'Coordinates':"13°05′N 05°15′E",
        'LandArea': `25,973 km2`,
    },
    "taraba":{
        'Capital':'Jalingo',
        'Population':3066834,
        'Nickname': "Nature's Gift to the Nation",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':16,
        'Coordinates':"8°00′N 10°30′E",
        'LandArea': `54,473 km2`,
        'MajorLanguage': 'Fulfulde',
        'OfficialWebsite':"http://www.tarabastate.gov.ng/",
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/0/0b/Taraba_State_Coat_of_Arms.png"
    },
    "yobe":{
        'Capital':'Damaturu',
        'Population':3294137,
        'Nickname': "Pride of the Sahel",
        'DateCreated':'27 August 1991',
        'NumbersofLGA':17,
        'Coordinates':"12°00′N 11°30′E",
        'LandArea': `45,502 km2`,
        'MajorLanguage': ['Kanuri','Fulani','Karai-Karai'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/0/06/Yobe_State_Flag.png"
    },
    "zamfara":{
        'Capital':'Gusau',
        'Population':4515427,
        'Nickname': "Farming is Our Pride",
        'DateCreated':'1 October 1996',
        'NumbersofLGA':14,
        'Coordinates':"12°10′N 6°15′E",
        'LandArea': `39,762 km2`,
        'MajorLanguage': ['English','French','Fulfulde','Arabic'],
        'LogoImage': "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Seal_of_Zamfara_State_Government.jpg/100px-Seal_of_Zamfara_State_Government.jpg"
    },
}




app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:state', (req,res)=>{
    const stateName  = (req.params.state).toLowerCase()
    if(NigeriaStates[stateName]){
        res.json(NigeriaStates[stateName])
    }else{
       console.log('Enter the state correct')
    }
})


app.listen(PORT, ()=>{
    console.log(`Your server is now running on port ${PORT}, you better go catch it now`)
})