import type { NextApiRequest, NextApiResponse } from "next";
import https from 'https'
import { parseTypeHero, TypeHeroDataItem } from "@/utils/parse";

const logoSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 38 38" fill="none"><rect width="38" height="38" rx="4.5" fill="#3178C6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6947 20.9344H20V18H8V20.9344H12.2842V34H15.6947V20.9344Z" fill="white"></path><path d="M22 34V18H25.4511V24.6309H30.5405V18H34V34H30.5405V27.3458H25.4511V34H22Z" fill="white"></path></svg>'

interface BadgeResponse {
    schemaVersion:1,
    label:string;
    message:string;
    logoSvg?:string;
    isError:boolean;
}

type MessageType = "solved" | "solvedOverTotal" | "solvedPercentage" | "full"

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

function genMessageByType(data:TypeHeroDataItem[],type?:MessageType):string{
    if(type === 'full'){
        return data.map((item)=>{
            return `${item.difficulty} ${item.solved}`
        }).join(", ")
    }
    let solved = 0;
    let total = 0;
    data.forEach((item)=>{
        solved += item.solved;
        total += item.total;
    })
    if(type === 'solved'){
        return `${solved}`;
    }
    if(type === 'solvedPercentage'){
        return `${(solved*100/total).toFixed(1)}%`;
    }

    return `${solved}/${total}`
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<BadgeResponse>,
) {
    const user = req.query.user as string;
    const type = req.query.type as MessageType

    const html = await getTypeHeroHTML(user)
    const data = parseTypeHero(html);

    if(data.length === 0){
        res.status(200).json({ 
            schemaVersion:1,
            logoSvg,
            label:"Solved",
            message:"Not Found",
            isError:true,
        });
    }else{

        res.status(200).json({
            schemaVersion:1,
            logoSvg,
            label:"Solved",
            message: genMessageByType(data,type),
            isError:false
        })
    }
}
