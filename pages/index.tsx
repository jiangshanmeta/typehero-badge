import Head from "next/head";


export default function Home() {
    const urls = [
        "https://img.shields.io/endpoint?"+ new URLSearchParams({
            url:"https://typehero-badge.vercel.app/api/users/jiangshanmeta"
        }),
        "https://img.shields.io/endpoint?"+ new URLSearchParams({
            url:"https://typehero-badge.vercel.app/api/users/jiangshanmeta?"+new URLSearchParams({
                type:"solved"
            })
        }),
        "https://img.shields.io/endpoint?"+ new URLSearchParams({
            url:"https://typehero-badge.vercel.app/api/users/jiangshanmeta?"+new URLSearchParams({
                type:"solvedOverTotal"
            })
        }),
        "https://img.shields.io/endpoint?"+ new URLSearchParams({
            url:"https://typehero-badge.vercel.app/api/users/jiangshanmeta?"+new URLSearchParams({
                type:"solvedPercentage"
            })
        }),
        "https://img.shields.io/endpoint?"+ new URLSearchParams({
            url:"https://typehero-badge.vercel.app/api/users/jiangshanmeta?"+new URLSearchParams({
                type:"full"
            })
        }),

    ];



    return (
        <>
            <Head>
                <title>TypeHero Badge</title>
                <meta name="description" content="TypeHero Badge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                
            >
                <main >
                    {
                        urls.map((url)=>{
                            return <img src={url} alt="typehero badge" key={url} />
                        })
                    }

                </main>

            </div>
        </>
    );
}
