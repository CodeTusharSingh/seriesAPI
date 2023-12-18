const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const Dark = [

    {
        'series': [
            {
                titleImg: 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABe6djmh4TTZ1MrGJCMa8_jmo2U43eglUCzhYKSBSVSFfovoDIl_6dxkA_SBobKb722wjW9JunuyupJtn_lmGXFYTmw_kq0pIo-m1nNPdE2QfOW_5MX9-y8kAPee7yzgXSpPOPN6XyDxoGasmvG6gbXb90r5tiaMsvvDy6gYUUY84dK7nmueqvw.png?r=50f',
                titleName: 'Dark',
                backgroundImg: 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLn6xY1bOI5mPeAZpU6v7wafhinJ0mnG3D1TKZM_Zv79mQIdxW9P41ZGyMcyxN4xI5vhRMyfF_6F4tsKCKxsGrXirLt-h32Ar1B.jpg?r=077&quot;',
                releaseYear: '2017',
                contentLinkName: 'dark',
                maturityRating: 'A',
                seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                NoOfSeasons: 3,
                NoOfEpisodes: null,
                thisContentIs: ['Thrilling', 'Chilling', 'Horror'],
                genre: 'Thriller',
                summary: 'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.',
                starring: 'Louis Hofmann,Oliver Masucci,Jördis Triebel',
                creators: 'Baran bo Odar,Jantje Friese',
                description: 'This suspenseful series from Baran bo Odar and Jantje Friese won a Grimme-Preis award for television fiction.',
                trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                trailerRecap: ['https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSuRUf0MUaKvrbz4UreCrGGNe25az0dOXA59n_Fax2Xjq9KTkR_ck2c9ftZFlVF6b0sUIivJabR-YEAgW_ob9Ofqus1wvMs_hlPdetDGjrbiNbflaWw977NM.jpg?r=789', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRLl6xNnstejfZrhJE03aXYRZ5TLNu9G0RPmLLNkU0F-BPB2M316hfRcGs8ZZRevOEqp36zjc7YWjiJSFrzqez0NWGigdRBQ1l4zBadsZzfJNtEvec3w7HTS.jpg?r=765', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSAZ_W_ciN1E1FgIKPR2KW3B7SyCzig5VfdOECnn36v0Y1Mo_bK4knqnSRaA2zIMsEydikMLtxdBAhhM5Tix0sDmC8smxK9bJdxX8iunyzYKPZpyNPVIaPMD.jpg?r=2d9', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYLYXjhNZaPTvSZOdK0N9dYbyS4Yd-x6gcrv4vuQ4I336LiwkRdjIofMw7UqoLhn2j6gYSP8tTHv5QXzyt_MgI_fTz-OLVieW8v6WY7VhvxwXaCJIrWHsXH7.jpg?r=701', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe0r1DKIbYesfazHCh-YQpLkiEz9eFDy-nu-z6nnGlyBLNZJuuNCsmX6wyDG5m_L6wAyuVQut3o9Nez2TdZ3iBY8damzAzzsp9iDktDxN1HNoyw1tcXeDLoY.jpg?r=c2e', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUVjEuuSCg1p3MYiGdFA1ifI8hZv2pR1Y_r662HNcViFkFrFOIoS35UfU2oZ2o7vm1cgegpK3EB84aaSgK5w3jPaRA1yfRSl93cvwQU5qBZjIzTK0KiGveCa.jpg?r=2ba', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTHedyeE3byI-kJFFob203hx3ANh_6cwLq2Ge8VpJQYo0Kzl9txz9QkK8VDciinxOYOFQBv0rFxVCqJpqStcevzmXI7DUNlvPqCcKsmDHhSW6PDIcWh3nsCx.jpg?r=214', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRvmKpuOz5GFAdzNO9OnkqxAeA7vdBmdpNh-bkRA-4WKwasDlm7SiiNO2QLBDd9FXSNtNYI8aQcwlNiK50hRK8vFrkYx22pIqxHI9C01k1jEYEZWDIh6gLcQ.jpg?r=a06', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSZBOUxhZ2TpGdL8vuA5bTugnlUg_52kvsoezHcHzoXu56pd4PaS9T9kTurTudWuALYwgKwz5r7s349J4ACvsGHH6ya8otbsB2IRMQL2koVofMSlPWqlbGhb.jpg?r=7c7'],
                trailerRecapTitle: ['Season 3 Trailer: Dark', 'Franchise Trailer: Dark', 'The Epic Confrontation', 'Dark: Season 2 (Trailer)', 'Dark (Trailer)', 'Season 2 Recap: Dark', "The Hero's Journey", 'Dark: Season 1 Recap', 'The Mysterious'],
                trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4']
            }
        ]
    },
    {
        'seasons': [
            {
                'Season 1': [
                    {
                        episodes: ['https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABadIe75GQILby-MaK9YrLjTxgt7ZXaF88HDdOq049gZY5XOLQoXXnFE6uSNk_vRb9SwYPGonBx5zfnHLYkHTwfU00Vep5R3t0ZI7lS5ppMRPkMk_XKX18ocH.jpg?r=6c7', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYg2wNoLjuXjZq2hlcG5BhD3JOPa3g5cDD3jbPzjVXLbRYedaWnfvETlTJ2CpTjZyb4SWAIzdqQj4Rhveu5gfLaeW8Ui3XDyqGfc55pWCmEhu8zYdOl-5Ozx.jpg?r=6f8', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfaNpx8T0zCyO36GYOzqp-qNlaqxCFVAQRfRUiTBWgJNpG94g5yJi6koSrkQVeBsmAqdh4cjB7GJr0h7j7GbstUnTr_gQagdqZAajF6nTmOteL_N6wcW693v.jpg?r=dd6', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRgXUMKqkUMgT1pGMG_9mo_ewglUKEotNtYxUtg4meXMRN0soLPDnq6P2Ll1S6AX7nQbwIZWj5IAajiq4kPUNgk2rkbqc8oI91FavgLOFdtr4_w9o7XFb_pw.jpg?r=c7a', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS8T6sohHZ__oUdzzh1Lc_fvr7f9lkDVFJ7FNQZTcMkLyJsXrFsNQ4L4-LPC03Zx5trGcU5h6g-xfyQFy22_QAwhrXQcQSRdtbcm6O-AmaUNwGBYnFW73Gl4.jpg?r=1ba', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXW0ogmT_ckaKTxtuuR6o07sjm7a1CiT0I7jX3WK5KWxpfYXO7AWNmEzHz8ZErA0Il4wtHTsuDHdlBnE6WSCM9oCr8U9FJ2hvKue-t5yBGg4VYGjaGl4D4J3.jpg?r=4b4', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaMwa0Egb5lmDkGrzAvewzAmR21tICwNW8GqAskunR-owmN70jfV26BJcGdw6VTQUet3OmaADVMN81dIh7UD3J9vHiQNigtBRpK5YDA4a1aM762km1Kz4tcW.jpg?r=ba5', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaXRUzPh6fCBwas5z4JDYtQDrSkI3hZuDob5ZAhXbIrW8xqn3dO-bd-T3yy1VXglGVzyO6DvggXT5iVwrU_ad3mHy3EGIrnZtpQWjPWAmRsjoZHqVbPnfaWM.jpg?r=bd5', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSGQyxa5na4NVamiZGv6Uc5iyQhoLaulcYSesZWfdJltw3JHAGfIcDGq3v8EGrAVp25YiB4F9OGJ4f0JSZlV0XKVdSQnZEiidDz-s7rW_m_a_zJBoP_vA_Ls.jpg?r=34e', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWwcb-lLnAyl0JXL2RHmNKr3X27tcUhfw3ucP2nttD1iPL_hwZIAMC1qcbtD_1dgcKR7vs91_8btPEL1rpTnyet-x532gK6YjvLWDPFCGp9gRFSkjMKbVOip.jpg?r=a9e'],
                        episodeLink: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4'],
                        episodeName: ['Secrets',
                            'Lies',
                            'Past and Present',
                            'Double Lives',
                            'Truths',
                            'Sic Mundus Creatus Esy',
                            'Crossroads',
                            'As You Sow, So You Shall Reap',
                            'Everything Is Now',
                            'Alpha and Omega'],
                        episodeRuntime: ['52m', '45m', '46m', '47m', '45m', '51m', '52m', '50m', '55m', '57m'],
                        episodeDescription: ["In 2019, a local boy's disappearance stokes fear in the residents of Winden, a small German town with a strange and tragic history.", "When a grim discovery leaves the police baffled, Ulrich seeks a search warrant for the power plant. A mysterious stranger checks into the hotel.", "It's 1986, and Ulrich's brother, Mads, has been missing for a month. Confusion reigns as past and present intertwine.", "Bizarre occurrences give Charlotte a sense of déjà vu, and she suspects Peter is hiding something. Franziska snaps when Magnus confronts her.", "Hannah takes her obsession with Ulrich too far. The stranger asks Regina to deliver an important package. Martha is torn between Jonas and Bartosz.", "Ulrich looks to the past for answers and dredges up disturbing family secrets. Armed with new tools, Jonas probes the cave's murky depths.", "Ulrich questions a frail and frightened Helge in the nursing home. Jonas searches for Mikkel, but the stranger warns him about meddling with the past.", "In 1953, the disfigured bodies of two boys are exhumed at a construction site, the future location of Winden's nuclear power plant.", "Ulrich runs afoul of the law, Helge tries to dodge Egon Tiedemann, Claudia harnesses the cave's powers, and Katharina lashes out at Hannah.", "Peter gets a shock. Jonas learns the truth about his family, but there are more surprises still to come. Helge makes a sacrifice."],
                        releaseYear: 2017,
                        seasonDescription: 'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.',
                    }
                ]
            },
            {
                'Season 2': [
                    {
                        episodes: ['https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABadIe75GQILby-MaK9YrLjTxgt7ZXaF88HDdOq049gZY5XOLQoXXnFE6uSNk_vRb9SwYPGonBx5zfnHLYkHTwfU00Vep5R3t0ZI7lS5ppMRPkMk_XKX18ocH.jpg?r=6c7', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYg2wNoLjuXjZq2hlcG5BhD3JOPa3g5cDD3jbPzjVXLbRYedaWnfvETlTJ2CpTjZyb4SWAIzdqQj4Rhveu5gfLaeW8Ui3XDyqGfc55pWCmEhu8zYdOl-5Ozx.jpg?r=6f8', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfaNpx8T0zCyO36GYOzqp-qNlaqxCFVAQRfRUiTBWgJNpG94g5yJi6koSrkQVeBsmAqdh4cjB7GJr0h7j7GbstUnTr_gQagdqZAajF6nTmOteL_N6wcW693v.jpg?r=dd6', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRgXUMKqkUMgT1pGMG_9mo_ewglUKEotNtYxUtg4meXMRN0soLPDnq6P2Ll1S6AX7nQbwIZWj5IAajiq4kPUNgk2rkbqc8oI91FavgLOFdtr4_w9o7XFb_pw.jpg?r=c7a', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS8T6sohHZ__oUdzzh1Lc_fvr7f9lkDVFJ7FNQZTcMkLyJsXrFsNQ4L4-LPC03Zx5trGcU5h6g-xfyQFy22_QAwhrXQcQSRdtbcm6O-AmaUNwGBYnFW73Gl4.jpg?r=1ba', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXW0ogmT_ckaKTxtuuR6o07sjm7a1CiT0I7jX3WK5KWxpfYXO7AWNmEzHz8ZErA0Il4wtHTsuDHdlBnE6WSCM9oCr8U9FJ2hvKue-t5yBGg4VYGjaGl4D4J3.jpg?r=4b4', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaMwa0Egb5lmDkGrzAvewzAmR21tICwNW8GqAskunR-owmN70jfV26BJcGdw6VTQUet3OmaADVMN81dIh7UD3J9vHiQNigtBRpK5YDA4a1aM762km1Kz4tcW.jpg?r=ba5', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaXRUzPh6fCBwas5z4JDYtQDrSkI3hZuDob5ZAhXbIrW8xqn3dO-bd-T3yy1VXglGVzyO6DvggXT5iVwrU_ad3mHy3EGIrnZtpQWjPWAmRsjoZHqVbPnfaWM.jpg?r=bd5'],
                        episodeLink: [
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4'],
                        episodeName: ['Secrets', 'Lies', 'Past and Present', 'Double Lives', 'Truths', 'Sic Mundus Creatus Esy', 'Crossroads', 'As You Sow, So You Shall Reap'],
                        episodeRuntime: ['52m', '45m', '46m', '47m', '45m', '51m', '52m', '50m'],
                        episodeDescription: ["In 2019, a local boy's disappearance stokes fear in the residents of Winden, a small German town with a strange and tragic history.", "When a grim discovery leaves the police baffled, Ulrich seeks a search warrant for the power plant. A mysterious stranger checks into the hotel.", "It's 1986, and Ulrich's brother, Mads, has been missing for a month. Confusion reigns as past and present intertwine.", "Bizarre occurrences give Charlotte a sense of déjà vu, and she suspects Peter is hiding something. Franziska snaps when Magnus confronts her.", "Hannah takes her obsession with Ulrich too far. The stranger asks Regina to deliver an important package. Martha is torn between Jonas and Bartosz.", "Ulrich looks to the past for answers and dredges up disturbing family secrets. Armed with new tools, Jonas probes the cave's murky depths.", "Ulrich questions a frail and frightened Helge in the nursing home. Jonas searches for Mikkel, but the stranger warns him about meddling with the past.", "In 1953, the disfigured bodies of two boys are exhumed at a construction site, the future location of Winden's nuclear power plant."],
                        releaseYear: 2019,
                        seasonDescription: "Six months after the disappearances of Mikkel, Jonas and Ulrich, Winden's web of mysteries deepens -- and the fate of the world hangs in the balance.",
                    }
                ]
            }
        ]
    },
    {
        'moreDetails': [
            {
                watchOffline: 'Available to download',
                genres: 'TV Dramas,German,Sci-Fi TV,TV Mysteries,Crime TV Shows,TV Thrillers',
                thisShowIs: 'Mind-Bending,Chilling,Ominous',
                cast: ['Louis Hofmann',
                    'Oliver Masucci',
                    'Jördis Triebel',
                    'Maja Schöne',
                    'Karoline Eichhorn',
                    'Sebastian Rudolph',
                    'Anatole Taubman',
                    'Mark Waschke',
                    'Stephan Kampwirth',
                    'Anne Ratte - Polle',
                    'Andreas Pietschmann',
                    'Lisa Vicari',
                    'Michael Mendl',
                    'Angela Winkler']
            }
        ]
    }
]




const Jamtara = [
    {
        'series': [{
            titleImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABc2oqSRv4w3RAgLe_NanCLnFBWBxb92-zeEAyg7x6iK6eR8axmrZRnLWim9D32lM9ic94fir4k-BytuEokZ5qAURPt1r-7Uhks7TdNN9CktHKFTS3RP45dCHA2esreDEM8JwHBPSmP2GOs2NbzNmL7YxJ2TpLBvC9VOBQb5EQLh4MYqFHhxUkg.png?r=8a6',
            titleName: 'Jamtara - Sabka Number Ayega',
            backgroundImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSPIabKOmwdVEBWZI6OCLcLN_UoPZiibaTV5I7PRkmA-G6AQvF11plMEhW5wUrmzKPv-6mzTn_p8qeNdO8slmaZfTLqDWadXaAlH.jpg?r=55a&quot',
            releaseYear: '2022',
            maturityRating: 'A',
            contentLinkName: 'jamtara',
            seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
            NoOfSeasons: 2,
            NoOfEpisodes: null,
            genre: 'Thrillers',
            thisContentIs: ['Thrilling', 'Crime', 'Gritty'],
            summary: 'A group of small-town young men run a lucrative phishing operation, until a corrupt politician wants in on their scheme — and a cop wants to fight it.',
            starring: 'Sparsh Shrivastava, Monika Panwar, Anshumaan Pushkar',
            creators: 'Soumendra Padhi',
            description: '',
            trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
            trailerRecap: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf46gXCeg8pRIlHc0SxN05wXh1uBHDpx9pIAHgPMdAy8hd8_nsYBRD2eKCQuB3FeApN3RlqUM4BUgnP5yOTO6ugjEs3hjk_ei3hARTfKukQZ9FIa76ogSXhJ.jpg?r=a40', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQxn5-xlC7dIwHU3ZfIFKkImRu5yfAXzING47yPPpr4-GWLLMzWhcIa2v_mdVbDJ0EgPxYSWu-iNvj_EwtFzLUB37iSm43q3hbu7PFAuGzwqfRib_LBhGhNF.jpg?r=2e5'],
            trailerRecapTitle: ['Season 2 Trailer: Jamtara - Sabka Number Ayega', 'Season 1 Trailer: Jamtara - Sabka Number Ayega'],
            trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4']
        }]
    },
    {
        'seasons': [
            {
                'Season 1': [
                    {
                        episodes: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXOGTvfjE1y2hAyHQZgs7A_-1y6hL8nrpRZCEKoripHnOlBNoYd6ZqD1vi9llc6beggG3iH6Kx0y5cMOnlfq7p-Guf15wBka9OnKG-xCCbbsTJVTJlDH8s0P.jpg?r=c9b', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfjOYTzol2BkuZshyF2gX2bpFziuMRofOvob9Q1bAfLO88SaAQpjf1nprjT7CA_zo9caifCi1MVLZH0OQKOCyQsF6KqpZ4Q5y64sj9UlpNqQkfhHlf4bQyLm.jpg?r=51a', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR_dXFML-M-4eMwZPlmCDB2JdwvNsteBZ5y5sJ30U7mdSUxAVpWlrjOsVVFKUpFrnPfKb3JWvjKkntwFKFe_6H2_e47SItJEt6UFKGowlIE-054o2mq9FrQj.jpg?r=66d', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYpA1716jcnCFmrgk4p3XrEtVRq1VZx_Ve5rdYVse2QzcnAitNDZz1RSVRa9Q8390uv0-dfQMCMCXl0j7yZknxlgkkK2Qk34pgfvwx6LF7_kZHGj1dHCZO5x.jpg?r=396', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe53N94KEUDIeueXNLXble306YcEtH2qYtMLTFYXbbySaSFtGSonzZbxsQ_9dmRNSghVDrUMzVmC7dSXXoC2kp4HMS9jihAi1XuorBrx9hgBHG9NZTGpVU9G.jpg?r=38f', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTxsTnXIBs5rc6Wynuiu9QSJ8ImSRRec2QtBtkRa1dWaKVH9-k0bhmyik95ugZJrPgLIo9Wi2PDWW9nvSnWkXPq7x8k6c7LY2sBGtXHhvgs3rBhz27NL0RyR.jpg?r=8d3', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWQvNtfkQkeI9tfZfmqyjoxsEcH96GqvVeYWvQATGm7CuzeYxTsuJGj-lTY2Ts-XufmWKaMA8OcAOOAULrjHX1TnPYyU3do_F5aBym2OASpNkE_nw7gpkbNM.jpg?r=5c6', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZGgAgYvchwomVd8o511X6t8eICZZ_LtZe9oicxVDc9gD61sAMC0cybQChihCJGY5rln6Be2AJPP3lUzXjRNarlt-3CTS6wC6JFUMCy6FVr5VUid5p6AdADS.jpg?r=425', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbo3elIoc7YYH3lYLEclwt8dB9WJaZ-rWIxm9q5M5GSL2eDYnuCF-K8hy4YSWbR8GrhNfRTvmbuqybzGJkttfhcmksci6UKMGTu2MAT7UHOkOrtzEKJvTP8a.jpg?r=fa2', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcdwuk2-dM9wzzcdfNv6-clEV1Ys9Gt8vEj3fDX1QoXt7urLZ0K9Vwr6-E3VQ6peFqzbpOMaMdZPP4YZfndYGQbssZDArBP88fBim5m6itQ4bSJQZmKNLpFd.jpg?r=3a7'
                        ],
                        episodeLink: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4'],
                        episodeName: [
                            'Episode 1',
                            'Episode 2',
                            'Episode 3',
                            'Episode 4',
                            'Episode 5',
                            'Episode 6',
                            'Episode 7',
                            'Episode 8',
                            'Episode 9',
                            'Episode 10'
                        ],
                        episodeRuntime: ['35m', '27m', '24m', '24m', '27m', '26m', '30m', '26m', '24m', '50m'],
                        episodeDescription: ['The successful phishing scams of Rocky, Sunny and their friends pique a corrupt local politician’s interest. Tension brews between Rocky and Sunny.', 'An attempt to arrest the young men is thwarted, to the dismay of the ambitious new police superintendent. Sunny brings a proposal to Gudiya’s mother.', 'Dolly seeks a cybercrime officer’s help in her case. As some of the guys side with Sunny, Rocky plans revenge. An intrusion disrupts Sunny’s wedding.', "Sunny's father comes to his aid. Brajesh wields his power. As Saurav educates the police on phishing, Sunny and Gudiya conduct a training of their own.", "When Gudiya’s coaching classroom is burned down, Sunny considers drastic retaliation. A slipped note leads Dolly and Saurav to a deserted warehouse", "The boys adopt Sunny’s get-rich-quick strategy. Anas looks to break a story in the paper. As Sunny’s confidence grows, Brajesh visits him and Gudiya.", "Dolly, Biswa and Saurav carry out a sting operation that goes awry. Sunny arrives at Brajesh's party, vowing payback for his treatment of Gudiya.", "A tragedy sends Sunny on the run, with the police and Brajesh’s men on his trail. Dolly and Saurav hatch a plan to prove Brajesh’s link to the incident.", "An enemy intercepts Sunny’s escape. While tracking the phishing calls, Saurav makes a breakthrough. As some scammers are arrested, Sunny’s fate worsens.", "Sunny acquiesces to a dubious deal to save his father. A shattered Gudiya partners with Dolly to set a honey trap in hopes of finally capturing Brajesh."],
                        releaseYear: 2020,
                        seasonDescription: 'A group of small-town young men run a lucrative phishing operation, until a corrupt politician wants in on their scheme -- and a cop wants to fight it.',
                    }
                ]
            }
        ]
    },
    {
        'moreDetails': [

            {
                watchOffline: 'Available to download',
                genres: 'TV Dramas,Crime TV Shows,TV Thrillers,Hindi-Language TV Shows',
                thisShowIs: 'Ominous,Gritty,Dark',
                cast: ['Sparsh Shrivastava',
                    'Monika Panwar',
                    'Anshumaan Pushkar',
                    'Amit Sial',
                    'Dibyendu Bhattacharya',
                    'Aksha Pardhasany'
                ]
            }

        ]

    },

]


const Eighteen99 = [
    {
        series: [
            {
                titleImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSUHTMQMXeHfgraHjE_Yt88oX5epcMGcV0YaVuT3d6VYybLykdAersZM_Ga5XoOKgH8K3HGSuHPNaA0oB0nez1DcTlVJ_9qAnZEqH3P8fCu0vQTbXOPJLmU8BGZO6V8CGwK2FWqV118nOTiRIg6YgfNY4v_TEOiJSNQVvufyIhlHeKLVSo3GYw.png?r=ff1',
                titleName: '1899',
                backgroundImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ2M_FyPwc8TMGdPUK_dAjVKHu6WJ5Uoi4ps0B-OpkE2OtIjthY3c5Tg8uCtrjdj4AYf-SEMekdqkTj8QXPUb3RD_ZawKIYxacD8.jpg?r=4e8',
                releaseYear: '2022',
                maturityRating: 'U/A 16+',
                contentLinkName: '1899',
                seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                NoOfSeasons: 1,
                NoOfEpisodes: 8,
                genre: 'Thrillers',
                thisContentIs: ['Mind Bending', 'Horror', 'Suspense'],
                summary: 'When mysterious events change the course of an immigrant ship headed for New York in 1899, a mind-bending riddle unfolds for its bewildered passengers.',
                starring: 'Emily Beecham, Aneurin Barnard, Andreas Pietschmann',
                creators: 'Jantje Friese, Baran bo Odar',
                description: 'Emily Beecham and Andreas Pietschmann star in this drama from the creators of “Dark,” Jantje Friese and Baran bo Odar.',
                trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                trailerRecap: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQra3CKZXGBqULj5DMpIybfJyCVZBP44sy17-7gULPwhgWSdPMFPvB_cOmn6XvvIebXdMAeC--JIY3Rx4b6LscDKkslF1AsbfXfC8dakyTs-JgBq54tgBhaA.jpg?r=b56', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQa2gT6CXaYpEKc9gUqYi1pMUKHxnxKYtElfDdoH-Qn002OAHRgwN1cu3sx1L2Ez5CPooEz0hw1x1lEx-Ps9hDvc0bnopn6iBR0.jpg?r=233', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd6_PkAg1qVpbSUSwMuMOwU5_AVwbBjpQVdpRukbJljhUrJF8aJ4VDDYHdX6-TreXpBDLoSnr188AVwBdXFBIrF3wiPeCftKU6jmzXBKiONk5UDAaZvLSZnh.jpg?r=ddb', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfWKh5Ziz0sNXGmZyKp5Pjokc-lP_-lw-tF7Faugav8HPja2qX1BVeen4c9KItWWQgh8INY0ZQbBBVJ2B3fHk7So2cXuw82MM6EWOUrBBBKojjgSsjtmww_T.jpg?r=e74'],
                trailerRecapTitle: ['Season 1 Trailer 2: 1899', 'Season 1 Teaser: 1899', 'Season 1 Teaser 2: 1899', 'Season 1 Teaser 3: 1899'],
                trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4']
            }
        ]
    },
    {
        seasons: [
            {
                'Season 1': [
                    {
                        episodes: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaQe84qmjzybGs8gEBMsaR6WNzEQ0a4bcNzPeEUoSyPGDW5bVpz46o4bdy7NFAwM8fUuzej24v90lDuV5b-v77xNMOIctcTrNxswDUQZ9odvcFMVUZpgYe0u.jpg?r=05e', 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe_v538B643QrKEEcYUudKIpfDjHBusNCaq5N8Ar-zizr9g-pbahZELBcSM7AuJ5e4FDznvdUyHTs77pnYYFR4NWtcqsUdC5poyxLLflRcYq9Cq0mDitAZvA.jpg?r=dad', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABepvNQM-QAnRYe_EgVnwbiXCcxSh0ceQNIKnQ79YJYndpGDgcya5l3Wpyu0RJJUWh88QhtUnlH4jYVsLjobrCYK91SlvxNvyyMV_xnsoD_CKA3v5qfsFbjW8.jpg?r=df1', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW7gNGsKrdQZ8QYLlCuUAWxnhsXuepD4e-VZm629B9jgRaVJriC7H9rXLIy0sM3l03sf9Gbog4BoaSFSoZm1TftCyGwFfjDNyysKOx8s03wMuDz0qyTrxSJg.jpg?r=783', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbcDtbZE1ddooWZ3W0JJw1n1Fa2fbO3phRsfgcTmvctoH3_auQp8z8ylSGREqjPD3RG8Bp_rNCVoQi3i_tk3Jas9_nnUEzc9p1V8pgkwVPWxrTQ2qMOE0QvP.jpg?r=452', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcbgokr97B1sECD4jb0MWdoUNGGZS98QBuaHk5t-oePwu5OmH1cbnWf7Krt7avz1Nb-iRfk1eAB84M3vCZy1s6jE4ewvZqeZ-RQa_d7ocYgq7Z0d4cxb9Tub.jpg?r=c65', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaQcZwtW_ykYkZGDregIRkQ22pFnDt0rDnh-aVgi8Lh98_bmsnFPjrU44ZseCguONWXsi_npqP4IlB5QZfMryL-DkXyjbi02TOIZFoHlx0SDKJ-S1Y0Air-i.jpg?r=794', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUgo8g_encXwLrn05q7_Fx4mua4yiDgsUVEUtk5sV6NqGO4pv9Hqx_04hmqpa_kn7-sKBuqc0qOxXwqIP5imOUIPABqyQdDnrQGWJauZfqC6UMNMvnBg38Ox.jpg?r=79e'],
                        episodeLink: [
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4'],
                        episodeName: [
                            'The Ship',
                            'The Boy',
                            'The Fog',
                            'The Fight',
                            'The Calling',
                            'The Pyramid',
                            'The Storm',
                            'The Key'
                        ],
                        episodeRuntime: ['60m', '58m', '62m', '51m', '50m', '54m', '54m', '50m'],
                        episodeDescription: ['Maura helps a pregnant woman. The captain makes a brave decision after receiving a message from a lost ship — and discovers something mind-bending.', 'The captain experiences unexplainable flashbacks. A strange man follows Maura to her cabin where a boy is hiding. A bug leads to a tragedy on deck.', 'A girl and other passengers suffer a terrible fate. Olek frees Ling Yi from a box. The captain makes a discovery that challenges his trust in Maura.', 'Several crew members and passengers search the ship for the boy after locking up the captain, Olek, Jérôme and Ramiro. Krester’s secret is revealed.', 'Maura has terrible flashbacks and makes a shocking move. A sound leads some passengers to jump overboard. Maura makes a discovery about her father', 'Tove has scary flashbacks and wants to kill the boy. Daniel follows Maura and the captain into a strange place. Maura’s father appears with a message', 'Daniel asks Maura for something she doesn’t understand. Olek and Ling Yi steer the ship before a tragedy occurs. Elliot’s identity comes to light.', 'Maura tells the passengers an unbelievable truth. Then, their memories shift and Daniel changes a code. Maura faces an unexpected reality.'],
                        releaseYear: 2022,
                        seasonDescription: 'When mysterious events change the course of an immigrant ship headed for New York in 1899, a mind-bending riddle unfolds for its bewildered passengers.',
                    }
                ]
            }
        ]
    },
    {

        moreDetails: [
            {
                watchOffline: 'Available to download',
                genres: 'TV Dramas,German,TV Action & Adventure,TV Thrillers',
                thisShowIs: 'Mind-Bending,Ominous',
                cast: ['Emily Beecham',
                    'Aneurin Barnard',
                    'Andreas Pietschmann',
                    'Miguel Bernardeau',
                    'José Pimentão',
                    'Isabella Wei',
                    'Gabby Wong',
                    'Yann Gael',
                    'Mathilde Ollivier',
                    'Jonas Bloquet',
                    'Rosalie Craig',
                    'Maciej Musiał',
                    'Clara Rosager',
                    'Lucas Lynggaard Tønnesen',
                    'Maria Erwolter',
                    'Alexandre Willaume',
                    'Tino Mewes',
                    'Isaak Dentler',
                    'Fflyn Edwards',
                    'Anton Lesser'
                ]
            }
        ]
    }
]
const Wednesday = [
    {
        series: [
            {
                titleImg: 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdxlUl_M2h5ERjFfyvuhRn2v-Az7Pwe_KxG_M9HSWbURJYrAs9pvqDPa3B3UPTCn3K_xS17OhTYmOca-lM4XAN7y5RogX7xYSfhIkk21Sgt9wNuZlqUFsCVdSD-tT7udzadO5zDd2hkAMGYPQJV9kbYoTY6n6u5X4YgGHG6AStY-EUePkvpO6A.png?r=50a',
                titleName: 'Wednesday',
                backgroundImg: 'https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYZ_9Wml838MQOf9pWOOVLn5TMejp-qMZ6eYoPf-co0gIJzlio8SGd6rgcPrFJPMGMutYsWMoXPm30p-DCNSLc2Ug_I5TDscFq2E.jpg?r=615&quot;',
                releaseYear: '2022',
                maturityRating: 'U/A 13+',
                contentLinkName: 'wednesday',
                NoOfSeasons: 1,
                seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                NoOfEpisodes: 8,
                genre: 'Comedies',
                thisContentIs: ['Dark Comedy', 'Chilling', 'Crime'],
                summary: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
                starring: 'Jenna Ortega,Gwendoline Christie,Riki Lindhome',
                creators: 'Alfred Gough,Miles Millar',
                description: 'Tim Burton directs this delightfully dark series starring Jenna Ortega ("You") from the creators of "Smallville."',
                trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                trailerRecap: [
                    "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQQIs-UXdn4HJuBLnIfVUzByRW7w_-Vy5kp5R7vNZNo_1KtZ828zGj4PC6uNFvkrFLbcQZ5RIPtrMVk8GTXCvHoXA0_BMdfKnjNKccpSSVcLIHrs8JR9iPWK.jpg?r=f29",
                    "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVGYRKuoRY2C7FGVpS-e40sul4sV0yOTzahWhRiJfR0khWktE9SB_YfIwp-A7oIhxvaeCy_Qy7veYUlgOv4dt4oInFPyiLcZGfa6oBh1DrpqJIpjBALesixS.jpg?r=f28",
                    "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaJBTjOf6b99wLec0VlSEu-jWY27MbP2DByLgW0G2DGStyuortyutZLgcFlsDvkyhmM_HH7q8fkL80RFS3XQDVg3JZ6dKAt6c9k7HWTvv3rupGsrXEBr-EPL.jpg?r=c68",
                    "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABf5LaqUGd2Gt8YPTzQtMZQf_VaFq-r5QDNjVz0nQnbnYH1mgDO6hByRS-7eLDs_FfmQolf_a6mgxDqYFDp9AcyBitBHgGJkncd30AlFjfaB3lafTKrS1YsyY.jpg?r=3df"
                ],
                trailerRecapTitle: ['Season 1 Teaser 2: Wednesday', 'Season 1 Teaser 1: Wednesday', 'Season 1 This Season On: Wednesday', 'Season 1 Teaser 3: Wednesday'],
                trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4']
            }
        ]
    },
    {
        seasons: [
            {
                'Season 1': [
                    {
                        episodes: [
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcI5SSc8tsgcpT-6RUHuB0n7iuZ_d9DBIJORfPL-AOimOsg5G56qnJHTY39TlAGDewFM7IqVcFGflR4u8X4kZoWXXJKpdFtZfwuL9qcuV7vnZ8ArEWVdnurT.jpg?r=952",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRimuBP1gFARJ2texmP9BRCpNBHS6BPxywXYxqxfgXWrDZzrdd2al5Ic5HSVQjIPZz067PBk-8WODwDeNzkgtyDw7AubISms2gkY1Oja5_R5yY6oWV6x1EO7.jpg?r=c99",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbPdO8OO3wIb08psCFqR9zfKRfFKOHjCgwDjfjsJe51EIa29w6PwpCo1CX7OH3azauUMoBCtJyKseGEXF9fiEXCJQCIvPmSodYKGVWVlPNz3qx_yxKW5dvLS.jpg?r=40b",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcSTk3X_aULK7m9O2ibOxQxd2nMQdAlNKIcL1tzFSbqXH_09IF9XORxeHTrRuDyBotqhuiCRgK8DsAkb08zJhCE_EiaKRNXNxS_Sr4fmyrbL2ihrPE3ZZNWM.jpg?r=0b4",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTkygdlRrjkCgCuY9_Awri731V4z-T2E8K8F1WkE4nf_Q7ZQE9qw5K5pKdBvSZsUmCklV9BA22DaRqVc_8dWgxya7MGDST5IbEPPPOeNqYrXEJvUmGAtaGpO.jpg?r=e5d",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABftwPVi5K-gtO5KPplQFMGUlIX-xBA82-m75iuZ-FuuELSKzWn7L2PFrhl8RFEHuM-GQlIiUYcsXAehRsR3GI7nkPuw3bxXtGg4hfJoGM_TBjBp7zjKvUjka.jpg?r=21c",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQODYcdhitU30HQhDLH69j3CB9Q-krxJpDRBr6jErexSG2pFi7cGKGzohRacO4qKvYRG0fi6VxcZymmRJ9zhx0ZeUlwudCI9CHInNovbBsd7RZU2YIJIW6yT.jpg?r=288",
                            "https://occ-0-2461-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ3m240NGklfP7iLk_Nos3X_3zq9-VcJ_P9NMGwnCybY7bldlYOD8ohUWxi1nDKDU2K8PuYzgEfYaU84cBFmJ4oifYfTyaU3EW66NtxiwqTf51OcRSyhis_2.jpg?r=2e0"
                        ],
                        episodeLink: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',],
                        episodeName: [
                            "Wednesday's Child Is Full of Woe",
                            'Woe Is the Loneliest Number',
                            'Friend or Woe',
                            'Woe What a Night',
                            'You Reap What You Woe',
                            'Quid Pro Woe',
                            "If You Don't Woe Me by Now",
                            'A Murder of Woes'
                        ],
                        episodeRuntime: ['60m', '49m', '49m', '50m', '52m', '50m', '48m', '52m'],
                        episodeDescription: ['Maura helps a pregnant woman. The captain makes a brave decision after receiving a message from a lost ship — and discovers something mind-bending.', 'The captain experiences unexplainable flashbacks. A strange man follows Maura to her cabin where a boy is hiding. A bug leads to a tragedy on deck.', 'A girl and other passengers suffer a terrible fate. Olek frees Ling Yi from a box. The captain makes a discovery that challenges his trust in Maura.', 'Several crew members and passengers search the ship for the boy after locking up the captain, Olek, Jérôme and Ramiro. Krester’s secret is revealed.', 'Maura has terrible flashbacks and makes a shocking move. A sound leads some passengers to jump overboard. Maura makes a discovery about her father', 'Tove has scary flashbacks and wants to kill the boy. Daniel follows Maura and the captain into a strange place. Maura’s father appears with a message', 'Daniel asks Maura for something she doesn’t understand. Olek and Ling Yi steer the ship before a tragedy occurs. Elliot’s identity comes to light.', 'Maura tells the passengers an unbelievable truth. Then, their memories shift and Daniel changes a code. Maura faces an unexpected reality.'],
                        releaseYear: 2022,
                        seasonDescription: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',
                    }
                ]
            }
        ]
    },
    {

        moreDetails: [
            {
                watchOffline: 'Available to download',
                genres: 'Teen TV Shows,TV Mysteries,TV Comedies,Crime TV Shows,US TV Shows,Fantasy TV Shows',
                thisShowIs: 'Deadpan',
                cast: [
                    "Jenna Ortega",
                    "Gwendoline Christie",
                    "Riki Lindhome",
                    "Christina Ricci",
                    "Jamie McShane",
                    "Hunter Doohan",
                    "Percy Hynes White",
                    "Emma Myers",
                    "Joy Sunday",
                    "Moosa Mostafa",
                    "Georgie Farmer",
                    "Naomi J. Ogawa",
                    "Catherine Zeta-Jones",
                    "Luis Guzmán"
                ],

            }
        ]
    }
]


const OnePiece = [

    {
        'series': [
            {
                titleImg: 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTFy_br4YKzY3Qn6eY70xB-vJTOIkCcROFycIyyM5RprbOFhuYrDpZ5EziINP6No1mGbPqSLsERf4RyWZhLFxPN0MfkJ_FopWRfHn4J8oXfzSWPecdP-wpcQaR-ff5Z8XqoyvUfLpMZvOt--m16_jCHZdRDPx94xOdQSphU8MXE941xn33v5pw.png?r=b2a',
                titleName: 'One Piece',
                backgroundImg: 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYvcH5XZXrAmpWYoTMa3AtaY7YddNIj_roEK7WK2gVOxl4RJaebRRuAmXtgJYL0C5Xukq3yBXyLuNLtwI-jF6IwzEKV-_79uqLtQ.jpg?r=0a9&quot;',
                releaseYear: '2023',
                maturityRating: 'U/A 16+',
                contentLinkName: 'onepiece',
                seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                NoOfSeasons: 1,
                NoOfEpisodes: 8,
                genre: 'Action',
                thisContentIs: ['Adventure', 'Manga', 'Action'],
                summary: 'With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.',
                starring: 'Iñaki Godoy,Emily Rudd,Mackenyu',
                creators: 'Eiichiro Oda, Steven Maeda',
                description: '',
                trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                trailerRecap: ['https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXs7HEsYzaUxpvQL0mJxSkFdwQFFE2eV-qScDTRDrDw5NWAREHQ-OC1W46-kID8KbFVpOeW5wjh5dsYoWEEbc7hqfrHlXSM6sESon1Tml8RNvebU3SIMlFnS.jpg?r=d69', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbsYubQpaOgnZHXu-kuRdNxkiHzzcOvLSlclVFOFIOut-UynPCTodiolXkfmjpWtpI_1kGMSdkNKDBKT4_JyBzG5jsiygK1xhgRfssG-pE89e7Iyp7Y3oHQk.jpg?r=120', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQXflXWP3aD-iWbD7I7aXAsvSWVkctsJDNERkdp491LtXtd5B0xNGaElkp-uyQPVVnmKOV2Zj1QbVZnu8OxyORQBkrJVy-kt3wiy5FaC7zQAPljUiiX2QNVa.jpg?r=11f', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSgerOAemL52-dNi5H3SBaUX6fmEd1h3rqNIzeqPa_FBPFvsmCzlP19YU_uM-inIYN3-hgDF28SS_iE-w6Z74KK2uKBDg_CQLoksv1FAbW3KNPglPVBQeV56.jpg?r=b28', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUOUNkrLT10L-JWsmBozbnjeykDcYq0oiWJvdjD2fJuHR369ysd1CG0Dzs6Zmk40bBQVWN2EXapE6-5JuNx_FcisrseHK7H1Lw0lBZCXo5vP8t_sUhOXV0OA.jpg?r=2f2'],
                trailerRecapTitle: ['Season 1 Trailer: ONE PIECE', 'Season 1 Teaser 1: ONE PIECE', 'Season 1 Teaser 2: ONE PIECE', 'Season 1 Teaser 3: ONE PIECE', ' Season 1 This Season On: ONE PIECE'],
                trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4', 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4']
            }
        ]
    },
    {
        'seasons': [
            {
                'Season 1': [
                    {
                        episodes: ['https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeBDcLWBCQtty1Y39eudLNU1y872AGF1j7iKKaMyWzYKb0kxsNrDFvd6PTyOOHEf8PIcJ1bENNua_7OnuGZ7MjRIYKgATxL06Y8WNjPTnniSC1BO6-504MxS.jpg?r=db9', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWSTzZEtWGIBmtcds7aX_8hT-ZG4w_JUcqU2mWxEAw6eUyG4AvSKMsRESmnHgoaTkxIHJTJYL_WKbXM1VHZWq70uzV-00BWgdbAnQF3W0LpBETEn7Fdz7ffD.jpg?r=389', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS7pWE5W3wvy19sAsUmkLgx1y5ip-N4aMJGlRc0Q9Pelluh5oQlGamtXsc1dBCOtdoveS9tuuCnYq0OAiAfKwdzrq6f6Fcyrk5WMM2Cq2JWJGHmsAcMPkfq-.jpg?r=00b', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABenLQ1ztnb_joD7OGMOyMurbT_QrQxvEbw24ORc3oPsHShfiziUsbsUPyYOuTxY_VXeRhSrI8ErFMJ5RHtn2e2QGoJvPvyAokInmCOuo8BuuFe2dJMfQcsy5.jpg?r=b18', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWfM0NpitSD_BY9gP8g6e7rSeW1ObcyJX4ZgqqUXeLT_lLpl7OF7y8isZeA87wqjmf71WgtQO7k8tbJ0W3i6YC7J1oUpss1cvqmr4_-gaG_NQxt4nh8YkCJL.jpg?r=6ea', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfPn4gXy7yrsp4rrMRy_4-VbZCIcefSD7xmqDguUGnLhuQVDcOSZAA_r5zzGGlzhwFzXspjYDVxu4ce2OxrFok9Z_Y37pdy8dJxm_EgeXumxwrSWyo6e26tE.jpg?r=d02', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdqGO2cGPmsAi3UpKZipkrNu6IXiYrwdDIw1dUs6dCLEcSDG273RHGmEGN3aIQcCxs2u3gZXXWghp3s0d4Xd8eSwKWGOdevNHX63p7es8CRjIpxHdRAY2rvu.jpg?r=19b', 'https://occ-0-2461-2164.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbr4WWNUdnNKkD1MJKJe2snBSkful6XUo3THz8ntMjmPfcqH6mODYWVLphciftqvbq07fqBiuUrXgcQInx-tUq9RmSZCZOZeYBY7JlCE6Eiq5m2oyf9gKtqY.jpg?r=505'],
                        episodeLink: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                            'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4'],
                        episodeName: ['ROMANCE DAWN', ' THE MAN IN THE STRAW HAT', 'TELL NO TALES', 'THE PIRATES ARE COMING', 'EAT AT BARATIE!', 'THE CHEF AND THE CHORE BOY', 'THE GIRL WITH THE SAWFISH TATTOO ', 'WORST IN THE EAST'],
                        episodeRuntime: ['64m', '55m', '58m', '63m', '51m', '54m', '58m', '49m'],
                        episodeDescription: [
                            "Stranded on a sinking boat, carefree Luffy begins his journey in search of a pirate king's lost treasure. But first, he'll need a crew, a ship, and a map.",
                            "After securing a map to the Grand Line, Luffy, Nami, and Zoro are taken hostage by a no-nonsense clown. New cadet Koby is cornered by Vice-Admiral Garp.",
                            "In need of a proper ship, the gang reaches Syrup Village and meets the cheerful Usopp and his best friend Kaya. A sinister threat disrupts their plans.",
                            "With his friends in danger and Klahadore's plan in motion, Usopp seeks help from the Marines. Blades clash when a fierce battle erupts at Kaya's mansion.",
                            "The Straw Hat Pirates face their first adversary as a group. At a floating fish house, Luffy befriends a cook, and Zoro enters a duel with a warlord.",
                            "Sanji and head chef Zeff put their differences aside to save a severely wounded Zoro. A ruthless Fishman on a mission stirs up trouble for the crew.",
                            "After striking a deal with a familiar foe to find Arlong, Luffy and his friends set sail for Coco Village and learn about Nami's mysterious past.",
                            "The Straw Hat crew strives to take down Arlong and the Fishmen once and for all. After a tense family reunion, Luffy inches closer to his dreams."
                        ],
                        releaseYear: 2023,
                        seasonDescription: 'With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.',
                    }
                ]
            },
        ]
    },
    {
        'moreDetails': [
            {
                watchOffline: 'Available to download',
                genres: 'TV Action & Adventure,US TV Shows,Fantasy TV Shows,TV Shows Based on Manga',
                thisShowIs: 'Fantasy,Adventure,Television Series',
                cast: ['Iñaki Godoy',
                    'Emily Rudd',
                    'Mackenyu',
                    'Jacob Romero Gibson',
                    'Taz Skylar',
                    'Vincent Regan',
                    'Jeff Ward',
                    'Morgan Davies']
            }
        ]
    }
]

const OurPalnet = [
    {
        'series': [{
            titleImg: 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZL3dVPiFoCa2Ey6YmbCnJ3IhmVwOOLugmHeoM8Ffr-qxs8IwIBLfqghoC7YiddeG8gKjLNywQbMN0pcmchCEJPwFhnVBN4Ea-0cEq66-EZ8pf8S9MH-ZJMcytXbULdOA0788Ma3tnHyS7IasNXVVWa4Jl8vh1vLecXrTV_b-EB6xYxJJfbvGw.png?r=75b',
            titleName: 'Our Planet',
            backgroundImg: 'https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUWEgIM91v_Fr9NVykr3L_MGcsxzcSOi_viBV43Fm-nZtYtAwRjxActEDEyKMDfu2soZsv4_2H_3DkafsQy1WB_HSNqIajlED1GP.jpg?r=f04&quot;',
            releaseYear: '2019',
            maturityRating: 'U/A',
            contentLinkName: 'ourplanet',
            NoOfEpisodes: null,
            seriesLink: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
            NoOfSeasons: 2,
            thisContentIs: ['Nature', 'Inspiring', 'Earth'],
            genre: 'Documentaries',
            summary: "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
            starring: 'David Attenborough',
            creators: 'Alastair Fothergill, Keith Scholey, Sophie Lanfear',
            description: 'From the makers of "Planet Earth," and narrated by Emmy and BAFTA winner Sir David Attenborough.',
            trailer: 'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
            trailerRecap: [
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfXKFhc5nsr8XmSmh-BZwQPDBh9Ps0dFx217P-mjRlZgSy-8tdX-4q4-9OCGNH3trGhSndFzLbvhcelbt22siHfOHFr8i4s2oDi7_FCx1-nL7GGkX3IM3ZIs.jpg?r=dd2',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ6w__-8rV8fjNEq5YXmdBb5SkBgolk-vz-RoaeSM2sdtGG7B-9X4JLat8DmNYgh53-i0nGxMenQl0xDx3WGHCNt_PKLCBwjPU-rSJ7SP6QPFbNeheM-e00n.jpg?r=6b8',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa49ZExcCIFPFmarV40vGLGHY4qWmOW12sguUm22TBGoySJy_dHsfjL-1ttY1iM1XY7-g3agI5P73XDqKqdCESKFw9hgrIynbwT_8-P2c9J8sGPbCwYBglYO.jpg?r=e73',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTb3HLyAT7pAS8XSJseD12wvxZ6oml-HRDaowVo7LTZuDV6XuyiG_i0L4Z80L8djOAhg-oSqP1etYz2o4xOn9B8guFgQMdR1Rihul7dKYjpP0mLIEcJyGYg9.jpg?r=421',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWBuRLcGH2ongXqWv0CxTifKnNnVBw-O2Iwda-W5Xgz5rAbposphmj_Gd3AcPh0KHeNZi6IQjRbeeuFv8HI173K3FjznmuYD-aBZJOg39IaiP0Hlm2yIYBh0.jpg?r=d75',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUOsPeab8tSyw5Hu3gmYlT-QnbOqwAe2qN99U7axt2Fgwm1eMf1V063aWeJoULKoCiVzv1l8BrfUYF1est1d5fs91HR-7AT-8mVKg4cLKqlTveICdSGtNe8a.jpg?r=931',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQrvrFbnUxn9qaO60PT69gw9Cry8lTR7VFIyCCyzj5y1jpgx5o7ABBl0fdqkhbmAmG84lGW-E3V7AU8sV8pZAqtFQpUylTbspfzObZXu6GDksrONDroWWdV_.jpg?r=644',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ6Ph1-BuazS7bagiyEuFyd2-hSivjdppJcSY4Uku-yAQe8RABWJNp5rJcKCfvb2Y7kelueWhqGjiXVKOwCVZ46ERAxI7DDX3L9rLYiUFEZIfEzHIB-LJUlR.jpg?r=031',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeaCt0hz__1cLVdC3KocPq1Aes9zHtGKLMLpvxLcYcS12y852YDvLF2e2GI2TNiN1-hds3AT-IBgSzHU_1pXkXSw8BP1yCaLBaPy84pCjW-s_sFbCdNwXvZJ.jpg?r=4f1',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABS1h6dgLB5fUZwh7DFtJhFL1nCeDbu2UhlhGmbpJ9mbaFvUdwuYUOf0Q1mG8cw_o8eNdACVow40L7QDtgTaPCzqPssK61ClZWSyBen52ltZa_NKBbMoSslOv.jpg?r=53b',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRfo-aswk-WdUw_F578_TzcmMjvglMyqvJoR56cXiWS7OcrOBBPC3s5dyUR7pZAQrQuLZmOUn7MyMTEcHnn8Z85VEWB6p0Jny2Tz107lQu4Lzdv26ChMjYKR.jpg?r=2ca',
                "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABY4CxVBGfuK8tQtUx0j7LSFrt9W-fPo9g_s_OAjVqi0pEl-hC-jvFEBUaogtRXsRw7GAnbheXHwXRyjgbkCWRHoD6m2-14r1MGF4oO4cDZjWeelPbiSVzGdb.jpg?r=f2c",
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVeHsiRLOW9I0Mp8SGhOd9aqAB-UohFDUeyTHWqIgBnuJZEPzjEXr4Q5DJv9tVpBRuTepLWUkiHHeL2yBuzNy4pL0UhesdXIOJI60dIriPWgsWCy58etmx-9.jpg?r=172',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfyojwNvCD9Ne6y3AMg8vj01ux-ILi2-6dDYUO6nBFEIrg86zIA7qk8HMX0ICS-P6otgpVo9GRQknS7u0fXTcTkO6FJuEwU1kaikiguUTNptnmIx5ePpsCGQ.jpg?r=bcf',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaIvHLaFWkE2w_qyP6ir1byTGZsD-Dyl8jDVgwicW_svSqwWzYlTyTmyMerl7_EvbccYLAdH5F4OgI82PHQNGq_p9hDtAGyaf93ZDcc-p3SvKRNxTkM_TJGf.jpg?r=f97',
                'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW7YnXeXBB_rTB8F1av4lPy1Klumon8qcNwpe7MH1EyoRoWMNbDuggRtX5QX4P7A6-0iEWZwl8wNPrj6HAgg3AB5xMurkJSvUKyWep8tlaeO-j25-LW5jCvH.jpg?r=676'
            ],
            trailerRecapTitle: [
                'Trailer: Our Planet II',
                'Trailer: Our Planet',
                'Our Planet: Amazing Animals',
                'Teaser: Our Planet II',
                'Teaser 2: Our Planet II',
                'Teaser 3: Our Planet II',
                'Teaser 4: Our Planet II',
                'Teaser: Our Planet',
                'Bonus: "Waking Giants"',
                'Bonus: "Life on the Edge"',
                'Bonus: "Surviving the Swamp"',
                'Bonus: "Search for the Wild Horses"',
                'Bonus: "Shark Sanctuary"',
                'Bonus: "Eye in the Sky"',
                'Bonus: "Weathered In"',
                'Bonus: "Life in a Box"'
            ],
            trailerRecapVideo: ['https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4']
        }]
    }, {
        'seasons': [{
            'Season 1': [{
                episodes: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc1s1gRHeITt2wjRnohzb2sdO6p-bhLxViHqGkgTP5TPrakowCVXLbE8R1Jd8Wwb0hQoT3h5uF6FKAWRh1V2v_Cf-Yj8pJy25lNWKbzsV0r1gIph8Xyk7ds0.jpg?r=3ff', 'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWmKKEjYDo38Xev3UDC8jNPA6Hc9yP4JXFumUEuMfffvwgNHbIifJdyzTpdDbOwGcyegDRcgI_vz5jjJn2eU2jWHEj9BgEnZBDKiz3HJauYUV67BSmZOiXsV.jpg?r=8eb',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaW5GsAmxM0cPrzZ7zEP2DBeaC5nM9h8b7AiZEGY1YE7kr9B3-sISurgtgwAm9g385g9jNx3Bs09VykeYohyZSdJqzgw4hZWmVlaMnJG9z5nnthcoKdFxL_D.jpg?r=409',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdNLYR3dd-h3mfIn3C_9aIQAGes5_CMy-FG640xFw7khZDwBS-xrAONLnDSqxFdDdnRqfVPGM4E0MKxb0dY-ESsKYyZfAjxf4ws598bZUnpqUQ4qD-UtdObu.jpg?r=5c2',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR2qMGmE9BBL1ax8o9aWPahEV58FbJdLYCPQvKe1zvmfq0pGj-Tpril6QaqTXOfmGeqpMHoMvXGkjiXdkggA0LDXvhUPMtME1oC7QQ7Hqlej9aC__r7VrylB.jpg?r=6fa',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVyXC4KvsBRD74a469zlCQsCB05TeJnVGrPAO2LJ3ApUg_G4Bc-0UMfOOEwBgtcHMlpvpybELqcjpsaoZX-3bZgWdlCIfdoJeeFpPMXUQDo4hxmJmvkN7L-2.jpg?r=7ed',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXTHPuykmOY0fqA_Gih4pM49lix97X04SUmC558al2uoUXVAGr2f-v6lqglRE4LhX1NM2lUlXWVIoRLb9tPzytjXoLbTqwZts_rWINPHVrRgcKoadU7MblEs.jpg?r=d5a',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUJCD2mE1uMRgYb0W3eXo8oJ_G8IijjMgPuR80DzOKupDRG4L4DS5g-7N6B4Ll3ejTxrq5ZC_uRY1Fap6PLfYsKc5l3iESGuorRrLVTxp4-FKjSwD-CLcVe-.jpg?r=dfe'
                ],
                episodeLink: [
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4'],
                episodeName: ['One Planet',
                    'Frozen Worlds',
                    'Jungles',
                    'Coastal Seas',
                    'From Deserts to Grasslands',
                    'The High Seas',
                    'Fresh Water',
                    'Forests'
                ],
                episodeRuntime: ['50', '54', '52', '50', '51', '49', '49', '49'],
                episodeDescription: ["Witness the planet's breathtaking diversity -- from seabirds carpet-bombing the ocean to wildebeests eluding the wild dogs of the Serengeti.",
                    "On the unforgiving frontier of climate change, polar bears, walruses, seals and penguins find their icy Edens in peril.",
                    "Jungles and rainforests are home to an incredible variety of species like preening birds, intelligent orangutans and remarkably ambitious ants.",
                    "From fearsome sharks to lowly urchins, 90 percent of marine creatures live in coastal waters. Protecting these habitats is a battle humanity must win.",
                    "Cameras follow desert elephants seeking sustenance, bison roaming North American grasslands and caterpillars living the good life underground.",
                    "Venture into the deep, dark and desolate oceans that are home to an abundance of beautiful -- and downright strange -- creatures.",
                    "The need for fresh water is as strong as ever. However, the supply is becoming increasingly unpredictable for all manner of species.",
                    "Examine the fragile interdependence that exists between forests' wide variety of residents, including bald eagles, hunting dogs and Siberian tigers."
                ],
                releaseYear: 2019,
                seasonDescription: "Exhilarating visuals and stunning footage of rarely-seen animals mix with somber truths about humanity's impact on the planet's habitats and species."
            }]
        }, {
            'Season 2': [{
                episodes: ['https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbCm7NmUMZjzw2EPW09F4_O_OSakgtzHCwIQYt3x_RfHqD9lV-OALDG0moUHftMiuiKzYAs5MP4Fy4bsmNRsVz_dfnIp0W7OnRtjmlYdiRd9D7AHj48km9KS.jpg?r=ed5',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWZpmq_Co-ti9f1p9M0hLaYpXs5MHI684OJyT81lEVzT52NJe4qhJ9l-W8xnrhJiRTidWLBoXjhoVSkFXAjLVBrI8CGKuAekTL69Ugo-85T5rLeDQdDAjX-3.jpg?r=6af',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaYAJRux-1Uu346tc-FEDlBDSPaYG2-Sm9uAYigyFs3Vs-15I1YhLwaFXDc5aaYXzVee586-22K4hZ0CMYQ_blAuKtEx5KrMjqgqKuS-kQ_0hwZBPF2Ir8v6.jpg?r=9c1',
                    'https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSS9FsIwAlsDCPXYOytNSyhuqWM0ogl2U2jJpboqas8gy3YJcE6Je5fnMnh5mK3xOg2ungOnyDR8ER_UXsiuVOrpNyuqbg5fVNMSZzi4csev5O19wnUz635t.jpg?r=853'
                ],
                episodeLink: [
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-2.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-3.mp4',
                    'https://github.com/CodeTusharSingh/Netflix-Clone/raw/main/sample-video-1.mp4',],
                episodeName: ['Chapter 1: World on the Move',
                    'Chapter 2: Following the Sun',
                    'Chapter 3: The Next Generation',
                    'Chapter 4: Freedom to Roam'
                ],
                episodeRuntime: ['51', '50', '50', '52'],
                episodeDescription: ["Be it buffalo, polar bears, humpback whales or albatross chicks, migration is a vital survival strategy for animals to feed, reproduce and find homes.",
                    "As summer spreads across our solar-powered planet, honey bees toil, snow geese breed, tadpoles awaken and lions stalk wildebeest in search of lush grass.",
                    "Left to fend for themselves until they find their footing, baby sea turtles, elephant seal pups, pumas and crabs bravely trek towards adolescence.",
                    "As snow geese, antelope, army ants and gray whales dodge predators and pollution, get a closer look at how the modern world impacts animal migration."
                ],
                releaseYear: 2023,
                seasonDescription: "Follow billions of animals across the globe as they make astonishing seasonal migration journeys amid the dangers of climate change.",
            }]
        }]
    }, {
        'moreDetails': [{
            watchOffline: 'Download and watch everywhere you go.',
            genres: 'Family Watch Together TV, British, Nature & Ecology Documentaries, Science & Nature TV, Science & Nature Docs, Docuseries',
            thisShowIs: 'Inspiring',
            cast: ['David Attenborough']
        }]
    }
]



app.get('/seriesAPI/dark', (req, res) => {
    res.json(Dark)
})
app.get('/seriesAPI/jamtara', (req, res) => {
    res.json(Jamtara)
})
app.get('/seriesAPI/1899', (req, res) => {
    res.json(Eighteen99)
})
app.get('/seriesAPI/onepiece', (req, res) => {
    res.json(OnePiece)
})
app.get('/seriesAPI/wednesday', (req, res) => {
    res.json(Wednesday)
})
app.get('/seriesAPI/ourplanet', (req, res) => {
    res.json(OurPalnet)
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) })