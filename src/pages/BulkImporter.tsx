import { useMutation } from '@apollo/client'
import React from 'react'
import { insertBulkPosts } from '../gql/mutations'

export default function BulkImporter() {
    const [makeNewsPost, { data, loading, error }] = useMutation(insertBulkPosts)

    console.log(data);
    console.log(loading);
    console.log(error);

    
    
    const handleClick = async () => {
        const chatGpt = [
          {
            "dato": "2023-10-28T10:00:00Z",
            "indhold": "I en spændende finale i den internationale tennisturnering besejrede den unge stjerne Laura Jensen verdensranglistens nummer et, Anna Williams. Kampen, der blev spillet over fem sæt, endte med en dramatisk tiebreak, hvor Jensen vandt sit første grand slam-titel. Hendes sejr har skabt en bølge af begejstring i tennisverdenen og anerkendelse af hendes talent og dedikation.",
            "slug": "ung-tennisstjerne-vinder-stor-turnering",
            "title": "Ung tennisstjerne vinder stor turnering",
            "excerpt": "Laura Jensen besejrede verdensranglistens nummer et, Anna Williams, i en dramatisk finale og vandt sin første grand slam-titel."
          },
          {
            "dato": "2023-10-29T14:30:00Z",
            "indhold": "Den olympiske mester i svømning, Michael Phelps, annoncerede sin tilbagevenden til konkurrencesvømning efter en kort pause. Phelps, der har vundet utallige guldmedaljer, har trænet intenst og ser frem til at konkurrere på det højeste niveau igen. Svømmeverdenen forventer spændt hans genkomst og muligheden for at se ham i aktion på verdensscenen igen.",
            "slug": "michael-phelps-tilbage-i-svommeverdenen",
            "title": "Michael Phelps tilbage i svømmeverdenen",
            "excerpt": "Michael Phelps, den olympiske mester i svømning, er klar til at gøre sin genkomst i konkurrencesvømning efter en periode med træning og forberedelse."
          },
          {
            "dato": "2023-10-30T11:15:00Z",
            "indhold": "I en historisk kamp i bokseverdenen besejrede bokseudøveren Sarah Miller alle odds og blev den første kvinde til at vinde en sværvægtsturnering. Hendes utrolige præstation i ringen har inspireret kvinder over hele verden og markerer et skift i boksesportens historie. Miller har dedikeret sin sejr til alle, der har troet på hende.",
            "slug": "historisk-sejr-for-kvindelig-bokser",
            "title": "Historisk sejr for kvindelig bokser",
            "excerpt": "Sarah Miller brød alle forventninger ved at blive den første kvinde til at vinde en sværvægtsturnering i bokseverdenen."
          },
          {
            "dato": "2023-10-31T09:45:00Z",
            "indhold": "Fodboldverdenen var vidne til en sensationel handel, da den unge angriber Diego Rodriguez skiftede til en af de største europæiske klubber for en rekordsum. Rodriguez, der har imponeret med sine målscorerkundskaber, har nu mulighed for at konkurrere på den internationale scene og blive en fremtidig stjerne i fodboldverdenen.",
            "slug": "rekordhandel-for-ung-fodboldspiller",
            "title": "Rekordhandel for ung fodboldspiller",
            "excerpt": "Diego Rodriguez, den unge angriber, har skiftet til en af de største europæiske klubber i en rekordhandel, og han forventes at dominere den internationale fodboldscene."
          },
          {
            "dato": "2023-11-01T16:20:00Z",
            "indhold": "I verdensmesterskabet i atletik satte den amerikanske sprinter Alex Johnson en ny verdensrekord i 100 meter løb. Johnson's imponerende tid overgik den tidligere rekord og gjorde ham til verdens hurtigste mand. Han blev hyllet som en atletiklegende, og hans præstation vil blive husket i årtier fremover.",
            "slug": "ny-verdensrekord-i-100-meter-lob",
            "title": "Ny verdensrekord i 100 meter løb",
            "excerpt": "Alex Johnson, den amerikanske sprinter, satte en ny verdensrekord i 100 meter løb og blev hædret som verdens hurtigste mand."
          },
          {
            "dato": "2023-11-02T13:10:00Z",
            "indhold": "Cykelsporten har set en stigning i popularitet som et grønt alternativ til transport, og flere byer investerer i at bygge cykelstier og infrastruktur. Cykelløb har tiltrukket internationale stjerner og skabt en bølge af interesse for motion og sundhed. Cykelentusiaster ser frem til at deltage i kommende løb og arrangementer.",
            "slug": "cykelsport-oplever-renaessance",
            "title": "Cykelsport oplever renæssance",
            "excerpt": "Cykelsporten er på fremmarch som et miljøvenligt alternativ, og internationale stjerner deltager i løb og skaber interesse for motion og sundhed."
          },
          {
            "dato": "2023-11-03T15:50:00Z",
            "indhold": "I golfverdenen vandt den erfarne spiller Tiger Woods sin femte majorturnering i en dramatisk finale. Woods, der har kæmpet sig tilbage efter en skade, imponerede fans og konkurrenter med sin præstation. Hans sejr er blevet hilst som en af de største comebackhistorier i sportens historie.",
            "slug": "tiger-woods-vinder-majorturnering",
            "title": "Tiger Woods vinder majorturnering",
            "excerpt": "Tiger Woods, den erfarne golfspiller, vandt sin femte majorturnering i en bemærkelsesværdig sejr efter at have overvundet en skade."
          },
          {
            "dato": "2023-11-04T12:40:00Z",
            "indhold": "I motorsportsverdenen vandt den unge racerkører Emma Davis sin første Formel 1 Grand Prix. Hendes imponerende køreevner og taktiske snilde gjorde hende til en værdig vinder. Davis har nu etableret sig som en af de mest lovende talenter i motorsportens verden.",
            "slug": "emma-davis-vinder-formel-1-grand-prix",
            "title": "Emma Davis vinder Formel 1 Grand Prix",
            "excerpt": "Emma Davis, den unge racerkører, vandt sin første Formel 1 Grand Prix med imponerende køreevner og taktisk snilde."
          },
          {
            "dato": "2023-11-05T11:30:00Z",
            "indhold": "I OL i vintersport overraskede det lille land Island verden ved at vinde guld i curling. Holdet, der bestod af amatørspillere, besejrede alle forventninger og blev fejret som nationale helte. Deres historie er en påmindelse om, at sport kan forene og inspirere, uanset baggrund.",
            "slug": "island-vinder-ol-i-curling",
            "title": "Island vinder OL i curling",
            "excerpt": "Island overraskede verden ved at vinde guld i curling i OL med et hold bestående af amatørspillere."
          },
          {
            "dato": "2023-11-06T14:25:00Z",
            "indhold": "I den ekstreme sportsverden har bjergbestigeren Sarah Adams nået toppen af Mount Everest for anden gang. Hendes hidtil usete præstation i bjergbestigning har inspireret eventyrere over hele verden og fremhævet behovet for sikkerhed og ansvar i ekstreme miljøer.",
            "slug": "sarah-adams-nar-toppen-af-mount-everest",
            "title": "Sarah Adams når toppen af Mount Everest",
            "excerpt": "Sarah Adams har nået toppen af Mount Everest for anden gang og inspirerer eventyrere med hendes utrolige præstation."
          }
        ]
      
          
          

       const promises = chatGpt.map(async (n, index) => {
          await new Promise(resolve => setTimeout(resolve, index * 500))
          await makeNewsPost({
              variables: {
                  data: {
                      dato: n.dato,
                      indhold: n.indhold,
                      slug: n.slug,
                      title: n.title,
                      excerpt: n.excerpt,
                      category: {
                        connect: {
                          id: "clniq0uit0jjk0bw1vanywxru"
                        }
                      },
                      thumbnail: {
                          connect: {
                              id: "clnk5d3oa84gy0bw1l5tla2dr"
                          }
                      },
                      forfatter: {
                        connect: {
                          id: "clniqcc7z0kot09w5o51unkg9"
                        }
                      }
                  }
              }
          })
       })

       await Promise.all(promises)
    }

  return (
    <div
    className='max-w-screen-lg mx-auto p-3'
    >
        <h1>
            BulkImporter
        </h1>
        <button
        className='bg-brand-red text-brand-white py-1 px-4 rounded'
        disabled={loading}
        onClick={handleClick}
        >
            {loading ? "Loading" : "Insert"}
        </button>
        {error && <p
        className='text-brand-red'
        >
          {error.message}
        </p>}
    </div>
  )
}
