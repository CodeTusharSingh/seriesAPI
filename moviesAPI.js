const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const TheGrayMan = [
    {
        movie: [{
            titleImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWQ83gIKK64F0Vw8_a85ONbVFSVdIXXE9zhzVTDCZmKNQWob9lbl35dHF71BCJcNK_GTTRguNHDsteCv5jMFtlA0Pup_mpkaNZ-iC0-DclogncWEuh0gOfNtXiE_KoUQopkxCDrN3uU_oUP7_H_mbV1Z02lokBjEE-xm29X1dqKLcg5rECr6yw.png?r=ab6',
            titleName: 'THE GRAY MAN',
            backgroundImg: 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbPXSGkNDo3cQ2rBKviUt71o_aPhcLPIcfsm8c8d2E2xEiu8qcLlAkPdMGyf6qqVK7kunauLQe9n1saLPSD6fjq-YYtIuKNcMbtO.jpg?r=d7f&quot;',
            releaseYear: '2022',
            maturityRating: 'U/A',
            contentLinkName: 'thegrayman',
            movieLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
            runtime: '2h 9m',
            genre: 'Action',
            thisContentIs: ['Action', 'Spy Thriller', 'Crime'],
            summary: 'When a shadowy CIA agent uncovers damning agency secrets, he’s hunted across the globe by a sociopathic rogue operative who’s put a bounty on his head.',
            starring: 'Ryan Gosling, Chris Evans, Ana de Armas',
            creators: 'Joe Russo, Anthony Russo',
            description: 'Ryan Gosling and Chris Evans star with Ana de Armas and Regé-Jean Page in this global action thriller from the Russo brothers.',
            trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
            trailerRecap: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXO0flwJU__SQAYNs4ziNqqnSwP_7eDbAkWMNux1w_53N8uUp6lpCjLrVTZmzbEzdWYoM20dvOKBWpn-IY_ejbjb_v-TN3uwFIg.jpg?r=3ec', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSe4-IkQ80VvSt2YQv9JXV6baMfYfvbJhEeQmlnTIzEDWSKHadxVRYWkNwdsWaO3_b0LokHELiXq8eLr_gTZ-1XVKNs-K4gWU-8fWAoBEbxWKVvfs_DbHwYe.jpg?r=8e7', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWH3NLZTCvmtC3hE0WSnLgrOPcNlv0GiUoO2qf-LkP7HyuOLf-y9u3hsZ1bC9Ee_e4ypPBrYF0xyPNwZAWZbXHm4SR4hNbxR-EB5cHNB5dTgTppNWD13q39u.jpg?r=2f8'],
            trailerRecapTitle: ['Trailer: The Gray Man', 'Teaser: The Gray Man', 'Teaser 2: The Gray Man'],
            trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4']
        }]
    },
    {
        moreDetails: [{
            watchOffline: 'Available to download',
            genres: 'Movies Based on Books,Action & Adventure Movies,US Movies',
            thisMovieIs: ' American action thriller film',
            cast: ['Ryan Gosling',
                'Chris Evans',
                'Ana de Armas',
                'Jessica Henwick',
                'Regé-Jean Page',
                'Wagner Moura',
                'Julia Butters',
                'Dhanush',
                'Alfre Woodard',
                'Billy Bob Thornton'
            ]
        }]
    }
]


const Don2 = [
    {
        movie: [{
            titleImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRln1cJL8M3yYyzZcv9K0LoieC04v-WusBjOwfErx6M34-KRGbCBMY06c3CKJjtkFgf-pA0ZbEXY1g5pDkrxIatiZHpJwy61S-12xT5t0mHS.png?r=3a1',
            titleName: 'Don 2',
            backgroundImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYJYFsaBb3wqLu7Nviq9Ip9n1Vp8-_mpJ1AWN8PCBbEPvyi8YMVdKXyK1uGlFk0CDSJSgNofNKTCZBcNDekWRHT-AxWpwaPFVKG2.jpg?r=e80&quot;',
            releaseYear: '2011',
            maturityRating: 'U/A 13+',
            contentLinkName: 'don2',
            movieLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
            runtime: '2h 27m',
            genre: 'Action',
            thisContentIs: ['Action', 'Thrilling', 'Crime'],
            summary: 'With Asia under his complete control, criminal mastermind Don turns to Europe, battling the mob bosses of each nation along the way.',
            starring: 'Shah Rukh Khan, Priyanka Chopra Jonas, Boman Irani',
            creators: 'Farhan Akhtar',
            description: '',
            trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
            trailerRecap: [],
            trailerRecapTitle: [],
            trailerRecapVideo: []
        }]
    },
    {
        moreDetails: [{
            watchOffline: 'Download and watch everywhere you go.',
            genres: 'Hindi-Language Movies, Bollywood Movies, Crime Movies, Action & Adventure Movies',
            thisMovieIs: 'Exciting',
            cast: ['Shah Rukh Khan',
                'Priyanka Chopra Jonas',
                'Boman Irani',
                'Kunal Kapoor',
                'Om Puri',
                'Alyy Khan',
                'Nawab Shah',
                'Lara Dutta',
                'Sahil Shroff'
            ]
        }]
    }
]

app.get('/moviesAPI/TheGrayMan', (req, res) => {
    res.json(TheGrayMan)
})
app.get('/moviesAPI/don2', (req, res) => {
    res.json(Don2)
})




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) })
