import type { NextApiRequest, NextApiResponse } from "next";
import https from 'https'
import { parseTypeHero } from "@/utils/parse";

const logoSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 38 38" fill="none"><rect width="38" height="38" rx="4.5" fill="#3178C6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6947 20.9344H20V18H8V20.9344H12.2842V34H15.6947V20.9344Z" fill="white"></path><path d="M22 34V18H25.4511V24.6309H30.5405V18H34V34H30.5405V27.3458H25.4511V34H22Z" fill="white"></path></svg>'

interface BadgeResponse {
    schemaVersion:1,
    label:string;
    message:string;
    logoSvg?:string;
}

async function getTypeHeroHTML(username:string){
    if(!username.startsWith("@")){
        username = `@${username}`;
    }
    console.log(username)
    return new Promise<string>((resolve,reject)=>{
        https.get(`https://typehero.dev/${username}`,
            (res2)=>{
                res2.setEncoding('utf8');
                let rawData = ''
                res2.on('data', (chunk) => {
                    rawData += chunk
                })
                res2.on('end', () => {
                    resolve(rawData)
                })


            }).on('error',(e)=>{
            reject(e)
        })
    })
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<BadgeResponse>,
) {
    const user = req.query.user as string;

    const html = await getTypeHeroHTML(user)
    const data = parseTypeHero(html);
    console.log(data)
    if(data.length === 0){
        res.status(200).json({ 
            schemaVersion:1,
            logoSvg,
            label:"Solved",
            message:"Not Found"
        });
    }else{
        let solved = 0;
        let total = 0;
        data.forEach((item)=>{
            solved += item.solved;
            total += item.total;
        })

        res.status(200).json({
            schemaVersion:1,
            logoSvg,
            label:"Solved",
            message: `${solved}/${total}`
        })
    }
}
