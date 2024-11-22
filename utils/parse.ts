import { parse } from 'node-html-parser';

export interface TypeHeroDataItem {
    difficulty: string;
    solved: number;
    total: number;
}


export function parseTypeHero(html:string):TypeHeroDataItem[]{
    const root = parse(html)

    const slot = root.querySelectorAll("slot")
    return slot.slice(0,5).map((slot)=>{
        return {
            difficulty: slot.querySelector("h1")!.innerText,
            solved: +slot.querySelector("h2")!.innerText,
            total: +slot.querySelector("h3")!.innerText.replaceAll(/\D/g,""),
        }
    })
}



